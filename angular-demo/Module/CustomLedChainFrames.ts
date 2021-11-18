import { BoxSelectionArea } from './BoxSelectionArea';
import { Injectable } from '@angular/core';
export class LedChainFramesManager{
    LedChainFrames:any=[];
    AllBlockColor:any=[];
    currentChooseIndex:any=0;
    showRangeType:any=0;//0 frames 1 colorMode
    showAddColorUI:any=false;
    onEditName="";
    maxkaycapNumber=0;
    BSModule_C =new BoxSelectionArea("CustomRGBBlock");
    performingCustomLED:boolean=false;
    frame_selectionColors=["#000000","#ffffff"];
    constructor(kaycapNumber){
        this.maxkaycapNumber=kaycapNumber;
        for (let index = 0; index < 1; index++) {
            this.LedChainFrames.push(new CustomLedChainFrames("Default",this.maxkaycapNumber));
        }
        for (var i = 0; i < this.maxkaycapNumber; i++) {//61Key
            this.AllBlockColor.push({color:"yellow",border:false});
        }
    }
    getBlock(index){
        var target=this.AllBlockColor[index];
        if(target!=undefined){
            return target;
        }
        else{
            console.log('%c KeyBoardStyle.getTarget', 'color:rgb(255,75,255,1)', this.AllBlockColor,index);
        }

    }
    getIndexClassName(index){
        if (this.LedChainFrames.length > 0) {
            return this.LedChainFrames[index];
        }
    }
    getLedProjectKeys(type = "") {
        if (type == "PC") {
            return this.LedChainFrames.map(item => item.projectCode);
        }
        else if (type == "PN") {
            return this.LedChainFrames.map(item => item.projectName);
        }

    }
    getLedClassName(FindCode){
        console.log("getLedClassName尋找", FindCode,"來源",this.LedChainFrames);

        for (var i = 0; i < this.LedChainFrames.length; i++) {//61Key
            //console.log("來源", this.LedChainFrames[i].projectCode,"比對尋找",FindCode);
            if( this.LedChainFrames[i].projectCode==FindCode){      
                return this.LedChainFrames[i].projectName;
            }
        }
        return "沒有找到目標"; 
    }
    addItem(name=""){
       var NewName=this.createNotRepeatClassName(name);
       this.LedChainFrames.push(new CustomLedChainFrames(NewName,this.maxkaycapNumber));
    }
    createNotRepeatClassName(name) {
        var TempName = name
        let i = 1
        while (1) { 
            let flag = this.checkClassNameIsRepeat(TempName);
            if (flag) {
                TempName = name + '-' + i
                i++
            } else {
                name = TempName
                break
            }
        }
        return name;
    }
    checkClassNameIsRepeat(targetName) {
        for (let index = 0; index < this.LedChainFrames.length; index++) {
            const Tname = this.LedChainFrames[index].projectName;
                if (targetName == Tname) {
                    return true;
            }
            
        }
        return false;
    } 
    projectSelect(i){
        this.currentChooseIndex=i;
        this.updeteEditName();
        return "Finish";
    }
    updeteEditName(){

        this.onEditName=this.getClass().projectName;
        this.performingCustomLED=true;
    }




    getClass() {

            if (this.LedChainFrames.length > 0) {
                return this.LedChainFrames[this.currentChooseIndex];
            }
        
    }
    isFirstPosition(){
        if( this.currentChooseIndex-1>=0){
        return false;
        }
        else{
            return true;
        }
    }
    

    delete_item(){
        if(this.currentChooseIndex>0){
            var T= this.currentChooseIndex;
            this.currentChooseIndex-=1;
            this.LedChainFrames.splice(T,1);     
        } 
        else if(this.currentChooseIndex==0){

            this.LedChainFrames.splice(this.currentChooseIndex,1);     
        }            
    }



    check_length(type=""){
        if(type=="F"){   
            return this.getClass().matrix_frames.length==0?false:true;
        }
        if(type=="C"){
            return this.getClass().matrix_ColorMode.length==0?false:true;
        }

    }

