import { Injectable } from '@angular/core';
@Injectable()
export class ModeParameter {
    color_quantity:number=1;
    translate="";
    Multicolor=false;
    Multicolor_Enable=true;
    colorPickerValue=[255,0,0,1]
    brightness=100; 
    speed=50;
    brightness_Enable=true;
    color_Enable=true;
    rate_Enable=true;
    hasChanged=true;
    hasSingleKeyLighting=true;
    PointEffectName;
    colors= ["#ff0000","#ff8000","#80ff00","#00ff00","#00ffff","#0000ff","#8000ff","#ff00ff","#ff0080","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
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
export class Red extends ModeParameter{
    constructor (){
        super();
        this.translate='Red';
        this.PointEffectName='Red';
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
    }
};
class Green extends ModeParameter{
    constructor (){
        super();
        this.translate='Green';
        this.PointEffectName='Green';
    }
};
class Cyan extends ModeParameter{
    constructor (){
        super();
        this.translate='Cyan';
        this.PointEffectName='Cyan';
    }
};
class Blue extends ModeParameter{
    constructor (){
        super();
        this.translate='Blue';
        this.PointEffectName='Blue';
    }
};
class Purple extends ModeParameter{
    constructor (){
        super();
        this.translate='Purple';
        this.PointEffectName='Purple';
        this.color_Enable=false;
        this.Multicolor_Enable=false;
    }
};
class StaticMulti extends ModeParameter{
    constructor (){
        super();
        this.translate='Static Multi';
        this.PointEffectName='Static Multi';
        this.rate_Enable=false;
    }
};
class Breathing extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing';
        this.PointEffectName='Breathing';
        this.hasSingleKeyLighting=false;
    }
};
class GradualBreathing extends ModeParameter{
    constructor (){
        super();
        this.translate='Gradual Breathing';
        this.PointEffectName='Gradual Breathing';
        this.brightness_Enable=false;
        this.rate_Enable=false;
        this.color_Enable=false;
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
class BreathingPerKey extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing Per Key';
        this.PointEffectName='Breathing Per Key';
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
class BreathingTrigger extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing Trigger';
        this.PointEffectName='Breathing Trigger';
        this.hasSingleKeyLighting=false;

    }
};
class RainbowTrigger extends ModeParameter{
    constructor (){
        super();
        this.translate='RainbowTrigger';
        this.PointEffectName='RainbowTrigger';
        this.hasSingleKeyLighting=false;

    }
};
export class Built_ineffect {
    ListData = [
        new Red(),
        new Yellow(),
        new Green(),
        new Cyan(),
        new Blue(),
        new Purple(),
        new StaticMulti(),
        new Breathing(),
        new GradualBreathing(),
        new Rainbow(),
        new BreathingPerKey(),
        new Poptang(),
        new BreathingTrigger(),
        new RainbowTrigger(),
    ];
    Built_inSelected=new Red();
    currentModeIndex=-1;
    
    constructor() {
        console.log("Built_ineffect","color:red",this.ListData);
    }
    getTarget() {
        if(this.ListData[this.currentModeIndex]===undefined){
        console.log("getTarget fail", this.currentModeIndex);
        return;
        }
        return this.ListData[this.currentModeIndex];
        //return this.ListData[0];
    }
    
    resetAllData(){
        this.ListData = [
            new Red(),
            new Yellow(),
            new Green(),
            new Cyan(),
            new Blue(),
            new Purple(),
            new StaticMulti(),
            new Breathing(),
            new GradualBreathing(),
            new Rainbow(),
            new BreathingPerKey(),
            new Poptang(),
            new BreathingTrigger(),
            new RainbowTrigger(),
        ];
        this.setModeIndex(null,0);
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
