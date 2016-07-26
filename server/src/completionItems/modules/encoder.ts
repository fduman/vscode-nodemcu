import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const encoder: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'toBase64',
		data: 'encoder.toBase64',
		detail: 'toBase64(binary)',
		documentation: `Provides a Base64 representation of a (binary) Lua string.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'fromBase64',
		data: 'encoder.fromBase64',
		detail: 'toBase64(b64)',
		documentation: `Decodes a Base64 representation of a (binary) Lua string back into the original string.  An error is thrown if the string is not a valid base64 encoding.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'toHex',
		data: 'encoder.toHex',
		detail: 'toHex(binary)',
		documentation: `Provides an ASCII hex representation of a (binary) Lua string. Each byte in the input string is represented as two hex characters in the output.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'fromHex',
		data: 'encoder.fromHex',
		detail: 'fromHex(hexstr)',
		documentation: `Returns the Lua binary string decode of a ASCII hex string. Each byte in the output string is represented as two hex characters in the input.  An error is thrown if the string is not a  valid base64 encoding.`
	},
];
