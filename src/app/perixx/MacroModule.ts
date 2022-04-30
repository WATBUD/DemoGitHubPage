// declare var System;
// var SupportData = System._nodeRequire('./backend/others/SupportData');
// var SupportData_KeyMapping = System._nodeRequire('./backend/others/SupportData').KeyMapping;
// var SupportData_MouseMapping = System._nodeRequire('./backend/others/SupportData').MouseMapping;

import { AllFunctionMapping } from './SupportData';

export class MacroManager {
    radioOptions = 0;
    nowEditName = "";
    tempMacroContent = new MacroScriptContent();
    currentMacroClass: any = 0;
    onEditMacroName = "";
    macroClassItem: any = [
        new MacroClass("i18nName"),
    ]
    totalRecordTime=0;
    countIndexCode=0;
    SupportData_KeyMapping = AllFunctionMapping;
    SupportData_MouseMapping = AllFunctionMapping;
    constructor() {
        console.log('SupportData_KeyMapping', this.SupportData_KeyMapping,AllFunctionMapping);
        console.log('SupportData_MouseMapping', this.SupportData_MouseMapping);
        this.RSEventArr[0] = (event) => {
            //console.log('keydown_event', event)
            this.recordSimulationPressdown(event)
        }

        this.RSEventArr[1] = (event) => {
            //console.log('keyup_event', event)
            this.recordSimulationPressUp(event)
        }
        this.RSEventArr[2] = (event) => {
            //console.log('mousedown_event',event);
            if (event.which == 2) {
                event.preventDefault()
            }
            if (event.target.id != 'IconRecord') {
                this.recordSimulationPressdown(event)
            }
        }
        this.RSEventArr[3] = (event) => {
            //console.log('mouseup_event',event);
            if (event.target.id != "IconRecord") {
                this.recordSimulationPressUp(event)
            }
        }
        var a=[1,2];
        for (let index = 0; index < a.length; index++) {
            console.log('index',index);
        }
    }
    onRecord: any = false;
    RSEventArr: any = [];
    startTime = new Date().getTime();
    allRecordKeys = [];
    recordSimulationPressdown(event) {
        if (this.onRecord != true) {
            return
        }
        var recordValue = 'code';
        if (event.type == 'keydown') {
            recordValue = String(event.code);
        } else if (event.type == 'mousedown') {
            if (event.target.dataset.identity=="startRecord") {
                return;
            }
            recordValue = String(event.button) // 0 為 左鍵點擊,1 為 中鍵點擊,2 為 右鍵點擊,
        }
        console.log('recordSimulationPressdown', recordValue, event.type)
            var sameKeyIsPressing=false;
            for (let index = 0; index < this.allRecordKeys.length; index++) {
                var target = this.allRecordKeys[index];   
                console.log('index',index);
                if(target.codeName==recordValue&&target.isDown==true){
                    sameKeyIsPressing=true;
                    break;
                }
            }
            if(!sameKeyIsPressing){
                console.log('this.allRecordKeys.length-1',this.allRecordKeys.length-1);
                if (this.allRecordKeys.length < 1) {
                    this.totalRecordTime = new Date().getTime();
                }
                var t_data={
                    isDown: true,
                    duration: 0,
                    startTime: new Date().getTime(),
                    codeName: recordValue,
                    indexCode: recordValue+this.countIndexCode,
                }
                this.allRecordKeys.push(t_data);
                this.tempMacroContent.createRow(t_data.codeName, t_data.startTime - this.totalRecordTime, 0,t_data.indexCode);
                this.countIndexCode+=1;  
            }
            //console.log('addKeysEnter', this.allRecordKeys)
    }

    recordSimulationPressUp(event) {
        if (this.onRecord != true) {
            return
        }
        var recordValue = 'code';
        if (event.type == 'keyup') {
            recordValue =String(event.code);
        } else if (event.type == 'mouseup') {
            console.log('%c event.target.dataset.identity','background: blue; color: red;', event.target.dataset.identity);

            if (event.target.dataset.identity=="startRecord") {
                return;
            }
          recordValue = String(event.button) // 0 為 左鍵點擊,1 為 中鍵點擊,2 為 右鍵點擊,
        }
        for (let index = 0; index < this.allRecordKeys.length; index++) {
            var target = this.allRecordKeys[index];
            if(target.codeName==recordValue&&target.isDown==true){
                target.isDown= false;
                target.duration= new Date().getTime()-target.startTime;   
                this.tempMacroContent.keyRelease(target);
            }
        }
       console.log('%c recordSimulationPressUp', 'background: blue; color: red;', this.allRecordKeys,recordValue)
    }
    checkTargetExist(FindkeyCode) {
        if (this.allRecordKeys[FindkeyCode] != undefined) {
            return true
        } else {
            return false
        }
    }
    importMacroClass(MacroObj) {
        for (let MClass2 = 0; MClass2 < MacroObj.macroClassItem.length; MClass2++) {
            console.log('MacroObj:', MacroObj.macroClassItem, MClass2);
            var targetClass = MacroObj.macroClassItem[MClass2];
            this.createMacroClass(targetClass.className);
            for (let Mindex = 0; Mindex < targetClass.macroFiletItem.length; Mindex++) {
                //console.log('macroFiletItem:', MacroObj[MClass2].macroFiletItem[Mindex]);                            
                this.macroClassItem[MClass2].ReadFileCreateData(targetClass.macroFiletItem[Mindex]);
            }
        }
    }


