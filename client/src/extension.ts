/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import * as path from 'path';
import * as vscode from 'vscode';

import { window, commands, workspace, Disposable, ExtensionContext, StatusBarItem, StatusBarAlignment } from 'vscode';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind } from 'vscode-languageclient';
import { ComPortAutoCompleteProvider } from './features/ComPortAutoCompleteProvider';
import { DeviceInfoContentProvider } from './features/DeviceInfoContentProvider';

import { NodeMcuCommands } from './features/NodeMcuCommands';


/**
 * 
 */
function showNodeMCUToolbox() {
	vscode.commands.executeCommand('vscode.previewHtml', DeviceInfoContentProvider.uri, vscode.ViewColumn.Two, 'NodeMCU Toolbox').then((success) => {}, (reason) => {
		vscode.window.showErrorMessage(reason);
	});
}


/**
 * 
 */
export function activate(context: ExtensionContext) {
	// The server is implemented in node
	let serverModule = context.asAbsolutePath(path.join('server', 'server.js'));
	// The debug options for the server
	let debugOptions = { execArgv: ["--nolazy", "--debug=6004"] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	let serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
	}

	// Options to control the language client
	let clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: ['lua'],
		synchronize: {
			// Synchronize the setting section 'languageServerExample' to the server
			configurationSection: 'languageServerExample',
			// Notify the server about file changes to '.clientrc files contain in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc')
		}
	}

	// Create the language client and start the client.
	let disposable = new LanguageClient('Language Server Example', serverOptions, clientOptions).start();

	// Push the disposable to the context's subscriptions so that the 
	// client can be deactivated on extension deactivation
	context.subscriptions.push(disposable);

	
	let sel: vscode.DocumentSelector = { language: 'json', pattern: '**/launch.json' };
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider('json', new ComPortAutoCompleteProvider(), ':'));


	const provider = new DeviceInfoContentProvider();
	context.subscriptions.push(workspace.registerTextDocumentContentProvider(DeviceInfoContentProvider.uri.scheme, provider));
	context.subscriptions.push(provider);


	let mcuCommands: NodeMcuCommands = new NodeMcuCommands(context);
	let fsListVisible: boolean = false;

	mcuCommands.onDidListFiles((files: string) => { fsListVisible = true; provider.onFileList(files); });
	mcuCommands.onError((error: string) => { fsListVisible = false; provider.onMessage(error); });
	mcuCommands.onProgressMessage((message: string) => { fsListVisible = false; provider.onMessage(message); });
	mcuCommands.onDidLoadSystemInfo((sysInfo: string) => { fsListVisible = false; provider.onSystemInfo(sysInfo); });
	mcuCommands.onDidReboot(() => { fsListVisible = false; provider.onReboot(); });
	mcuCommands.onFSChanged(() => { if (fsListVisible) { vscode.commands.executeCommand('nodemcu.listFiles'); }});

	context.subscriptions.push(commands.registerCommand('nodemcu.showToolbox', () => {
		provider.onMessage("Select action from the menu above.");
		showNodeMCUToolbox();
	}));
}
