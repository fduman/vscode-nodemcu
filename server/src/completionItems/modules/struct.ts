import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const struct: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'pack',
		data: 'struct.pack',
		detail: 'pack (fmt, d1, d2, ...)',
		documentation: `Returns a string containing the values 'd1', 'd2', etc. packed according to the format string 'fmt'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'unpack',
		data: 'struct.unpack',
		detail: 'unpack (fmt, s[, offset])',
		documentation: `Returns the values packed in string 's' according to the format string 'fmt'. An optional 'i' marks where in 's' to start reading (default is 1). After the read values, this function also returns the index in 's' where it stopped reading, which is also where you should start to read the rest of the string.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'size',
		data: 'struct.size',
		detail: 'size (fmt)',
		documentation: `Returns the size of a string formatted according to the format string 'fmt'. The format string should contain neither the option 's' nor the option 'c0'.`
	},
];
