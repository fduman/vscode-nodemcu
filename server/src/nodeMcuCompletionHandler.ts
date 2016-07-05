import {
    TextDocument, Position,
    TextDocumentPositionParams,
    CompletionItem, CompletionItemKind
} from 'vscode-languageserver';

import * as luaparser from "luaparse";

export function nodeMcuCompletionHandler(document: TextDocument, textDocumentPosition: TextDocumentPositionParams): CompletionItem[] {
    let word = getWord(document, textDocumentPosition.position);

    if (word) {
        
        if (!api[word])
        {
            return [];
        }

        return api[word];
    }

    return modules.concat(lua);
}

function getWord(document: TextDocument, position: Position): string {
    let word: string = null;
    let text = document.getText();
    let lineText = text.split(/\r?\n/g)[position.line];

    luaparser.parse(lineText, { wait: true });

    let currentLexResult, previousLexResult: luaparser.lexResult = null;

    do {
        currentLexResult = luaparser.lex();

        if (previousLexResult != null && currentLexResult.range[0] <= position.character && currentLexResult.range[1] >= position.character) {
            word = previousLexResult.value;
            break;
        }

        previousLexResult = currentLexResult;
    }
    while (currentLexResult.value != "<eof>");

    return word;
}

const lua: CompletionItem[] = [
    {
        label: 'and',
        kind: CompletionItemKind.Keyword,
        data: "lua1"
    },
    {
        label: 'break',
        kind: CompletionItemKind.Keyword,
        data: "lua2"
    },
    {
        label: 'do',
        kind: CompletionItemKind.Keyword,
        data: "lua3"
    },
    {
        label: 'else',
        kind: CompletionItemKind.Keyword,
        data: "lua4"
    },
    {
        label: 'elseif',
        kind: CompletionItemKind.Keyword,
        data: "lua5"
    },
    {
        label: 'end',
        kind: CompletionItemKind.Keyword,
        data: "lua6"
    },
    {
        label: 'false',
        kind: CompletionItemKind.Keyword,
        data: "lua7"
    },
    {
        label: 'for',
        kind: CompletionItemKind.Keyword,
        data: "lua8"
    },
    {
        label: 'function',
        kind: CompletionItemKind.Keyword,
        data: "lua9"
    },
    {
        label: 'if',
        kind: CompletionItemKind.Keyword,
        data: "lua10"
    },
    {
        label: 'in',
        kind: CompletionItemKind.Keyword,
        data: "lua11"
    },
    {
        label: 'local',
        kind: CompletionItemKind.Keyword,
        data: "lua12"
    },
    {
        label: 'nil',
        kind: CompletionItemKind.Keyword,
        data: "lua13"
    },
    {
        label: 'not',
        kind: CompletionItemKind.Keyword,
        data: "lua14"
    },
    {
        label: 'or',
        kind: CompletionItemKind.Keyword,
        data: "lua15"
    },
    {
        label: 'repeat',
        kind: CompletionItemKind.Keyword,
        data: "lua16"
    },
    {
        label: 'return',
        kind: CompletionItemKind.Keyword,
        data: "lua17"
    },
    {
        label: 'then',
        kind: CompletionItemKind.Keyword,
        data: "lua18"
    },
    {
        label: 'true',
        kind: CompletionItemKind.Keyword,
        data: "lua19"
    },
    {
        label: 'until',
        kind: CompletionItemKind.Keyword,
        data: "lua20"
    },
    {
        label: 'while',
        kind: CompletionItemKind.Keyword,
        data: "lua21"
    }
];

const ap: CompletionItem[] = [
    {
        label: 'config',
        kind: CompletionItemKind.Function,
        data: "adc1"
    },
    {
        label: 'deauth',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'getbroadcast',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'getclient',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'getip',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'getmac',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'setip',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'setmac',
        kind: CompletionItemKind.Function,
        data: "adc2"
    },
    {
        label: 'dhcp',
        kind: CompletionItemKind.Module,
        data: "adc2"
    },
];