    ImportClassCreateData(InputData) {
        InputData = JSON.parse(JSON.stringify(InputData));
        var TData = new CustomLedChainFrames("沒有");
        var arrkeys = Object.keys(TData);//取得欄位變成陣列
        for (let index = 0; index < arrkeys.length; index++) {

            if(arrkeys[index]!="BSModule_C"){
                TData[arrkeys[index]] = InputData[arrkeys[index]];
            }
            
        }
        
        TData.projectCode=new Date().getTime();        
        console.log("ImportClassCreateData_PushData", TData,typeof InputData);
        this.LedChainFrames.push(TData);
     }
    ReadClassCreateData(InputData) {

         InputData = JSON.parse(JSON.stringify(InputData));
         var TData = new CustomLedChainFrames("沒有");
         var arrkeys = Object.keys(TData);//取得欄位變成陣列
         for (let index = 0; index < arrkeys.length; index++) {
             TData[arrkeys[index]] = InputData[arrkeys[index]];
         }    
         console.log("ReadClassCreateData_Push", TData,typeof InputData);
         this.LedChainFrames.push(TData);
         console.log("this.LedChainFrames", TData,typeof InputData);

      }


    frame_item_click(index){ 
        this.getClass().currentFramesIndex=index;
        this.showRangeType=0;//0 frames 1 colorMode
        this.update_frame_range();
        this.performingCustomLED=false;
    }
    frame_item_Auto_Switch(){
        this.showRangeType=0;//0 frames 1 colorMode
        this.update_frame_range();
    }

    update_frame_range() {
        if (this.getClass().hasFrames()) {
            console.log("update_frame_rangeEnter");
            var T = this.getClass().getTarget("F").frame_selection_range;
            this.allBlockColorUpdate(T,this.frame_selectionColors[1],this.frame_selectionColors[0]);
         
        }
    }
    update_color_range(){
        if(!this.getClass().hasColorMode()){
            return;
        }
        this.getClass().checkColorpickerAdjustable();
        //console.log("update_color_rang=>",this.getClass().getTargetColorMode());
        var T=this.getClass().getTargetColorMode().frame_selection_range;
        var Tcolor=this.getClass().getTargetColorMode().color;
        this.allBlockColorUpdate(T,Tcolor,this.frame_selectionColors[0]);
    }
    allBlockColorUpdate(T,oneColor,TwoColor){
        for (let i = 0; i <T.length; i++) {
            const element = T[i];
            if(element==true){
            this.AllBlockColor[i].color=oneColor;          
            }
            else{
             this.AllBlockColor[i].color=TwoColor;        
            }
 
        }
    }
    color_item_click(index){

        this.getClass().currentModeIndex=index;
        this.showRangeType=1;//0 frames 1 colorMode
        this.update_color_range();
        this.performingCustomLED=false;
    }
    color_Auto_Switch(){
        if(!this.getClass().hasColorMode()){
            return;
        }
        this.showRangeType=1;//0 frames 1 colorMode
        this.update_color_range();

    }

    refreshRange() {
        if (this.showRangeType == 0 && this.getClass().hasFrames()) {//0 frames 1 colorMode
            this.update_frame_range();

        }
        else if (this.showRangeType == 1 && this.getClass().hasColorMode()) {//0 frames 1 colorMode
            this.update_color_range();
        }
    }

    setNowCustomModeSingleRange(index) {
            if (this.showRangeType == 0 && this.getClass().hasFrames()) {//0 frames 1 colorMode
                this.getClass().setNowCustomModeSingleRange(index, this.showRangeType);
                this.update_frame_range();
     
            }
            else if (this.showRangeType == 1 && this.getClass().hasColorMode()) {//0 frames 1 colorMode
                this.getClass().setNowCustomModeSingleRange(index, this.showRangeType);
                this.update_color_range();
            }
        
    }

