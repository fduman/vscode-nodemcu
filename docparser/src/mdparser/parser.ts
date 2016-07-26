import * as marked from "marked";
import * as fs from "fs";
import * as path from "path";


interface FunctionType {
    label?: string;
    data?: string;
    description?: string;
    signature?: string;
    example?: string;
}

function replaceAll(target: string, search: string, replacement: string): string {
    return target.replace(new RegExp(search, "g"), replacement);
};

let directory = "D:\\Github\\nodemcu-firmware\\docs\\en\\modules";

fs.readdir(directory, function (err, list) {
    list.forEach(element => {
        if (path.extname(element) === ".md") {

            fs.readFile(path.join(directory, element), "utf8", function (err: any, data: string) {
                if (!data) {
                    throw "data is empty";
                }

                let moduleName = path.parse(element).name.replace("-", "_");
                let lexed = marked.lexer(data);
                let functions: FunctionType[] = [];
                let index = 0;
                let funcObj: any = null;
                let nodeType: string = "";

                while (lexed.length !== index) {
                    let lexElement = lexed[index];

                    if (nodeType === "syntax" && lexElement.type === "paragraph") {
                        let signature: string = lexElement.text;
                        funcObj.signature = replaceAll(signature, "`", "").replace(moduleName + ".", "".trim());
                        nodeType = null;
                    } else if (nodeType === "function" && lexElement.type === "paragraph") {
                        let desc: string = lexElement.text;
                        funcObj.description = replaceAll(desc, "`", "'").trim();
                        funcObj.description = replaceAll(funcObj.description, "\n", " ");
                        funcObj.description = replaceAll(funcObj.description, "\r", " ");
                        funcObj.description = replaceAll(funcObj.description, "\t", " ");
                        funcObj.description = replaceAll(funcObj.description, "<br />", " ");
                        funcObj.description = replaceAll(funcObj.description, "\0xa", " ");
                        nodeType = null;
                    }

                    if (lexElement.depth === 2 && lexElement.type === "heading") {
                        funcObj = { parameters: [] };
                        functions.push(funcObj);

                        // function found
                        let funcName: string = lexElement.text;
                        funcObj.label = funcName.replace(moduleName + ".", "").replace("()", "").trim();
                        funcObj.data = funcName.replace("()", "").trim();
                        nodeType = "function";

                    } else if (lexElement.depth === 4 && lexElement.type === "heading" && lexElement.text === "Syntax") {
                        nodeType = "syntax";
                    }

                    index++;
                }

                let fileData: string = "import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';\n";

                fileData += "\n";
                fileData += "const " + moduleName + ": CompletionItem[] = [\n";

                functions.forEach(element => {
                    fileData += "\t{\n";
                    fileData += "\t\tkind: CompletionItemKind.Function,\n";
                    fileData += "\t\tlabel: '" + element.label + "',\n";
                    fileData += "\t\tdata: '" + element.data + "',\n";
                    fileData += "\t\tdetail: '" + (element.signature == null ? "" : element.signature) + "',\n";
                    fileData += "\t\tdocumentation: `" + (element.description == null ? "" : element.description) + "`\n";
                    fileData += "\t},\n";
                });

                fileData += "];\n";

                fs.writeFile("d:\\" + moduleName + ".ts", fileData);
            });
        }
    });
});
