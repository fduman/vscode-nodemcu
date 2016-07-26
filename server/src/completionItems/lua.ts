import {
    CompletionItem, CompletionItemKind
} from 'vscode-languageserver';

export const lua: CompletionItem[] = [
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
