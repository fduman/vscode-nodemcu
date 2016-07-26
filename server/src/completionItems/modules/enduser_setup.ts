import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const enduser_setup: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'manual',
		data: 'enduser_setup.manual',
		detail: 'manual([on_off])',
		documentation: `Controls whether manual AP configuration is used.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'start',
		data: 'enduser_setup.start',
		detail: 'start([onConnected()], [onError(err_num, string)], [onDebug(string)])',
		documentation: `Starts the captive portal.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'stop',
		data: 'enduser_setup.stop',
		detail: 'stop()',
		documentation: `Stops the captive portal.`
	},
];
