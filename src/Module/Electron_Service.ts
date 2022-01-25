declare var System;
// let remote = window['System']._nodeRequire('electron').remote;
// const {ipcRenderer} = System._nodeRequire('electron');
// let evtVar = System._nodeRequire('./backend/others/EventVariable');
// let funcVar = System._nodeRequire('./backend/others/FunctionVariable');
// let env = System._nodeRequire('./backend/others/env');
import { Component } from '@angular/core';
// @Component({
//     selector: 'sm-app',
//     templateUrl : './components/app.component.html',
//     styleUrls: [],
//     providers: [protocolService]
// })
export class Electron_Service{
    protocol: any;
    static instance=undefined;
    constructor() {
        //this.protocol = remote.getGlobal('AppProtocol');

        Electron_Service.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c GetAppService_err','background: red; color: white');
        }
    }
    zoomApplication() {
        // var window = remote.BrowserWindow.getFocusedWindow();
        // window.unmaximize();
        // console.log('zoomApplication:');

    }
    quitApplication() {
        // var window = remote.BrowserWindow.getFocusedWindow();
        // window.hide();
        // console.log('quitApplication:');
    }

    public RunSetFunction(obj: any) {
        var _this = this;
        return new Promise(function (resolve, reject) {
           //var Obj1 = { Type: obj.Type, Func: obj.Func, Param: obj.Param , SN: obj.SN};
           //return _this.protocol.RunFunction(Obj1, (err, data) => { 
              //callback(err); 
              resolve();
              // console.log('RunSetFunction2',obj);
              // console.log('RunSetFunction2',err);
              // console.log('RunSetFunction2',data);
           //});
        });
     }
  

}