const dhcp: CompletionItem[] = [
    {
        label: 'config',
        kind: CompletionItemKind.Function,
        data: "adc1"
    },
    {
        label: 'start',
        kind: CompletionItemKind.Function,
        data: "adc1"
    },
    {
        label: 'stop',
        kind: CompletionItemKind.Function,
        data: "adc1"
    }
];

const adc: CompletionItem[] = [
    {
        label: 'INIT_ADC',
        kind: CompletionItemKind.Enum,
        data: "adc1"
    },
    {
        label: 'INIT_VDD33',
        kind: CompletionItemKind.Enum,
        data: "adc2"
    },
    {
        label: 'force_init_mode',
        kind: CompletionItemKind.Function,
        data: "adc3"
    },
    {
        label: 'read',
        kind: CompletionItemKind.Function,
        data: "adc4"
    },
    {
        label: 'readvdd33',
        kind: CompletionItemKind.Function,
        data: "adc5"
    }
];

const wifi: CompletionItem[] = [
    {
        label: 'getchannel',
        kind: CompletionItemKind.Function,
        data: "wifi1"
    },
    {
        label: 'getmode',
        kind: CompletionItemKind.Function,
        data: "wifi2"
    },
    {
        label: 'STATION',
        kind: CompletionItemKind.Enum,
        data: "wifi3"
    },
    {
        label: 'SOFTAP',
        kind: CompletionItemKind.Enum,
        data: "wifi4"
    },
    {
        label: 'STATIONAP',
        kind: CompletionItemKind.Enum,
        data: "wifi5"
    },
    {
        label: 'NULLMODE',
        kind: CompletionItemKind.Enum,
        data: "wifi6"
    },
    {
        label: 'getpymode',
        kind: CompletionItemKind.Function,
        data: "wifi7"
    },
    {
        label: 'PHYMODE_B',
        kind: CompletionItemKind.Enum,
        data: "wifi8"
    },
    {
        label: 'PHYMODE_G',
        kind: CompletionItemKind.Enum,
        data: "wifi9"
    },
    {
        label: 'PHYMODE_N',
        kind: CompletionItemKind.Enum,
        data: "wifi10"
    },
    {
        label: 'setmode',
        kind: CompletionItemKind.Function,
        data: "wifi11"
    },
    {
        label: 'setpymode',
        kind: CompletionItemKind.Function,
        data: "wifi12"
    },
    {
        label: 'sleeptype',
        kind: CompletionItemKind.Function,
        data: "wifi13"
    },
    {
        label: 'NONE_SLEEP',
        kind: CompletionItemKind.Enum,
        data: "wifi14"
    },
    {
        label: 'LIGHT_SLEEP',
        kind: CompletionItemKind.Enum,
        data: "wifi15"
    },
    {
        label: 'MODEM_SLEEP',
        kind: CompletionItemKind.Enum,
        data: "wifi16"
    },
    {
        label: 'startsmart',
        kind: CompletionItemKind.Function,
        data: "wifi17"
    },
    {
        label: 'stopsmart',
        kind: CompletionItemKind.Function,
        data: "wifi18"
    },
    {
        label: 'STA_IDLE',
        kind: CompletionItemKind.Enum,
        data: "wifi19"
    },
    {
        label: 'STA_CONNECTING',
        kind: CompletionItemKind.Enum,
        data: "wifi20"
    },
    {
        label: 'STA_WRONGPWD',
        kind: CompletionItemKind.Enum,
        data: "wifi21"
    },
    {
        label: 'STA_APNOTFOUND',
        kind: CompletionItemKind.Enum,
        data: "wifi22"
    },
    {
        label: 'STA_FAIL',
        kind: CompletionItemKind.Enum,
        data: "wifi23"
    },
    {
        label: 'STA_GOTIP',
        kind: CompletionItemKind.Enum,
        data: "wifi24"
    },
    {
        label: 'sta',
        kind: CompletionItemKind.Module,
        data: "wifi25"
    },
    {
        label: 'ap',
        kind: CompletionItemKind.Module,
        data: "wifi26"
    },
    {
        label: 'eventmon',
        kind: CompletionItemKind.Module,
        data: "wifi27"
    }
];