    addMacroEvent() {

        document.addEventListener('keydown', this.RSEventArr[0]);
        document.addEventListener('keyup', this.RSEventArr[1]);
        document.addEventListener('mousedown', this.RSEventArr[2]);
        document.addEventListener('mouseup', this.RSEventArr[3]);


    }

    removeMacroEvent() {

        document.removeEventListener('keydown', this.RSEventArr[0]);
        document.removeEventListener('keyup', this.RSEventArr[1]);
        document.removeEventListener('mousedown', this.RSEventArr[2]);
        document.removeEventListener('mouseup', this.RSEventArr[3]);
    }
    hasClass() {
        if (this.macroClassItem.length > 0) {
            return true;
        }
        else {
            return false;
        }

    }
    /**
     * Find the specified selectedMacroCode Macro
     */
    find_Macro(value) {
        for (let MClass2 = 0; MClass2 < this.macroClassItem.length; MClass2++) {
            //console.log('MacroObj:',MacroObj.macroClassItem,MClass2);
            var targetClass = this.macroClassItem[MClass2];
            //this.createMacroClass(targetClass.className);
            for (let Mindex = 0; Mindex < targetClass.macroFiletItem.length; Mindex++) {
                var macroContent = targetClass.macroFiletItem[Mindex];
                if (macroContent.selectedMacroCode == value) {
                    return macroContent;
                }
            }
        }
        return undefined;
    }



    getAllMacroFileData() {
        var Tdata: any = [];
        for (let index = 0; index < this.macroClassItem.length; index++) {
            var reformattedArray = this.macroClassItem[index].macroFiletItem.map(function (obj) {
                console.log("getAllMacroFileData", obj);
                Tdata.push({
                    selectedMacroCode: obj.selectedMacroCode,
                    name: obj.name,
                });
            });
            console.log("getAllMacroFileData_reformattedArray", reformattedArray);
        }
        console.log("getAllMacroFileData_Tdata", Tdata);

        return Tdata;
    }
    getClass() {
        // console.log("this.currentMacroClass",this.currentMacroClass,this.macroClassItem.length);
        return this.macroClassItem[this.currentMacroClass];
    }
    //--------MacroClassArea---------------//

    createMacroClass(name = "宏類別") {
        if (this.macroClassItem.length > 19) {
            return;
        }
        console.log("createMacroClass_log=", name);
        this.macroClassItem.push(new MacroClass(this.createNotRepeatClassName(name)));
    }
    deleteMacroClass() {

        //if (this.macroClassItem.length - 1 > 0) {
        const Dindex = this.currentMacroClass;
        if (this.currentMacroClass - 1 >= 0) {
            this.currentMacroClass -= 1;
        }
        this.macroClassItem.splice(Dindex, 1);
        //}
    }

    checkClassNameIsRepeat(targetName) {
        for (let index = 0; index < this.macroClassItem.length; index++) {
            const element = this.macroClassItem[index];
            if (element.className == targetName) {
                return true;
            }
        }
        return false;
    }
    createNotRepeatClassName(name) {
        var pass = true;
        var Num = 0;
        var Tname = name;
        while (pass) {
            if (Num > 0) {
                Tname = name + Num;
            }
            if (this.checkClassNameIsRepeat(Tname)) {
                Num += 1;
            }
            else {
                pass = false;
            }
        }
        return Tname;
    }
    //--------End_MacroClassArea---------------//

