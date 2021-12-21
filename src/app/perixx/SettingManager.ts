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
            this.KeyBoardArray.push(new KeyBoard("硬體配置" + index, inputmax));
        }
        this.keyBoardTemp=new KeyBoard("Template", inputmax);
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
    hibernateTimeArr: any = [1, 3, 5, 10];
    reportRateIndex: any = 0;
    hibernateTime: any = 3;
    defaultName = "";
    projectName="";
    projectCode="";
    lightData
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
    getHibernateStepTime() {
        //console.log("getHibernateStepTime",this.hibernateTimeArr,this.hibernateTime);
        return this.hibernateTimeArr[this.hibernateTime];
    }
    updeteProjectName(newName=""){
      this.projectName=newName;
    }
    clearAllKMacro() {
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {

            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {

                var target = this.assignedKeyboardKeys[index];
                if (target[index2].keyAssignType[2] == "KMacro") {
                    target[index2].keyAssignType[2] = this.defaultName;
                    target[index2].value = this.defaultName;
                    target[index2].macroOptionNumber = 65536;
                    target[index2].macroCode = 0;
                }
            }
        }
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


    set_prohibit(Class = "") {
        var target = KB61Prohibit.get_prohibit(Class);
        console.log("get_prohibit", target);
        for (let index = 0; index < target.length; index++) {
            var T = this.getNowModeKeyMatrix()[target[index]];
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                T.keyAssignType[KATindex] = "K12";
            }
            T.value = "⊘";
            T.LongTimePressValue = "⊘";
            T.InstantPressValue = "⊘";
            T.macroOptionNumber = 65536;
        }
    }
    cancel_prohibit() {
        console.log("cancel_prohibit_FNMode");
        let T = this.getNowModeKeyMatrix();
        for (let index = 0; index < T.length; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (T[index].keyAssignType[KATindex] == "K12") {
                    T[index].keyAssignType[KATindex] = this.defaultName;
                    T[index].LongTimePressValue = this.defaultName;
                    T[index].InstantPressValue = this.defaultName;
                    T[index].value = this.defaultName;
                    T[index].macroOptionNumber = 65536;
                    T[index].macroCode = 0;
                }
            }

        }

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
            recordBindCodeName: this.defaultName,
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











