import {
    TextDocument,
    TextDocumentPositionParams, CompletionItem,
    SignatureHelp, SignatureInformation, RemoteConsole
} from 'vscode-languageserver';

import { modules } from "./completionItems/modules"
import { lua } from "./completionItems/lua"
import { api } from "./completionItems/api"
import { analyze, AnalyzeResult } from "./documentAnalyzer" ;

export function nodeMcuSignatureHelpHandler(remoteConsole: RemoteConsole, document: TextDocument, textDocumentPosition: TextDocumentPositionParams): SignatureHelp {
    remoteConsole.log("Server nodeMcuSignatureHelpHandler entered");

    let text = document.getText();
    let lineText = text.split(/\r?\n/g)[textDocumentPosition.position.line];

    let analyzeResult = analyze(lineText, textDocumentPosition.position);

    remoteConsole.log("Server nodeMcuSignatureHelpHandler word: " + JSON.stringify(analyzeResult));

    if (analyzeResult.inSignatureDefinition &&  analyzeResult.signatureName && analyzeResult.moduleName && api[analyzeResult.moduleName]) {
        let currentApi: CompletionItem[] = api[analyzeResult.moduleName];

        let filtered = currentApi.filter(function (value: CompletionItem, index: number, array: CompletionItem[]) {
            return value.label == analyzeResult.signatureName;
        });

        if (filtered.length > 0) {

            let signatureInfo: SignatureInformation = {
                label: filtered[0].detail,
                documentation: filtered[0].documentation
            };

            let result: SignatureHelp = {
                signatures: [signatureInfo],
            };

            return result;
        }
    }

    return null;
}