    checkisAllTrueChangeArray() {
        var selectedEls = this.BSModule_C.selectedEls;
        //console.log("checkisAllTrueChangeArrayEnter");
        if (selectedEls.length <= 0) {
            console.log("沒有選擇範圍", selectedEls, "AllBlockColor" + this.AllBlockColor);

            return "Fail";
        }


        if (this.showRangeType == 0) {

            var T = this.getClass().getTarget("F").frame_selection_range;
            let isAllTrue = this.BSModule_C.checkArrayisAllTrueP7(T);

            if (isAllTrue) {
                for (var i = 0; i < selectedEls.length; i++) {
                    console.log("checkisAllTrueChangeArray_isAllTrue", "index" , i);
                    this.AllBlockColor[selectedEls[i]].color = this.frame_selectionColors[0];
                }
                this.getClass().set_frame_selection_range(selectedEls, !isAllTrue);
            }
            else {
                for (var i = 0; i < selectedEls.length; i++) {
                    console.log("checkisAllTrueChangeArray_NAllTrue", "index" , i);
                    this.AllBlockColor[selectedEls[i]].color = this.frame_selectionColors[1];
                }
                this.getClass().set_frame_selection_range(selectedEls, true);
            }

        }
        else if (this.showRangeType == 1) {
            var T = this.getClass().getTarget("").frame_selection_range;
            let isAllTrue = this.BSModule_C.checkArrayisAllTrueP7(T);
            var selectedEls = this.BSModule_C.selectedEls;
            if (isAllTrue) {
                this.getClass().set_color_selection_range(selectedEls, !isAllTrue);
                this.update_color_range();

            }
            else {
                this.getClass().set_color_selection_range(selectedEls, true);
                this.update_color_range();
            }
            //console.log("Result_P7isAllTrue",isAllTrue); 
            //console.log("Result_P7selectedEls",selectedEls);

        }
        this.BSModule_C.mouseOn = false;   
        return "Finish";




    }


}



export class CustomLedChainFrames{
    modeNameTable:any=['Static','Cycle','Breathing','Rainbow'];
    matrix_ColorMode:any=[]//TOTAL NUMBER
    matrix_frames:any=[];
    projectName:any;
    projectCode:any;
    currentFramesIndex:any=0;
    currentModeIndex:any=0;
    selectionMaxRange:any=0;//default
    canSeeColorpicker:any=0;
    //chooseType:any="F";
    constructor(inputname="預設配置",Max=0){
        this.selectionMaxRange=Max;
        this.projectName=inputname;
        this.projectCode=new Date().getTime()+inputname;
    }
    hasFile() {
            if (this.matrix_frames.length > 0) {
                return true;
            }
            if (this.matrix_ColorMode.length > 0) {
                 return true;
            }
        
    }
    hasFrames() {
        if (this.matrix_frames.length > 0) {
            return true;
        }
        else{
            return false;
        }

    }
    hasColorMode() {
        if (this.matrix_ColorMode.length > 0) {
            //console.log("hasColorMode", true);
            return true;
        }
        else{
            //console.log("hasColorMode", false);
            return false;
        }

    }
    checkColorpickerAdjustable(){
        
        this.canSeeColorpicker=this.getTarget().adjustable[0];         
        console.log("checkColorpickerAdjustable",  this.canSeeColorpicker);

    } 
    getTargetColorMode(){
        if (this.matrix_ColorMode.length > 0) {
        return this.matrix_ColorMode[this.currentModeIndex];
        }
    }





    checkColorParameter(min,max){
        this.matrix_ColorMode.forEach(element => {
            console.log("checkColorParameter", element.speed);
            element.speed = element.speed.toString().replace(/[^\d]/g,'')
            element.speed<min?element.speed=min:' ';
            element.speed>max?element.speed=max:' ';
            element.speed2 = element.speed2.toString().replace(/[^\d]/g,'')
            element.speed2<min?element.speed2=min:' ';
            element.speed2>max?element.speed2=max:' ';

          });

    }
    checkFrameParameter(min,max){
        this.matrix_frames.forEach(element => {
            element.frame_time = element.frame_time.toString().replace(/[^\d]/g,'')
            element.frame_time<min?element.frame_time=min:' ';
            element.frame_time>max?element.frame_time=max:' ';
          });
    }

