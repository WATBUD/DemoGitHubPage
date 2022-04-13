import { Injectable } from '@angular/core';
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
            this.KeyBoardArray.push(new KeyBoard("Template_0" + (index+1), inputmax));
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
        var checkName="";
        var newIndex=(this.KeyBoardArray.length+1);
        if(newIndex<10){
            checkName=name+"-0"+newIndex;
        }
        else{
            checkName=name+"-"+newIndex;
        }
        console.log('%c create_KeyBoard_checkName','color:rgb(255,77,255)',  checkName);

        this.KeyBoardArray.push(new KeyBoard(this.getNotRepeatName(checkName), this.maxKayCapNumber));
    }

    getNotRepeatName(inputName) {
        console.log('%c getNotRepeatName','color:rgb(255,77,255)',  inputName);
        var pass = true;
        var Num = 0;
        var Tname=inputName;
        while (pass) {
            var checkName;
            if(Num>0){
                checkName=Tname+Num;

                // if(Num<10){
                //     checkName=Tname+"0"+Num;
                // }
                // else{
                //     checkName=Tname+Num;
                // }
            }
            else{
                checkName=Tname;
            }
            if (this.checkforDuplicateFileNames(checkName)) {
                Num += 1;
                //console.log("createMacroTname=");
            }
            else {
                pass = false;
                Tname = checkName;
            }
        }
        console.log('%c Tname','color:rgb(255,77,255)',  Tname);
        return Tname;
    }

    checkforDuplicateFileNames(targetName) {
        for (let index = 0; index < this.KeyBoardArray.length; index++) {
            const element =  this.KeyBoardArray[index];
                if (targetName == element.projectName) {
                    return true;//Duplicate
            }
        }
        return false;
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
    getAssignTarget(index) {
        return this.KeyBoardArray[index];
    }

}

export class KeyBoard {
    winLock: any = false;
    hibernateTime = 3;
    macroEnable=false;
    autoSleepEnable=false;
    autoSleepValue=60;
    defaultName = "";
    projectName="";
    projectCode="";
    layoutMode="Default";
    macroFiletItem=[];
    currentChooseMacro = 0;
    lightData={
        brightness:100
    }
    recordAssignBtnIndex: any = 0;
    assignText: any = "設定按鍵:Y";
    maxKayCapNumber;
    assignedKeyboardKeys = [];
    fnModeMartrix: any = [false];
    fnModeindex: any = 0;
    constructor(name = "", inputMax) {
        this.maxKayCapNumber = inputMax;
        this.projectName = name;
        this.projectCode=this.projectName+new Date().getTime();
        console.log("%c Inpunt_KeyBoard", "color:red", inputMax, this.maxKayCapNumber);

        for (let index = 0; index < this.fnModeMartrix.length; index++) {
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
    
    setTargetMacro(data, index) {
        var inputData = JSON.parse(JSON.stringify(data));
        //inputData.selectedMacroCode += "1";
        console.log("%c setTargetMacro", "color:red", data, index);
        var KeyMatrix = this.getNowModeKeyMatrix();
        KeyMatrix[index].recordBindCodeType = "MacroFunction";
        KeyMatrix[index].selectedMacroCode = inputData.selectedMacroCode;
        var target = this.macroFiletItem.find((x) => x.selectedMacroCode == inputData.selectedMacroCode)
        if (target != undefined) {

        }
        else {
            this.macroFiletItem.push(inputData);
        }


    }
    
    copyFolderFile(selectedMacroCode="") {
        var target=this.getTargetMacro(selectedMacroCode);
        if (target!=undefined) {
            var target=JSON.parse(JSON.stringify(this.getTargetMacro(selectedMacroCode)));
            
            this.macroFiletItem.push(target);
        }
    }
    deleteMacroFile(selectedMacroCode = "") {
            var keyMatrix = this.getNowModeKeyMatrix();
            for (let index = 0; index < keyMatrix.length; index++) {
                const element = keyMatrix[index];
                if(element.selectedMacroCode==selectedMacroCode){
                    keyMatrix[index].recordBindCodeType="";
                    keyMatrix[index].recordBindCodeName="";
                    keyMatrix[index].selectedMacroCode="";
                }
            }
        var targetIndex = this.macroFiletItem.findIndex((x) => x.selectedMacroCode == selectedMacroCode)
        if (targetIndex != -1) {
            this.macroFiletItem.splice(targetIndex, 1);
        }
    }

    getTargetMacro(selectedMacroCode=""){
        //var KeyMatrixkey = this.getNowModeTargetMatrixKey();
        var target = this.macroFiletItem.find((x) => x.selectedMacroCode ==selectedMacroCode)
        console.log("%c getTargetMacro", "color:red", this.macroFiletItem,selectedMacroCode,target);

        if (target != undefined) {
            return target;
        }
        else {
            return undefined;
        }
    }
    getNotRepeatMacroCode(code="") {
        console.log('%c getNotRepeatMacroCode','color:rgb(255,77,255)',  code);
        var pass = true;
        var Num = 0;
        var Tname=code;
        while (pass) {
            var checkName;
            if(Num>0){
                checkName=Tname + String(Num);
            }
            else{
                checkName=Tname;
            }
            var target = this.macroFiletItem.find((x) => x.selectedMacroCode == checkName)
            if (target != undefined) {
                Num += 1;
                //console.log("createMacroTname=");
            }
            else {
                pass = false;
                Tname = checkName;
            }
        }
        return Tname;
    }
    checkforDuplicateFileNames(compareValue) {
        for (let index = 0; index < this.macroFiletItem.length; index++) {
            const element = this.macroFiletItem[index];
                if (element.selectedMacroCode==compareValue) {
                    return true;
                }
        }
        return false;
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
            isTheNewlyDesignatedMacro:false,
            macro_RepeatType: 0,
            selectedMacroCode:0,
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












