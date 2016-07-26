import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const dht: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'OK',
		data: 'dht.OK',
		detail: 'dht.OK',
		documentation: `OK`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ERROR_CHECKSUM',
		data: 'dht.ERROR_CHECKSUM',
		detail: 'dht.ERROR_CHECKSUM',
		documentation: `ERROR_CHECKSUM`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'ERROR_TIMEOUT ',
		data: 'dht.ERROR_TIMEOUT ',
		detail: 'dht.ERROR_TIMEOUT ',
		documentation: `ERROR_TIMEOUT `
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'dht.read',
		detail: 'read(pin)',
		documentation: `Read all kinds of DHT sensors, including DHT11, 21, 22, 33, 44 humidity temperature combo sensor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read11',
		data: 'dht.read11',
		detail: 'read11(pin)',
		documentation: `Read DHT11 humidity temperature combo sensor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'readxx',
		data: 'dht.readxx',
		detail: 'dht.readxx(pin)',
		documentation: `Read all kinds of DHT sensors, except DHT11.`
	},
];
