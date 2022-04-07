import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//let electron_Instance = require("electron").remote;
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { FirewareManager } from './FirewareManager';

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
        "devicename": "MODEL O WIRELESS",
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
        DeviceService.instance=this;
        try {
            this.dbServiceBackEnd = electron_Instance.getGlobal('AppProtocol').deviceService.nedbObj;
            this.dbService= globalDB.getInstance();
        }
        catch (error) {
            console.log('%c _nodeRequire_err','background: red; color: white',error);
        }
        console.log('%c DeviceService_http','background: red; color: white');
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


    getCurrentDevice(){
        var target = this.pluginDeviceData;
        //console.log('DeviceService.getCurrentDevice',target);
        try { 
            for (let index = 0; index < target.length; index++) {
                //const element = target[index];&& 
                if (target[index].devicename == this.nowDeviceName) {
                    return target[index];
                }
            }
            return this.currentDevice;
        } catch (error) {
            console.log('%c getCurrentDevice.Error', 'color:rgb(255,75,255,1)', error);
        }
       
    }
    checkDeviceExists(CheckName) {
        var target = this.pluginDeviceData;
        console.log(' DeviceService.checkDeviceExists',target);

        for (let index = 0; index < target.length; index++) {
            if (target[index].devicename == CheckName) {
                this.nowDeviceName=CheckName;
                return true;
            }
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
