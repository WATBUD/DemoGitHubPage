declare var require: any;
import { ElementRef,Injectable } from '@angular/core'
import { KB61Prohibit } from './KeyBoardData'
let AllFunctionMapping = require('../../Module/SupportData');
export class KeyBoardManager {
    defaultName = '未配置'
    profileindex = 0;
    KeyBoardArray: any
    maxKayCapNumber: number
    notClickedYet = false;
    profileLayers = [];
    profileLayerIndex = [0, 0, 0];
    layerMaxNumber = 3;
    //AllFunctionMapping=new AllFunctionMapping();
    constructor(inputmax) {
        this.maxKayCapNumber = inputmax
        this.KeyBoardArray = [
            new KeyBoard('硬體配置1', inputmax, 0),
            new KeyBoard('硬體配置2', inputmax, 1),
            new KeyBoard('硬體配置3', inputmax, 2),//profile
        ]
        var countIndex = 0;
        for (let index = 1; index <= this.KeyBoardArray.length; index++) {
            var tempArr = []
            for (let index2 = 1; index2 <= this.layerMaxNumber; index2++) {
                tempArr.push(
                    new KeyBoard('硬體配置' + index2 * index, inputmax, index2 * index),
                );
            }
            this.profileLayers.push(tempArr);
        }
    }
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
    
    setALLGlobalValueAssignField(field="",value) {
        if(value==undefined){
            console.log('%c setALLKeyboardAssignField_lost', 'color:rgb(255,0,0)');
            console.log('field', field);
            console.log('value', value);
            return;
        }
        console.log('setALLDefaultKeyArray', this.profileLayers);
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setGlobalValueAssignField(field="",value);
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].setGlobalValueAssignField(field="",value);
            }
        }
    }
    



    getProfileLayerIndex(){
       return this.profileLayerIndex[this.profileindex];
    }
    changeProfileLayer() {
        this.notClickedYet = true;
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

    keyAssignPromPrompt(event) {
        var KeyAssignPrompt = document.getElementById('KeyAssignPrompt')
        //KeyAssignPrompt.style.display='block';
        var H = event.target.offsetHeight
        var W = event.target.offsetWidth
        console.log('keyAssignPrompt', H, W, event)
        KeyAssignPrompt.style.left = event.target.offsetLeft + event.target.offsetWidth + 'px'
        KeyAssignPrompt.style.top = event.target.offsetTop + 'px'
        console.log('keyAssignPrompt', event.offsetX, event.offsetY)
    }

    clearAllKeyboardData(Name) {
        for (let index = 0; index < 4; index++) {
            this.KeyBoardArray[index] = new KeyBoard(Name + (index + 1), this.maxKayCapNumber, 0)
        }
    }
    i18nChangeName(Name) {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].profileName = Name + ' ' + (index + 1)
        }
    }

    clearAllAssignRecordLed(FindName = '') {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearAssignRecordLed(FindName)
        }
    }

    ChangeAllLookingforMacroName(changeName = '', targetName = '') {
        console.log('EnterKeyChangeMacroName', changeName, targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeMacroName(changeName, targetName)
        }
    }

    ChangeAllLookingforLCFMName(changeName = '', targetName = '') {
        console.log('EnterKeyChangeMacroName', changeName, targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeLCFMName(changeName, targetName)
        }
    }

    clearRecordMacroData(targetName = '') {
        console.log('clearRecordMacroData', targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearMacroName(targetName)
        }
    }

    getTarget() {
        if(this.layerMaxNumber>0){
            return this.profileLayers[this.profileindex][this.getProfileLayerIndex()];
        }
        else{
            return this.KeyBoardArray[this.profileindex]
        }
    }

    getAssignTarget(index) {
        return this.KeyBoardArray[index]
    }

 

    changeAll_KBIndex(index) {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].recordAssignBtnIndex = index;
        }
    }



    delete_KeyBoard() {
        if (this.profileindex > 0) {
            var T = this.profileindex
            this.profileindex -= 1
            this.KeyBoardArray.splice(T, 1)
        } else if (this.profileindex == 0) {
            this.KeyBoardArray.splice(this.profileindex, 1)
        }
    }
    setDefault() { }
}

export class KeyBoard {

