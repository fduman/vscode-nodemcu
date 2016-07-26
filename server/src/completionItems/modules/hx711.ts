import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const hx711: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'init',
		data: 'hx711.init',
		detail: 'init(clk, data)',
		documentation: `Initialize io pins for hx711 clock and data.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'hx711.read',
		detail: 'read(mode)',
		documentation: `Read digital loadcell ADC value.`
	},
];
