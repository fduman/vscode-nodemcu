import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const spi: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'recv',
		data: 'spi.recv',
		detail: 'recv(id, size[, default_data])',
		documentation: `Receive data from SPI.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'send',
		data: 'spi.send',
		detail: 'HALFDUPLEX:wrote = send(id, data1[, data2[, ..., datan]])',
		documentation: `Send data via SPI in half-duplex mode. Send & receive data in full-duplex mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'spi.setup',
		detail: 'setup(id, mode, cpol, cpha, databits, clock_div[, duplex_mode])',
		documentation: `Set up the SPI configuration. Refer to [Serial Peripheral Interface Bus](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus#Clock_polarity_and_phase) for details regarding the clock polarity and phase definition.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'get_miso',
		data: 'spi.get_miso',
		detail: 'data1[, data2[, ..., datan]] = get_miso(id, offset, bitlen, num)',
		documentation: `Extract data items from MISO buffer after 'spi.transaction()'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'set_mosi',
		data: 'spi.set_mosi',
		detail: 'set_mosi(id, offset, bitlen, data1[, data2[, ..., datan]])',
		documentation: `Insert data items into MOSI buffer for 'spi.transaction()'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'transaction',
		data: 'spi.transaction',
		detail: 'transaction(id, cmd_bitlen, cmd_data, addr_bitlen, addr_data, mosi_bitlen, dummy_bitlen, miso_bitlen)',
		documentation: `Start an SPI transaction, consisting of up to 5 phases:`
	},
];
