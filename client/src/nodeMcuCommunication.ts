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

export class NodeMcuCommunicator {
    private _port: serialport.SerialPort;
    private _baudrate = 9600; 

    constructor(portname: string) {
        let options = {
            autoOpen: false,
            baudRate: this._baudrate,
            parser: serialport.parsers.readline("\r\n")
        };

        this._port = new serialport.SerialPort(portname, options);
    }

    public static detectPort(callback: (error: string, ports: PortInformation[]) => void): void {
        serialport.list((error: string, ports: serialport.portConfig[]) => {
            if (error != null) {
                callback(error, null);
            }
            else {
                let filteredPorts = ports.filter((port: serialport.portConfig) => {
                    return port.pnpId.includes("VID_1A86") || port.pnpId.includes("VID_10C4");
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
            this.write("uart.setup(0,9600,8,0,1,1)");
            callback();
        });
    }

    public registerOnError(callback: (error: string) => void): void {
        this._port.on("error", callback);
    }

    public registerOnDataReceived(callback: (data: string) => void): void {
        this._port.on("data", callback);
    }

    public write(data: string) {
        if (this._port.isOpen) {
            this._port.write(data + "\r\n", () => {
                this._port.drain();
            });
        }
    }

    public uploadFile(data: string[], remoteFilename: string) {
        this.write('file.remove("' + remoteFilename + '");');
        this.write('file.open("' + remoteFilename + '", "w+");');
        this.write("w=file.writeline;");

        data.forEach(line => {
            this.write("w([==[" + line + "]==]);");
        });

        this.write('file.close();');

        this.write("dofile('" + remoteFilename + "')");
    }

    public close(): void {
        if (this._port.isOpen) {
            this._port.close();
        }
    }
}