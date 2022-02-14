/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardManager:KeyBoardManager Class
 * Processing KeyBoardManager
-----------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core'
declare var require: any;
import { AllFunctionMapping } from './SupportData'
//let AllFunctionMapping = require('./SupportData').AllFunctionMapping;
@Injectable()
export class KeyBoardManager {
    defaultName = '未配置'
    profileindex = 0;
    KeyBoardArray: any
    sideLightSwitch=false;
    maxKayCapNumber: number
    notClickedYet = true;
    profileLayers = [];
    profileLayerIndex = [0, 0, 0];
    layerMaxNumber = 3;
    constructor(inputmax) {
        this.maxKayCapNumber = inputmax
        this.KeyBoardArray = [
            new KeyBoard('PROFILE1', inputmax, 0),
            new KeyBoard('PROFILE2', inputmax, 1),
            new KeyBoard('PROFILE3', inputmax, 2),//profile
        ]
        for (let index = 1; index <= this.KeyBoardArray.length; index++) {
            var tempArr = []
            for (let index2 = 1; index2 <= this.layerMaxNumber; index2++) {
                tempArr.push(
                    new KeyBoard('PROFILE' + index2 * index, inputmax, index2 * index),
                );
            }
            this.profileLayers.push(tempArr);
        }
    }

    /**
     * setALLDefaultKeyArray
     * @param data array:KeyArray
    */
    setALLDefaultKeyArray(data) {
        console.log('setALLDefaultKeyArray', this.profileLayers);
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setTargetDefaultKeyArray(data);
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].setTargetDefaultKeyArray(data);
            }
        }
    }
   /**
     * setALLGlobalValueAssignField
     * @param field any:field;
     * @param value any:value;
    */
    setALLGlobalValueAssignField(field,value) {
        if(value==undefined||field==undefined){
            console.log('%c setALLKeyboardAssignField_lost', 'color:rgb(255,0,0)');
            console.log('field', field);
            console.log('value', value);
            return;
        }
        console.log('setALLDefaultKeyArray', this.profileLayers);
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setGlobalValueAssignField(field,value);
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].setGlobalValueAssignField(field,value);
            }
        }
    }
    /**
     * getNowProfileLayersData
    */
    getNowProfileLayersData() {
        var obj=this.profileLayers[this.profileindex];
        return obj;
    }
    
    /**
     * getProfileLayerIndex
    */
    getProfileLayerIndex(){
       return this.profileLayerIndex[this.profileindex];
    }
   
    /**
     * changeProfileLayer
    */
    changeProfileLayer() {
        var T = this.getProfileLayerIndex();
        if (T < this.layerMaxNumber - 1) {
            T = T + 1;
        }
        else {
            T = 0;
        }
        this.profileLayerIndex[this.profileindex]=T;
        console.log('changeProfileLayer',  this.getProfileLayerIndex());
        console.log('changeProfileLayer_profile', this.getTarget());

    };
    
    /**
     * clearRecordMacroData
     * @param m_id string:MacroDataId
    */
    clearRecordMacroData(m_id = '') {
        //console.log('clearRecordMacroData', targetName)
        var KBMarr = this.KeyBoardArray
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].delete_Find_MacroData(m_id)
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].delete_Find_MacroData(m_id);
            }
        }  
    }

    /**
     * setAllProfileFieldData
     * @param field string:Variable Field
     * @param obj obj:Variable Field Data
    */
    setAllProfileFieldData(field,obj){
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index][field] = obj;
            //console.log('KBMarr[index][field]', KBMarr[index][field])
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2][field]=obj;
            }
        }
    }

    /**
     * getTarget
    */
    getTarget() {
        if(this.layerMaxNumber>0){
            return this.profileLayers[this.profileindex][this.getProfileLayerIndex()];
        }
        else{
            return this.KeyBoardArray[this.profileindex]
        }
    }

    /**
     * getAssignTarget
     * @param index number:KeyBoardArray index
    */
    getAssignTarget(index) {
        return this.KeyBoardArray[index]
    }

}

