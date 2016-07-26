import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const mdns: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'register',
		data: 'mdns.register',
		detail: 'register(hostname [, attributes])',
		documentation: `Register a hostname and start the mDNS service. If the service is already running, then it will be restarted with the new parameters.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'close',
		data: 'mdns.close',
		detail: 'close()',
		documentation: `Shut down the mDNS service. This is not normally needed.`
	},
];
