'use strict';

import * as vscode from 'vscode';
import * as path from "path";

const fileUrl = require("file-url");


export class DeviceInfoContentProvider implements vscode.TextDocumentContentProvider {

    static uri = vscode.Uri.parse("nodemcu://device/NodeMCU%20Toolbox");

    private _onDidChange = new vscode.EventEmitter<vscode.Uri>();
    private _content = "";


    constructor() {
    }

    dispose() {
        this._onDidChange.dispose();
    }


    /**
     * Provider method that takes an uri of the `references`-scheme and
     * resolves its content by (1) running the reference search command
     * and (2) formatting the results
     */
    provideTextDocumentContent(uri: vscode.Uri, token: vscode.CancellationToken): string | Thenable<string> {
        return this._content;
    }


    /**
     * Expose an event to signal changes of _virtual_ documents
     * to the editor
     */
    get onDidChange(): vscode.Event<vscode.Uri> {
        return this._onDidChange.event;
    }


    /**
     * 
     */
    onFileList(content: string): void {
        let icon_source_path = fileUrl(path.join(__dirname, "..", "..", "..", "media", "nodemcu_icons.svg")); 
        let ctx_menu_path = fileUrl(path.join(__dirname, "..", "..", "..", "media", "filelist-context.html"));                
        let fileList = content.replace(/([^\|]+)\|(\d+)\r?\n/g, "{\"name\":\"$1\",\"size\":$2}").replace(/}{/g,"},{");

        let body = fileList.length > 0 ? 
                    `<table> 
                        <tr ng-repeat="file in files | orderBy:'name'" ng-class="{'hover':$index == hoverRow}" 
                                ng-mouseenter="hoverRow=$index" ng-mouseleave="hoverRow=-1"
                                data-context-menu="${ctx_menu_path}"
                                ng-model="file"
                                >
                            <td class='fileIcon'><svg class='icon icon-fill'><use xlink:href='{{toIconLink(file)}}'></use></svg></td>
                            <td class='fileName'>{{file.name}}</td>
                            <td class='fileSize'>{{formatNumber(file.size)}}</td>
                        </tr>
                    </table>` :
                   `<div class="infoMessage">No files found.</div>`;

        let angular =`  $scope.files = [${fileList}];
                        $scope.toCommandUri = function(cmd, file) {
                            return "command:nodemcu." + cmd + "?" + JSON.stringify(file);
                        };
                        $scope.isLuaFile = function(file) {
                            return file.name.endsWith('.lua');
                        };
                        $scope.isLcFile = function(file) {
                            return file.name.endsWith('.lc');
                        };
                        $scope.toIconName = function(file) {
                            if ($scope.isLuaFile(file)) {
                                return "script";
                            } else if (file.name.endsWith('.lc')) {
                                return "chip";
                            }

                            return "file";
                        };
                        $scope.toIconLink = function(file) {
                            return "${icon_source_path}#" + $scope.toIconName(file);
                        };
                        $scope.isExecutable = function(file) {
                            return $scope.isLuaFile(file) || $scope.isLcFile(file); 
                        };
                        `;

        this.initContent(body, angular);

        this._onDidChange.fire(DeviceInfoContentProvider.uri);
    }


    /**
     * 
     */
    onSystemInfo(content: string): void {
        //content: 1,5,4,14131152,1327328,1024|23520|4|401600,57730,459330

        let stats = content.replace(/(\d+,\d+,\d+),(\d+),(\d+),(\d+)(?:,\d+)*\|(\d+)\|(\d+)\|(\d+),(\d+),(\d+)(?:,\d+)?/, 
            "{\"version\":[$1],\"chipid\":$2,\"flashid\":$3,\"flashsize\":$4,\"heap\":$5,\"bootreason\":$6,\"fs\":{\"free\":$7,\"used\":$8,\"total\":$9}}");

        let body = `<table>
                        <tr><td><b>System Information<b></td><td></td></tr>
                        <tr><td>Firmware version:</td><td>{{stats.version[0]}}.{{stats.version[1]}}.{{stats.version[2]}}</td></tr>
                        <tr><td>Chip ID:</td><td>{{stats.chipid}}</td></tr>
                        <tr><td>Flash ID:</td><td>{{stats.flashid}}</td></tr>
                        <tr><td>Flash size:</td><td>{{formatNumber(stats.flashsize)}} bytes</td></tr>
                        <tr><td>&nbsp;</td><td></td></tr>

                        <tr><td><b>File System<b></td><td></td></tr>
                        <tr><td>Free space:</td><td>{{formatNumber(stats.fs.free)}} bytes</td></tr>
                        <tr><td>Used space:</td><td>{{formatNumber(stats.fs.used)}} bytes</td></tr>
                        <tr><td>Total size:</td><td>{{formatNumber(stats.fs.total)}} bytes</td></tr>
                        <tr><td>&nbsp;</td><td></td></tr>

                        <tr><td><b>Boot<b></td><td></td></tr>
                        <tr><td>Boot reason:</td><td>{{stats.bootreason}}</td></tr>
                        <tr><td>&nbsp;</td><td></td></tr>

                        <tr><td><b>Memory<b></td><td></td></tr>
                        <tr><td>Free heap:</td><td>{{formatNumber(stats.heap)}} bytes</td></tr>
                    </table>`;

        let angular = `$scope.stats = ${stats};`;
        
        this.initContent(body, angular);

        this._onDidChange.fire(DeviceInfoContentProvider.uri);
    }


