/* @brief Macromodule.
  * @author G-spy Louis
*/
import { Injectable, ApplicationRef } from '@angular/core'
import { CommonService } from './CommonService'
import { AppSettingService} from './AppSettingService';
declare var require: any;
import { KeyMapping,AllFunctionMapping } from './SupportData'
let AppDB = require('./AppDB');
@Injectable()
export class MacroService {
    dbService = AppDB.getInstance();
    nowMacroName = ''
    getAppService=AppSettingService.getInstance();
    constructor(
    ) {
        console.log('MacroService_GetAppService.instance',AppSettingService.instance)
        this.getMacroFromDB()
    }
    macroSelectData: any = [];
    nowMacroSelect: any
    macroTypeSelectData: any = [
        { name: 'No Repeat', value: 0, translate: 'NoRepeat' },
        { name: 'Toggle', value: 1, translate: 'Toggle' },
        { name: 'Repeat While holding', value: 2, translate: 'WhilePressed' },
    ]
    macrotypeSelect: any
    /**
     * get Macro Data from DB
     */
    getMacroFromDB() {
        return new Promise((resolve, reject) => {
            let Temp = []
            Temp.push(this.defaultModule());
            Temp[0].name = this.getTranslate('NewMacro');
            
            this.dbService.getMacro().then((data: any) => {
                data = this.ArraySort(JSON.parse(JSON.stringify(data)), 'value')
                for (let i = 0; i < data.length; i++) {
                    var tempObj = this.defaultModule();
                    tempObj.name = data[i].name,
                    tempObj.value = data[i].value,
                    tempObj.m_Identifier = data[i].m_Identifier,
                    tempObj.content = data[i].content,
                    Temp.push(tempObj)
                }
                this.macroSelectData = Temp
                this.nowMacroSelect = this.macroSelectData[1]
                console.log('getMacroFromDB',Temp,this.nowMacroSelect);

                this.nowMacroName = this.nowMacroSelect.name;
                resolve()
            })
        })
    }
	/**
	 * 排列Array順序
	 * @param array 
	 * @param key 
	 */
    ArraySort(array, key) {
        return array.sort(function(a, b) {
            var x = a[key];
            var y = b[key];x
            return x - y;
        });
    }
    /**
     * Re Sort Array
     */
    reArraySortData(){
        CommonService.getInstance().ArraySort(this.macroSelectData, 'value')
    }

    /**
     * get Macro from Id
     */
    getMacroFromIdentifier(){
        var Target = this.macroSelectData.find((x) => x.value == this.nowMacroSelect.value)
        if(Target==undefined){
        //console.error('this.nowMacroSelect.m_Identifier', this.nowMacroSelect.m_Identifier);
        alert('this.nowMacroSelect.m_Identifier='+this.nowMacroSelect.m_Identifier);
        }
        console.log('getMacroFromIdentifier', Target);
        return Target
    }

    /**
     * get Macro RepeatType
     */
    get_RepeatType(){
        return this.macrotypeSelect.value
    }

    /**
     * get Translate name
     * @param SearchName 
     */
    getTranslate(SearchName) {
        //console.log('getTranslate',this.translate.get(SearchName)['value']);
        return SearchName;
        
    }

    /**
     * get Compare Macro Name
     */
    getCompareMacroName(Searchm_Identifier) {
        var target = this.macroSelectData.find((x) => x.m_Identifier == Searchm_Identifier)
        if(target==undefined){
        console.error('getCompareMacroName_Error',Searchm_Identifier)
        return "";
        }
        return target.name
    }

    /**
     * set Macro TypeValue
     */
    setMacroTypeValue(Searchm_value) {
        var target = this.macroTypeSelectData.find((x) => x.value == Searchm_value);
        if(target==undefined){
        console.error('setMacroTypeValue_Error',Searchm_value);
        return;
        }
        console.log('setMacroTypeValue',Searchm_value,target);
        this.macrotypeSelect=target;
    }

