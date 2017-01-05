'use strict';

import * as net from "net";

import {
	DebugSession, 
    OutputEvent, 
    Event
} from 'vscode-debugadapter';

import { 
    NodeMcuCommunicator 
} from "../nodeMcuCommunication";


import { 
    DebuggerTask 
} from "./DebuggerTask";


/**
 * 
 */
class RemoteTask implements DebuggerTask {

    private _socket: net.Socket;
    private _closed: boolean = false;
    private _terminal: NodeMcuCommunicator;
    private _session: DebugSession;

    private _terminalDataCB: (data: string) => void;

    private _buffer: string = "";    

    private _isRunning: boolean = false;

    /**
     * 
     */
    constructor(socket: net.Socket, session: DebugSession, terminal: NodeMcuCommunicator) {
        this._socket = socket;
        this._terminal = terminal;
        this._session = session;

        let __this: RemoteTask = this;

        socket.setEncoding("utf8");

        socket.on("data", (data) => {
            __this._buffer += data;
        });

        socket.on("close", () => {
            __this._closed = true;
        });
    }


    /**
     * 
     */
    public run(callback: () => void): void {
        let __this: RemoteTask = this;

        if (this._closed) {
            process.nextTick(callback);
            return;
        }

        this._socket.on("data", (data) => {
            __this._terminal.write(data);
        });

        this._socket.on("close", () => {
            __this._closed = true;
            process.nextTick(callback);
        });

        this._terminalDataCB = this._terminal.registerOnDataReceived((data: string): void => {
            if (__this._socket.writable) {
                __this._socket.write(data);
            }
        });

        this._isRunning = true;

        if (this._buffer.length > 0) {
            this._terminal.write(this._buffer);
        }        
    }
    

    /**
     * 
     */
    public dispose() : void {
        if (this._isRunning) {
            this._terminal.registerOnDataReceived(this._terminalDataCB);
        }

        this._isRunning = false;
    }
    
}


/**
 * 
 */
export class TaskServer {

	private _server: net.Server;
	private _clients: { [id: string]: net.Socket } = {};

    private _session: DebugSession;
    private _terminal: NodeMcuCommunicator;

    private _taskQueue: DebuggerTask[] = new Array<DebuggerTask>();


    /**
     * 
     */
	public constructor(session: DebugSession, terminal: NodeMcuCommunicator) {
        this._session = session;
        this._terminal = terminal;

        let __this = this;

        this._server = net.createServer(function(socket) {
            __this.queueTask(new RemoteTask(socket, session, terminal));
        });
        
        this._server.listen(5451, '127.0.0.1');		
    }    


    /**
     * 
     */
    public queueTask(task: DebuggerTask) {
        this._taskQueue.push(task);

        if (this._taskQueue.length == 1) {
            process.nextTick(() => { this._taskQueue[0].run(() => this.runNext()); });
        }
    }


    /**
     * 
     */
    private runNext() {
        
        if (this._taskQueue.length > 0) {
            this._taskQueue.shift().dispose();
        }

        if (this._taskQueue.length > 0) {
            process.nextTick(() => { this._taskQueue[0].run(() => this.runNext()); });
        }
    }


    /**
     *
     */    
    public dispose() : void {
        this._server.destroy();

        for (let i in this._taskQueue) {
            this._taskQueue[i].dispose();            
        }

        this._taskQueue.length = 0;
    }
}