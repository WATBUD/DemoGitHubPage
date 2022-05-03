import { Injectable } from '@angular/core';

var PerixxLayout={"AllData":[{"devicename":"Perixx","SN":"0x320F0x5044","name":"Layout 1","value":1,"m_Identifier":"1","content":{"AllBlockColor":[{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]},{"clearStatus":false,"color":[0,0,0,0]}],"lightData":{"rate":50,"brightness":50,"colorHex":"#ff0000","colorPickerValue":[255,0,0,1],"brightness_Enable":false,"rate_Enable":false,"color_Enable":false,"isRainbow":false,"lightSelected":{"name":"GloriousMode","value":0,"translate":"GloriousMode"}}}}],"_id":"S21tw2mhN6A65aVZnS"}
@Injectable()
export class ModeParameter {
    color_quantity:number=1;
    translate="";
    Multicolor=false;
    Multicolor_Enable=true;
    colorPickerValue=[0,0,0,1]
    brightness=100; 
    speed=50;
    brightness_Enable=true;
    color_Enable=true;
    rate_Enable=true;
    hasChanged=true;
    hasSingleKeyLighting=true;
    colorCardSelectionLocation=0;
    AllBlockColor=[];
    BreathTempArray=[];
    PointEffectName;
    colors= [[255,0,0,1],[255,128,0,1],[255,255,0,1],[128,255,0,1],[0,255,0,1],[0,255,128,1],[0,255,255,1],[0,128,255,1],[0,0,255,1],[128,0,255,1],[255,0,255,1],[255,0,128,1]];

    ParameterNumberList=[
        {   
            visible:false,
            translate: 'SPEED', 
            maxValue:10,
            minValue:1,
            setValue:1,
            field:'speed',
            
        },
    ] 
    ParameterBoolList=[
        {   
            visible:false,
            translate: 'SEPARATE',
            setValue:false,
            field:'separate',
        },
    ] 
    constructor (){
        //this.translate=theArgs.translate;
    }
}
class White extends ModeParameter{
    constructor (){
        super();
        this.translate='White';
        this.PointEffectName='White';
        this.colorPickerValue=[237,238,240,1];
    }
};
export class Red extends ModeParameter{
    constructor (){
        super();
        this.translate='Red';
        this.PointEffectName='Red';
        this.colorPickerValue=[255,0,0,1];

        this.color_Enable=false;
        this.rate_Enable=false;
        this.Multicolor_Enable=false;
    }
};

class Yellow extends ModeParameter{
    constructor (){
        super();
        this.translate='Yellow';
        this.PointEffectName='Yellow';
        this.colorPickerValue=[255,255,0,1];
    }
};
class Green extends ModeParameter{
    constructor (){
        super();
        this.translate='Green';
        this.PointEffectName='Green';
        this.colorPickerValue=[0,255,0,1];

    }
};
class Cyan extends ModeParameter{
    constructor (){
        super();
        this.translate='Cyan';
        this.PointEffectName='Cyan';
        this.colorPickerValue=[0,255,255,1];

    }
};
class Blue extends ModeParameter{
    constructor (){
        super();
        this.translate='Blue';
        this.PointEffectName='Blue';
        this.colorPickerValue=[0,0,255,1];

    }
};
class Purple extends ModeParameter{
    constructor (){
        super();
        this.translate='Purple';
        this.PointEffectName='Purple';
        this.colorPickerValue=[128,0,128,1];
        this.color_Enable=false;
        this.Multicolor_Enable=false;
    }
};
class StaticMulti extends ModeParameter{
    constructor (){
        super();
        this.translate='Static Multi';
        this.PointEffectName='Static Multi';
        this.colorPickerValue=[0,0,0,1];
        this.rate_Enable=false;
    }
};
class Breathing extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing';
        this.PointEffectName='Breathing';
        this.colorPickerValue=[0,0,0,1];
        this.hasSingleKeyLighting=true;
    }
};

class BreathingPerKey extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing Per Key';
        this.PointEffectName='Breathing Per Key';
        this.hasSingleKeyLighting=false;

    }
};
class Rainbow extends ModeParameter{
    constructor (){
        super();
        this.translate='Rainbow';
        this.PointEffectName='Rainbow';
        this.hasSingleKeyLighting=false;

    }
};
class Poptang extends ModeParameter{
    constructor (){
        super();
        this.translate='Poptang';
        this.PointEffectName='Poptang';
        this.hasSingleKeyLighting=false;

    }
};
class Firework extends ModeParameter{
    constructor (){
        super();
        this.translate='Firework';
        this.PointEffectName='Firework';
        this.hasSingleKeyLighting=false;
    }
};
class StarrySky extends ModeParameter{
    constructor (){
        super();
        this.translate='StarrySky';
        this.PointEffectName='StarrySky';
        this.hasSingleKeyLighting=false;
    }
};

