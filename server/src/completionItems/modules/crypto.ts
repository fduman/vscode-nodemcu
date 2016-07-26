import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const crypto: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'encrypt',
		data: 'crypto.encrypt',
		detail: 'encrypt(algo, key, plain [, iv])',
		documentation: `Encrypts Lua strings.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'decrypt',
		data: 'crypto.decrypt',
		detail: 'decrypt(algo, key, cipher [, iv])',
		documentation: `Decrypts previously encrypted data.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'fhash',
		data: 'crypto.fhash',
		detail: 'fhash(algo, filename)',
		documentation: `Compute a cryptographic hash of a a file.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'hash',
		data: 'crypto.hash',
		detail: 'hash(algo, str)',
		documentation: `Compute a cryptographic hash of a Lua string.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'new_hash',
		data: 'crypto.new_hash',
		detail: 'new_hash(algo)',
		documentation: `Create a digest/hash object that can have any number of strings added to it. Object has 'update' and 'finalize' functions.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'hmac',
		data: 'crypto.hmac',
		detail: 'hmac(algo, str, key)',
		documentation: `Compute a [HMAC](https://en.wikipedia.org/wiki/Hash-based_message_authentication_code) (Hashed Message Authentication Code) signature for a Lua string.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'mask',
		data: 'crypto.mask',
		detail: 'mask(message, mask)',
		documentation: `Applies an XOR mask to a Lua string. Note that this is not a proper cryptographic mechanism, but some protocols may use it nevertheless.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'toBase64',
		data: 'crypto.toBase64',
		detail: 'toBase64(binary)',
		documentation: `Provides a Base64 representation of a (binary) Lua string.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'toHex',
		data: 'crypto.toHex',
		detail: 'toHex(binary)',
		documentation: `Provides an ASCII hex representation of a (binary) Lua string. Each byte in the input string is represented as two hex characters in the output.`
	},
];