    framesOrder(command=""){
        switch (command) {
            case "Add":
                if(this.matrix_frames.length>19){return}
                //var Tname="名稱"+this.matrix_frames.length;
                this.matrix_frames.push({                   
                    name:"frame"+this.matrix_frames.length,
                    frame_time: "1",
                    frame_selection_range: this.createArr(), 
                }); 
                console.log("framesOrderAdd", this.matrix_frames);
                break;
            case "Delete":
                if(this.matrix_frames.length==0) { return }
                    if (this.currentFramesIndex > 0) {
                        var T = this.currentFramesIndex;
                        this.currentFramesIndex -= 1;
                        this.matrix_frames.splice(T, 1);
                    }
                    else if (this.currentFramesIndex == 0) {
                        this.matrix_frames.splice(this.currentFramesIndex, 1);
                    }
                break;
            case "moveUp":
                if(this.matrix_frames.length==0) { return }
                var TIndex = this.currentFramesIndex;
                //if (TIndex <1) { return }
                if (TIndex > 0) {
                    let tempVar = JSON.parse(JSON.stringify(this.getTarget("F")));
                    this.matrix_frames[TIndex] = this.matrix_frames[TIndex - 1];
                    this.matrix_frames[TIndex - 1] = tempVar;
                    this.currentFramesIndex -= 1;
                }
                break;
            case "moveDown":
                if(this.matrix_frames.length==0) { return }
                var TIndex = this.currentFramesIndex;
                if (TIndex >= this.matrix_frames.length - 1) { return }
                let tempVar = JSON.parse(JSON.stringify(this.getTarget("F")));
                this.matrix_frames[TIndex] = this.matrix_frames[TIndex + 1];
                this.matrix_frames[TIndex + 1] = tempVar;
                this.currentFramesIndex += 1;
                break;
            case "clone":
                if(this.matrix_frames.length==0) { return }
                if (this.matrix_frames.length > 19) { return }
                let clone =JSON.parse(JSON.stringify(this.getTarget("F")));
                clone.name = this.getTarget("F").name;
                //+"clone";   
                this.matrix_frames.push(clone);
                break;
            
        }     
    }
    colorModeOrder(command="",mode=0){
        switch (command) {
            case "Add":
                if(this.matrix_ColorMode.length>19){return}
                //var Tname="名稱"+this.matrix_frames.length;
                
                this.matrix_ColorMode.push(      
                    {
                    color:"#ffffff",
                    border:false,
                    colorMode:mode,
                    modeName:this.modeNameTable[mode],
                    speed:1,
                    speed2:1,
                    frame_selection_range:this.createArr(),  
                    codeName:new Date().getTime(),
                    adjustable: this.getAdjustmentArr(mode), 
                    });
                break;

            case "Delete":
                if(this.matrix_ColorMode.length==0) { return }
                    if (this.currentModeIndex > 0) {
                        var T = this.currentModeIndex;
                        this.currentModeIndex -= 1;
                        this.matrix_ColorMode.splice(T, 1);
                    }
                    else if (this.currentModeIndex == 0) {
                        this.matrix_ColorMode.splice(this.currentModeIndex, 1);
                    }
                

                
                break;
            case "moveUp":
                if(this.matrix_ColorMode.length==0) { return }
                var TIndex = this.currentModeIndex;
                if (TIndex > 0) {
                    let tempVar =JSON.parse(JSON.stringify(this.getTarget("")));
                    this.matrix_ColorMode[TIndex] = this.matrix_ColorMode[TIndex - 1];
                    this.matrix_ColorMode[TIndex - 1] = tempVar;
                    this.currentModeIndex -= 1;
                }
                break;
            case "moveDown":
                if(this.matrix_ColorMode.length==0) { return }
                var TIndex = this.currentModeIndex;
                if (TIndex>=this.matrix_ColorMode.length-1) { return }
                let tempVar = JSON.parse(JSON.stringify(this.getTarget("")));
                this.matrix_ColorMode[TIndex] = this.matrix_ColorMode[TIndex + 1];
                this.matrix_ColorMode[TIndex + 1] = tempVar;
                this.currentModeIndex += 1;
                break;
             case "clone":
                if(this.matrix_ColorMode.length==0) { return }  
             if(this.matrix_ColorMode.length>19){return}
                let clone = JSON.parse(JSON.stringify(this.getTarget("")));
                clone.name=this.getTarget().name
                //+"clone";   
                this.matrix_ColorMode.push(clone);
                break;

           
        }     


    }

   

