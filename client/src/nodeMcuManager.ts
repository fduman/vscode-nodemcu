import * as nodemcu from "nodemcu-tool";
import { window } from "vscode";
import * as path from "path";

export function uploadFile(device: string, filename: string) {
    let connector = new nodemcu.Connector(device, 9600);

    connector.connect((err, deviceInfo) => {
        if (err) {
            window.showErrorMessage("NodeMCU connection error: " + err);
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

    connector.deviceInfo(false, (err, devices) => {
        if (err) {
            window.showErrorMessage('Serial device connection error: ' + err);
        } else {
            if (devices.length == 0) {
                window.showErrorMessage('No Connected Devices found');
            } else if (devices.length > 1) {
                window.showErrorMessage("Many devices found. Connect only once");
            }
            else {
                window.showInformationMessage('Device found at: ' + devices[0].comName);
                cb(devices[0].comName);
            }
        }
    });
}