    /**
     * set Macro SelectValue
     */
    setMacroSelectValue(Searchm_value) {
        var target = this.macroSelectData.find((x) => x.value == Searchm_value);
        if(target==undefined){
        console.error('setCompareMacroSelect_Error',Searchm_value);
        return;
        }
        console.log('setCompareMacroSelect',Searchm_value,target);
        this.nowMacroSelect=target;
        this.nowMacroName= this.nowMacroSelect.name;
    }
    
    /**
     * Register for events when the macro changes
     * 
     */
    macrotypeSelectChange(Searchm_value) {

    }

    /**
     * Default Data Module
     */
    defaultModule(type = '') {
        var T = {
            name:'NewMacro',
            value:0,
            m_Identifier:'',
            content:[],
        }
        return T
    }
    /**
     * setLanguageName
     */
    setLanguageName(){
        this.macroSelectData[0].name =this.getTranslate('NewMacro');
        var data=this.macroTypeSelectData;
        for (let index = 0; index < data.length; index++) {
           data[index].name=this.getTranslate(data[index].translate);
        }
    }

    /**
     * Add New Macro
     */
    AddNewMacro() {
        return new Promise((resolve, reject) => {
            let i = 1
            let data = {
                name: 'Macro 1',
                content: [],
            }
            let TempName = data.name
            while (1) {
                let flag = this.macroSelectData.findIndex((x) => x.name == TempName)
                if (flag != -1) {
                    TempName = data.name + '-' + i
                    i++
                } else {
                    data.name = TempName
                    break
                }
            }
            var tempObj = this.defaultModule();
            tempObj.name = data.name;
            tempObj.value = this.macroSelectData[this.macroSelectData.length - 1].value + 1;
            tempObj.m_Identifier =String(new Date().getTime());
            tempObj.content = data.content;
            this.macroSelectData.push(tempObj);
            this.macroSelectData = JSON.parse(JSON.stringify(this.macroSelectData));
            this.nowMacroSelect = this.macroSelectData[this.macroSelectData.length - 1]
            this.dbService.insertMacro(tempObj).then(() => {
                resolve()
            })
            console.log('MacroService_AddNewMacro', this)
        })
    }

    /**
     * delete Macro
     */
    deletMacro() {
        return new Promise((resolve, reject) => {
            if (this.macroSelectData.length > 2) {
                console.log('deletMacro',  this.nowMacroSelect.value);
                CommonService.getInstance().delayDialog('main-app', 500000);
               // this.getMacroFromIdentifier()
                this.dbService.DeleteMacro(this.nowMacroSelect.value).then(() => {

                    let TempArray = JSON.parse(JSON.stringify(this.macroSelectData))
                    let index = this.macroSelectData.findIndex((x) => x.value == this.nowMacroSelect.value)
                    TempArray.splice(index, 1)
                    this.macroSelectData = TempArray
                    this.nowMacroSelect = this.macroSelectData[
                        this.macroSelectData.length - 1
                    ]
                    this.nowMacroName = this.nowMacroSelect.name
                    CommonService.getInstance().CloseDialog();

                    resolve()
                })
            }
        })
    }

    /**
     * Update Marco Data to DB
     */
    UpdateMacro(macroName,macroData) {
        this.getMacroFromIdentifier().name = macroName;
        this.getMacroFromIdentifier().content = macroData;
        this.nowMacroName = macroName;
        console.log('UpdateMacro_CurrentMacro', this.getMacroFromIdentifier())
        this.dbService.updateMacro(this.getMacroFromIdentifier().value, this.getMacroFromIdentifier()).then(() => {
        })
    }

    /**
     * set Macro SelectData
     */
    setMacroSelectData (value) {
        let MacroIndex = this.macroSelectData.findIndex(
            (x) => x.value == value
        )
        if (MacroIndex != -1) {
            this.nowMacroSelect = this.macroSelectData[MacroIndex]
            this.nowMacroName = this.nowMacroSelect.name
        }
    }

