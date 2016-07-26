import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const tsl2561: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'getlux',
		data: 'tsl2561.getlux',
		detail: 'getlux()',
		documentation: `Reads sensor values from the device and returns calculated lux value.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'getrawchannels',
		data: 'tsl2561.getrawchannels',
		detail: 'getrawchannels()',
		documentation: `Reads the device's 2 sensors and returns their values.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'init',
		data: 'tsl2561.init',
		detail: 'init(sdapin, sclpin[, address[, package]])',
		documentation: `Initializes the device on pins sdapin & sclpin. Optionally also configures the devices address and package. Default: address pin floating (0x39) and FN package.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'settiming',
		data: 'tsl2561.settiming',
		detail: 'settiming(integration, gain)',
		documentation: `Sets the integration time and gain settings of the device. When 'tls2561.init()' is called, these values default to 402 ms and no gain.`
	},
];
