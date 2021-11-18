import { Injectable } from '@angular/core';

@Injectable()
export class AppSettingService{
    AppSetingObj={
        language:"en",
        version:"1.0.0"
    }
    static instance=undefined;
    constructor(
    ) {
        AppSettingService.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c GetAppService_err','background: red; color: white');
        }
    }


}