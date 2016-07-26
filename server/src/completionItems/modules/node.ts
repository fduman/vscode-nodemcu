import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export const node: CompletionItem[] = [
	{
		kind: CompletionItemKind.Enum,
		label: 'CPU80MHZ',
		data: 'node.CPU80MHZ',
		detail: 'CPU80MHZ',
		documentation: `CPU 80MHZ`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'CPU160MHZ',
		data: 'node.CPU160MHZ',
		detail: 'CPU160MHZ',
		documentation: `CPU 160MHZ`
	},
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
		label: 'key',
		data: 'node.key',
		detail: 'key(type, function())',
		documentation: `Deprecated-Defines action to take on button press (on the old devkit 0.9), button connected to GPIO 16.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'led',
		data: 'node.led',
		detail: 'led(low, high)',
		documentation: `Deprecated-Sets the on/off time for the LED (on the old devkit 0.9), with the LED connected to GPIO16, multiplexed with ['node.key()'](#nodekey-deprecated).`
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
		label: 'readvdd33',
		data: 'node.readvdd33',
		detail: '',
		documentation: `Deprecated-Moved to ['adc.readvdd33()'](adc/#adcreadvdd33).`
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
		kind: CompletionItemKind.Enum,
		label: 'egc.NOT_ACTIVE',
		data: 'node.egc.NOT_ACTIVE',
		detail: 'egc.NOT_ACTIVE',
		documentation: `EGC inactive, no collection cycle will be forced in low memory situations`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'egc.ON_ALLOC_FAILURE',
		data: 'node.egc.ON_ALLOC_FAILURE',
		detail: 'egc.ON_ALLOC_FAILURE',
		documentation: `Try to allocate a new block of memory, and run the garbage collector if the allocation fails. If the allocation fails even after running the garbage collector, the allocator will return with error.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'egc.ON_MEM_LIMIT',
		data: 'node.egc.ON_MEM_LIMIT',
		detail: 'egc.ON_MEM_LIMIT',
		documentation: `Run the garbage collector when the memory used by the Lua script goes beyond an upper limit. If the upper limit can't be satisfied even after running the garbage collector, the allocator will return with error.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'egc.ALWAYS',
		data: 'node.egc.ALWAYS',
		detail: 'egc.ALWAYS',
		documentation: `Run the garbage collector before each memory allocation. If the allocation fails even after running the garbage collector, the allocator will return with error. This mode is very efficient with regards to memory savings, but it's also the slowest.`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'egc.setmode',
		data: 'node.egc.setmode',
		detail: '',
		documentation: `Sets the Emergency Garbage Collector mode. [The EGC whitepaper](http://www.eluaproject.net/doc/v0.9/en_elua_egc.html) provides more detailed information on the EGC.`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'task.LOW_PRIORITY',
		data: 'node.task.LOW_PRIORITY',
		detail: 'task.LOW_PRIORITY',
		documentation: `Low priority task`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'task.MEDIUM_PRIORITY',
		data: 'node.task.MEDIUM_PRIORITY',
		detail: 'task.MEDIUM_PRIORITY',
		documentation: `Medium priority task`
	},
	{
		kind: CompletionItemKind.Enum,
		label: 'task.HIGH_PRIORITY',
		data: 'node.task.HIGH_PRIORITY',
		detail: 'task.HIGH_PRIORITY',
		documentation: `High priority task`
	},
	{
		kind: CompletionItemKind.Function,
		label: 'task.post',
		data: 'node.task.post',
		detail: '',
		documentation: `Enable a Lua callback or task to post another task request. Note that as per the  example multiple tasks can be posted in any task, but the highest priority is  always delivered first.`
	},
];
