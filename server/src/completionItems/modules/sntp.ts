import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const sntp: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'sync',
		data: 'sntp.sync',
		detail: 'sync([server_ip], [callback], [errcallback])',
		documentation: `Attempts to obtain time synchronization.`
	},
];
