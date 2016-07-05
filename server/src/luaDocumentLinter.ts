import * as luaparser from "luaparse";

import {
	TextDocument, Diagnostic, DiagnosticSeverity
} from 'vscode-languageserver';

export function validateLuaDocument(textDocument: TextDocument): Diagnostic[] {
	let diagnostics: Diagnostic[] = [];
	let text = textDocument.getText();

	try {
		let result = luaparser.parse(text);
    } catch (err) {
		var line = err.line - 1;
		var col = err.column;
		var message = err.message.match(/\[\d+:\d+\] (.*)/)[1];

		diagnostics.push({
			severity: DiagnosticSeverity.Error,
			range: {
				start: { line: line, character: col },
				end: { line: line, character: col + 10 }
			},
			message: message,
			source: 'err'
		});
	}

    return diagnostics;
}