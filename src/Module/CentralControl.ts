declare var System;
declare var require: any
export class CentralControl {
    previousLangindex=0;
    onUsingLangindex=0;
    SW_Version='1.0.0.0';
    autoStart=[true,true];//0為狀態假值 1為真值
    recovery=[false,false];//0為狀態假值 1為真值
    NavVisible=false;
    //currentLanguagesTxt ='EN' //DE德國
    langList=['EN','CH','CN'];
    constructor(){
        CentralControl.instance=this;
    }

    static instance=undefined;
    static getInstance() {
        if (this.instance) {
            return this.instance;
		} 
		else{
            this.instance = new CentralControl();
            console.log('%c CentralControl_getInstance_init','background: blue; color: red');
            return this.instance;
		}

		
    }
     
    ImportClassData(InputData) {
        console.log("Import_CentralControl_ClassData", InputData);
        var arr = Object.keys(this);
        console.log("Object.keys", arr);
        try {
            for (let index = 0; index < arr.length; index++) {
                if (arr[index] != "langList") {
                 this[arr[index]] = InputData[arr[index]];
                }
            }
        } catch (error) {
            alert('Import_CentralControl_ClassData_Error')
        }

    }
    setOnUsingLangindex(setIndex){
        this.previousLangindex=this.onUsingLangindex;
        this.onUsingLangindex=setIndex;
    }
    setlangList(setLangList){
        if(setLangList){
            this.langList=[];
        }
    }
    geti18nType(){
        var target=this.langList[this.onUsingLangindex]
        if(target){
            //console.log('geti18nType',target);
            return target;
        }
        else{
            console.log('geti18nType_null',this.langList,this.onUsingLangindex);
        }
    }


    // getTarget(keyName){
    //     if(i18n_File.i18n_Localization[keyName]!=undefined){
    //     var T=i18n_File.i18n_Localization[keyName][this.geti18nType()];
    //     //console.log('i18n_Localization[keyName]',keyName,this.onUsingLangindex,T,this.langList);
    //     return T;
    //     }
    //     if(lostList.find(e=>e==keyName)){
    //     }
    //     else{
    //         console.log('Lost_i18n_Localization[keyName]',keyName);
    //     }
    //     lostList.push(keyName);

    //     return '';
    // }

    updateSettingValue(){
        this.autoStart[1]=this.autoStart[0];
        this.recovery[1]=this.recovery[0];
    }
    back(){
        this.onUsingLangindex=this.previousLangindex;
        this.autoStart[0]=this.autoStart[1];
        this.recovery[0]=this.recovery[1];
    }

    onOpenSystemSetting(){
        this.previousLangindex=this.onUsingLangindex;
    }

}


