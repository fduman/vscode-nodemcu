import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const i2c: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'TRANSMITTER',
		data: 'i2c.TRANSMITTER',
		detail: 'TRANSMITTER',
		documentation: `Transmitter mode`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'RECEIVER',
		data: 'i2c.RECEIVER',
		detail: 'RECEIVER',
		documentation: `Receiver mode`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'SLOW',
		data: 'i2c.SLOW',
		detail: 'SLOW',
		documentation: `Slow speed mode`
	},	
	{
		kind: CompletionItemKind.Function,
		label: 'address',
		data: 'i2c.address',
		detail: 'address(id, device_addr, direction)',
		documentation: `Setup I²C address and read/write mode for the next transfer.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'i2c.read',
		detail: 'read(id, len)',
		documentation: `Read data for variable number of bytes.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'i2c.setup',
		detail: 'setup(id, pinSDA, pinSCL, speed)',
		documentation: `Initialize the I²C module.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'start',
		data: 'i2c.start',
		detail: 'start(id)',
		documentation: `Send an I²C start condition.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'stop',
		data: 'i2c.stop',
		detail: 'stop(id)',
		documentation: `Send an I²C stop condition.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write',
		data: 'i2c.write',
		detail: 'i2c.write(id, data1[, data2[, ..., datan]])',
		documentation: `Write data to I²C bus. Data items can be multiple numbers, strings or lua tables.`
	},
];