    getAdjustmentArr(mode) {
        switch (mode) {
            case 0:
                return [1,false,false,false];//色盤開關 速度1 速度2 速度3
            case 1:
                return [2,true,false,false];
            case 2:
                return [1,false,true,true];
            case 3:
                return [0,false,true,true];
                
        }

    }

    setNowCustomModeSingleRange(index,TargetType){
        if (TargetType == 0) {
            if (this.matrix_frames.length > 0) {
                var T=this.matrix_frames[this.currentFramesIndex].frame_selection_range[index];
                console.log("setNowCustomModeSingleRange=","targetBool"+T); 

                this.matrix_frames[this.currentFramesIndex].frame_selection_range[index]=!T;
            }
        }
        else if(TargetType == 1) {
            if (this.matrix_ColorMode.length > 0) {
                var T=this.matrix_ColorMode[this.currentModeIndex].frame_selection_range[index];
                this.matrix_ColorMode[this.currentModeIndex].frame_selection_range[index]=!T;
            }
        }
   
    }





    set_frame_selection_range(selectedEls = [], bool = false) {
        if (this.matrix_frames.length > 0) {      
            console.log("Enter_set_frame_selection_range",selectedEls,"SetBoolTo="+bool); 
            for (var i = 0; i < selectedEls.length; i++) {
                this.matrix_frames[this.currentFramesIndex].frame_selection_range[selectedEls[i]] = bool;
            }
            //console.log("LCFM_set_frame_selection_range" + JSON.stringify(this.matrix_frames[this.currentFramesIndex]), "index" + this.currentFramesIndex);
        }

    }
    set_color_selection_range(selectedEls = [], bool = false) {
        console.log("Enter_set_frame_selection_range",selectedEls,"SetBoolTo="+bool); 
        if (this.matrix_ColorMode.length > 0) {
            for (var i = 0; i < selectedEls.length; i++) {
                this.matrix_ColorMode[this.currentModeIndex].frame_selection_range[selectedEls[i]] = bool;    
            }
        }
        

    }


    getTarget(chooseType="") {
        if (chooseType == "F") {
            if (this.matrix_frames.length > 0) {
                var T=this.matrix_frames[this.currentFramesIndex]
                // console.log("LCFMgetTargetmatrix_frames"+JSON.stringify(this.matrix_frames),"index"+this.currentFramesIndex);
                return this.matrix_frames[this.currentFramesIndex];
            }
        }
        else {
            if (this.matrix_ColorMode.length > 0) {
                return this.matrix_ColorMode[this.currentModeIndex];
            }
        }
    }
    setCurrentColor(Hex="") {
            if (this.matrix_ColorMode.length > 0) {
                this.getTarget().color=Hex;
            }    
    }

    createArr() {
        var T=new Array();
       
        
        for (let index = 0; index < this.selectionMaxRange; index++) {
              
            T.push(false);
        }
        console.log("LCFMcreateArr"+T);
        return T;
    }


    ImportCustomLedData(InputData) {
        var arr = Object.keys(this);
        // console.log("ImportCustomLedData", InputData," Object.keys",arr);
        // console.log("ImportCustomLedData_typeof",typeof InputData);0
            for (let index = 0; index < arr.length; index++) {
                if (arr[index] != "") {
                    // console.log("替換目標A",arr[index],this[arr[index]],typeof this[arr[index]]);
                    // console.log("替換目標B",arr[index],InputData[arr[index]],typeof InputData[arr[index]]);
                    this[arr[index]] =InputData[arr[index]];
                    //var tempVar = $.extend(true, {}, InputData[arr[index]]);
                    //this[arr[index]] =JSON.parse(tempVar);
             

                }
            }
        
    }

  

    setDefault(){
        
        
    }
}
