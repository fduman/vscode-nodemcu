import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const mqtt: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'CONN_FAIL_SERVER_NOT_FOUND',
		data: 'mqtt.CONN_FAIL_SERVER_NOT_FOUND',
		detail: 'CONN_FAIL_SERVER_NOT_FOUND',
		documentation: `There is no broker listening at the specified IP Address and Port`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONN_FAIL_NOT_A_CONNACK_MSG',
		data: 'mqtt.CONN_FAIL_NOT_A_CONNACK_MSG',
		detail: 'CONN_FAIL_NOT_A_CONNACK_MSG',
		documentation: `The response from the broker was not a CONNACK as required by the protocol`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONN_FAIL_DNS',
		data: 'mqtt.CONN_FAIL_DNS',
		detail: 'CONN_FAIL_DNS',
		documentation: `DNS Lookup failed`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONN_FAIL_TIMEOUT_RECEIVING',
		data: 'mqtt.CONN_FAIL_TIMEOUT_RECEIVING',
		detail: 'CONN_FAIL_TIMEOUT_RECEIVING',
		documentation: `Timeout waiting for a CONNACK from the broker`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONN_FAIL_TIMEOUT_SENDING',
		data: 'mqtt.CONN_FAIL_TIMEOUT_SENDING',
		detail: 'CONN_FAIL_TIMEOUT_SENDING',
		documentation: `Timeout trying to send the Connect message`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_ACCEPTED',
		data: 'mqtt.CONNACK_ACCEPTED',
		detail: 'CONNACK_ACCEPTED',
		documentation: `No errors. Note: This will not trigger a failure callback.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_REFUSED_PROTOCOL_VER',
		data: 'mqtt.CONNACK_REFUSED_PROTOCOL_VER',
		detail: 'CONNACK_REFUSED_PROTOCOL_VER',
		documentation: `The broker is not a 3.1.1 MQTT broker.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_REFUSED_ID_REJECTED',
		data: 'mqtt.CONNACK_REFUSED_ID_REJECTED',
		detail: 'CONNACK_REFUSED_ID_REJECTED',
		documentation: `The specified ClientID was rejected by the broker.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_REFUSED_SERVER_UNAVAILABLE',
		data: 'mqtt.CONNACK_REFUSED_SERVER_UNAVAILABLE',
		detail: 'CONNACK_REFUSED_SERVER_UNAVAILABLE',
		documentation: `The server is unavailable.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_REFUSED_BAD_USER_OR_PASS',
		data: 'mqtt.CONNACK_REFUSED_BAD_USER_OR_PASS',
		detail: 'CONNACK_REFUSED_BAD_USER_OR_PASS',
		documentation: `The broker refused the specified username or password.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CONNACK_REFUSED_NOT_AUTHORIZED',
		data: 'mqtt.CONNACK_REFUSED_NOT_AUTHORIZED',
		detail: 'CONNACK_REFUSED_NOT_AUTHORIZED',
		documentation: `The username is not authorized.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'Client',
		data: 'mqtt.Client',
		detail: 'Client(clientid, keepalive, username, password[, cleansession])',
		documentation: `Creates a MQTT client.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:close',
		data: 'mqtt.client:close',
		detail: 'mqtt:close()',
		documentation: `Closes connection to the broker.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:connect',
		data: 'mqtt.client:connect',
		detail: 'mqtt:connect(host[, port[, secure[, autoreconnect]]][, function(client)[, function(client, reason)]])',
		documentation: `Connects to the broker specified by the given host, port, and secure options.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:lwt',
		data: 'mqtt.client:lwt',
		detail: 'mqtt:lwt(topic, message[, qos[, retain]])',
		documentation: `Setup [Last Will and Testament](http://www.hivemq.com/blog/mqtt-essentials-part-9-last-will-and-testament) (optional). A broker will publish a message with qos = 0, retain = 0, data = "offline" to topic "/lwt" if client does not send keepalive packet.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:on',
		data: 'mqtt.client:on',
		detail: 'mqtt:on(event, function(client[, topic[, message]]))',
		documentation: `Registers a callback function for an event.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:publish',
		data: 'mqtt.client:publish',
		detail: 'mqtt:publish(topic, payload, qos, retain[, function(client)])',
		documentation: `Publishes a message.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:subscribe',
		data: 'mqtt.client:subscribe',
		detail: 'mqtt:subscribe(topic, qos[, function(client)])mqtt:subscribe(table[, function(client)])',
		documentation: `Subscribes to one or several topics.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'client:unsubscribe',
		data: 'mqtt.client:unsubscribe',
		detail: 'mqtt:unsubscribe(topic[, function(client)])mqtt:unsubscribe(table[, function(client)])',
		documentation: `Unsubscribes from one or several topics.`
	},
];
