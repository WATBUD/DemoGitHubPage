import { Injectable } from '@angular/core';
import { KB61Prohibit } from './KeyBoardData';



@Injectable()
export class KeyBoardManager {
    defaultName = "未配置"
    keyboardOfChoice= 0;
    KeyBoardArray = [];
    nameBeingEdited="Test";
    editingName=false;
    maxKayCapNumber: number;
    keyBoardTemp;
    constructor(inputmax=1,quantity=0) {
        this.maxKayCapNumber = inputmax;
        for (let index = 0; index < quantity; index++) {
            this.KeyBoardArray.push(new KeyBoard("Template_" + index, inputmax));
        }
        this.keyBoardTemp=new KeyBoard("Template_", inputmax);
    }
    hasKeyBoard() {
        if (this.KeyBoardArray.length > 0) {
            return true;
        }
        else {
            return false;
        }

    }
    updatenameBeingEdited(){
        if (this.hasKeyBoard()) {
           this.nameBeingEdited=this.getTarget().projectName;  
        }

    }
    create_KeyBoard(name = "Template") {
        var index = "_"+this.KeyBoardArray.length;
        this.KeyBoardArray.push(new KeyBoard(name + index, this.maxKayCapNumber));
    }
    getTheLastObject(){
        return this.KeyBoardArray[this.KeyBoardArray.length-1];
    }
    copyFolderFile(){
        if (this.hasKeyBoard()) {
            this.create_KeyBoard();
            this.KeyBoardArray[this.KeyBoardArray.length-1].ImportClassData(this.getTarget());
        }
    }
    delete_KeyBoard() {
        if (this.keyboardOfChoice  > 0) {
            var T = this.keyboardOfChoice ;
            this.keyboardOfChoice  -= 1;
            this.KeyBoardArray.splice(T, 1);
        }
        else if (this.keyboardOfChoice  == 0) {
            this.KeyBoardArray.splice(this.keyboardOfChoice , 1);
        }
    }

    updeteProjectName(NewName) {
        if (this.hasKeyBoard()) {
            //var t_name=this.getNotRepeatName(NewName);
            this.getTarget().updeteProjectName(NewName);
            
        }
    }
    keyAssignPrompt(event) {
        var KeyAssignPrompt = document.getElementById("KeyAssignPrompt");
        //KeyAssignPrompt.style.display='block';
        var H = event.target.offsetHeight;
        var W = event.target.offsetWidth;
        KeyAssignPrompt.style.left = event.target.offsetLeft + event.target.offsetWidth + "px";
        KeyAssignPrompt.style.top = event.target.offsetTop + "px";
        console.log('keyAssignPrompt', H, W, event);
        //console.log('keyAssignPrompt', event.offsetX, event.offsetY);

    }
    /**
     * setALLDefaultKeyArray
     * @param data array:KeyArray
    */
    setALLDefaultKeyArray(data) {
        console.log('setALLDefaultKeyArray');
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setTargetDefaultKeyArray(data);
        }
    }
    clearAllKeyboardData(Name) {
        console.log("%c clearAllKeyboardData", "color:red", Name, this.maxKayCapNumber);

        for (let index = 0; index < this.KeyBoardArray.length; index++) {
            this.KeyBoardArray[index] = new KeyBoard(Name + (index + 1), this.maxKayCapNumber);
        }
    }


    setAllProfileFieldData(field, obj) {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index][field] = obj;
            //console.log('KBMarr[index][field]', KBMarr[index][field])
        }
    }

    ChangeAllLookingforMacroName(changeName = "", targetName = "") {
        console.log("EnterKeyChangeMacroName", changeName, targetName);
        var KBMarr = this.KeyBoardArray;
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeMacroName(changeName, targetName);
        }
    }

    clearRecordMacroData(targetid = "") {
        console.log("clearRecordMacroData", targetid);
        var KBMarr = this.KeyBoardArray;
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearMacroFile(targetid);
        }
    }
    getTarget() {
        var R_Obj = this.KeyBoardArray[this.keyboardOfChoice ];
        if (R_Obj != undefined) {
            return R_Obj;
        }
        else {
            console.log("%c getTarget_error", this.keyboardOfChoice );
        }
    }
    loadTemporaryKeyboardData(){
    this.getTarget().ImportClassData(this.keyBoardTemp);
    }
    refreshKeyBoardTemp(){
        this.keyBoardTemp.ImportClassData(this.getTarget());
    }
    keyBoardTempR(){


    }
    getAssignTarget(index) {
        return this.KeyBoardArray[index];
    }

}

