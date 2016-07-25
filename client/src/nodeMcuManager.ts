import * as nodemcu from "nodemcu-tool";
import { window } from "vscode";
import * as path from "path";

export function uploadFile(device: string, filename: string) {
    // TODO: NodeMcu's default uart settings is 115200. Need to implement baudrate change function
    let connector = new nodemcu.Connector(device, 115200);

    connector.connect((err, deviceInfo) => {
        if (err) {
            window.showErrorMessage("NodeMCU connection error: " + err);
            connector.disconnect();
        }
        else {
            window.showInformationMessage("NodeMCU device connected: " + deviceInfo);

            connector.upload(filename, path.basename(filename), { optimize: true }, (err, data) => {
                if (err) {
                    window.showErrorMessage("NodeMCU upload error: " + err);
                }
                else {
                    window.showInformationMessage("NodeMCU upload has completed");
                }

                connector.disconnect();
            }, (current, total) => {
                window.setStatusBarMessage("Upload completed: %" + Math.trunc(current / total * 100));
            });
        }
    });
}

export function findDevice(cb: any): void {
    let connector = new nodemcu.Connector("", 9600);

    // serialport module cannot detect vendor id on windows so we should get all com devices and filtered by pnpid
    let osIsWindows = process.platform == "win32";

    connector.deviceInfo(osIsWindows, (err, devices) => {
        if (err) {
            window.showErrorMessage('Serial device connection error: ' + err);
        } else {
            if (osIsWindows)
            {
                devices = devices.filter(function(device) {
                    return device.pnpId.toString().includes("VID_1A86") || device.pnpId.toString().includes("VID_10C4");
                });
            }

            if (devices.length == 0) {
                window.showErrorMessage('No Connected Devices found');
            } else if (devices.length > 1) {
                // TODO: Display selection popup
                window.showErrorMessage("Many devices found. Connect only once");
            }
            else {
                window.showInformationMessage('Device found at: ' + devices[0].comName);
                cb(devices[0].comName);
            }
        }
    });
}

