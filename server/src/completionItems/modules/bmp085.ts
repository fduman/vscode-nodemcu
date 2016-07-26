import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const bmp085: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'init',
		data: 'bmp085.init',
		detail: 'init(sda, scl)',
		documentation: `Initializes the module and sets the pin configuration.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'temperature',
		data: 'bmp085.temperature',
		detail: 'temperature()',
		documentation: `Samples the sensor and returns the temperature in celsius as an integer multiplied with 10.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'pressure',
		data: 'bmp085.pressure',
		detail: 'pressure(oversampling_setting)',
		documentation: `Samples the sensor and returns the pressure in pascal as an integer.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'pressure_raw',
		data: 'bmp085.pressure_raw',
		detail: 'pressure_raw(oversampling_setting)',
		documentation: `Samples the sensor and returns the raw pressure in internal units. Might be useful if you need higher precision.`
	},
];
