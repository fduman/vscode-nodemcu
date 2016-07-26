import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const tsl2561: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'TSL2561_OK',
		data: 'tsl2561.TSL2561_OK',
		detail: 'TSL2561_OK',
		documentation: `TSL2561_OK`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TSL2561_ERROR_I2CINIT',
		data: 'tsl2561.TSL2561_ERROR_I2CINIT',
		detail: 'TSL2561_ERROR_I2CINIT',
		documentation: `TSL2561_ERROR_I2CINIT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TSL2561_ERROR_I2CBUSY',
		data: 'tsl2561.TSL2561_ERROR_I2CBUSY',
		detail: 'TSL2561_ERROR_I2CBUSY',
		documentation: `TSL2561_ERROR_I2CBUSY`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TSL2561_ERROR_NOINIT',
		data: 'tsl2561.TSL2561_ERROR_NOINIT',
		detail: 'TSL2561_ERROR_NOINIT',
		documentation: `TSL2561_ERROR_NOINIT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TSL2561_ERROR_LAST',
		data: 'tsl2561.TSL2561_ERROR_LAST',
		detail: 'TSL2561_ERROR_LAST',
		documentation: `TSL2561_ERROR_LAST`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ADDRESS_GND',
		data: 'tsl2561.ADDRESS_GND',
		detail: 'ADDRESS_GND',
		documentation: `ADDRESS_GND`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ADDRESS_FLOAT',
		data: 'tsl2561.ADDRESS_FLOAT',
		detail: 'ADDRESS_FLOAT',
		documentation: `ADDRESS_FLOAT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ADDRESS_VDD',
		data: 'tsl2561.ADDRESS_VDD',
		detail: 'ADDRESS_VDD',
		documentation: `ADDRESS_VDD`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'PACKAGE_CS',
		data: 'tsl2561.PACKAGE_CS',
		detail: 'PACKAGE_CS',
		documentation: `PACKAGE_CS`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'PACKAGE_T_FN_CL',
		data: 'tsl2561.PACKAGE_T_FN_CL',
		detail: 'PACKAGE_T_FN_CL',
		documentation: `PACKAGE_T_FN_CL`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'INTEGRATIONTIME_13MS',
		data: 'tsl2561.INTEGRATIONTIME_13MS',
		detail: 'INTEGRATIONTIME_13MS',
		documentation: `INTEGRATIONTIME_13MS`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'INTEGRATIONTIME_101MS',
		data: 'tsl2561.INTEGRATIONTIME_101MS',
		detail: 'INTEGRATIONTIME_101MS',
		documentation: `INTEGRATIONTIME_101MS`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'INTEGRATIONTIME_402MS',
		data: 'tsl2561.INTEGRATIONTIME_402MS',
		detail: 'INTEGRATIONTIME_402MS',
		documentation: `INTEGRATIONTIME_402MS`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'GAIN_1X',
		data: 'tsl2561.GAIN_1X',
		detail: 'GAIN_1X',
		documentation: `GAIN_1X`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'GAIN_16X',
		data: 'tsl2561.GAIN_16X',
		detail: 'GAIN_16X',
		documentation: `GAIN_16X`
	},
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
