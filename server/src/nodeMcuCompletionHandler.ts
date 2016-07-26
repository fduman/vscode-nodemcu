import {
    TextDocument, Position,
    TextDocumentPositionParams,
    CompletionItem, RemoteConsole
} from 'vscode-languageserver';

import { modules } from "./completionItems/modules";
import { lua } from "./completionItems/lua";
import { api } from "./completionItems/api";
import { analyze, AnalyzeResult } from "./documentAnalyzer" ;

export function nodeMcuCompletionHandler(remoteConsole: RemoteConsole, document: TextDocument, textDocumentPosition: TextDocumentPositionParams): CompletionItem[] {
    remoteConsole.log("Server nodeMcuCompletionHandler entered");

    let text = document.getText();
    let lineText = text.split(/\r?\n/g)[textDocumentPosition.position.line];

    let analyzeResult = analyze(lineText, textDocumentPosition.position);
    
    remoteConsole.log("Server nodeMcuCompletionHandler analyze: " + JSON.stringify(analyzeResult));
    
    if (!analyzeResult.inSignatureDefinition) {
        
        if (analyzeResult.moduleName == null || !api[analyzeResult.moduleName])
        {
            return modules.concat(lua);
        }
        else if (api[analyzeResult.moduleName])
        {
            return api[analyzeResult.moduleName];
        }
    }

    return null;
}



