import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const bme280: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'altitude',
		data: 'bme280.altitude',
		detail: 'altitude(P, QNH)',
		documentation: `For given air pressure and sea level air pressure returns the altitude in meters as an integer multiplied with 100, i.e. altimeter function.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'baro',
		data: 'bme280.baro',
		detail: 'baro()',
		documentation: `Reads the sensor and returns the air temperature in hectopascals as an integer multiplied with 1000 or 'nil' when readout is not successful. Current temperature is needed to calculate the air pressure so temperature reading is performed prior reading pressure data. Second returned variable is therefore current temperature.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dewpoint',
		data: 'bme280.dewpoint',
		detail: 'dewpoint(H, T)',
		documentation: `For given temperature and relative humidity returns the dew point in celsius as an integer multiplied with 100.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'humi',
		data: 'bme280.humi',
		detail: 'humi()',
		documentation: `Reads the sensor and returns the air relative humidity in percents as an integer multiplied with 100 or 'nil' when readout is not successful. Current temperature is needed to calculate the relative humidity so temperature reading is performed prior reading pressure data. Second returned variable is therefore current temperature.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'init',
		data: 'bme280.init',
		detail: 'init(sda, scl, [temp_oss, press_oss, humi_oss, power_mode, inactive_duration, IIR_filter])',
		documentation: `Initializes module. Initialization is mandatory before read values.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'qfe2qnh',
		data: 'bme280.qfe2qnh',
		detail: 'qfe2qnh(P, altitude)',
		documentation: `For given altitude converts the air pressure to sea level air pressure.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'startreadout',
		data: 'bme280.startreadout',
		detail: 'startreadout(delay, callback)',
		documentation: `Starts readout (turns the sensor into forced mode). After the readout the sensor turns to sleep mode.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'temp',
		data: 'bme280.temp',
		detail: 'temp()',
		documentation: `Reads the sensor and returns the temperature in celsius as an integer multiplied with 100.`
	},
];
