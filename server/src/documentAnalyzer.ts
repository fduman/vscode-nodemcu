import * as luaparser from "luaparse";
import { Position } from 'vscode-languageserver';

export interface AnalyzeResult {
    inSignatureDefinition: boolean;
    signatureName: string;
    moduleName: string;
}

function doLexicalAnalyze(text: string): luaparser.lexResult[] {
    let result: luaparser.lexResult[] = [];

    luaparser.parse(text, { wait: true });

    let currentLexResult: luaparser.lexResult = null;

    do {
        currentLexResult = luaparser.lex();
        result.push(currentLexResult);
    }
    while (currentLexResult.value != "<eof>");

    return result;
}

export function analyze(text: string, position: Position): AnalyzeResult {
    let lexResults = doLexicalAnalyze(text);

    let result: AnalyzeResult = {
        inSignatureDefinition: false,
        signatureName: null,
        moduleName: lexResults[0].type == 8 ? lexResults[0].value : null
    };

    let resultAtCharacter = lexResults.filter(function (value: luaparser.lexResult, index: number, array: luaparser.lexResult[]) {
        return position.character >= value.range[0] && position.character <= value.range[1];
    })[0];

    let resultIndexAtCharacter = lexResults.indexOf(resultAtCharacter);

    let i = resultIndexAtCharacter;
    let outSignatureDefinition: boolean = false;

    while (i > 0) {
        let current = lexResults[i];

        if (resultIndexAtCharacter != i && current.type == 32 && current.value == ")") {
            outSignatureDefinition = true;
        }

        if (!outSignatureDefinition && current.type == 32 && current.value == "(") {
            result.inSignatureDefinition = true;
        }

        if (result.inSignatureDefinition && result.signatureName == null && current.type == 8)
        {
            result.signatureName = current.value;
        }

        i--;
    }

    return result;
}