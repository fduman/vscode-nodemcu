import * as serialport from "serialport";

export interface PortInformation {
    comName: string,
    manufacturer: string,
    serialNumber: string,
    pnpId: string,
    locationId: string,
    vendorId: string,
    productId: string
}

/**
 * 
 */
export class NodeMcuCommunicator {
    private _port: serialport.SerialPort;
    private _recvCallback: (data: string) => void;

    /**
     * 
     */
    constructor(portname: string, baud: number) {

        let options = {
            autoOpen: false,
            baudRate: baud
        };

        this._port = new serialport.SerialPort(portname, options);

        this._port.on("data", (data) => {

            if (this._recvCallback) { 
                this._recvCallback(data.toString('utf8'));
            }
        });
        
    }


    /**
     * 
     */
    public static detectPort(cfgPort: string, callback: (error: string, ports: PortInformation[]) => void): void {
        serialport.list((error: string, ports: serialport.portConfig[]) => {
            if (error != null) {
                callback(error, null);
            }
            else {                
                let filteredPorts = ports.filter((port: serialport.portConfig) => {
                    if (cfgPort == null || cfgPort == "auto") {
                        return port.pnpId.includes("VID_1A86") || port.pnpId.includes("VID_10C4");
                    }

                    return (port.comName == cfgPort);
                });

                callback(error, filteredPorts);
            }
        });
    }

    public open(): void {
        this._port.open();
    }

    public registerOnPortDisconnect(callback: (error: string) => void): void {
        this._port.on("disconnect", callback);
    }

    public registerOnPortClose(callback: () => void): void {
        this._port.on("close", callback);
    }

    public registerOnPortOpen(callback: () => void): void {
        this._port.on("open", () => {
            callback();
        });
    }

    public registerOnError(callback: (error: string) => void): void {
        this._port.on("error", callback);
    }

    public registerOnDataReceived(callback: (data: string) => void): (data: string) => void {
        let oldCB = this._recvCallback;
        this._recvCallback = callback;

        return oldCB;
    }

    public write(data: string) {
        if (this._port.isOpen) {
            this._port.write(data, () => {
                this._port.drain();
            });
        }
    }

    public close(): void {
        if (this._port.isOpen) {
            this._port.close();
        }
    }
}