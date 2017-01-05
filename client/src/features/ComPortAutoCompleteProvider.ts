import * as vs from 'vscode';
import * as serialport from 'serialport';

export class ComPortAutoCompleteProvider implements vs.CompletionItemProvider {
 
    provideCompletionItems(document: vs.TextDocument, position: vs.Position, token: vs.CancellationToken): Thenable<vs.CompletionItem[]> {
        
        var currentLine = document.getText(document.lineAt(position).range);

        if (!this.shouldProvide(currentLine, position.character)) {
            return Promise.resolve([]);
        }

        return this.listComPorts().then(function(ports: serialport.portConfig[]){

            var result = ports.map(function(cfg: serialport.portConfig) {
                var item: vs. CompletionItem = new vs.CompletionItem(cfg.comName);
                item.insertText = " \"" + cfg.comName + "\"";
                item.detail = (cfg.pnpId || '') + '    ' + (cfg.manufacturer || '');
                item.sortText = "c";
                
                return item;
            });

            var auto = new vs.CompletionItem("auto");
            auto.insertText = " \"auto\"";
            auto.detail = "Autodetect NodeMCU port";
            auto.sortText = "a";
            
            result.push(auto);

            return Promise.resolve(result);
        });
    }


    listComPorts() {        
        return new Promise(function(fulfill, reject) {
            serialport.list((error: string, ports: serialport.portConfig[]) => {
                if (error != null) {
                    reject(error);
                }
                else {
                    fulfill(ports);
                }
            });            
        });
    }


    /**
     * Deterimine if we should provide path completion.
     */
    shouldProvide(currentLine: string, position: number) {
        return currentLine.match("[\"\']port[\"\']\s*\:");
    }    
}