    /**
     * 
     */
    onReboot(): void {
        this.initContent('<div class="infoMessage">Reboot command sent to device. Check Debug Console for status.</div>', "");
        this._onDidChange.fire(DeviceInfoContentProvider.uri);
    }


    /**
     * 
     */
    onMessage(message: string): void {
        this.initContent('<div class="infoMessage">' + message + '</div>', "");        
        this._onDidChange.fire(DeviceInfoContentProvider.uri);
    }


    /**
     * 
     */
    initContent(body: string, angular: string) {
        let cssPath = fileUrl(path.join(__dirname, "..", "..", "..", "media", "nodemcu.css"));
        let angularPath = fileUrl(path.join(__dirname, "..", "..", "..", "node_modules", "angular", "angular.min.js"));
        let angularTTCSSPath = fileUrl(path.join(__dirname, "..", "..", "..", "node_modules", "angular-tooltips", "dist", "angular-tooltips.min.css"));
        let ngContextMenuPath = fileUrl(path.join(__dirname, "..", "..", "..", "node_modules", "ng-contextmenu", "dist", "ng-contextmenu.min.js"));
        let angularTTPath = fileUrl(path.join(__dirname, "..", "..", "..", "node_modules", "angular-tooltips", "dist", "angular-tooltips.min.js"));
        let mediaPath = fileUrl(path.join(__dirname, "..", "..", "..", "media"));
        
        this._content = `<html>
                            <head>
                                <link rel="stylesheet" href="${cssPath}">
                                <link href="${angularTTCSSPath}" rel="stylesheet" type="text/css" />
                            </head>
                            <body>
                                <div style="width: 100%; border-bottom: 1px solid; padding-bottom: 1em; margin-bottom: 1em">
                                    <a href="command:nodemcu.sysInfo"><button type="button" class="btn">System</button></a>
                                    <a href="command:nodemcu.listFiles"><button type="button" class="btn">Files</button></a>
                                    <a href="command:nodemcu.formatFlash"><button type="button" class="btn">Format</button></a>
                                    <a href="command:nodemcu.uploadProject"><button type="button" class="btn">Upload</button></a>
                                    <a href="command:nodemcu.reboot"><button type="button" class="btn">Reboot</button></a>
                                </div>
                                <div ng-controller="NodeMCUController">
                                    ${body}
                                </div>
                                <script src="${angularPath}"></script>
                                <script src="${angularTTPath}"></script>
                                <script src="${ngContextMenuPath}"></script>
                                <script>
                                    var myApp = angular.module('NodeMCUApp',['720kb.tooltips','ngContextMenu']).config([
                                                    '$compileProvider', function($compileProvider) {   
                                                                            $compileProvider.aHrefSanitizationWhitelist(/^\s*(file|command):/);
                                                                        }]);
                                                                        
                                    myApp.controller('NodeMCUController', ['$scope', function($scope) {
                                        $scope.mediaUrl = "${mediaPath}";
                                        $scope.formatNumber = function(n) {
                                            var s = '' + n.toFixed(), i = s.length, r = '';
                                            while ( (i -= 3) > 0 ) { r = ' ' + s.substr(i, 3) + r; }
                                            return s.substr(0, i + 3) + r;
                                        }
                                        
                                        ${angular}
                                    }]);                                                                                

                                    angular.element(function() {
                                        angular.bootstrap(document.getElementsByTagName("body")[0], ['NodeMCUApp']);
                                    });
                                </script>                                
                            </body>
                         </html>`;
    }
}