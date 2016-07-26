import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const rotary: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'PRESS',
		data: 'rotary.PRESS',
		detail: 'PRESS',
		documentation: `The eventtype for the switch press.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'LONGPRESS',
		data: 'rotary.LONGPRESS',
		detail: 'LONGPRESS',
		documentation: `The eventtype for a long press.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'RELEASE ',
		data: 'rotary.RELEASE ',
		detail: 'RELEASE ',
		documentation: `The eventtype for the switch release.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TURN ',
		data: 'rotary.TURN ',
		detail: 'TURN ',
		documentation: `The eventtype for the switch rotation.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CLICK',
		data: 'rotary.CLICK',
		detail: 'CLICK',
		documentation: `The eventtype for a single click (after release)`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'DBLCLICK',
		data: 'rotary.DBLCLICK',
		detail: 'DBLCLICK',
		documentation: `The eventtype for a double click (after second release)`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ALL',
		data: 'rotary.ALL',
		detail: 'ALL',
		documentation: `All event types.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'rotary.setup',
		detail: 'setup(channel, pina, pinb[, pinpress[, longpress_time_ms[, dblclick_time_ms]]])',
		documentation: `Initialize the nodemcu to talk to a rotary encoder switch.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'on',
		data: 'rotary.on',
		detail: 'on(channel, eventtype[, callback])',
		documentation: `Sets a callback on specific events.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'getpos',
		data: 'rotary.getpos',
		detail: 'pos, press, queue = getpos(channel)',
		documentation: `Gets the current position and press status of the switch`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'close',
		data: 'rotary.close',
		detail: 'close(channel)',
		documentation: `Releases the resources associated with the rotary switch.`
	},
];
