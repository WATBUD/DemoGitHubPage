//1暫定為真值
import { i18n_Localization } from './i18n_Localization';
let i18n_File=i18n_Localization;
var lostList=[];
export class i18nManager {
    previousLangindex=0;
    onUsingLangindex=0;
    SW_Version='1.0.0.0';
    autoStart=[true,true];//0為狀態假值 1為真值
    recovery=[false,false];//0為狀態假值 1為真值
    //currentLanguagesTxt ='EN' //DE德國
    langList=['EN','CH','CN'];
    constructor(){
        i18nManager.instance=this;
        console.log('%c i18n_File','background: blue; color: red',i18n_File);
    }

    static instance=undefined;
    static getInstance() {
        if (this.instance) {
            return this.instance;
		} 
		else{
            this.instance = new i18nManager();
            console.log('%c i18nManager_getInstance','background: blue; color: red');
            return this.instance;
		}

		
    }
     
    ImportClassData(InputData) {
        console.log("Import_i18nManager_ClassData", InputData);
        var arr = Object.keys(this);
        console.log("Object.keys", arr);
        try {
            for (let index = 0; index < arr.length; index++) {
                if (arr[index] != "langList") {
                 this[arr[index]] = InputData[arr[index]];
                }
            }
        } catch (error) {
            alert('Import_i18nManager_ClassData_Error')
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


    getTarget(keyName){
        if(i18n_File[keyName]!=undefined){
        var T=i18n_File[keyName][this.geti18nType()];
        //console.log('i18n_Localization[keyName]',keyName,this.onUsingLangindex,T,this.langList);
        return T;
        }
        if(lostList.find(e=>e==keyName)){
        }
        else{
            console.log('Lost_i18n_Localization[keyName]',keyName);
        }
        lostList.push(keyName);

        return keyName;
    }

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


