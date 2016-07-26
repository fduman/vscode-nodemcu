import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const uart: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'alt',
		data: 'uart.alt',
		detail: 'alt(on)',
		documentation: `Change UART pin assignment.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'on',
		data: 'uart.on',
		detail: 'on(method, [number/end_char], [function], [run_input])',
		documentation: `Sets the callback function to handle UART events.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'uart.setup',
		detail: 'setup(id, baud, databits, parity, stopbits, echo)',
		documentation: `(Re-)configures the communication parameters of the UART.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write',
		data: 'uart.write',
		detail: 'write(id, data1 [, data2, ...])',
		documentation: `Write string or byte to the UART.`
	},
];