const sta: CompletionItem[] = [
    {
        label: 'autoconnect',
        kind: CompletionItemKind.Function,
        data: "sta1"
    },
    {
        label: 'config',
        kind: CompletionItemKind.Function,
        data: "sta2"
    },
    {
        label: 'connect',
        kind: CompletionItemKind.Function,
        data: "sta3"
    },
    {
        label: 'disconnect',
        kind: CompletionItemKind.Function,
        data: "sta4"
    },
    {
        label: 'eventMonReg',
        kind: CompletionItemKind.Function,
        data: "sta5"
    },
    {
        label: 'eventMonStart',
        kind: CompletionItemKind.Function,
        data: "sta6"
    },
    {
        label: 'eventMonStop',
        kind: CompletionItemKind.Function,
        data: "sta7"
    },
    {
        label: 'getap',
        kind: CompletionItemKind.Function,
        data: "sta8"
    },
    {
        label: 'getbroadcast',
        kind: CompletionItemKind.Function,
        data: "sta9"
    },
    {
        label: 'getconfig',
        kind: CompletionItemKind.Function,
        data: "sta10"
    },
    {
        label: 'gethostname',
        kind: CompletionItemKind.Function,
        data: "sta11"
    },
    {
        label: 'getip',
        kind: CompletionItemKind.Function,
        data: "sta12"
    },
    {
        label: 'getmac',
        kind: CompletionItemKind.Function,
        data: "sta13"
    },
    {
        label: 'getrssi',
        kind: CompletionItemKind.Function,
        data: "sta14"
    },
    {
        label: 'sethostname',
        kind: CompletionItemKind.Function,
        data: "sta15"
    },
    {
        label: 'setip',
        kind: CompletionItemKind.Function,
        data: "sta16"
    },
    {
        label: 'setmac',
        kind: CompletionItemKind.Function,
        data: "sta17"
    },
    {
        label: 'status',
        kind: CompletionItemKind.Function,
        data: "sta18"
    },
];

const eventmon: CompletionItem[] = [
    {
        label: 'register',
        kind: CompletionItemKind.Function,
        data: "eventmon1"
    },
    {
        label: 'unregister',
        kind: CompletionItemKind.Function,
        data: "eventmon2"
    },
    {
        label: 'reason',
        kind: CompletionItemKind.Module,
        data: "eventmon3"
    },
    {
        label: 'STA_CONNECTED',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'STA_DISCONNECTED',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'STA_AUTHMODE_CHANGE',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'STA_GOT_IP',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'STA_DHCP_TIMEOUT',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'AP_STACONNECTED',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'AP_STADISCONNECTED',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    },
    {
        label: 'AP_PROBEREQRECVED',
        kind: CompletionItemKind.Enum,
        data: "eventmon2"
    }
];