    profileName = 'default';
    profileid;
    hibernate = true
    winLock = false
    hibernateTimeArr: any = [1, 3, 5, 10]
    hibernateTime: any = 3
    lockSidelightsFlag=false;
    batteryLevelIndicator=false;
    defaultName = "Default";
    pollingrate = 125;
    recordAssignBtnIndex: any = 0
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

        // for (let index = 0; index < 5; index++) {
        //     this.fiveDefaultLedCode.push({
        //         recordBindCodeName: 0,
        //         profileName: this.defaultName,
        //     })
        // }
    }
    setTargetDefaultKeyArray(data) {
        //console.log('setTargetDefaultKeyArray', data);
        for (let index = 0; index < data.length; index++) {
            var targetValue = AllFunctionMapping.find((x) => x.keyCode == data[index]).value
            //console.log('setTargetDefaultKeyArray_index', index, targetValue);
            this.getNowModeKeyMatrix()[index].defaultValue = targetValue;
            this.getNowModeKeyMatrix()[index].recordBindCodeType = '';
        }
    }

    getHibernateStepTime() {
        //console.log("getHibernateStepTime",this.hibernateTimeArr,this.hibernateTime);
        return this.hibernateTimeArr[this.hibernateTime]
    }

    clearAllKMacro() {
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                var target = this.assignedKeyboardKeys[index]
                if (target[index2].keyAssignType[0] == 'KMacro') {
                    target[index2].keyAssignType[0] = this.defaultName
                    target[index2].value = this.defaultName
                }
            }
        }
    }

    ChangeMacroName(changeName = '', targetName = '') {
        console.log('KeyChangeMacroName', changeName, targetName)
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index]
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                let T = target[index2]
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    console.log('KeyChangeMacroName_t', T)
                    T.value = changeName
                }
            }
        }
    }


    clearMacroName(targetName = '') {
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index]
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                let T = target[index2]
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    T.value = this.defaultName
                }
            }
        }
    }



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
        // for (let index = 0; index < arr.length; index++) {

        // }
    }

    HasSet(checkIndex = 0) {
        var target = this.getNowModeKeyMatrix()
        var N = target[checkIndex].value
        var N2 = target[checkIndex].profileName
        var N3 = target[checkIndex].LongTimePressValue
        var N4 = target[checkIndex].InstantPressValue
        return N != '' || N2 != '' || N3 != '' || N4 != '' ? true : false
        // for (let index = 0; index <target.length; index++) {
        //     var element = target[index];

        // }
    }
    checkKeyAssignHasData(from = '') {
        var KeyAssignUIStyleList = document.querySelectorAll('.KeyAssignUIStyle')
        //var KeyAssignUIStyleList= this.elementRef.nativeElement.querySelectorAll(".KeyAssignUIStyle");
        for (let index = 0; index < KeyAssignUIStyleList.length; index++) {
            var Result = this.HasSet(index)
            let element = KeyAssignUIStyleList[index];
            //Result ? (element.style.border = '2px solid #ffc757') : (element.style.border = '');
        }
    }
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
    checkNowModeTargetMatrixAssignKey(index, compareKeyCode) {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        if (this.getNowModeKeyMatrix()[index].defaultValue == compareKeyCode) {
            return false;
        }
        return true;
    }
    getNowModeKeyMatrix() {
        if (!this.assignedKeyboardKeys[this.fnModeindex]) {
            console.log(this);
        }
        else {
            return this.assignedKeyboardKeys[this.fnModeindex]
        }
    }
    getNowModeTargetMatrixKey() {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        return this.getNowModeKeyMatrix()[this.recordAssignBtnIndex]
    }

    switchLongTime_Instant_Status() {
        this.getNowModeTargetMatrixKey().LongTime_Instant_Status = !this.getNowModeTargetMatrixKey()
            .LongTime_Instant_Status
    }

    setFnModeMartrix(targetIndex) {
        this.fnModeMartrix[targetIndex] = !this.fnModeMartrix[targetIndex]
        for (let index = 0; index < this.fnModeMartrix.length; index++) {
            if (targetIndex != index) {
                this.fnModeMartrix[index] = false
            }
        }

        if (!this.fnModeMartrix.some((element) => element == true)) {
            this.fnModeindex = 0
        } else {
            this.fnModeindex = targetIndex + 1
        }
        console.log('setFnModeMartrix_改後', this.fnModeMartrix[targetIndex], this.fnModeindex)
        this.checkKeyAssignHasData('setFnModeMartrix')
    }

    set_prohibit(Class = '') {
        var target = KB61Prohibit.get_prohibit(Class)
        console.log('get_prohibit', target)
        for (let index = 0; index < target.length; index++) {
            var T = this.getNowModeKeyMatrix()[target[index]]
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                T.keyAssignType[KATindex] = 'K12'
            }
            T.value = '⊘'
            T.LongTimePressValue = '⊘'
            T.InstantPressValue = '⊘'
        }
    }
    cancel_prohibit() {
        console.log('cancel_prohibit_FNMode')
        let T = this.getNowModeKeyMatrix()
        for (let index = 0; index < T.length; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (T[index].keyAssignType[KATindex] == 'K12') {
                    T[index].keyAssignType[KATindex] = this.defaultName
                    T[index].LongTimePressValue = this.defaultName
                    T[index].InstantPressValue = this.defaultName
                    T[index].value = this.defaultName
                    T[index].m_Identifier = 0
                }
            }
        }
    }
    //"設定按鍵:"
    get_assign_promptText(Type) {
        switch (Type) {
            case 'LongTimePressValue':
                return this.getNowModeTargetMatrixKey().LongTimePressValue
            case 'InstantPressValue':
                return this.getNowModeTargetMatrixKey().InstantPressValue
            case 'NormalKeyPress':
                return this.getNowModeTargetMatrixKey().value
        }
    }
    //"燈光設置:"
    get_Led_promptText() {
        //console.log("FNMode_get_Led_promptText");
        return this.getNowModeTargetMatrixKey().profileName
    }
    checkFnSetOnlyData(inputValue) {
        console.log('clearLostMacro_MCIarr')
        var V1 = this.getNowModeKeyMatrix()
        for (let index = 0; index < this.maxKayCapNumber; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (V1[index].keyAssignType[KATindex] == inputValue) {
                    V1[index] = this.defaultModule()
                }
            }
        }
    }
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
    
    setGlobalValueAssignField(field="",value){
        var target = this;
        //console.log('setAssignTargetData:', data, 'ManagerTarget:', target);
        var arrKeys = Object.keys(this);
        if (target[field] != undefined) {
            target[field] = value;
        }
    }    


    
    getNowModeTargetKeyPressStatus() {
        if (this.getNowModeTargetMatrixKey().openLongTimePress) {
            if (this.getNowModeTargetMatrixKey().LongTime_Instant_Status) {
                return 'LongTimePress'
            } else {
                return 'InstantPress'
            }
        } else {
            return 'NormalPress'
        }
    }
    setRecordLed(profileName, recordBindCodeName) {
        console.log('setRecordLedVar_', profileName, recordBindCodeName)
        var T = this.getNowModeTargetMatrixKey()
        T.profileName = profileName
        T.recordBindCodeName = recordBindCodeName
    }

    set_FiveLed(profileName, recordBindCodeName) {
        console.log('set_FiveLed', profileName, recordBindCodeName)
        var T = this.fiveDefaultLedCode[this.fiveRecordIndex]
        T.recordBindCodeName = recordBindCodeName
        T.profileName = profileName
    }


    reset_assign_default(type = '') {
        console.log('reset_assign_default', type)
        if (type == 'key') {
            var T = this.getNowModeTargetMatrixKey()
            for (var [key, value] of Object.entries(T)) {
                if (key != "keyAssignType") {
                    T[key] = this.defaultModule()[key];
                }

            }
        } else if (type == 'led') {
            var T = this.getNowModeTargetMatrixKey()
            T.profileName = this.defaultName
            T.recordBindCodeName = 0
        } else if (type == 'LongTime_or_Instant_Delete') {
            var T = this.getNowModeTargetMatrixKey()
            if (T.LongTime_Instant_Status) {
                T.keyAssignType[0] = this.defaultName
                T.LongTimePressValue = ''
            } else {
                T.keyAssignType[1] = this.defaultName
                T.InstantPressValue = ''
            }
        }
    }
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

    defaultModule(type = '') {
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
            ApplicationPath: "",
            WebsitePath: "",
            combinationkey: "",
            combinationkeyEnable: false,
            Shift: false,
            Alt: false,
            Ctrl: false,
            Windows: false,
            changed: false,
        }
        return T
    }
}


