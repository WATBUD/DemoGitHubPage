// declare var System;
// var SupportData = System._nodeRequire('./backend/others/SupportData');
// var SupportData_KeyMapping = System._nodeRequire('./backend/others/SupportData').KeyMapping;
// var SupportData_MouseMapping = System._nodeRequire('./backend/others/SupportData').MouseMapping;

export class MacroManager {
    radioOptions = 0;
    nowEditName = "";
    tempMacroContent = new MacroScriptContent();
    currentMacroClass: any = 0;
    onEditMacroName = "";
    macroClassItem: any = [
        new MacroClass("i18nName"),
    ]
    SupportData_KeyMapping = new Array()
    SupportData_MouseMapping = new Array()
    constructor() {
        console.log('SupportData_KeyMapping', this.SupportData_KeyMapping);
        console.log('SupportData_MouseMapping', this.SupportData_MouseMapping);
        this.RSEventArr[0] = (event) => {
            console.log('keydown_event', event)
            this.recordSimulationPressdown(event)
        }

        this.RSEventArr[1] = (event) => {
            console.log('keyup_event', event)
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
    }
    onRecord: any = false;
    RSEventArr: any = [];
    startTime = new Date().getTime();
    allRecordKeys = {
    }
    recordSimulationPressdown(event) {
        if (this.onRecord != true) {
            return
        }
        //console.log('recordSimulationPressdown', event.type);
        var recordValue = '0'
        if (event.type == 'keydown') {
            recordValue = this.SupportData_KeyMapping.find((x) => x.keyCode == event.keyCode).keyCode
        } else if (event.type == 'mousedown') {
            recordValue = this.SupportData_MouseMapping.find((x) => x.keyCode == event.button).keyCode // 0 為 左鍵點擊,1 為 中鍵點擊,2 為 右鍵點擊,
        }
        console.log('recordSimulationPressdown', recordValue, event.type)
        //console.log("是否存在",this.getTarget(recordValue));
        if (this.checkTargetExist(recordValue)) {
            if (this.allRecordKeys[recordValue].isDown == false) {
                this.allRecordKeys[recordValue].isDown = true;
                this.addMacroRadioOptions(recordValue, 1);
            }
        }
        else {
            this.addMacroRadioOptions(recordValue, 1);
            console.log('addKeysEnter', this.allRecordKeys)
            this.allRecordKeys[recordValue] = {
                isDown: true,
            }
        }
    }

    recordSimulationPressUp(event) {
        if (this.onRecord != true) {
            return
        }
        var recordValue = '0'
        if (event.type == 'keyup') {
            recordValue = this.SupportData_KeyMapping.find((x) => x.keyCode == event.keyCode).keyCode
        } else if (event.type == 'mouseup') {
            recordValue = this.SupportData_MouseMapping.find((x) => x.keyCode == event.button).keyCode // 0 為 左鍵點擊,1 為 中鍵點擊,2 為 右鍵點擊,
        }
        console.log('recordSimulationPressUp', recordValue, event.type)
        this.allRecordKeys[recordValue].isDown = false
        this.addMacroRadioOptions(recordValue, 0);

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
            for (let Mindex = 0; Mindex < targetClass.MacroFiletItem.length; Mindex++) {
                //console.log('MacroFiletItem:', MacroObj[MClass2].MacroFiletItem[Mindex]);                            
                this.macroClassItem[MClass2].ReadFileCreateData(targetClass.MacroFiletItem[Mindex]);
            }
        }
    }

