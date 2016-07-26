import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const adc: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'force_init_mode',
		data: 'adc.force_init_mode',
		detail: 'adc.force_init_mode(mode_value)',
		documentation: `Checks and if necessary reconfigures the ADC mode setting in the ESP init data block.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'adc.read',
		detail: 'adc.read(channel)',
		documentation: `Samples the ADC.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'readvdd33',
		data: 'adc.readvdd33',
		detail: 'adc.readvdd33()',
		documentation: `Reads the system voltage.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'INIT_ADC',
		data: 'adc.INIT_ADC',
		detail: 'adc.INIT_ADC',
		documentation: `Initialize ADC mode.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'INIT_VDD33',
		data: 'adc.INIT_VDD33',
		detail: 'adc.INIT_VDD33',
		documentation: `Initialize VDD33 mode.`
	},
];
