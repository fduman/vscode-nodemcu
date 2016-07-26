import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const file: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'close',
		data: 'file.close',
		detail: 'close()',
		documentation: `Closes the open file, if any.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'exists',
		data: 'file.exists',
		detail: 'exists(filename)',
		documentation: `Determines whether the specified file exists.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'flush',
		data: 'file.flush',
		detail: 'flush()',
		documentation: `Flushes any pending writes to the file system, ensuring no data is lost on a restart. Closing the open file using ['file.close()'](#fileclose) performs an implicit flush as well.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'format',
		data: 'file.format',
		detail: 'format()',
		documentation: `Format the file system. Completely erases any existing file system and writes a new one. Depending on the size of the flash chip in the ESP, this may take several seconds.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'fscfg',
		data: 'file.fscfg',
		detail: 'fscfg()',
		documentation: `Returns the flash address and physical size of the file system area, in bytes.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'fsinfo',
		data: 'file.fsinfo',
		detail: 'fsinfo()',
		documentation: `Return size information for the file system, in bytes.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'list',
		data: 'file.list',
		detail: 'list()',
		documentation: `Lists all files in the file system.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'open',
		data: 'file.open',
		detail: 'open(filename, mode)',
		documentation: `Opens a file for access, potentially creating it (for write modes).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'read',
		data: 'file.read',
		detail: 'read([n_or_str])',
		documentation: `Read content from the open file.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'readline',
		data: 'file.readline',
		detail: 'readline()',
		documentation: `Read the next line from the open file. Lines are defined as zero or more bytes ending with a EOL ('\n') byte. If the next line is longer than 'LUAL_BUFFERSIZE', this function only returns the first 'LUAL_BUFFERSIZE' bytes (this is 1024 bytes by default).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'remove',
		data: 'file.remove',
		detail: 'file.remove(filename)',
		documentation: `Remove a file from the file system. The file must not be currently open.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'rename',
		data: 'file.rename',
		detail: 'rename(oldname, newname)',
		documentation: `Renames a file. If a file is currently open, it will be closed first.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'seek',
		data: 'file.seek',
		detail: 'seek([whence [, offset]])',
		documentation: `Sets and gets the file position, measured from the beginning of the file, to the position given by offset plus a base specified by the string whence.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'write',
		data: 'file.write',
		detail: 'write(string)',
		documentation: `Write a string to the open file.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'writeline',
		data: 'file.writeline',
		detail: 'writeline(string)',
		documentation: `Write a string to the open file and append '\n' at the end.`
	},
];
