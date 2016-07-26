import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const wifi: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'STATION',
		data: 'wifi.STATION',
		detail: 'STATION',
		documentation: `For when the device is connected to a WiFi router. This is often done to give the device access to the Internet.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'SOFTAP',
		data: 'wifi.SOFTAP',
		detail: 'SOFTAP',
		documentation: `For when the device is acting only as an access point. This will allow you to see the device in the list of WiFi networks (unless you hide the SSID, of course). In this mode your computer can connect to the device, creating a local area network. Unless you change the value, the NodeMCU device will be given a local IP address of 192.168.4.1 and assign your computer the next available IP address, such as 192.168.4.2.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STATIONAP',
		data: 'wifi.STATIONAP',
		detail: 'STATIONAP',
		documentation: `This is the combination of wifi.STATION and wifi.SOFTAP. It allows you to create a local WiFi connection and connect to another WiFi router.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'NULLMODE',
		data: 'wifi.NULLMODE',
		detail: 'NULLMODE',
		documentation: `To switch off WiFi`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'PHYMODE_B',
		data: 'wifi.PHYMODE_B',
		detail: 'PHYMODE_B',
		documentation: `802.11b, more range, low Transfer rate, more current draw`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'PHYMODE_G',
		data: 'wifi.PHYMODE_G',
		detail: 'PHYMODE_G',
		documentation: `802.11g, medium range, medium transfer rate, medium current draw`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'PHYMODE_N',
		data: 'wifi.PHYMODE_N',
		detail: 'PHYMODE_N',
		documentation: `802.11n, least range, fast transfer rate, least current draw (STATION ONLY) Information from the Espressif datasheet v4.3`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'NONE_SLEEP',
		data: 'wifi.NONE_SLEEP',
		detail: 'NONE_SLEEP',
		documentation: `To keep the modem on at all times`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'LIGHT_SLEEP',
		data: 'wifi.LIGHT_SLEEP',
		detail: 'LIGHT_SLEEP',
		documentation: `To allow the modem to power down under some circumstances`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'MODEM_SLEEP',
		data: 'wifi.MODEM_SLEEP',
		detail: 'MODEM_SLEEP',
		documentation: `To power down the modem as much as possible`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_IDLE',
		data: 'wifi.STA_IDLE',
		detail: 'STA_IDLE',
		documentation: `STA_IDLE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_CONNECTING',
		data: 'wifi.STA_CONNECTING',
		detail: 'STA_CONNECTING',
		documentation: `STA_CONNECTING`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_WRONGPWD',
		data: 'wifi.STA_WRONGPWD',
		detail: 'STA_WRONGPWD',
		documentation: `STA_WRONGPWD`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_APNOTFOUND',
		data: 'wifi.STA_APNOTFOUND',
		detail: 'STA_APNOTFOUND',
		documentation: `STA_APNOTFOUND`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_FAIL',
		data: 'wifi.STA_FAIL',
		detail: 'STA_FAIL',
		documentation: `STA_FAIL`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'STA_GOTIP',
		data: 'wifi.STA_GOTIP',
		detail: 'STA_GOTIP',
		documentation: `STA_GOTIP`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.STA_CONNECTED',
		data: 'wifi.eventmon.STA_CONNECTED',
		detail: 'eventmon.STA_CONNECTED',
		documentation: `eventmon.STA_CONNECTED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.STA_DISCONNECTED',
		data: 'wifi.eventmon.STA_DISCONNECTED',
		detail: 'eventmon.STA_DISCONNECTED',
		documentation: `eventmon.STA_DISCONNECTED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.STA_AUTHMODE_CHANGE',
		data: 'wifi.eventmon.STA_AUTHMODE_CHANGE',
		detail: 'eventmon.STA_AUTHMODE_CHANGE',
		documentation: `eventmon.STA_AUTHMODE_CHANGE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.STA_GOT_IP',
		data: 'wifi.eventmon.STA_GOT_IP',
		detail: 'eventmon.STA_GOT_IP',
		documentation: `eventmon.STA_GOT_IP`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.STA_DHCP_TIMEOUT',
		data: 'wifi.eventmon.STA_DHCP_TIMEOUT',
		detail: 'eventmon.STA_DHCP_TIMEOUT',
		documentation: `eventmon.STA_DHCP_TIMEOUT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.AP_STACONNECTED',
		data: 'wifi.eventmon.AP_STACONNECTED',
		detail: 'eventmon.AP_STACONNECTED',
		documentation: `eventmon.AP_STACONNECTED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.AP_STADISCONNECTED',
		data: 'wifi.eventmon.AP_STADISCONNECTED',
		detail: 'eventmon.AP_STADISCONNECTED',
		documentation: `eventmon.AP_STADISCONNECTED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.AP_PROBEREQRECVED',
		data: 'wifi.eventmon.AP_PROBEREQRECVED',
		detail: 'eventmon.AP_PROBEREQRECVED',
		documentation: `eventmon.AP_PROBEREQRECVED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.UNSPECIFIED',
		data: 'wifi.eventmon.reason.UNSPECIFIED',
		detail: 'eventmon.reason.UNSPECIFIED',
		documentation: `eventmon.reason.UNSPECIFIED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.AUTH_EXPIRE',
		data: 'wifi.eventmon.reason.AUTH_EXPIRE',
		detail: 'eventmon.reason.AUTH_EXPIRE',
		documentation: `eventmon.reason.AUTH_EXPIRE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.AUTH_LEAVE',
		data: 'wifi.eventmon.reason.AUTH_LEAVE',
		detail: 'eventmon.reason.AUTH_LEAVE',
		documentation: `eventmon.reason.AUTH_LEAVE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.ASSOC_EXPIRE',
		data: 'wifi.eventmon.reason.ASSOC_EXPIRE',
		detail: 'eventmon.reason.ASSOC_EXPIRE',
		documentation: `eventmon.reason.ASSOC_EXPIRE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.ASSOC_TOOMANY',
		data: 'wifi.eventmon.reason.ASSOC_TOOMANY',
		detail: 'eventmon.reason.ASSOC_TOOMANY',
		documentation: `eventmon.reason.ASSOC_TOOMANY`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.NOT_AUTHED',
		data: 'wifi.eventmon.reason.NOT_AUTHED',
		detail: 'eventmon.reason.NOT_AUTHED',
		documentation: `eventmon.reason.NOT_AUTHED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.NOT_ASSOCED',
		data: 'wifi.eventmon.reason.NOT_ASSOCED',
		detail: 'eventmon.reason.NOT_ASSOCED',
		documentation: `eventmon.reason.NOT_ASSOCED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.ASSOC_LEAVE',
		data: 'wifi.eventmon.reason.ASSOC_LEAVE',
		detail: 'eventmon.reason.ASSOC_LEAVE',
		documentation: `eventmon.reason.ASSOC_LEAVE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.ASSOC_NOT_AUTHED',
		data: 'wifi.eventmon.reason.ASSOC_NOT_AUTHED',
		detail: 'eventmon.reason.ASSOC_NOT_AUTHED',
		documentation: `eventmon.reason.ASSOC_NOT_AUTHED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.DISASSOC_PWRCAP_BAD',
		data: 'wifi.eventmon.reason.DISASSOC_PWRCAP_BAD',
		detail: 'eventmon.reason.DISASSOC_PWRCAP_BAD',
		documentation: `eventmon.reason.DISASSOC_PWRCAP_BAD`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.DISASSOC_SUPCHAN_BAD',
		data: 'wifi.eventmon.reason.DISASSOC_SUPCHAN_BAD',
		detail: 'eventmon.reason.DISASSOC_SUPCHAN_BAD',
		documentation: `eventmon.reason.DISASSOC_SUPCHAN_BAD`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.IE_INVALID',
		data: 'wifi.eventmon.reason.IE_INVALID',
		detail: 'eventmon.reason.IE_INVALID',
		documentation: `eventmon.reason.IE_INVALID`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.MIC_FAILURE',
		data: 'wifi.eventmon.reason.MIC_FAILURE',
		detail: 'eventmon.reason.MIC_FAILURE',
		documentation: `eventmon.reason.MIC_FAILURE`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.4WAY_HANDSHAKE_TIMEOUT',
		data: 'wifi.eventmon.reason.4WAY_HANDSHAKE_TIMEOUT',
		detail: 'eventmon.reason.4WAY_HANDSHAKE_TIMEOUT',
		documentation: `eventmon.reason.4WAY_HANDSHAKE_TIMEOUT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.GROUP_KEY_UPDATE_TIMEOUT',
		data: 'wifi.eventmon.reason.GROUP_KEY_UPDATE_TIMEOUT',
		detail: 'eventmon.reason.GROUP_KEY_UPDATE_TIMEOUT',
		documentation: `eventmon.reason.GROUP_KEY_UPDATE_TIMEOUT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.IE_IN_4WAY_DIFFERS',
		data: 'wifi.eventmon.reason.IE_IN_4WAY_DIFFERS',
		detail: 'eventmon.reason.IE_IN_4WAY_DIFFERS',
		documentation: `eventmon.reason.IE_IN_4WAY_DIFFERS`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.GROUP_CIPHER_INVALID',
		data: 'wifi.eventmon.reason.GROUP_CIPHER_INVALID',
		detail: 'eventmon.reason.GROUP_CIPHER_INVALID',
		documentation: `eventmon.reason.GROUP_CIPHER_INVALID`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.PAIRWISE_CIPHER_INVALID',
		data: 'wifi.eventmon.reason.PAIRWISE_CIPHER_INVALID',
		detail: 'eventmon.reason.PAIRWISE_CIPHER_INVALID',
		documentation: `eventmon.reason.PAIRWISE_CIPHER_INVALID`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.AKMP_INVALID',
		data: 'wifi.eventmon.reason.AKMP_INVALID',
		detail: 'eventmon.reason.AKMP_INVALID',
		documentation: `eventmon.reason.AKMP_INVALID`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.UNSUPP_RSN_IE_VERSION',
		data: 'wifi.eventmon.reason.UNSUPP_RSN_IE_VERSION',
		detail: 'eventmon.reason.UNSUPP_RSN_IE_VERSION',
		documentation: `eventmon.reason.UNSUPP_RSN_IE_VERSION`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.INVALID_RSN_IE_CAP',
		data: 'wifi.eventmon.reason.INVALID_RSN_IE_CAP',
		detail: 'eventmon.reason.INVALID_RSN_IE_CAP',
		documentation: `eventmon.reason.INVALID_RSN_IE_CAP`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.802_1X_AUTH_FAILED',
		data: 'wifi.eventmon.reason.802_1X_AUTH_FAILED',
		detail: 'eventmon.reason.802_1X_AUTH_FAILED',
		documentation: `eventmon.reason.802_1X_AUTH_FAILED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.CIPHER_SUITE_REJECTED',
		data: 'wifi.eventmon.reason.CIPHER_SUITE_REJECTED',
		detail: 'eventmon.reason.CIPHER_SUITE_REJECTED',
		documentation: `eventmon.reason.CIPHER_SUITE_REJECTED`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.BEACON_TIMEOUT',
		data: 'wifi.eventmon.reason.BEACON_TIMEOUT',
		detail: 'eventmon.reason.BEACON_TIMEOUT',
		documentation: `eventmon.reason.BEACON_TIMEOUT`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.NO_AP_FOUND',
		data: 'wifi.eventmon.reason.NO_AP_FOUND',
		detail: 'eventmon.reason.NO_AP_FOUND',
		documentation: `eventmon.reason.NO_AP_FOUND`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.AUTH_FAIL',
		data: 'wifi.eventmon.reason.AUTH_FAIL',
		detail: 'eventmon.reason.AUTH_FAIL',
		documentation: `eventmon.reason.AUTH_FAIL`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.ASSOC_FAIL',
		data: 'wifi.eventmon.reason.ASSOC_FAIL',
		detail: 'eventmon.reason.ASSOC_FAIL',
		documentation: `eventmon.reason.ASSOC_FAIL`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'eventmon.reason.HANDSHAKE_TIMEOUT',
		data: 'wifi.eventmon.reason.HANDSHAKE_TIMEOUT',
		detail: 'eventmon.reason.HANDSHAKE_TIMEOUT',
		documentation: `eventmon.reason.HANDSHAKE_TIMEOUT`
	},
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
