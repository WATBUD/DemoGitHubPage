import { Injectable } from '@angular/core';
declare var require: any
//let electron_Instance = require('./AppDB'); 
//let i18n_File = require("./AppDB");
// import { HttpService } from '../../services/device/index';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
//import { Observable } from 'rxjs/Rx';
import { Observable} from 'rxjs'
import { FirewareManager } from './FirewareManager';
//let Setting = require("./Setting");
import { AppSettingService } from './AppSettingService';

@Injectable()
export class DeviceService{
    pluginNoDeviceData =[];
    NoDeviceindex=0;
    pluginDeviceData=[];
    AppSettingService= AppSettingService.getInstance();
    // private http:Http;
    nowDeviceName="";
    currentDevice = {
        "DeviceId": 0,
        "ModelType":2,
        "SN": '0x1EA70x9018',
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
    FWManager=new FirewareManager();
    static instance=undefined;
    //private http:Http
    constructor(private http:Http
    ) {
        DeviceService.instance=this;
        console.log('%c DeviceService_http','background: red; color: white',this.http);
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

    getDevicePageindex(){
      //console.log('%c getDevicePageindex','background: red; color: white', this.pluginNoDeviceData[this.NoDeviceindex]);
      if(this.pluginNoDeviceData.length<1){
        return [];
      }
      else{
        return this.pluginNoDeviceData[this.NoDeviceindex];
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
        // return new Promise((resolve,reject) => {
        //     let oldPluginDeviceData = JSON.parse(JSON.stringify((this.pluginDeviceData)));
        //     let AllDeviceData = [];
        //     var data=this.dbService.AllDBtempData.getPluginDevice;
        //         //var data=JSON.parse(JSON.stringify(temp_data));
        //         console.log('dbservice_getPluginDevice()',data);
        //         for(let i of data.Mouse){
        //             AllDeviceData.push(i);
        //         }
        //         for(let i of data.Keyboard){
        //             AllDeviceData.push(i);
        //         }
        //         for(let i of data.Headset){
        //             AllDeviceData.push(i);  
        //         }
        //         let count = 1;
        //         var tempindex=0;
        //         // this.dbService.getAllDevice().then((getAllDeviceData) => {
        //         //     var newPluginData = JSON.parse(JSON.stringify(AllDeviceData));
        //         //     var getAllDeviceData=JSON.parse(JSON.stringify(getAllDeviceData));
        //         //     console.log(' this.dbservice.getAllDevice().then',getAllDeviceData)
        //         //     this.pluginNoDeviceData =[[true,true,true],[true,true,true]];
        //         //     for(let i = 0; i < newPluginData.length; i++) {
        //         //         let index = getAllDeviceData.findIndex(x => x.SN == newPluginData[i].SN)
        //         //         let oldDataCheck = oldPluginDeviceData.findIndex(x => x.SN == newPluginData[i].SN)
        //         //         if(index != -1 && oldDataCheck == -1)//舊裝置存在 舊Plugin不存在
        //         //             newPluginData[i].deviceData = getAllDeviceData[index];
        //         //         else if(oldDataCheck != -1){// 舊Plugin存在
        //         //             oldPluginDeviceData[oldDataCheck].version=newPluginData[i].version;
        //         //             newPluginData[i] = oldPluginDeviceData[oldDataCheck];
        //         //         }
        //         //         if(count % 3 == 0) {
        //         //             count=1;
        //         //             tempindex+=1;
        //         //         }
        //         //         this.pluginNoDeviceData[tempindex][count]=false;
        //         //         count++;
        //         //     }
        //         //     this.pluginDeviceData = newPluginData;
        //         //     console.log('%c newPluginData','background: red; color: white', newPluginData);

        //         //     console.log('%c pluginDeviceData','background: red; color: white', this.pluginDeviceData);

        //         //     // console.log('%c pluginNoDeviceData','background: red; color: white', this.pluginNoDeviceData);
        //         //     resolve();
        //         // })
        // });
    }


    /**
     * Click check for update buttom
     */
    CheckforUpdates() {
        if(this.FWManager.update_UI_Status==true){
            return;
        }
        this.FWManager.FwServerData = [];
        this.FWManager.chooseDeviceIndex=0;
        // this.getAssignURL_json(Setting.getUpdateUrl()).subscribe((data) => {
        //     console.log('getAssignURL_json_subscribe', data,this.pluginDeviceData);
        //     //this.FWManager.FwServerData[0].newVersion=data.AppSetting.version;
        //     for (let index = 0; index < this.pluginDeviceData.length; index++) {
        //         const deviceTarget = this.pluginDeviceData[index];
        //         data.Mouse.forEach(element => {
        //             if (element.SN == deviceTarget.SN) {
        //                 if(this.FWManager.versionCompare(element.version_Wired,deviceTarget.version_Wired,2)==1){
        //                     element.name=deviceTarget.devicename;
        //                     element.battery=deviceTarget.deviceData.battery;
        //                     this.FWManager.FwServerData.push(element);
        //                     return;
        //                 }
        //                 if(this.FWManager.versionCompare(element.version_Wireless,deviceTarget.version_Wireless,2)==1){
        //                     element.name=deviceTarget.devicename;
        //                     element.battery=deviceTarget.deviceData.battery;
        //                     this.FWManager.FwServerData.push(element);
        //                     return;
        //                 }                   
        //             }       
        //         });
        //         data.Keyboard.forEach(element => {
        //             if (element.SN == deviceTarget.SN) {
        //                 if(this.FWManager.versionCompare(element.version_Wired,deviceTarget.version_Wired,2)==1){
        //                     element.name=deviceTarget.devicename;
        //                     this.FWManager.FwServerData.push(element);
        //                     return;
        //                 }
        //             }                         
        //         });
        //     }
            
        //     if(this.FWManager.versionCompare(data.AppSetting.version,this.AppSettingService.getAppSetting().version,2)==1){

        //         this.FWManager.FwServerData.push(data.AppSetting);
        //      }       
        //     if(this.FWManager.FwServerData.length>0){
        //         console.log('getAssignURL_json_FwServerData',this.FWManager.FwServerData);
        //         //this.getAppService.hasUpdateTip=true;
        //         this.FWManager.setUpdateUIStatus("CHECK_DOWNLOAD");
        //     }
        //     else{
        //         this.FWManager.setUpdateUIStatus("");
        //     }
        // },(error) => {
        // console.error('getAssignURL_json_subscribe資料錯誤');
        // })
    }



    /**
     * Click Retry Firmware Update
     */
    CheckForceUpgrade() {
        this.FWManager.forceUpgradeData=[];
        this.FWManager.forceUpgradeIndex=0;
        // this.getAssignURL_json(Setting.getUpdateUrl()).subscribe((data) => {
        //     console.log('CheckForceUpgrade', data,this.pluginDeviceData);
        //     //this.FWManager.FwServerData[0].newVersion=data.AppSetting.version;
        //     for (let index = 0; index < this.pluginDeviceData.length; index++) {
        //         const deviceTarget = this.pluginDeviceData[index];
        //         data.Mouse.forEach(element => {             
        //             if (element.SN == deviceTarget.SN) {
        //                 element.name=deviceTarget.devicename;
        //                 element.battery=deviceTarget.deviceData.battery;
        //                 this.FWManager.forceUpgradeData.push(element);                 
        //             }       
        //         });
        //         data.Keyboard.forEach(element => {
        //             if (element.SN == deviceTarget.SN) {
        //                 element.name=deviceTarget.devicename;
        //                 element.battery=deviceTarget.deviceData.battery;
        //                 this.FWManager.forceUpgradeData.push(element);  
        //             }                         
        //         });
        //     }
        //     if(this.FWManager.forceUpgradeData.length>0){
        //         console.log('forceUpgradeData',this.FWManager.forceUpgradeData);
        //         this.FWManager.setUpdateUIStatus("Check_ForceUpgrade");
        //     }
        //     else{
        //         this.FWManager.setUpdateUIStatus("");
        //     }
        // },(error) => {
        // console.error('getAssignURL_json_subscribe資料錯誤');
        // })
    }

    private msTimeout: number=3000; 
    /**
     * get json data from url
     * @param URL 
     */
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
