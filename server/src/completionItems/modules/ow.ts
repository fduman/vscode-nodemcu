import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const ow: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'check_crc16',
		data: 'ow.check_crc16',
		detail: 'check_crc16(buf, inverted_crc0, inverted_crc1[, crc])',
		documentation: `Computes the 1-Wire CRC16 and compare it against the received CRC.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'crc16',
		data: 'ow.crc16',
		detail: 'crc16(buf[, crc])',
		documentation: `Computes a Dallas Semiconductor 16 bit CRC.  This is required to check the integrity of data received from many 1-Wire devices.  Note that the CRC computed here is **not** what you'll get from the 1-Wire network, for two reasons:`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'crc8',
		data: 'ow.crc8',
		detail: 'crc8(buf)',
		documentation: `Computes a Dallas Semiconductor 8 bit CRC, these are used in the ROM and scratchpad registers.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'depower',
		data: 'ow.depower',
		detail: 'depower(pin)',
		documentation: `Stops forcing power onto the bus. You only need to do this if you used the 'power' flag to 'ow.write()' or used a 'ow.write_bytes()' and aren't about to do another read or write.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'ow.read',
		detail: '',
		documentation: `Reads a byte.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read_bytes',
		data: 'ow.read_bytes',
		detail: 'read_bytes(pin, size)',
		documentation: `Reads multi bytes.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'reset',
		data: 'ow.reset',
		detail: 'reset(pin)',
		documentation: `Performs a 1-Wire reset cycle.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'reset_search',
		data: 'ow.reset_search',
		detail: 'reset_search(pin)',
		documentation: `Clears the search state so that it will start from the beginning again.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'search',
		data: 'ow.search',
		detail: 'search(pin)',
		documentation: `Looks for the next device.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'select',
		data: 'ow.select',
		detail: 'select(pin, rom)',
		documentation: `Issues a 1-Wire rom select command. Make sure you do the 'ow.reset(pin)' first.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setup',
		data: 'ow.setup',
		detail: 'setup(pin)',
		documentation: `Sets a pin in onewire mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'skip',
		data: 'ow.skip',
		detail: 'skip(pin)',
		documentation: `Issues a 1-Wire rom skip command, to address all on bus.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'target_search',
		data: 'ow.target_search',
		detail: 'target_search(pin, family_code)',
		documentation: `Sets up the search to find the device type 'family_code'. The search itself has to be initiated with a subsequent call to 'ow.search()'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write',
		data: 'ow.write',
		detail: 'write(pin, v, power)',
		documentation: `Writes a byte. If 'power' is 1 then the wire is held high at the end for parasitically powered devices. You are responsible for eventually depowering it by calling 'ow.depower()' or doing another read or write.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write_bytes',
		data: 'ow.write_bytes',
		detail: 'write_bytes(pin, buf, power)',
		documentation: `Writes multi bytes. If 'power' is 1 then the wire is held high at the end for parasitically powered devices. You are responsible for eventually depowering it by calling 'ow.depower()' or doing another read or write.`
	},
];