    /**
       * 0:Down
       * 1:Time
       * 2:Up
       * //keydownStatus:0 up, 1 down
    */
    addMacroRadioOptions(keyCode, keydownStatus) {
        if (this.tempMacroContent.Data.length >= 80) {
            this.onRecord = false;
            return;
        }
        switch (this.radioOptions) {
            case 0:

                var diffTime = new Date().getTime() - this.startTime;
                this.startTime = new Date().getTime();
                if (this.tempMacroContent.Data.length < 1) {
                    diffTime = 0;
                }
                console.log('%c addMacroRadioOptions', 'background: black; color: white', this.tempMacroContent.Data);
                this.tempMacroContent.createRow(diffTime, keydownStatus, keyCode);

                break;
            case 1:
                this.tempMacroContent.createRow(5, keydownStatus, keyCode);
                break;
            case 2:
                var customMs = document.getElementById("customMs") as HTMLInputElement;
                this.tempMacroContent.createRow(parseInt(customMs.value), keydownStatus, keyCode);

                break;
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
     * Find the specified IndexCode Macro
     */
    find_Macro(value) {
        for (let MClass2 = 0; MClass2 < this.macroClassItem.length; MClass2++) {
            //console.log('MacroObj:',MacroObj.macroClassItem,MClass2);
            var targetClass = this.macroClassItem[MClass2];
            //this.createMacroClass(targetClass.className);
            for (let Mindex = 0; Mindex < targetClass.MacroFiletItem.length; Mindex++) {
                var macroContent = targetClass.MacroFiletItem[Mindex];
                if (macroContent.IndexCode == value) {
                    return macroContent;
                }
            }
        }
        return undefined;
    }



    getAllMacroFileData() {
        var Tdata: any = [];
        for (let index = 0; index < this.macroClassItem.length; index++) {
            var reformattedArray = this.macroClassItem[index].MacroFiletItem.map(function (obj) {
                console.log("getAllMacroFileData", obj);
                Tdata.push({
                    IndexCode: obj.IndexCode,
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
            for (let index2 = 0; index2 < element.MacroFiletItem.length; index2++) {
                console.log('%c checkforDuplicateFileNames','color:rgb(255,77,255)',  element.MacroFiletItem[index2].name);
                if (targetName == element.MacroFiletItem[index2].name) {
                    return true;
                }
            }
        }
        return false;
    }
    createFolderFile(name = "Macro") {
        if (this.getClass() != undefined) {
            this.getClass().createMacro(this.getNotRepeatName(name));
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
                checkName=Tname + Num;
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
    MacroFiletItem: any = [
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
        var TData = this.newMacroScriptContent("沒有");
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = InputData[arr[index]];
        }
        TData.IndexCode = new Date().getTime();
        this.MacroFiletItem.push(TData);
        console.log("ImportFileCreateData_PushData", TData, typeof InputData);

    }

    ReadFileCreateData(InputData) {

        console.log("ImportFileCreateData", InputData);
        InputData = JSON.parse(JSON.stringify(InputData));
        var TData = this.newMacroScriptContent("沒有");
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = InputData[arr[index]];
        }
        this.MacroFiletItem.push(TData);
        console.log("ImportFileCreateData_PushData", TData, typeof InputData);
    }
    copyMacroFile(copyName = "Error") {
        if (this.MacroFiletItem.length > 50) {
            return;
        }
        var TData = this.newMacroScriptContent();
        var nowCopyTarget = this.getCopyTarget();
        var arr = Object.keys(TData);
        for (let index = 0; index < arr.length; index++) {
            TData[arr[index]] = nowCopyTarget[arr[index]];
        }
        TData.IndexCode = new Date().getTime();
        TData.name = copyName;
        this.MacroFiletItem.push(TData);
        console.log("copyMacroFile", TData, typeof TData);
    }
    getTarget() {
        // console.log("this.currentMacroClass",this.currentMacroClass,this.macroClassItem.length);
        return this.MacroFiletItem[this.currentChooseMacro];
    }
    getCopyTarget() {
        return JSON.parse(JSON.stringify(this.getTarget()));
    }
    hasFile() {
        if (this.MacroFiletItem.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    createMacro(Tname = "宏檔案") {
        console.log("createMacro創造檔案checkNamePass");
        this.MacroFiletItem.push(this.newMacroScriptContent(Tname));

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
                this.MacroFiletItem.splice(T, 1);
            }
            else if (this.currentChooseMacro == 0) {
                this.MacroFiletItem.splice(this.currentChooseMacro, 1);
            }
        }
    }

    setDefault() {


    }
    newMacroScriptContent(InputclassName = "未命名") {
        var scriptContent = {
            macrolocation: 0,
            name: InputclassName,
            IndexCode: new Date().getTime(),
            Data: [
            ]
        }
        return scriptContent;
    }
    setMacrolocation(index) {
        console.log('%c setMacrolocation', 'background: black; color: white', index);
        this.getTarget().macrolocation = index;
    }
    move_up_row() {

        if (this.getTarget().Data.length == 0) { return }
        if (this.getTarget().indexPosition > 0) {
            let tempVar = this.getTarget().getCopyTarget();
            this.getTarget().Data[this.getTarget().indexPosition] = this.getTarget().Data[this.getTarget().indexPosition - 1];
            this.getTarget().Data[this.getTarget().indexPosition - 1] = tempVar;
            this.getTarget().indexPosition -= 1;
        }
    }
    move_down_row() {
        if (this.getTarget().Data.length == 0) { return }
        if (this.getTarget().indexPosition != this.getTarget().Data.length - 1) {
            let tempVar = this.getTarget().getCopyTarget();
            this.getTarget().Data[this.getTarget().indexPosition] = this.getTarget().Data[this.getTarget().indexPosition + 1];
            this.getTarget().Data[this.getTarget().indexPosition + 1] = tempVar;
            this.getTarget().indexPosition += 1;
        }
    }
}


export class MacroScriptContent {

    indexPosition = 0;
    name: any = "新檔案";
    IndexCode = new Date().getTime();
    Data: any = [
        // {
        //     type:2,
        //     text:"S",
        // }
    ]

    constructor(InputclassName = "未命名") {
        this.name = InputclassName;
    }
    ImportMacroData(InputData) {
        console.log("ImportMacroData", InputData);
        var arr = Object.keys(this);
        for (let index = 0; index < arr.length; index++) {
            //const element = InputData[index];
            for (let index = 0; index < arr.length; index++) {
                this[arr[index]] = InputData[arr[index]];
            }
        }
    }


    setDataMs(ms) {
        if (this.Data[this.indexPosition]) {
            this.Data[this.indexPosition].byDelay = ms;
        }
    }


    getTarget() {
        if (this.Data[this.indexPosition]) {
            return this.Data[this.indexPosition];
        }
    }




    createInsert() {
        var c1 = {
            byDelay: 5,
            bKeyDown: 1,
            byKeyCode: 65,
        }
        var c2 = {
            byDelay: 5,
            bKeyDown: 0,
            byKeyCode: 65,
        }
        // this.createRow(5,1,65);
        // this.createRow(5,0,65);
        this.Data.splice(this.indexPosition + 1, 0, c1, c2);
    }

    //MacroIcon 012=Down=>Time=>Up
    createRow(byDelay = 0, type = 0, keyCodeInt = 0) {
        this.Data.push(
            {
                byDelay: byDelay,  //Delay Time
                bKeyDown: type, //0 if up, 1 if down
                byKeyCode: keyCodeInt,//key code
            });
        setTimeout(() => {
            var element = document.getElementById("MacroContentArea");
            let _1vw = Math.round(window.innerWidth / 100);
            let _1vh = Math.round(window.innerHeight / 100);
            if (element) {
                element.scrollBy(0, element.clientHeight);
            }
        }, 50);


    }
    deleteRow() {
        const Dindex = this.indexPosition;
        this.Data.splice(Dindex, 1);

    }
    clear() {
        this.Data = new Array;
    }
}

