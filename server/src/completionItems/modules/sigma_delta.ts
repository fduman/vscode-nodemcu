import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const sigma_delta: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'close',
		data: 'sigma_delta.close',
		detail: 'close(pin)',
		documentation: `Stops signal generation and reenables GPIO functionality at the specified pin.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setprescale',
		data: 'sigma_delta.setprescale',
		detail: 'setprescale(value)',
		documentation: `Sets the prescale value.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setpwmduty',
		data: 'sigma_delta.setpwmduty',
		detail: 'setpwmduty(ratio)',
		documentation: `Operate the sigma-delta module in PWM-like mode with fixed base frequency.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'settarget',
		data: 'sigma_delta.settarget',
		detail: 'settarget(value)',
		documentation: `Sets the target value.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'sigma_delta.setup',
		detail: 'setup(pin)',
		documentation: `Stops the signal generator and routes it to the specified pin.`
	},
];
