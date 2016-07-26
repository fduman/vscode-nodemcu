import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const wifi: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'getchannel',
		data: 'wifi.getchannel',
		detail: 'getchannel()',
		documentation: `Gets the current WiFi channel.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'getmode',
		data: 'wifi.getmode',
		detail: 'getmode()',
		documentation: `Gets WiFi operation mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'getphymode',
		data: 'wifi.getphymode',
		detail: 'getpymode()',
		documentation: `Gets WiFi physical mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setmode',
		data: 'wifi.setmode',
		detail: 'setmode(mode)',
		documentation: `Configures the WiFi mode to use. NodeMCU can run in one of four WiFi modes:`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setphymode',
		data: 'wifi.setphymode',
		detail: 'setphymode(mode)',
		documentation: `Sets WiFi physical mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sleeptype',
		data: 'wifi.sleeptype',
		detail: 'sleeptype(type_wanted)',
		documentation: `Configures the WiFi modem sleep type.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'startsmart',
		data: 'wifi.startsmart',
		detail: 'startsmart(type, callback)',
		documentation: `Starts to auto configuration, if success set up SSID and password automatically.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'stopsmart',
		data: 'wifi.stopsmart',
		detail: 'stopsmart()',
		documentation: `Stops the smart configuring process.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.autoconnect',
		data: 'wifi.sta.autoconnect',
		detail: 'sta.autoconnect(auto)',
		documentation: `Auto connects to AP in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.config',
		data: 'wifi.sta.config',
		detail: 'sta.config(ssid, password[, auto[, bssid]])',
		documentation: `Sets the WiFi station configuration.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.connect',
		data: 'wifi.sta.connect',
		detail: 'sta.connect()',
		documentation: `Connects to the configured AP in station mode. You only ever need to call this if auto-connect was disabled in ['wifi.sta.config()'](#wifistaconfig).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.disconnect',
		data: 'wifi.sta.disconnect',
		detail: 'sta.disconnect()',
		documentation: `Disconnects from AP in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.eventMonReg',
		data: 'wifi.sta.eventMonReg',
		detail: 'nil',
		documentation: `Registers callbacks for WiFi station status events.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.eventMonStart',
		data: 'wifi.sta.eventMonStart',
		detail: 'sta.eventMonStart([ms])',
		documentation: `Starts WiFi station event monitor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.eventMonStop',
		data: 'wifi.sta.eventMonStop',
		detail: 'sta.eventMonStop([unregister_all])',
		documentation: `Stops WiFi station event monitor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getap',
		data: 'wifi.sta.getap',
		detail: 'sta.getap([[cfg], format,] callback(table))',
		documentation: `Scans AP list as a Lua table into callback function.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getbroadcast',
		data: 'wifi.sta.getbroadcast',
		detail: 'sta.getbroadcast()',
		documentation: `Gets the broadcast address in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getconfig',
		data: 'wifi.sta.getconfig',
		detail: 'sta.getconfig()',
		documentation: `Gets the WiFi station configuration.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.gethostname',
		data: 'wifi.sta.gethostname',
		detail: 'sta.gethostname()',
		documentation: `Gets current station hostname.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getip',
		data: 'wifi.sta.getip',
		detail: 'sta.getip()',
		documentation: `Gets IP address, netmask, and gateway address in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getmac',
		data: 'wifi.sta.getmac',
		detail: 'sta.getmac()',
		documentation: `Gets MAC address in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.getrssi',
		data: 'wifi.sta.getrssi',
		detail: 'sta.getrssi()',
		documentation: `Get RSSI(Received Signal Strength Indicator) of the Access Point which ESP8266 station connected to.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.sethostname',
		data: 'wifi.sta.sethostname',
		detail: 'sta.sethostname(hostname)',
		documentation: `Sets station hostname.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.setip',
		data: 'wifi.sta.setip',
		detail: 'sta.setip(cfg)',
		documentation: `Sets IP address, netmask, gateway address in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.setmac',
		data: 'wifi.sta.setmac',
		detail: 'sta.setmac(mac)',
		documentation: `Sets MAC address in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'sta.status',
		data: 'wifi.sta.status',
		detail: 'sta.status()',
		documentation: `Gets the current status in station mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.config',
		data: 'wifi.ap.config',
		detail: 'ap.config(cfg)',
		documentation: `Sets SSID and password in AP mode. Be sure to make the password at least 8 characters long! If you don't it will default to *no* password and not set the SSID! It will still work as an access point but use a default SSID like e.g. NODE-9997C3.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.deauth',
		data: 'wifi.ap.deauth',
		detail: 'ap.deauth([MAC])',
		documentation: `Deauths (forcibly removes) a client from the ESP access point by sending a corresponding IEEE802.11 management packet (first) and removing the client from it's data structures (afterwards).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.getbroadcast',
		data: 'wifi.ap.getbroadcast',
		detail: 'ap.getbroadcast()',
		documentation: `Gets broadcast address in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.getclient',
		data: 'wifi.ap.getclient',
		detail: 'ap.getclient()',
		documentation: `Gets table of clients connected to device in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.getip',
		data: 'wifi.ap.getip',
		detail: 'ap.getip()',
		documentation: `Gets IP address, netmask and gateway in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.getmac',
		data: 'wifi.ap.getmac',
		detail: 'ap.getmac()',
		documentation: `Gets MAC address in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.setip',
		data: 'wifi.ap.setip',
		detail: 'ap.setip(cfg)',
		documentation: `Sets IP address, netmask and gateway address in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.setmac',
		data: 'wifi.ap.setmac',
		detail: 'ap.setmac(mac)',
		documentation: `Sets MAC address in AP mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.dhcp.config',
		data: 'wifi.ap.dhcp.config',
		detail: 'ap.dhcp.config(dhcp_config)',
		documentation: `Configure the dhcp service. Currently only supports setting the start address of the dhcp address pool.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.dhcp.start',
		data: 'wifi.ap.dhcp.start',
		detail: 'ap.dhcp.start()',
		documentation: `Starts the DHCP service.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'ap.dhcp.stop',
		data: 'wifi.ap.dhcp.stop',
		detail: 'ap.dhcp.stop()',
		documentation: `Stops the DHCP service.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'eventmon.register',
		data: 'wifi.eventmon.register',
		detail: 'eventmon.register(Event[, function(T)])',
		documentation: `Register/unregister callbacks for WiFi event monitor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'eventmon.unregister',
		data: 'wifi.eventmon.unregister',
		detail: 'eventmon.unregister(Event)',
		documentation: `Unregister callbacks for WiFi event monitor.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'eventmon.reason',
		data: 'wifi.eventmon.reason',
		detail: '',
		documentation: `Table containing disconnect reasons.`
	},
];