export class Built_ineffect {
    maxkaycapNumber=0;
    editingName=false;
    lightListData = [
        new White(),
        new Red(),
        new Yellow(),
        new Green(),
        new Cyan(),
        new Blue(),
        new Purple(),
        new StaticMulti(),
        //ParallelLine
        new Breathing(),
        new BreathingPerKey(),
        new Rainbow(),
        new Poptang(),
        new Firework(),
        new StarrySky(),
    ];
    Built_inSelected=new Red();
    choosingList=[];
    currentModeIndex=0;
    editingNumber=-5;
    constructor(inputMax) {
        console.log("Built_ineffect","color:red",this.lightListData);
        this.maxkaycapNumber = inputMax;
        this.lightListData = this.defaultLightListData();
        for (var i_ListD = 0; i_ListD < this.lightListData.length; i_ListD++) {
            var target=this.lightListData[i_ListD];
            for (var i_ListD2 = 0; i_ListD2 < inputMax; i_ListD2++) {
            target.AllBlockColor.push({ clearStatus:false,color: target.colorPickerValue,breathing:false,choosing: false,coordinateData:[]})
            target.BreathTempArray.push({ color: target.colorPickerValue})
            }
        }
        this.Built_inSelected=JSON.parse(JSON.stringify(this.lightListData[0]));
        
    }
    getTarget() {
        if(this.lightListData[this.currentModeIndex]===undefined){
        console.log("getTarget fail", this.currentModeIndex);
        return;
        }
        return this.lightListData[this.currentModeIndex];
        //return this.lightListData[0];
    }
    resetTarget() {
        var target = this.getTarget();
        for (var i_ListD2 = 0; i_ListD2 < target.AllBlockColor.length; i_ListD2++) {
            target.AllBlockColor[i_ListD2].color=target.colorPickerValue;
            target.BreathTempArray[i_ListD2].color=target.colorPickerValue;
        }

    }
    switchBuilt_ineffect(index){
        if(index==this.currentModeIndex){
            return;
        }
        this.editingNumber=-5;
        this.currentModeIndex=index;
        for (var i_ListD = 0; i_ListD < this.Built_inSelected.AllBlockColor.length; i_ListD++) {
            this.getTarget().AllBlockColor[i_ListD].choosing=this.Built_inSelected.AllBlockColor[i_ListD].choosing;
         }
        this.Built_inSelected=this.getTarget();

        console.log('%c switchBuilt_ineffect','color:rgb(255,77,255)',  index,this.getTarget());

    }

    setColorCardSelectionLocation(index){
        this.Built_inSelected.colorCardSelectionLocation=index;
    }
    
    setTheSelectedColorCardColor(colorRGBA=[0,0,0,1]){
        console.log('%c setTheSelectedColorCardColor', 'background: black; color: white', colorRGBA);

        this.Built_inSelected.colors[this.Built_inSelected.colorCardSelectionLocation]=colorRGBA;
    }
    resetAllData(){
        this.lightListData = this.defaultLightListData();
        this.setModeIndex(null,0);
    }
    defaultLightListData() {
        return [
            new White(),
            new Red(),
            new Yellow(),
            new Green(),
            new Cyan(),
            new Blue(),
            new Purple(),
            new StaticMulti(),
            //ParallelLine
            new Breathing(),
            new BreathingPerKey(),
            new Rainbow(),
            new Poptang(),
            new Firework(),
            new StarrySky(),
        ];
    }
    setGroupArrayColor(assignColor){  
        var target=this.Built_inSelected.AllBlockColor;
        if(this.Built_inSelected.hasSingleKeyLighting){
            for (var i_ListD2 = 0; i_ListD2 < target.length; i_ListD2++) {
                if(target[i_ListD2].choosing){
                    this.Built_inSelected.BreathTempArray[i_ListD2].color = assignColor;
                }
            }
        }
        else{
            this.setTheSelectedColorCardColor(assignColor);
        }
        console.log('%c setGroupArrayColor', 'background: black; color: white', assignColor,target);

    }
    setQuicklySelectionArea(assignData){  
        if(assignData==undefined){
            return;
        }
        console.log('%c setQuicklySelectionArea', 'background: black; color: white', assignData);
        var target=this.Built_inSelected.AllBlockColor;
        if(assignData.name=="All Keys"){
            for (var i_List1 = 0; i_List1 < target.length; i_List1++) {
                target[i_List1].choosing=assignData.currentStateOfTheSwitch;
            }
        }
        else
        {
            var group=assignData.groupIndex;
            console.log('%c group', 'background: black; color: white', group,assignData.currentStateOfTheSwitch);

            for (var i_ListD2 = 0; i_ListD2 < group.length; i_ListD2++) {
                target[group[i_ListD2]].choosing=assignData.currentStateOfTheSwitch;
            }
        }

    }




    getBlockValue(index) {
        var data = this.Built_inSelected.AllBlockColor[index];
        //console.log("getBlockValue", data);

        return data;
    }


    getIndexCssRGBA(index){
        if(index!=-1){
            return this.toCssRGBA(this.Built_inSelected.BreathTempArray[index].color);
        }
        else{
            return [0,0,0,0];
        }
    }
    toCssRGBA(RGBA = [0, 0, 0, 0]) {
        return 'rgb(' + RGBA[0] + ',' + RGBA[1] + ',' + RGBA[2] + ',' + RGBA[3] + ')';
    }
    toCssRGB(RGBA = [0, 0, 0]) {
        return 'rgb(' + RGBA[0] + ',' + RGBA[1] + ',' + RGBA[2] + ')';
    }
    setModeIndex($event,index){
     
        this.currentModeIndex=index;
    }
    checkNullThenUpdateValue(){

        // var target=this.getTarget();
        // for (let index = 0; index <target.ParameterNumberList.length; index++) {
        //     var element = target.ParameterNumberList[index]
        //     if(element.setValue===null || element.setValue<element.minValue){
        //         element.setValue=element.minValue;
        //     }
        //     if(element.setValue>element.maxValue){
        //         element.setValue=element.maxValue;
        //     }
        // }
        var target=this.getTarget();
        for (let index = 0; index <target.ParameterNumberList.length; index++) {
            var element = target.ParameterNumberList[index]
            if(target[element.field]===null || target[element.field]<element.minValue){
                target[element.field]=element.minValue;
            }
            if(target[element.field]>element.maxValue){
                target[element.field]=element.maxValue;
            }
        }
    }
}
