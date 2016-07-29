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
import {basename} from 'path';

import * as nodemcu from "./nodeMcuCommunication";

export interface LaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
	/** An absolute path to the program to debug. */
	program: string;
}

class NodeMcuDebugSession extends DebugSession {

	// we don't support multiple threads, so we can use a hardcoded ID for the default thread
	private static THREAD_ID = 1;

	// the contents (= lines) of the one and only file
	private _sourceLines = new Array<string>();

	private _terminal: nodemcu.NodeMcuCommunicator;

	private _portclosing: boolean = false;

	/**
	 * Creates a new debug adapter that is used for one debug session.
	 * We configure the default implementation of a debug adapter here.
	 */
	public constructor() {
		super();

		// this debugger uses zero-based lines and columns
		this.setDebuggerLinesStartAt1(false);
		this.setDebuggerColumnsStartAt1(false);
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

	protected launchRequest(response: DebugProtocol.LaunchResponse, args: LaunchRequestArguments): void {

		let sourceCode = readFileSync(args.program).toString();
		this._sourceLines = sourceCode.split('\n');

		nodemcu.NodeMcuCommunicator.detectPort((error: string, ports: nodemcu.PortInformation[]) => {

			if (ports.length > 0) {
				this.sendEvent(new OutputEvent(`NodeMCU device found on: ` + ports[0].comName + "\n"));
				this._terminal = new nodemcu.NodeMcuCommunicator(ports[0].comName);

				this._terminal.registerOnPortDisconnect((error: string) => {
					if (!this._portclosing) {
						this.sendErrorResponse(response, 0, "NodeMCU device disconnected");
						this.shutdown();
					}
				});

				this._terminal.registerOnError((error: string) => {
					this.sendErrorResponse(response, 0, "An error occured on NodeMCU device communication: " + error);
				});

				this._terminal.registerOnDataReceived((data: string) => {
					this.sendEvent(new OutputEvent(data + "\n"));
				});

				this._terminal.registerOnPortOpen(() => {
					this.sendEvent(new OutputEvent("Port opened\n"));
					this.sendEvent(new OutputEvent("The file is uploading to NodeMCU device\n"));
					this._terminal.uploadFile(this._sourceLines, basename(args.program));
				});

				this._terminal.open();
			} else {

				this.sendErrorResponse(response, 0, "NodeMCU device not found");
				this.shutdown();
			}
		});
	}

	protected disconnectRequest(response: DebugProtocol.DisconnectResponse, args: DebugProtocol.DisconnectArguments): void {
		if (this._terminal != null) {
			this._portclosing = true;
			this._terminal.close();
		}

		super.disconnectRequest(response, args);
	}

	protected evaluateRequest(response: DebugProtocol.EvaluateResponse, args: DebugProtocol.EvaluateArguments): void {
		response.body = {
			result: "",
			variablesReference: 0
		};

		this._terminal.write(args.expression);

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