import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const node: CompletionItem[] = [
	{
		kind: CompletionItemKind.Function,
		label: 'bootreason',
		data: 'node.bootreason',
		detail: 'bootreason()',
		documentation: `Returns the boot reason and extended reset info.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'chipid',
		data: 'node.chipid',
		detail: 'chipid()',
		documentation: `Returns the ESP chip ID.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'compile',
		data: 'node.compile',
		detail: 'compile("file.lua")',
		documentation: `Compiles a Lua text file into Lua bytecode, and saves it as .lc file.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'dsleep',
		data: 'node.dsleep',
		detail: 'dsleep(us, option)',
		documentation: `Enters deep sleep mode, wakes up when timed out.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'flashid',
		data: 'node.flashid',
		detail: 'flashid()',
		documentation: `Returns the flash chip ID.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'heap',
		data: 'node.heap',
		detail: 'heap()',
		documentation: `Returns the current available heap size in bytes. Note that due to fragmentation, actual allocations of this size may not be possible.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'info',
		data: 'node.info',
		detail: 'info()',
		documentation: `Returns NodeMCU version, chipid, flashid, flash size, flash mode, flash speed.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'input',
		data: 'node.input',
		detail: 'input(str)',
		documentation: `Submits a string to the Lua interpreter. Similar to 'pcall(loadstring(str))', but without the single-line limitation.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'key --deprecated',
		data: 'node.key --deprecated',
		detail: 'key(type, function())',
		documentation: `Defines action to take on button press (on the old devkit 0.9), button connected to GPIO 16.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'led --deprecated',
		data: 'node.led --deprecated',
		detail: 'led(low, high)',
		documentation: `Sets the on/off time for the LED (on the old devkit 0.9), with the LED connected to GPIO16, multiplexed with ['node.key()'](#nodekey-deprecated).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'output',
		data: 'node.output',
		detail: 'output(function(str), serial_debug)',
		documentation: `Redirects the Lua interpreter output to a callback function. Optionally also prints it to the serial console.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'readvdd33 --deprecated',
		data: 'node.readvdd33 --deprecated',
		detail: '',
		documentation: `Moved to ['adc.readvdd33()'](adc/#adcreadvdd33).`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'restart',
		data: 'node.restart',
		detail: 'restart()',
		documentation: `Restarts the chip.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'restore',
		data: 'node.restore',
		detail: 'restore()',
		documentation: `Restores system configuration to defaults using the SDK function 'system_restore()', which doesn't document precisely what it erases/restores.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'setcpufreq',
		data: 'node.setcpufreq',
		detail: 'setcpufreq(speed)',
		documentation: `Change the working CPU Frequency.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'stripdebug',
		data: 'node.stripdebug',
		detail: '',
		documentation: `Controls the amount of debug information kept during ['node.compile()'](#nodecompile), and allows removal of debug information from already compiled Lua code.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'osprint',
		data: 'node.osprint',
		detail: '',
		documentation: `Controls whether the debugging output from the Espressif SDK is printed. Note that this is only available if the firmware is build with DEVELOPMENT_TOOLS defined.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'egc.setmode',
		data: 'node.egc.setmode',
		detail: '',
		documentation: `Sets the Emergency Garbage Collector mode. [The EGC whitepaper](http://www.eluaproject.net/doc/v0.9/en_elua_egc.html) provides more detailed information on the EGC.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'task.post',
		data: 'node.task.post',
		detail: '',
		documentation: `Enable a Lua callback or task to post another task request. Note that as per the  example multiple tasks can be posted in any task, but the highest priority is  always delivered first.`
	},
];
