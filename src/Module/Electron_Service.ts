declare var System;
let NeDB;
let evtVar;
let funcVar;
let env;
let electron_Instance;
try {
    electron_Instance = window['System']._nodeRequire('electron').remote;
    const { ipcRenderer } = System._nodeRequire('electron');
    evtVar = System._nodeRequire('./backend/others/EventVariable').EventTypes;
    funcVar= System._nodeRequire('./backend/others/FunctionVariable');
    env = System._nodeRequire('./backend/others/env');
    NeDB = window['System']._nodeRequire('electron').remote.getGlobal('AppProtocol').deviceService.nedbObj; 
}
catch (error) {
    //console.log('%c _nodeRequire_err','background: red; color: white',error);
}
export class Electron_Service{
    protocol: any;
    static instance=undefined;
    constructor() {
        try {
            this.protocol = electron_Instance.getGlobal('AppProtocol');
        } 
        catch (error) {
            console.log('%c protocol','background: red; color: white',this.protocol);
        }

        Electron_Service.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c GetAppService_err','background: red; color: white');
        }
    }
    
    specifyTheDesiredFunction(fNname=""){
        console.log('%c specifyTheDesiredFunction','background: red; color: white',fNname);
        if(this.protocol!=undefined){
            this[fNname]();
        }
    }

    zoomApplication() {
        var window = electron_Instance.BrowserWindow.getFocusedWindow();
        window.minimize();
    }
    quitApplication() {
        var window = electron_Instance.BrowserWindow.getFocusedWindow();
        window.hide();
    }
    initializeUIDone(){
        let DataContent = {
            Type: funcVar.FuncType.System,
            Func: funcVar.FuncName.InitializeUIDone,
            Param: ""
        }
        this.RunSetFunction(DataContent).then((data) => {//=>to AppProtocol=>electron.js
        });
    }





    getElectron_Instance(){
        return electron_Instance;
    }
    get_NeDB(){
        return NeDB;
    }
    getFuncVar(){
        return funcVar;
    }
    getEvtVar(){
        return evtVar;
    }
    inTheElectronFramework(){
        if(this.protocol!=undefined){
           return true;
        }
        else{
          return false;
        }
    }


    public RunSetFunction(obj: any) {
        var _this = this;
        return new Promise(function (resolve, reject) {
           var Obj1 = { Type: obj.Type, Func: obj.Func, Param: obj.Param , SN: obj.SN};
           return _this.protocol.RunFunction(Obj1, (err, data) => { 
              //callback(err); 
              resolve(err);
              // console.log('RunSetFunction2',obj);
              // console.log('RunSetFunction2',err);
              // console.log('RunSetFunction2',data);
           });
        });
     }
  

}