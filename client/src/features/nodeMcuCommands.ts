'use strict';

import * as vscode from 'vscode';
import { window, commands, workspace, Disposable, ExtensionContext, StatusBarItem, StatusBarAlignment } from 'vscode';
import * as fs from 'fs';
import * as net from 'net';
import * as path from 'path';
/**
 * 
 */
export class NodeMcuCommands {

    private _onDidListFiles = new vscode.EventEmitter<string>();
    private _onProgressMessage = new vscode.EventEmitter<string>();
    private _onError = new vscode.EventEmitter<string>();
    private _onFSChanged = new vscode.EventEmitter<void>();
    private _onDidLoadSystemInfo = new vscode.EventEmitter<string>();
    private _onDidReboot = new vscode.EventEmitter<void>();
    private _statusBarItem: StatusBarItem;

    /**
     * 
     */
    constructor(context: ExtensionContext) {

        context.subscriptions.push(commands.registerCommand('nodemcu.listFiles', () => { this.listFiles(); }));
        context.subscriptions.push(commands.registerCommand('nodemcu.sysInfo', () => { this.systemInfo(); }));	

        context.subscriptions.push(commands.registerCommand('nodemcu.reboot', () => { 
            vscode.window.showWarningMessage('Reboot device?', 'Reboot').then(val => {
                if (val === 'Reboot') {
                    this.reboot();
                }
            });
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.runFile', (file: any) => {            
            this.remoteExec(`node.task.post(function()
                                                local stat, err = pcall(function() 
                                                    dofile("${file.name}") 
                                                end)

                                                if not stat then
                                                    print(err)
                                                end
                                            end)`, "", (reply: string) => {                 
            
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.compileFile', (file: any) => {
            this.remoteExec('node.compile("' + file.name + '")', "", (reply: string) => { 
                this._onFSChanged.fire();                
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 5000);
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.renameFile', (file: any) => {
            vscode.window.showInputBox({prompt: 'Enter new filename:', value: file.name, placeHolder: "(filename)"}).then(val => {
                if (val) {
                    this.renameFile(file.name, val);
                }
            });
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.viewFile', (file: any) => { this.viewFile(file.name); }));

        context.subscriptions.push(commands.registerCommand('nodemcu.deleteFile', (file: any) => {
            vscode.window.showWarningMessage('Delete ' + file.name + '?', 'Confirm').then(val => {
                if (val === 'Confirm') {
                    this.remoteExec('file.remove("' + file.name + '")', "", (reply: string) => { 
                        this._onFSChanged.fire();
                    }, (msg: string) => {
                        this._onError.fire(msg);
                    }, 3000);
                }
            });
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.uploadFile', (file: vscode.Uri) => { 
            let remoteName: string = path.basename(file.fsPath);

            if (!this._statusBarItem) {
                this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
            }

            this._statusBarItem.text = "Uploading " + remoteName + " ...";
            this._statusBarItem.show();
            
            this.uploadFile(file.fsPath, () => {
                this._statusBarItem.hide();

                this._onFSChanged.fire();

                vscode.window.showInformationMessage("File " + remoteName + " uloaded successfully.");
            },
            (msg) => {
                this._statusBarItem.hide();

                vscode.window.showErrorMessage(msg);
            }); 
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.formatFlash', () => {

            vscode.window.showWarningMessage('Format flash file system?', 'Confirm').then(val => {
                if (val === 'Confirm') {
                    this.remoteExec(`node.task.post(function() file.format() end)`, "", (reply: string) => { 
                        this._onProgressMessage.fire("File system format is in progress. Check Debug Output for status.");
                    }, (msg: string) => { 
                        this._onError.fire(msg); 
                    }, 3000);
                }
            });
        }));

        context.subscriptions.push(commands.registerCommand('nodemcu.uploadProject', () => {
            workspace.findFiles("**/*", "**/.*/**").then((files: vscode.Uri[]) => {
                if (files.length > 0) {
                    vscode.window.showWarningMessage('Upload ' + files.length + ' file(s) to device?', 'Confirm').then(val => {
                        if (val === 'Confirm') {
                            this.uploadProject(files, 0);
                        }
                    });                    
                }
            });
        }));


        context.subscriptions.push(this);
    }


    /**
     * 
     */
    public dispose(): any {
        this._onDidListFiles.dispose();
        this._onError.dispose();
        this._onProgressMessage.dispose();
        this._onDidLoadSystemInfo.dispose();
        this._onDidReboot.dispose();
        this._onFSChanged.dispose();

        if (this._statusBarItem) { 
            this._statusBarItem.dispose();
            this._statusBarItem = null;
        }
    }


    /**
     * 
     */
    get onFSChanged(): vscode.Event<void> {
        return this._onFSChanged.event;
    }


    /**
     * 
     */
    get onDidListFiles(): vscode.Event<string> {
        return this._onDidListFiles.event;
    }


    /**
     * 
     */
    get onProgressMessage(): vscode.Event<string> {
        return this._onProgressMessage.event;
    }


    /**
     * 
     */
    get onError(): vscode.Event<string> {
        return this._onError.event;
    }


    /**
     * 
     */
    get onDidLoadSystemInfo(): vscode.Event<string> {
        return this._onDidLoadSystemInfo.event;
    }


    /**
     * 
     */
    get onDidReboot(): vscode.Event<void> {
        return this._onDidReboot.event;
    }


    /**
     * 
     */
    private renameFile(src: string, dest: string) {
        let command: string = 'uart.write(0,tostring(file.rename("' + src + '", "' + dest + '")))';
        
        this.remoteExec(command, "", (reply: string) => {
                if (reply === 'true') {
                    this._onFSChanged.fire();
                } else {
                    window.showErrorMessage("Cannot rename '" + src + "' to '" + dest + "'");
                }
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
    }


    /**
     * 
     */
    private viewFile(file: string) {
        let command = `_viewF = function() 
                            node.output(function(str) end, 0)
                            local _f=file 
                        
                            if _f.open("${file}","r") then 
                                local _l=_f.readline() 
                                
                                while(_l) do 
                                    uart.write(0, _l)
                                    _l=_f.readline()
                                end 
                                _f.close()
                            end 
                            node.output(nil)
                        end
                        _viewF()
                        _viewF=nil`;

        this.remoteExec(command, "", (reply: string) => {
                this._onProgressMessage.fire('<pre>' + reply + '</pre>');
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
    }


    /**
     * 
     */
    private uploadProject(files: vscode.Uri[], index: number) {

        if (index >= files.length) {
            window.showInformationMessage(index + " file(s) uploaded successfully.");
            this._onFSChanged.fire();
            this._statusBarItem.hide();
            return;
        }

        let remoteName: string = path.basename(files[index].fsPath);

        if (!this._statusBarItem) {
            this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
        }

        this._statusBarItem.text = "Uploading " + remoteName + " ...";
        this._statusBarItem.show();

        this.uploadFile(files[index].fsPath, () => {
            process.nextTick(() => { this.uploadProject(files, index + 1); });
        }, (errorMsg: string) => {
            window.showErrorMessage(errorMsg);
            this._statusBarItem.hide();
        });
    }


    /**
     * 
     */
    private uploadFile(file: string, ok_callback?: any, error_callback?: any) {        

        if (!fs.existsSync(file)) {
            if (error_callback) {
                process.nextTick(() => { error_callback("File '" + file + "' does not exist."); });
            }

            return;
        }

        let remoteFilename = path.basename(file);
        let sourceCode = fs.readFileSync(file).toString();
		let sourceLines = sourceCode.split(/\r?\n/);

        sourceLines.forEach((value: string, index: number, array: string[]) => {
            array[index] = "_w([==[" + value + "]==])"; 
        });

        sourceCode = sourceLines.join("\r\n");

        let command = `file.remove("${remoteFilename}")
                        file.open("${remoteFilename}", "w+")
                        _w = file.writeline
                        ${sourceCode}
                        _w = nil
                        file.close()`;


        this.remoteExec(command, "", (reply: string) => {
                if (ok_callback) {
                    ok_callback();
                }
            }, (msg: string) => {
                if (error_callback) {
                    error_callback(msg);
                } 
            }, 3000);
    }


    /**
     * 
     */
    private reboot() {
        let command: string = 'node.task.post(function() node.restart() end)';

        this.remoteExec(command, "Rebooting ...", (reply: string) => {
                this._onDidReboot.fire();
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
    }


    /**
     * 
     */
    private systemInfo() {
        let command: string = `_sysNfo = function()
                                    local _c=","
                                    local _fs={file.fsinfo()}
                                    local _nf={node.info()}
                                    local _tc=table.concat 
                                    local _x={_tc(_nf,_c),node.heap(),node.bootreason(),_tc(_fs,_c)}  
                                    
                                    uart.write(0, _tc(_x,"|")) 
                                end
                                _sysNfo()
                                _sysNfo=nil`;

        this.remoteExec(command, "Loading ...", (reply: string) => {
                this._onDidLoadSystemInfo.fire(reply);
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
    }


    /**
     * 
     */
    private listFiles() {
        let command: string = 'for k,v in pairs(file.list()) do uart.write(0, k.."|"..v.."\\r\\n") end';

        this.remoteExec(command, "Loading ...", (reply: string) => {
                this._onDidListFiles.fire(reply);
            }, (msg: string) => { 
                this._onError.fire(msg); 
            }, 3000);
    }


    /**
     * 
     */
    private remoteExec(command: string, progress: string, callback: (reply: string) => void, error_cb?: (msg: string) => void, timeout?: number) {
        let client: net.Socket = new net.Socket();
        let reply: string = "";
        let buff: string = "";
        let error = false;        
        let __this = this;

        let outList = command.split(/\r?\n/).filter((x) => { return x.replace(/^\s+$/, "").length > 0; });

        let outIdx = -1;
        
        let eotMarker = />{1,2}\s$/;        

        if (progress != null && progress.length > 0) {
            this._onProgressMessage.fire(progress);
        }

        let watchDogTimer: number;
        let wdTimerIsOn: boolean = false;

        let onTimeout = function() {
            client.destroy();
            error = true;
            wdTimerIsOn = false;

            if (error_cb) {
                process.nextTick(() => { error_cb("Connection timeout."); });
            }
        };

        let sendNext = function(): boolean {
            outIdx++;

            if (outIdx < outList.length) {
                outList[outIdx] = outList[outIdx].trim() + "\r\n";
                
                client.write(outList[outIdx]);

                return true;
            }

            return false;
        }


        client.connect(5451, '127.0.0.1', function() {
            client.setEncoding("utf8");

            if (!sendNext()) {
                error = true;

                if (error_cb) {
                    process.nextTick(() => { error_cb("Invalid NodeMCU command."); });
                }
            } else {
                if (timeout && timeout > 0) {
                    watchDogTimer = setTimeout(onTimeout, 3000);
                    wdTimerIsOn = true;
                }
            }
        });

        client.on('data', function(data) {
            buff += data;            
            clearTimeout(watchDogTimer);
            
            let echoIdx: number = buff.indexOf(outList[outIdx]);

            if (echoIdx >= 0) {
                buff = buff.substr(echoIdx + outList[outIdx].length);
            }
            
            if (eotMarker.test(buff)) {                
                reply += buff.replace(eotMarker, "");
                buff = "";

                if (!sendNext()) {                
                    wdTimerIsOn = false;
                    client.destroy();
                } else {
                    watchDogTimer = setTimeout(onTimeout, 3000);
                }               
            } else {
                watchDogTimer = setTimeout(onTimeout, 3000);
            }            
        });

        client.on('error', function(data) {
            error = true;

            if (wdTimerIsOn) {
                clearTimeout(watchDogTimer);
                wdTimerIsOn = false;
            }

            if (error_cb) {
                process.nextTick(() => { error_cb("No active NodeMCU debug session."); });
            }
        });	

        client.on('close', function() {
            
            if (wdTimerIsOn) {
                clearTimeout(watchDogTimer);
                wdTimerIsOn = false;
            }

            if (!error) {
                callback(reply);
            }
        });
    }
}