    checkforDuplicateFileNames(targetName) {
        for (let index = 0; index < this.macroClassItem.length; index++) {
            const element = this.macroClassItem[index];
            for (let index2 = 0; index2 < element.macroFiletItem.length; index2++) {
                console.log('%c checkforDuplicateFileNames','color:rgb(255,77,255)',  element.macroFiletItem[index2].name);
                if (targetName == element.macroFiletItem[index2].name) {
                    return true;
                }
            }
        }
        return false;
    }
    createFolderFile(name = "Macro") {
        if (this.getClass() != undefined) {
            this.getClass().createMacro(this.getNotRepeatName(name));
            this.tempMacroContent.importMacroData(this.getClass().getTarget());
        }
    }
    copyFolderFile() {
        if (this.macroClassItem.length > 0) {
            if (this.getClass().hasFile() ) {
            var clone = this.getClass().getCopyTarget();
            this.getClass().copyMacroFile(this.getNotRepeatName(clone.name));
            // this.updeteEditName();
            // this.tempMacroContent = this.getClass().getTarget();
            }
        }
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
    deleteMacroFile() {
        if (this.hasClass()) {
            this.getClass().deleteMacro();
        }
    }
    updeteMacroFileName(NewName) {
        if (this.hasClass()) {
            if (this.getClass().hasFile()) {
            if(this.getClass().getTarget().name==NewName){
                return;
            }
            var t_name=this.getNotRepeatName(NewName);
            this.getClass().updeteMacroName(t_name);
            //this.onEditMacroName = NewName;
            }
        }
    }
    getExoprtData() {
        if (this.hasClass()) {
            if (this.getClass().hasFile()) {
                return this.getClass().getTarget();
            }
        }
        else {
            return undefined;
        }
    }
    editMacroFileName() {
        if (this.hasClass()) {
            if (this.getClass().hasFile()) {
                this.onEditMacroName=this.getClass().getTarget().name;
            }
        }
    }
    setDefault() {


    }
}
export class MacroClass {
    macroFiletItem: any = [
    ]
    currentChooseMacro = 0;
    className: any = "未命名";
    constructor(InputclassName = "未命名") {

        this.className = InputclassName;
    }
    intital(frequency) {

        this.currentChooseMacro = 0;
    }
    ImportFileCreateData(InputData) {
        console.log("ImportFileCreateData", InputData);
        InputData = JSON.parse(JSON.stringify(InputData));
        var TData = new MacroScriptContent();
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = InputData[arr[index]];
        }
        TData.selectedMacroCode = new Date().getTime().toString();
        this.macroFiletItem.push(TData);
        console.log("ImportFileCreateData_PushData", TData, typeof InputData);
    }

