import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const net: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'TCP',
		data: 'TCP',
		detail: 'TCP',
		documentation: `TCP`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'UDP',
		data: 'UDP',
		detail: 'UDP',
		documentation: `UDP`
	},	
	{
		kind: CompletionItemKind.Function,
		label: 'createConnection',
		data: 'net.createConnection',
		detail: 'createConnection(type, secure)',
		documentation: `Creates a client.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'createServer',
		data: 'net.createServer',
		detail: 'createServer(type, timeout)',
		documentation: `Creates a server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'multicastJoin',
		data: 'net.multicastJoin',
		detail: 'multicastJoin(if_ip, multicast_ip)',
		documentation: `Join multicast group.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'multicastLeave',
		data: 'net.multicastLeave',
		detail: 'multicastLeave(if_ip, multicast_ip)',
		documentation: `Leave multicast group.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:close',
		data: 'net.server:close',
		detail: 'server.close()',
		documentation: `Closes the server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:listen',
		data: 'net.server:listen',
		detail: 'server.listen(port,[ip],function(net.socket))',
		documentation: `Listen on port from IP address.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:on',
		data: 'net.server:on',
		detail: '',
		documentation: `UDP server only: Register callback functions for specific events.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'server:send',
		data: 'net.server:send',
		detail: '',
		documentation: `UDP server only: Sends data to remote peer.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:close',
		data: 'net.socket:close',
		detail: 'close()',
		documentation: `Closes socket.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:connect',
		data: 'net.socket:connect',
		detail: 'connect(port, ip|domain)',
		documentation: `Connect to a remote server.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:dns',
		data: 'net.socket:dns',
		detail: 'dns(domain, function(socket, ip))',
		documentation: `Provides DNS resolution for a hostname.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:getpeer',
		data: 'net.socket:getpeer',
		detail: 'getpeer()',
		documentation: `Retrieve port and ip of peer.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:hold',
		data: 'net.socket:hold',
		detail: 'hold()',
		documentation: `Throttle data reception by placing a request to block the TCP receive function. This request is not effective immediately, Espressif recommends to call it while reserving 5*1460 bytes of memory.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:on',
		data: 'net.socket:on',
		detail: 'on(event, function())',
		documentation: `Register callback functions for specific events.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:send',
		data: 'net.socket:send',
		detail: 'send(string[, function(sent)])',
		documentation: `Sends data to remote peer.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'socket:unhold',
		data: 'net.socket:unhold',
		detail: 'unhold()',
		documentation: `Unblock TCP receiving data by revocation of a preceding 'hold()'.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dns.getdnsserver',
		data: 'net.dns.getdnsserver',
		detail: 'dns.getdnsserver(dns_index)',
		documentation: `Gets the IP address of the DNS server used to resolve hostnames.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dns.resolve',
		data: 'net.dns.resolve',
		detail: 'dns.resolve(host, function(ip))',
		documentation: `Resolve a hostname to an IP address. Doesn't require a socket like ['net.socket.dns()'](#netsocketdns).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dns.setdnsserver',
		data: 'net.dns.setdnsserver',
		detail: 'dns.setdnsserver(dns_ip_addr, dns_index)',
		documentation: `Sets the IP of the DNS server used to resolve hostnames. Default: resolver1.opendns.com (208.67.222.222). You can specify up to 2 DNS servers.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'cert.verify',
		data: 'net.cert.verify',
		detail: 'cert.verify(enable)',
		documentation: `Controls the vertificate verification process when the Nodemcu makes a secure connection.`
	},
];
