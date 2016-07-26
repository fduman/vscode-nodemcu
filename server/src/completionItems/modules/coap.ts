import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const coap: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'CON',
		data: 'coap.CON',
		detail: 'coap.CON',
		documentation: `CON request type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'NON',
		data: 'coap.NON',
		detail: 'coap.NON',
		documentation: `NON request type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'NON',
		data: 'coap.NON',
		detail: 'coap.NON',
		documentation: `NON request type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'TEXT_PLAIN',
		data: 'coap.TEXT_PLAIN',
		detail: 'coap.TEXT_PLAIN',
		documentation: `TEXT_PLAIN content type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'LINKFORMAT',
		data: 'coap.LINKFORMAT',
		detail: 'coap.LINKFORMAT',
		documentation: `LINKFORMAT content type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'XML',
		data: 'coap.XML',
		detail: 'coap.XML',
		documentation: `XML content type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'OCTET_STREAM',
		data: 'coap.OCTET_STREAM',
		detail: 'coap.OCTET_STREAM',
		documentation: `OCTET_STREAM content type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'EXI',
		data: 'coap.EXI',
		detail: 'coap.EXI',
		documentation: `EXI content type`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'JSON',
		data: 'coap.JSON',
		detail: 'coap.JSON',
		documentation: `JSON content type`
	},	
	{
		kind: CompletionItemKind.Function,
		label: 'Client',
		data: 'coap.Client',
		detail: 'Client()',
		documentation: `Creates a CoAP client.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'Server',
		data: 'coap.Server',
		detail: 'Server()',
		documentation: `Creates a CoAP server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:get',
		data: 'coap.client:get',
		detail: 'client:get(type, uri[, payload])',
		documentation: `Issues a GET request to the server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:put',
		data: 'coap.client:put',
		detail: 'client:put(type, uri[, payload])',
		documentation: `Issues a PUT request to the server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:post',
		data: 'coap.client:post',
		detail: 'client:post(type, uri[, payload])',
		documentation: `Issues a POST request to the server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:delete',
		data: 'coap.client:delete',
		detail: 'client:delete(type, uri[, payload])',
		documentation: `Issues a DELETE request to the server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:listen',
		data: 'coap.server:listen',
		detail: 'server:listen(port[, ip])',
		documentation: `Starts the CoAP server on the given port.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:close',
		data: 'coap.server:close',
		detail: 'server:close()',
		documentation: `Closes the CoAP server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:var',
		data: 'coap.server:var',
		detail: 'server:var(name[, content_type])',
		documentation: `Registers a Lua variable as an endpoint in the server. the variable value then can be retrieved by a client via GET method, represented as an [URI](http://tools.ietf.org/html/rfc7252#section-6) to the client. The endpoint path for varialble is '/v1/v/'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:func',
		data: 'coap.server:func',
		detail: 'server:func(name[, content_type])',
		documentation: `Registers a Lua function as an endpoint in the server. The function then can be called by a client via POST method. represented as an [URI](http://tools.ietf.org/html/rfc7252#section-6) to the client. The endpoint path for function is '/v1/f/'.`
	},
];