    ReadFileCreateData(InputData) {

        console.log("ImportFileCreateData", InputData);
        InputData = JSON.parse(JSON.stringify(InputData));
        var TData = new MacroScriptContent();
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = InputData[arr[index]];
        }
        this.macroFiletItem.push(TData);
        console.log("ImportFileCreateData_PushData", TData, typeof InputData);
    }
    copyMacroFile(copyName = "Error") {
        if (this.macroFiletItem.length > 50) {
            return;
        }
        var TData = new MacroScriptContent();
        var nowCopyTarget = this.getCopyTarget();
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = nowCopyTarget[arr[index]];
        }
        TData.selectedMacroCode = new Date().getTime().toString();
        TData.name = copyName;
        this.macroFiletItem.push(TData);
        console.log("copyMacroFile", TData, typeof TData);
    }
    getNotRepeatMacroCode(code="") {
        console.log('%c getNotRepeatMacroCode','color:rgb(255,77,255)',  code);
        var pass = true;
        var Num = 0;
        var Tname=code;
        while (pass) {
            var checkName;
            if(Num>0){
                checkName=Tname + Num;
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
    getTarget() {
        // console.log("this.currentMacroClass",this.currentMacroClass,this.macroClassItem.length);
        return this.macroFiletItem[this.currentChooseMacro];
    }
    getCopyTarget() {
        return JSON.parse(JSON.stringify(this.getTarget()));
    }
    hasFile() {
        if (this.macroFiletItem.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    createMacro(Tname = "宏檔案") {
        console.log("createMacro創造檔案checkNamePass");
        this.macroFiletItem.push(new MacroScriptContent(Tname));

    }
    updeteMacroName(NewName){
        if (this.hasFile()) {
        this.getTarget().name=NewName;
        }
    }

    deleteMacro() {
        if (this.hasFile()) {
            if (this.currentChooseMacro > 0) {
                var T = this.currentChooseMacro;
                this.currentChooseMacro -= 1;
                this.macroFiletItem.splice(T, 1);
            }
            else if (this.currentChooseMacro == 0) {
                this.macroFiletItem.splice(this.currentChooseMacro, 1);
            }
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
    setDefault() {


    }



}


export class MacroScriptContent {
    selectAllDataFlag=false;
    indexPosition = 0;
    name: any = "新檔案";
    selectedMacroCode = new Date().getTime().toString();
    Data: any = [
        // byKeyCode: "error",
        // byStartTime: 0,
        // duration: 1,
        // indexCode:'error',
        // inTheSelectionList:false
    ]
    constructor(InputclassName = "未命名") {
        this.name = InputclassName;
        
        // this.Data.push(this.getDefault());
    }
    
    move_up_row() {

        if (this.Data.length == 0) { return }
        if (this.indexPosition > 0) {
            let tempVar = this.getCopyTarget();
            this.Data[this.indexPosition] = this.Data[this.indexPosition - 1];
            this.Data[this.indexPosition - 1] = tempVar;
            this.indexPosition -= 1;
        }
    }
    move_down_row() {
        if (this.Data.length == 0) { return }
        if (this.indexPosition != this.Data.length - 1) {
            let tempVar = this.getCopyTarget();
            this.Data[this.indexPosition] = this.Data[this.indexPosition + 1];
            this.Data[this.indexPosition + 1] = tempVar;
            this.indexPosition += 1;
        }
    }
    importMacroData(InputData) {
        console.log("importMacroData", InputData);
        var propetyList = Object.keys(InputData);
        for (let index = 0; index < propetyList.length; index++) {
            if(this[propetyList[index]]!=undefined){
                this[propetyList[index]] = InputData[propetyList[index]];
            }
        }
    }


    setDataMs(ms) {
        if (this.Data[this.indexPosition]) {
            this.Data[this.indexPosition].byDelay = ms;
        }
    }
    getCopyTarget() {
        JSON.parse(JSON.stringify(this.Data[this.indexPosition])); 
    }
    getTarget() {
        if (this.Data[this.indexPosition]) {
            return this.Data[this.indexPosition];
        }
    }

    getDefault(){
        var obj=
        {
            byKeyCode: "error",
            byStartTime: 0,
            duration: 1,
            indexCode:'error',
            inTheSelectionList:false
        }
        return obj;
    }

    sortData(fromSmallToLarge=true) {
        var temp_Data=this.Data;
        if(fromSmallToLarge==true){
            for (let i = 1; i < temp_Data.length; i++) {
                let temp = temp_Data[i];//Currently recorded time
                let j = i;//
                while (j > 0 && temp.byStartTime < temp_Data[j - 1].byStartTime) {
                  temp_Data[j] = temp_Data[j - 1]; 
                  j -= 1;
                }
                temp_Data[j] =temp;  
              }
        }
        else{//fromLargeToSmall
            for (let i = 1; i < temp_Data.length; i++) {
                let temp = temp_Data[i];//Currently recorded time
                let j = i;//
                while (j > 0 && temp.byStartTime > temp_Data[j - 1].byStartTime) {
                  temp_Data[j] = temp_Data[j - 1]; 
                  j -= 1;
                }
                temp_Data[j] =temp;  
              }
        }




    }
    switchSelectAllFlag(){
        this.selectAllDataFlag=!this.selectAllDataFlag;
        this.selectAllMacroData(this.selectAllDataFlag);
    }


    selectAllMacroData(dataFlag=false){
            console.log('%c selectAllMacroData','background: blue; color: red;',this.selectAllDataFlag,this.Data);
            for (let index = 0; index < this.Data.length; index++) {
                this.Data[index].inTheSelectionList=dataFlag;
            }
    }
    deleteSelectMacro(){
        this.selectAllDataFlag=false;
        var UncheckedList=[];
        for (let index = 0; index < this.Data.length; index++) {
            const element = this.Data[index];
            if(element.inTheSelectionList==false){
                UncheckedList.push(element);
            }
            // if(element.inTheSelectionList==true){
            //     this.Data.splice(index, 1);
            // }
        }
        this.Data=UncheckedList;

        console.log('%c deleteSelectMacro','background: blue; color: red;', this.Data);

    }
    // createInsert() {
    //     var c1 = this.getDefault();
    //     var c2 = this.getDefault();
    //     // this.createRow(5,1,65);
    //     // this.createRow(5,0,65);
    //     this.Data.splice(this.indexPosition + 1, 0, c1, c2);
    // }

    //MacroIcon 012=Down=>Time=>Ups
    createRow(byKeyCode = "error",byStartTime = 0,duration = 0,indexCode='') {
        var obj=this.getDefault();
        obj.byKeyCode=byKeyCode;
        obj.byStartTime=byStartTime;
        obj.duration=duration;
        obj.indexCode=indexCode;
        this.Data.push(obj);
        // setTimeout(() => {
        //     var element = document.getElementById("MacroContentArea");
        //     let _1vw = Math.round(window.innerWidth / 100);
        //     let _1vh = Math.round(window.innerHeight / 100);
        //     if (element) {
        //         element.scrollBy(0, element.clientHeight);
        //     }
        // }, 50);
    }
    keyRelease(event){
        console.log('%c keyRelease','background: blue; color: red;', event);
        var target = this.Data.find((x) => x.indexCode == event.indexCode);
        if(target!=undefined){
            target.duration=event.duration;
        }
    }
    deleteRow() {
        const Dindex = this.indexPosition;
        this.Data.splice(Dindex, 1);

    }
    resetDefaultData(){
        this.Data = new Array;
    }
}

