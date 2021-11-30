import { Injectable, EventEmitter } from '@angular/core';
//let electron_Instance = window['System']._nodeRequire('electron').remote; 

@Injectable()
export class GetAppService{
    //dbService = electron_Instance.getGlobal('AppProtocol').deviceService.nedbObj
    static instance=undefined;
    constructor(
    ) {
        console.log('%c GetAppService_constructor','background: blue; color: red');

        GetAppService.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new GetAppService();
            console.log('%c GetAppService_getInstance','background: blue; color: red');
            return this.instance;
        }
    }
    hasUpdateTip=false;
    AppSetingObj={"language":"en","version":"1.1.24","exportVersion":"1","remember":0,"uuid":"","startup":true,"minimize":false,"update":true,"sleep":false,"sleeptime":10,"tooltip":true,"_id":"5Cyd2Zj4bnesrIGK"};

    //updateAppSettingData: EventEmitter<string> = new EventEmitter();

    
    /**
     * get Appsetting Data from DB
     */
    getAppsettingFormDB() {
        // this.dbService.getAppSetting().then((data) => {
        //     this.AppSetingObj = data[0];
        //     this.updateAppSettingData.emit('updateAppSettingData')
        // })
    }

    /**
     * get AppSetting
     */
    getAppSetting() {
        //console.log('getAppSetting',this.AppSetingObj);
        return this.AppSetingObj;
    }

    /**
     * Update Appsetting Data to DB
     */
    updateAppsetting() {
        // if(this.AppSetingObj != undefined)
        //     this.dbService.saveAppSetting(this.AppSetingObj).then(()=>{});
    }
}