export class KeyBoard {
    hibernate: any = true;
    winLock: any = false;
    directionSwitch: any = false;
    reportRateIndex: any = 0;
    hibernateTime = 3;
    macroEnable=false;
    autoSleepEnable=false;
    autoSleepValue=60;
    defaultName = "";
    projectName="";
    projectCode="";
    layoutMode="Default";
    lightData={
        brightness:100
    }
    recordAssignBtnIndex: any = 0;
    assignText: any = "設定按鍵:Y";
    maxKayCapNumber;
    assignedKeyboardKeys = [];
    fnModeMartrix: any = [false, false, false];
    fnModeindex: any = 0;
    fiveRecordIndex: any = 0;
    constructor(name = "", inputMax) {
        this.maxKayCapNumber = inputMax;
        this.projectName = name;
        this.projectCode=this.projectName+new Date().getTime();
        console.log("%c Inpunt_KeyBoard", "color:red", inputMax, this.maxKayCapNumber);

        for (let index = 0; index < 3; index++) {
            var tempArr=[];
            for (let i2 = 0; i2 < this.maxKayCapNumber; i2++) {
                tempArr.push(this.defaultModule());
            }
            this.assignedKeyboardKeys.push(tempArr);
        }




    }

    /**
       * setTargetDefaultKeyArray
       * @param data array:KeyBoardDefaultArray
      */
    setTargetDefaultKeyArray(data) {
        //console.log('setTargetDefaultKeyArray',AllFunctionMapping);
        for (let index = 0; index < data.length; index++) {
            this.getNowModeKeyMatrix()[index].defaultValue = data[index];
            this.getNowModeKeyMatrix()[index].recordBindCodeName = data[index];
        }
    }
    updeteProjectName(newName=""){
      this.projectName=newName;
    }

    ImportClassData(inputData) {
        var InputData=JSON.parse(JSON.stringify(inputData));
        console.log("ImportClassData", InputData);
        var arr = Object.keys(this);
        console.log("Object.keys", arr);
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] != "projectName"&&arr[index] != undefined) {
                this[arr[index]] = InputData[arr[index]];
            }
        }
    }
    HasSet(index) {
        if (this.getNowModeKeyMatrix()[index].recordBindCodeName!= "") {
            return true;
        }
        return false;
    }



    getNowModeKeyMatrix() {
        return this.assignedKeyboardKeys[this.fnModeindex];
    }
    getNowModeTargetMatrixKey() {
        var target = this.getNowModeKeyMatrix()[this.recordAssignBtnIndex]
        if (target != undefined) {
            return target;
        }
        else {
            console.log("%c getNowModeTargetMatrixKey_lost", "color:red", this, this.getNowModeKeyMatrix(), this.recordAssignBtnIndex);
        }
    }


    setFnModeMartrix(targetIndex) {
        this.fnModeMartrix[targetIndex] = !this.fnModeMartrix[targetIndex];
        for (let index = 0; index < this.fnModeMartrix.length; index++) {
            if (targetIndex != index) {
                this.fnModeMartrix[index] = false;
            }
        }

        if (!this.fnModeMartrix.some((element) => element == true)) {
            this.fnModeindex = 0;
        }
        else {
            this.fnModeindex = targetIndex + 1;
        }
        console.log("setFnModeMartrix_改後", this.fnModeMartrix[targetIndex], this.fnModeindex);

    }

    //"設定按鍵:"
    get_assign_promptText(Type) {
        switch (Type) {
            case 'LongTimePressValue':
                return this.getNowModeTargetMatrixKey().LongTimePressValue;
            case 'InstantPressValue':
                return this.getNowModeTargetMatrixKey().InstantPressValue;
            case 'NormalKeyPress':
                return this.getNowModeTargetMatrixKey().value;
        }
    }
    checkFnSetOnlyData(inputValue) {
        console.log("clearLostMacro_MCIarr");
        var V1 = this.getNowModeKeyMatrix();
        for (let index = 0; index < this.maxKayCapNumber; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (V1[index].keyAssignType[KATindex] == inputValue) {
                    V1[index] = this.defaultModule();
                }
            }
        }
    }
    set_assign_Text_Value(type_Code = "", inputValue, OptionNumber = 65536, IndexCode = 0) {

        console.log("set_assign_Text_ValueTypeName", type_Code);
        console.log("set_assign_Text_ValueIndexCode", IndexCode);
        console.log("FNMode_TextAndValue");
        var T = this.getNowModeTargetMatrixKey();
        T.macroOptionNumber = OptionNumber;
        T.macroCode = IndexCode;

    }
    
    reset_assign_default(type = "") {
       

    }
    theBindingCategoryIsMacro(index) {
        if (this.getNowModeKeyMatrix()[index].recordBindCodeType == "MacroFunction") {
            return true;
        }
        return false;
    }
    resetTheSpecifiedKeyBindData(index) {
        this.getNowModeKeyMatrix()[index].recordBindCodeType=""
        this.getNowModeKeyMatrix()[index].recordBindCodeName=""
    }

        /**
       @param CodeName string:recordBindCodeName
       @param CodeNameType string:recordBindCodeType
       * CodeNameType list
       * KEYBOARD
       * MOUSE
       * Multimedia
       * SingleKey
       * MacroFunction
       * Shortcuts
       * DISABLE
       * LaunchProgram
       * LaunchWebsite
       */
    defaultModule(type = "") {
        var T = {
            macro_RepeatType: 0,
            macro_Data: {},
            assignValue: '',
            defaultValue: 'Default',
            profileName: '',
            recordBindCodeType: '',
            recordBindCodeName:"Digit1",//this.defaultName,
            shortcutsWindowsEnable: false,
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
        return T;
    }
}