const reason: CompletionItem[] = [
    {
        label: 'UNSPECIFIED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'AUTH_EXPIRE',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'AUTH_LEAVE',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'ASSOC_EXPIRE',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'ASSOC_TOOMANY',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'NOT_AUTHED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'NOT_ASSOCED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'ASSOC_LEAVE',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'ASSOC_NOT_AUTHED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'DISASSOC_PWRCAP_BAD',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'DISASSOC_SUPCHAN_BAD',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'IE_INVALID',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'MIC_FAILURE',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: '4WAY_HANDSHAKE_TIMEOUT',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'GROUP_KEY_UPDATE_TIMEOUT',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'IE_IN_4WAY_DIFFERS',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'GROUP_CIPHER_INVALID',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'PAIRWISE_CIPHER_INVALID',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'AKMP_INVALID',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'UNSUPP_RSN_IE_VERSION',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'INVALID_RSN_IE_CAP',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: '802_1X_AUTH_FAILED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'CIPHER_SUITE_REJECTED',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'BEACON_TIMEOUT',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'NO_AP_FOUND',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'AUTH_FAIL',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'ASSOC_FAIL',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
    {
        label: 'HANDSHAKE_TIMEOUT',
        kind: CompletionItemKind.Enum,
        data: "reason1"
    },
];

const modules: CompletionItem[] = [
    {
        label: 'adc',
        kind: CompletionItemKind.Module,
        data: 1
    },
    {
        label: 'am2320',
        kind: CompletionItemKind.Module,
        data: 2
    },
    {
        label: 'apa102',
        kind: CompletionItemKind.Module,
        data: 3
    },
    {
        label: 'bit',
        kind: CompletionItemKind.Module,
        data: 4
    },
    {
        label: 'bme280',
        kind: CompletionItemKind.Module,
        data: 5
    },
    {
        label: 'bmp085',
        kind: CompletionItemKind.Module,
        data: 6
    },
    {
        label: 'cjson',
        kind: CompletionItemKind.Module,
        data: 7
    },
    {
        label: 'coap',
        kind: CompletionItemKind.Module,
        data: 8
    },
    {
        label: 'crypto',
        kind: CompletionItemKind.Module,
        data: 9
    },
    {
        label: 'dht',
        kind: CompletionItemKind.Module,
        data: 10
    },
    {
        label: 'encoder',
        kind: CompletionItemKind.Module,
        data: 11
    },
    {
        label: 'enduser_setup',
        kind: CompletionItemKind.Module,
        data: 12
    },
    {
        label: 'file',
        kind: CompletionItemKind.Module,
        data: 13
    },
    {
        label: 'gpio',
        kind: CompletionItemKind.Module,
        data: 14
    },
    {
        label: 'http',
        kind: CompletionItemKind.Module,
        data: 15
    },
    {
        label: 'hx711',
        kind: CompletionItemKind.Module,
        data: 16
    },
    {
        label: 'i2c',
        kind: CompletionItemKind.Module,
        data: 17
    },
    {
        label: 'mdns',
        kind: CompletionItemKind.Module,
        data: 18
    },
    {
        label: 'mqtt',
        kind: CompletionItemKind.Module,
        data: 19
    },
    {
        label: 'net',
        kind: CompletionItemKind.Module,
        data: 20
    },
    {
        label: 'node',
        kind: CompletionItemKind.Module,
        data: 21
    },
    {
        label: 'ow',
        kind: CompletionItemKind.Module,
        data: 22
    },
    {
        label: 'perf',
        kind: CompletionItemKind.Module,
        data: 23
    },
    {
        label: 'pwm',
        kind: CompletionItemKind.Module,
        data: 24
    },
    {
        label: 'rc',
        kind: CompletionItemKind.Module,
        data: 25
    },
    {
        label: 'rotary',
        kind: CompletionItemKind.Module,
        data: 26
    },
    {
        label: 'rtcfifo',
        kind: CompletionItemKind.Module,
        data: 27
    },
    {
        label: 'rtcmem',
        kind: CompletionItemKind.Module,
        data: 28
    },
    {
        label: 'rtctime',
        kind: CompletionItemKind.Module,
        data: 29
    },
    {
        label: 'sigma_delta',
        kind: CompletionItemKind.Module,
        data: 30
    },
    {
        label: 'sntp',
        kind: CompletionItemKind.Module,
        data: 31
    },
    {
        label: 'spi',
        kind: CompletionItemKind.Module,
        data: 32
    },
    {
        label: 'struct',
        kind: CompletionItemKind.Module,
        data: 33
    },
    {
        label: 'tmr',
        kind: CompletionItemKind.Module,
        data: 34
    },
    {
        label: 'tsl2561',
        kind: CompletionItemKind.Module,
        data: 35
    },
    {
        label: 'u8g',
        kind: CompletionItemKind.Module,
        data: 36
    },
    {
        label: 'uart',
        kind: CompletionItemKind.Module,
        data: 37
    },
    {
        label: 'ucg',
        kind: CompletionItemKind.Module,
        data: 38
    },
    {
        label: 'wifi',
        kind: CompletionItemKind.Module,
        data: 39
    },
    {
        label: 'ws2801',
        kind: CompletionItemKind.Module,
        data: 40
    },
    {
        label: 'ws2812',
        kind: CompletionItemKind.Module,
        data: 41
    }
];

export const api = {
    adc,
    wifi,
    reason,
    eventmon,
    sta,
    ap,
    dhcp
};