export class KeyBoard {
    profileName = 'default';
    profileid=0;
    hibernate = true
    winLock = false
    hibernateTimeArr: any = [1, 3, 5, 10]
    hibernateTime: any = 3
    defaultName = "Default";
    pollingrate = 1000;
    inputLatency=2;
    light_PRESETS_Data={};
    light_PERKEY_Data={
        value:1
    }
    lockSidelightsFlag=false;
    batteryLevelIndicator=false;
    recordAssignBtnIndex: any = 1;
    assignText: any = '設定按鍵:Y'
    maxKayCapNumber: any
    assignedKeyboardKeys: any = [[]] //61KEY
    assignedFnKeyboardKeys = [] //61KEY
    fnModeMartrix = [false, false, false]
    fnModeindex = 0;
    fiveDefaultLedCode: any = []
    fiveRecordIndex: any = 0
    keyHoverIndex = 0;
    profileLayerIndex=0;
    constructor(name = '', inputMax, profileid) {
        this.maxKayCapNumber = inputMax
        this.profileName = name;
        this.profileid = profileid;
        for (let index = 0; index < 1; index++) {
            for (let i2 = 0; i2 < this.maxKayCapNumber; i2++) {
                this.assignedKeyboardKeys[index].push(this.defaultModule())
            }
        }
    }

    /**
     * setTargetDefaultKeyArray
     * @param data array:KeyBoardDefaultArray
    */
    setTargetDefaultKeyArray(data) {
        //console.log('setTargetDefaultKeyArray',AllFunctionMapping);
        for (let index = 0; index < data.length; index++) {
            var targetValue = AllFunctionMapping.find((x) => x.code == data[index])
            // console.log('setTargetDefaultKeyArray_index', index, targetValue);
            if(targetValue!=undefined){
                this.getNowModeKeyMatrix()[index].defaultValue = targetValue.value;
            }

        }
    }

    /**
     * getHibernateStepTime
    */
    getHibernateStepTime() {
        //console.log("getHibernateStepTime",this.hibernateTimeArr,this.hibernateTime);
        return this.hibernateTimeArr[this.hibernateTime]
    }

    /**
     * ImportClassData
    */
    ImportClassData(InputData) {
        console.log('ImportClassData', InputData)
        var tempData=JSON.parse(JSON.stringify(InputData));
        var excludeVar = ['KB61Prohibit', 'profileLayerIndex','profileName']
        var arr = Object.keys(this)
        for (let index = 0; index < arr.length; index++) {
            if (excludeVar.find((x) => x == arr[index])){
            }
            else {
                this[arr[index]] = tempData[arr[index]]
            }
        }
    }

    /**
     * HasSet
     * @param checkIndex number:check Assign Index
    */
    HasSet(checkIndex = 0) {
        var target = this.getNowModeKeyMatrix()
        var N = target[checkIndex].value
        var N2 = target[checkIndex].profileName
        var N3 = target[checkIndex].LongTimePressValue
        var N4 = target[checkIndex].InstantPressValue
        return N != '' || N2 != '' || N3 != '' || N4 != '' ? true : false
    }



    /**
     * setTargetDefaultKeyArray
    */
    getKeyTargetOptionFrequency() {
        var N = this.getNowModeTargetMatrixKey().macroOptionNumber
        console.log('getKeyTargetOptionFrequency', N)
        switch (true) {
            case N < 65535:
                return N
            case N == 65535:
                return 1
            case N == 65536:
                return 1
        }
    }

    /**
     * checkNowModeTargetMatrixAssignKey
     * @param index number:KeyMatrix index
     * @param compareKeyCode number:compareKeyCode
    */
    checkNowModeTargetMatrixAssignKey(index, compareKeyCode) {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        if (this.getNowModeKeyMatrix()[index].defaultValue == compareKeyCode) {
            return false;
        }
        return true;
    }

