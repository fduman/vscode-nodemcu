import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const cjson: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'encode',
		data: 'cjson.encode',
		detail: 'cjson.encode(table)',
		documentation: `Encode a Lua table to a JSON string. For details see the [documentation of the original Lua library](http://kyne.com.au/~mark/software/lua-cjson-manual.html#encode).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'decode',
		data: 'cjson.decode',
		detail: 'cjson.decode(str)',
		documentation: `Decode a JSON string to a Lua table. For details see the [documentation of the original Lua library](http://kyne.com.au/~mark/software/lua-cjson-manual.html#_decode).`
	},
];
