import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const ws2801: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'init',
		data: 'ws2801.init',
		detail: 'init(pin_clk, pin_data)',
		documentation: `Initializes the module and sets the pin configuration.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write',
		data: 'ws2801.write',
		detail: 'write(string)',
		documentation: `Sends a string of RGB Data in 24 bits to WS2801. Don't forget to call 'ws2801.init()' before.`
	},
];
