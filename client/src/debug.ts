/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import {
	DebugSession,
	InitializedEvent, TerminatedEvent, StoppedEvent, OutputEvent, Event,
	Thread
} from 'vscode-debugadapter';


import {DebugProtocol} from 'vscode-debugprotocol';
import {readFileSync} from 'fs';

import * as nodemcu from "./nodeMcuCommunication";
import { TaskServer } from './debugger/TaskServer';

import { 
    DebuggerTask 
} from "./debugger/DebuggerTask";


/**
 * 
 */
export interface LaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
	port: string;
	baud: number;
}


/**
 * 
 */
class SendToMcuTask implements DebuggerTask {

	private _terminal: nodemcu.NodeMcuCommunicator;
	private _message: string;

	constructor(terminal: nodemcu.NodeMcuCommunicator, message: string) {
		this._terminal = terminal;
		this._message = message;
	}

    /**
     * 
     */
    public run(callback: () => void): void {
		this._terminal.write(this._message + "\r\n");
        process.nextTick(callback);
	}
    
    /**
     * 
     */
    public dispose() : void {
	}
}


/**
 * 
 */
class NodeMcuDebugSession extends DebugSession {

	// we don't support multiple threads, so we can use a hardcoded ID for the default thread
	private static THREAD_ID = 1;

	private _terminal: nodemcu.NodeMcuCommunicator;

	private _portclosing: boolean = false;
	
	private _taskServer: TaskServer;

	private _inputBuffer: string;

	/**
	 * Creates a new debug adapter that is used for one debug session.
	 * We configure the default implementation of a debug adapter here.
	 */
	public constructor() {
		super();

		// this debugger uses zero-based lines and columns
		this.setDebuggerLinesStartAt1(false);
		this.setDebuggerColumnsStartAt1(false);

		this._inputBuffer = "";
	}


	/**
	 * The 'initialize' request is the first request called by the frontend
	 * to interrogate the features the debug adapter provides.
	 */
	protected initializeRequest(response: DebugProtocol.InitializeResponse, args: DebugProtocol.InitializeRequestArguments): void {

		// since this debug adapter can accept configuration requests like 'setBreakpoint' at any time,
		// we request them early by sending an 'initializeRequest' to the frontend.
		// The frontend will end the configuration sequence by calling 'configurationDone' request.
		this.sendEvent(new InitializedEvent());

		// This debug adapter implements the configurationDoneRequest.
		response.body.supportsConfigurationDoneRequest = false;

		// make VS Code to use 'evaluate' when hovering over source
		response.body.supportsEvaluateForHovers = false;

		// make VS Code to show a 'step back' button
		response.body.supportsStepBack = false;

		this.sendResponse(response);
	}


	/**
	 * 
	 */
	protected launchRequest(response: DebugProtocol.LaunchResponse, args: LaunchRequestArguments): void {

		nodemcu.NodeMcuCommunicator.detectPort(args.port, (error: string, ports: nodemcu.PortInformation[]) => {

			if (ports.length > 0) {
				this.sendEvent(new OutputEvent(`NodeMCU device found on: ` + ports[0].comName + "\n"));

				this._terminal = this.createTerminal(response, ports[0].comName, args.baud);
				this._taskServer = new TaskServer(this, this._terminal);

			} else {

				this.sendErrorResponse(response, 0, "NodeMCU device not found.");
				this.shutdown();
			}
		});
	}


	/**
	 * 
	 */
	private createTerminal(response: DebugProtocol.LaunchResponse, comName: string, baud: number): nodemcu.NodeMcuCommunicator {
		let terminal = new nodemcu.NodeMcuCommunicator(comName, baud);

		terminal.registerOnPortDisconnect((error: string) => {
			if (!this._portclosing) {
				this.sendErrorResponse(response, 0, "NodeMCU device disconnected!");
				this.shutdown();
			} else {
				this.sendEvent(new OutputEvent("NodeMCU device disconnected.\n"));
			}
		});

		terminal.registerOnError((error: string) => {
			this.sendErrorResponse(response, 0, "An error occured on NodeMCU device communication: " + error);
			this.shutdown();
		});

		terminal.registerOnDataReceived((data: string) => {
			this._inputBuffer += data;
			
			if (this._inputBuffer.indexOf("\n") >= 0) {
				let out = this._inputBuffer.split(/\r?\n/);

				for (let i: number = 0; i < out.length - 1; i++) {
					this.sendEvent(new OutputEvent(out[i]));
				}

				this._inputBuffer = out[out.length-1];
			}
			else if (this._inputBuffer.length > 120) {
				this.sendEvent(new OutputEvent(this._inputBuffer));
				this._inputBuffer = "";
			}
		});

		terminal.registerOnPortOpen(() => {
			this.sendEvent(new OutputEvent("NodeMCU device connected ...\n"));					
			this.sendResponse(response);
		});

		terminal.open();
		return terminal;
	}


	/**
	 * 
	 */
	protected disconnectRequest(response: DebugProtocol.DisconnectResponse, args: DebugProtocol.DisconnectArguments): void {
		
		if (this._terminal != null) {
		
			this._portclosing = true;
			this._terminal.close();

			this._terminal = null;			
		}

		if (this._taskServer != null) {
			this._taskServer.dispose();
			this._taskServer = null;
		}

		super.disconnectRequest(response, args);
	}

	protected evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): void {
		response.body = {
			result: "",
			variablesReference: 0
		};

		this._taskServer.queueTask(new SendToMcuTask(this._terminal, args.expression));

		this.sendResponse(response);
	}

	protected threadsRequest(response: DebugProtocol.ThreadsResponse): void {

		// return the default thread
		response.body = {
			threads: [
				new Thread(NodeMcuDebugSession.THREAD_ID, "thread 1")
			]
		};
		this.sendResponse(response);
	}

	protected setBreakPointsRequest(response: DebugProtocol.SetBreakpointsResponse, args: DebugProtocol.SetBreakpointsArguments): void {
	}

	protected stackTraceRequest(response: DebugProtocol.StackTraceResponse, args: DebugProtocol.StackTraceArguments): void {
	}

	protected scopesRequest(response: DebugProtocol.ScopesResponse, args: DebugProtocol.ScopesArguments): void {
	}

	protected variablesRequest(response: DebugProtocol.VariablesResponse, args: DebugProtocol.VariablesArguments): void {
	}

	protected continueRequest(response: DebugProtocol.ContinueResponse, args: DebugProtocol.ContinueArguments): void {
	}

	protected nextRequest(response: DebugProtocol.NextResponse, args: DebugProtocol.NextArguments): void {
	}

	protected stepBackRequest(response: DebugProtocol.StepBackResponse, args: DebugProtocol.StepBackArguments): void {
	}
}

DebugSession.run(NodeMcuDebugSession);