    /**
     * set MacroTypeData
     */
    setMacroTypeData (value) {
        let MacroTypeIndex = this.macroTypeSelectData.findIndex(
            (x) => x.value == value
        )
        if (MacroTypeIndex != -1) {
            this.macrotypeSelect = this.macroTypeSelectData[MacroTypeIndex]
        }
    }

    /**
     * Find the data in the specified field exists
     */
    find_Data_Exist(field,value){
        var Target = this.macroSelectData.find((x) => x[field] == value)
        if(Target==undefined){
            console.log('find_Data_Exist_fail',field,value);
        return false;
        }
        else{
            return true;
        }
    }

    /**
     * Find the specified field data
     */
    find_Data(field,value){
        var Target = this.macroSelectData.find((x) => x[field] == value)      
        if(Target==undefined){
        console.log('find_Data_fail',field,value);
        return Target; 
        }
        else{
            return Target;        
        }

    }

    /**
     *get NotRepeatData
     */
    getNotRepeatData(macroData) {
        var TempName = macroData.name
        let i = 1
        while (1) {
            let flag = this.find_Data_Exist('name', TempName);
            if (flag) {
                TempName = macroData.name + '-' + i
                i++
            } else {
                macroData.name = TempName
                break
            }
        }
        var temp_id = macroData.m_Identifier;
        while (1) {
            let flag = this.find_Data_Exist('m_Identifier', temp_id);
            if (flag) {
                temp_id = String(new Date().getTime());
            }
            else {
                macroData.m_Identifier = temp_id;
                break
            }
        }
        var temp_value = macroData.value;
        while (1) {
            let flag = this.find_Data_Exist('value', temp_value);
            if (flag) {
                temp_value +=1;
            }
            else {
                macroData.value = temp_value;
                break
            }
        }
        this.macroSelectData.push(macroData);
        return macroData

    }

    setMacroPageEnter(){
        this.nowMacroSelect = this.macroSelectData[1]//default set  
        this.nowMacroName = this.nowMacroSelect.name;
        this.macrotypeSelect = this.macroTypeSelectData[0]//default set  
        console.log('setMacroPageEnter', this.nowMacroSelect)
        console.log('setMacroPageEnter', this.macroSelectData)

    }

    macroNameInputBlur(){
        //var target = document.getElementById('setMacroName')
        //target.addEventListener('blur', () => {
        //console.log('target.addEventListener', JSON.stringify(this.nowMacroSelect));
            if(this.nowMacroName==""){
                this.nowMacroName=" "
            }
            let TempName = this.nowMacroName;
            let i = 1
            while (1) {
                let flag = this.macroSelectData.findIndex((x) => x.name == TempName)
                if (flag != -1&&TempName!=this.nowMacroSelect.name){
                    TempName = this.nowMacroName + '-' + i
                    i++
                } else {
                    this.nowMacroName = TempName;
                    break
                }
            }
            this.getMacroFromIdentifier().name = this.nowMacroName;
            console.log('setMacroPageEnter_UpdateMacro_CurrentMacro',JSON.stringify(this.getMacroFromIdentifier()));
            this.nowMacroSelect=JSON.parse(JSON.stringify(this.getMacroFromIdentifier()));
            this.macroSelectData = JSON.parse(JSON.stringify(this.macroSelectData));
            this.UpdateMacro(this.getMacroFromIdentifier().name,this.getMacroFromIdentifier().content);
       // //})
    }

    /**
     * macro select
     */
    setMacroSelectChange() {
        if (this.nowMacroSelect.value == 0) {//New Macro
            this.AddNewMacro().then(() => {
                this.nowMacroName = this.nowMacroSelect.name
            })
        } else {
            this.nowMacroName = this.nowMacroSelect.name
        }
    }

}
