import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//let electron_Instance = require("electron").remote;
import { Http, Response, Headers, RequestOptions } from '@angular/http'

let globalDB;
let electron_Instance; 

try {
    globalDB = window['System']._nodeRequire('./backend/dbapi/AppDB.js');
    electron_Instance = window['System']._nodeRequire('electron').remote; 
}
catch (error) {
    //console.log('%c _nodeRequire_err','background: red; color: white',error);
}

export class DeviceService{
    AppSetingObj={
        language:"en",
        version:"1.0.0"
    }
    pluginDeviceData=[];
    dbServiceBackEnd;
    dbService;
    nowDeviceName="";
    currentDevice = {
        "DeviceId": 0,
        "ModelType":2,
        "SN": '0x04F20x2159',
        "StateID": -1,
        "deviceData": {},
        "devicename": "Perixx Ergo Keyboard",
        "pid": ["0x2011", "0x2022"],
        "profile": [{}, {}, {}],
        "version_Wired": "",
        "version": "",
        "version_Wireless": "",
        "vid": ["0x258A", "0x258A"],
    }
    static instance=undefined;
    //private http:Http
    constructor() {
        DeviceService.instance = this;
        try {
            this.dbServiceBackEnd = electron_Instance.getGlobal('AppProtocol').deviceService.nedbObj;
            this.dbService = globalDB.getInstance();
        }
        catch (error) {
            console.log('%c _nodeRequire_err', 'background: red; color: white', error);
        }
        console.log('%c DeviceService_http', 'background: red; color: white');
        // this.getAssignURL_json('https://gloriouscore.nyc3.digitaloceanspaces.com/Glorious_Core/Version.json').subscribe((data) => {
        //     console.log('CheckForceUpgrade', data);
        // },(error) => {
        // console.error('getAssignURL_json_subscribe資料錯誤');
        // })
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c DeviceService_Instance_err','background: red; color: white');
        }
    }

    isThereADeviceBeingPluggedIn() {
        var target = this.pluginDeviceData;
        if(target.length<1){
            return false;
        }
        return true;
    }
    getCurrentDevice(){
            return this.currentDevice;
       
    }

    setCurrentDevice() {
        if (this.pluginDeviceData.length>0) {
            this.currentDevice=this.pluginDeviceData[0];
        }
    }
    getDevice() {
        return new Promise((resolve,reject) => {
            let oldPluginDeviceData = JSON.parse(JSON.stringify((this.pluginDeviceData)));
            let AllDeviceData = [];
            var pluginDBData=this.dbServiceBackEnd.AllDBtempData.getPluginDevice;
            //console.log('dbservice_getPluginDevice()',pluginDBData);
            //var pluginDBData=this.dbService.AllDBtempData.getPluginDevice;
                console.log('dbservice_getPluginDevice()',pluginDBData);
                for(let i of pluginDBData.Mouse){
                    AllDeviceData.push(i);
                }
                for(let i of pluginDBData.Keyboard){
                    AllDeviceData.push(i);
                }
                for(let i of pluginDBData.Headset){
                    AllDeviceData.push(i);  
                }
                let count = 1;
                var tempindex=0;
                this.dbService.getAllDevice().then((data) => {
                    var newPluginData = AllDeviceData;
                    var getAllDeviceData=data;
                    //var getAllDeviceData=JSON.parse(JSON.stringify(this.dbService.AllDBtempData.getDevice));
                    console.log('this.dbservice.getAllDevice().then',getAllDeviceData);

                    for(let i = 0; i < newPluginData.length; i++) {
                        let index = getAllDeviceData.findIndex(x => x.SN == newPluginData[i].SN)
                        let oldDataCheck = oldPluginDeviceData.findIndex(x => x.SN == newPluginData[i].SN)
                        if(index != -1 && oldDataCheck == -1)//舊裝置存在 舊Plugin不存在
                            newPluginData[i].deviceData = getAllDeviceData[index];
                        else if(oldDataCheck != -1){// 舊Plugin存在
                            oldPluginDeviceData[oldDataCheck].version=newPluginData[i].version;
                            newPluginData[i] = oldPluginDeviceData[oldDataCheck];
                        }
                    }
                    this.pluginDeviceData = newPluginData;
                    console.log('%c newPluginData','background: red; color: white', newPluginData);

                    console.log('%c pluginDeviceData','background: red; color: white', this.pluginDeviceData);

                    // console.log('%c pluginNoDeviceData','background: red; color: white', this.pluginNoDeviceData);
                    resolve();
                })
        });
    }


    /**
     * Click check for update buttom
     */
    // CheckforUpdates() {
    //     if(this.FWManager.update_UI_Status==true){
    //         return;
    //     }
    //     this.FWManager.FwServerData = [];
    //     this.FWManager.chooseDeviceIndex=0;
    //     this.getAssignURL_json(Setting.getUpdateUrl()).subscribe((data) => {
    //         console.log('getAssignURL_json_subscribe', data,this.pluginDeviceData);
    //         //this.FWManager.FwServerData[0].newVersion=data.AppSetting.version;
    //         for (let index = 0; index < this.pluginDeviceData.length; index++) {
    //             const deviceTarget = this.pluginDeviceData[index];
    //             data.Mouse.forEach(element => {
    //                 if (element.SN == deviceTarget.SN) {
    //                     if(this.FWManager.versionCompare(element.version_Wired,deviceTarget.version_Wired,2)==1){
    //                         element.name=deviceTarget.devicename;
    //                         element.battery=deviceTarget.deviceData.battery;
    //                         this.FWManager.FwServerData.push(element);
    //                         return;
    //                     }
    //                     if(this.FWManager.versionCompare(element.version_Wireless,deviceTarget.version_Wireless,2)==1){
    //                         element.name=deviceTarget.devicename;
    //                         element.battery=deviceTarget.deviceData.battery;
    //                         this.FWManager.FwServerData.push(element);
    //                         return;
    //                     }                   
    //                 }       
    //             });
    //             data.Keyboard.forEach(element => {
    //                 if (element.SN == deviceTarget.SN) {
    //                     if(this.FWManager.versionCompare(element.version_Wired,deviceTarget.version_Wired,2)==1){
    //                         element.name=deviceTarget.devicename;
    //                         this.FWManager.FwServerData.push(element);
    //                         return;
    //                     }
    //                 }                         
    //             });
    //         }
            
    //         if(this.FWManager.versionCompare(data.AppSetting.version,this.AppSetingObj.version,2)==1){

    //             this.FWManager.FwServerData.push(data.AppSetting);
    //          }       
    //         if(this.FWManager.FwServerData.length>0){
    //             console.log('getAssignURL_json_FwServerData',this.FWManager.FwServerData);
    //             //this.getAppService.hasUpdateTip=true;
    //             this.FWManager.setUpdateUIStatus("CHECK_DOWNLOAD");
    //         }
    //         else{
    //             this.FWManager.setUpdateUIStatus("");
    //         }
    //     },(error) => {
    //     console.error('getAssignURL_json_subscribe資料錯誤');
    //     })
    // }





    // private msTimeout: number=3000; 
    // /**
    //  * get json data from url
    //  * @param URL 
    //  */
    // getAssignURL_json(URL) :Observable<any>{
    //     console.log('getAssignURL_json_URL',URL);
	// 	return this.http.get(URL)
    //     .timeout(this.msTimeout)
    //     .map((res: Response) => {
    //         console.log('getAssignURL_json_map',res);
    //         let resJson = res.json();
    //         return resJson;
    //     })
    //     .catch((error: Response) => {
    //         console.log('getAssignURL_json_error',error);
    //         return Observable.throw(error.json());
    //     });     
	// } 
    

}