    /**
     * getNowModeKeyMatrix
    */
    getNowModeKeyMatrix() {
        if (!this.assignedKeyboardKeys[this.fnModeindex]) {
            console.log(this);
        }
        else {
            return this.assignedKeyboardKeys[this.fnModeindex]
        }
    }
    
            /**
     * getNowModeTargetMatrixKey
    */
    getNowModeTargetMatrixKey() {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        return this.getNowModeKeyMatrix()[this.recordAssignBtnIndex]
    }

        /**
     * getMacroList
    */
    getMacroList(){
        var data=this.getNowModeKeyMatrix()    
        var macrolist=[];
        for (let index = 0; index < data.length; index++) {
            const target = data[index];            
            switch (target.recordBindCodeType) {
                case 'MacroFunction': 
                //console.log('case MacroFunction:',target);
                macrolist.push(target.macro_Data);
                break;
            } 
        } 
        console.log("%c getMacroList","color:red",macrolist);
        return macrolist;
    }
   /**
     * setGlobalValueAssignField
     * @param field any:field;
     * @param value any:value;
    */
    setGlobalValueAssignField(field,value){
        var target = this;
        console.log('setGlobalValueAssignField:', field, value,target[field]);
        //var arrKeys = Object.keys(this);
        if (target[field] != undefined) {
            target[field] = value;
        }
    }    

    /**
     * setAssignTargetData
     * @param data obj:data
    */
   setAssignTargetData(data) { 
    var target = this.getNowModeTargetMatrixKey()
    console.log('setAssignTargetData:', data, 'ManagerTarget:', target);
    var arrKeys = Object.keys(data);
    for (let index = 0; index < arrKeys.length; index++) {
        if (target[arrKeys[index]] != undefined) {
            target[arrKeys[index]] = data[arrKeys[index]];
        }
    }
    target.changed = true;
}






        /**
     * reset_AllKey
    */
    reset_AllKey() {
        var KeyArray = this.getNowModeKeyMatrix();
        for (let index = 0; index < KeyArray.length; index++) {
            for (var [key, value] of Object.entries(KeyArray[index])) {
                if (key != "defaultValue") {
                    KeyArray[index][key] = this.defaultModule()[key];
                }
            }
        }
    }

    /**
     * delete_Find_MacroData
     * @param m_id string:macro id
    */
    delete_Find_MacroData(m_id='') {
        var KeyArray = this.getNowModeKeyMatrix();
        for (let index = 0; index < KeyArray.length; index++) {
            if(KeyArray[index].recordBindCodeType=="MacroFunction"){
                if(KeyArray[index].macro_Data.m_Identifier==m_id){
                    for (var [key, value] of Object.entries(KeyArray[index])) {
                        if (key != "defaultValue") {
                            KeyArray[index][key] = this.defaultModule()[key];
                        }
                    }
                }
            }    
        }
    }

    /**
     * defaultModule
    */
    defaultModule() {
        var T = {
            keyAssignType: ['', '', ''],
            LongTimePressValue: '',
            InstantPressValue: '',
            LongTime_Instant_Status: false,
            openLongTimePress: false,
            defaultValue: 'Default',
            value: this.defaultName,
            macro_RepeatType: 0,
            macro_Data: {},
            assignValue: '',
            profileName: '',
            recordBindCodeType: '',
            recordBindCodeName: this.defaultName,
            shortcutsWindowsEnable: false,
            sensitivity:2,
            d_SoundVolume: {
                bindTarget: {
                    filename: "default",
                    filepath: "",
                    percent: 0,
                    processid: 12812,
                },
                lightData: {
                    speed: 50,
                    brightness: 50,
                    clearStatus: false,
                    colorHex: '#0000',
                    colorPickerValue: [255, 172, 42, 1],
                    breathing: false,
                    brightness_Enable: false,
                    rate_Enable: false,
                    color_Enable: false,
                }
            },
            ApplicationPath: "",
            WebsitePath: "",
            combinationkeyEnable: false,
            Shift: false,
            Alt: false,
            Ctrl: false,
            hasFNStatus: false,
            Windows: false,
            changed: false,
        }
        return T
    }
}

