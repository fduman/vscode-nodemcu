import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const rtctime: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'dsleep',
		data: 'rtctime.dsleep',
		detail: 'dsleep(microseconds [, option])',
		documentation: `Puts the ESP8266 into deep sleep mode, like ['node.dsleep()'](node.md#nodedsleep). It differs from ['node.dsleep()'](node.md#nodedsleep) in the following ways:`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dsleep_aligned',
		data: 'rtctime.dsleep_aligned',
		detail: 'dsleep(aligned_us, minsleep_us [, option])',
		documentation: `For applications where it is necessary to take samples with high regularity, this function is useful. It provides an easy way to implement a "wake up on the next 5-minute boundary" scheme, without having to explicitly take into account how long the module has been active for etc before going back to sleep.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'get',
		data: 'rtctime.get',
		detail: 'get()',
		documentation: `Returns the current time. If current time is not available, zero is returned.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'set',
		data: 'rtctime.set',
		detail: 'set(seconds, microseconds)',
		documentation: `Sets the rtctime to a given timestamp in the Unix epoch (i.e. seconds from midnight 1970/01/01). If the module is not already keeping time, it starts now. If the module was already keeping time, it uses this time to help adjust its internal calibration values. Care is taken that timestamps returned from ['rtctime.get()'](#rtctimeget) *never go backwards*. If necessary, time is slewed and gradually allowed to catch up.`
	},
];