export class FirewareManager {
    chooseDeviceIndex=0;
    FwServerData=[];
    forceUpgradeData=[];
    forceUpgradeIndex=0;
    updatingStatus="";
    updatingPercentage=0;
    firmwareHasANewUpdate=true;

    /*
    * getNowTargetData
    */
    getTarget(){
       if(this.FwServerData.length>0)
       return this.FwServerData[this.chooseDeviceIndex];
    }

    /*
    * getforceTarget
    */
    getforceTarget(){
        return this.forceUpgradeData[this.forceUpgradeIndex];
     }

    /*
    * reset Var
    */
    reset(){
        this.chooseDeviceIndex=0;
        this.FwServerData=[];
    }

    /*
    * checkHasUpdate
    */
    checkHasUpdate(){
        for (let index = 0; index < this.FwServerData.length; index++) {
            if(!this.FwServerData[index].tryToUpdate){     
                return "YES"
            } 
        }
        return "NO"
    }
    startUpdateFirmwareData() {
        if (this.firmwareHasANewUpdate) {
            this.updatingPercentage = 0;
            this.updatingStatus = 'updating';
            this.firmwareHasANewUpdate = false;
            var aaa = setInterval(() => {

                if (this.updatingPercentage < 100) {
                    this.updatingPercentage += 1;
                }
                else {
                    clearInterval(aaa);
                    this.updatingStatus = 'updateCompleted';
                }
            }, 50)
        }
    }



    /**
    *compare version
    * @param version number:A version
    * @param targetVersion number:B version
    * @param exponent number:exponent 
    * return result:
    * 0: is equal to
    * 1: is more than
    * -1: is less than
    */
    versionCompare(version, targetVersion, exponent) {
        var getVersionNumber, length;
        exponent = exponent || 2;
        if (!version || !targetVersion) {
            console.log('Need two versions to compare!',version,targetVersion);
            throw new Error('Need two versions to compare!');
        }
        if (version === targetVersion) {
            return 0;
        }
        length = Math.max(version.split('.').length, targetVersion.split('.').length);
        let self = this;
        getVersionNumber = (function (length, exponent) {
            return function (version) {
                return self.versionToNumber(version, length, exponent);
            };
        })(length, exponent);
        version = getVersionNumber(version);
        targetVersion = getVersionNumber(targetVersion);
        return version > targetVersion ? 1 : (version < targetVersion ? -1 : 0);
    }

    /*
    * format version
    */
    versionToNumber(version, length, exponent) {
        let arr;
        if (arguments.length < 3) {
            return 0;
        }
        arr = version.split('.');
        version = 0;
        arr.forEach(function (value, index, array) {
            version += value * Math.pow(10, length * exponent - 1);
            length--;
        });
        return version;
    }
    /**
    * Type option
    * 1.CHECK_DOWNLOAD/Downloading/updating/updateCompleted/FailMessage/updateCompleted
    * 
    */
    contentUIStatus="";
    setUpdateUIStatus(TypeOption){
        if(TypeOption==""){
            this.setUpdatingStatus(false);
        }
        else{
            this.setUpdatingStatus(true);
        }
        if(this.checkHasUpdate()=="NO"){
            //this.getAppService.hasUpdateTip=false;
        }
        this.contentUIStatus=TypeOption;
        console.log('this.setContentUI',this.contentUIStatus)

    }
    setUpdatingStatus(value){
        this.updatingStatus=value;
        console.log('this.updatingStatus',this.updatingStatus)
    }
}
