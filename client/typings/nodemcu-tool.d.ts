declare module "nodemcu-tool" {
    export class Connector{
		constructor(devicename: string, baudrate: number);
        
        connect(cb: any) : void;

        onError(cb : any) : void;

        deviceInfo(showAll: boolean, cb : any) : void;

        checkConnection(cb: any) : void;

        fetchDeviceInfo(cb : any) : void;

        upload(localName: string, remoteName: string, options: any, completeCb: any, progressCb: any): void;

        fsinfo(cb: any) : void;

        removeFile(remoteName: string, cb: any) : void;

        format(cb: any) : void;

        compile(remoteName: string, cb: any) : void;

        run(remoteName: string, cb: any) : void;
        
        executeCommand(cmd: any, cb: any) : void;

        download(remoteName: string, cb: any) : void;

        disconnect() : void;
    }
}
