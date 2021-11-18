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
    PointEffectName;
    value=0;

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
export class GloriousMode extends ModeParameter{
    constructor (){
        super();
        this.translate='GloriousMode';
        this.PointEffectName='GloriousMode';
        this.value=0;
        this.color_Enable=false;
        this.rate_Enable=false;
        this.Multicolor_Enable=false;
    }
};
class Wave1 extends ModeParameter{
    constructor (){
        super();
        this.translate='Wave#1';
        this.PointEffectName='Wave1';
        this.value=1;
    }
};
class Breathing extends ModeParameter{
    constructor (){
        super();
        this.translate='Breathing';
        this.PointEffectName='Breathing';
        this.value=2;
    }
};
class Wave2 extends ModeParameter{
    constructor (){
        super();
        this.translate='Wave#2';
        this.PointEffectName='Wave2';
        this.value=3;
    }
};
class SpiralingWave extends ModeParameter{
    constructor (){
        super();
        this.translate='SpiralingWave';
        this.PointEffectName='SpiralingWave';
        this.value=4;
    }
};
class AcidMode extends ModeParameter{
    constructor (){
        super();
        this.translate='AcidMode';
        this.PointEffectName='AcidMode';
        this.value=5;
        this.color_Enable=false;
        this.Multicolor_Enable=false;
    }
};
class NormallyOn extends ModeParameter{
    constructor (){
        super();
        this.translate='NormallyOn';
        this.PointEffectName='NormallyOn';
        this.value=6;
        this.rate_Enable=false;
    }
};
class RippleGraff extends ModeParameter{
    constructor (){
        super();
        this.translate='RippleGraff';
        this.PointEffectName='RippleGraff';
        this.value=7;
    }
};
class LEDOFF extends ModeParameter{
    constructor (){
        super();
        this.translate='LEDOFF';
        this.PointEffectName='LEDOFF';
        this.value=8;
        this.brightness_Enable=false;
        this.rate_Enable=false;
        this.color_Enable=false;
    }
};
class PassWithoutTrace extends ModeParameter{
    constructor (){
        super();
        this.translate='PassWithoutTrace';
        this.PointEffectName='PassWithoutTrace';
        this.value=9;
    }
};
class FastRunWithoutTrace extends ModeParameter{
    constructor (){
        super();
        this.translate='FastRunWithoutTrace';
        this.PointEffectName='FastRunWithoutTrace';
        this.value=10;
    }
};
class Matrix2 extends ModeParameter{
    constructor (){
        super();
        this.translate='Matrix2';
        this.PointEffectName='Matrix2';
        this.value=11;
    }
};
class Matrix3 extends ModeParameter{
    constructor (){
        super();
        this.translate='Matrix3';
        this.PointEffectName='Matrix3';
        this.value=12;
    }
};
class Rainbow extends ModeParameter{
    constructor (){
        super();
        this.translate='Rainbow';
        this.PointEffectName='Rainbow';
        this.value=13;
        this.color_Enable=false;
        this.Multicolor_Enable=false;

    }
};
class HeartbeatSensor extends ModeParameter{
    constructor (){
        super();
        this.translate='HeartbeatSensor';
        this.PointEffectName='HeartbeatSensor';
        this.value=14;
    }
};
class DigitTimes extends ModeParameter{
    constructor (){
        super();
        this.translate='DigitTimes';
        this.PointEffectName='DigitTimes';
        this.value=15;
    }
};
class Kamehemeha extends ModeParameter{
    constructor (){
        super();
        this.translate='Kamehemeha';
        this.PointEffectName='Kamehemeha';
        this.value=16;
    }
};
class Pingpong extends ModeParameter{
    constructor (){
        super();
        this.translate='Pingpong';
        this.PointEffectName='Pingpong';
        this.value=17;
        this.rate_Enable=false;
    }
};
class Surmount extends ModeParameter{
    constructor (){
        super();
        this.translate='Surmount';
        this.PointEffectName='Surmount';
        this.value=18;
        this.rate_Enable=false;
        this.Multicolor_Enable=false;

    }
};
export class Built_ineffect {
    ListData = [
        new GloriousMode(),
        new Wave1(),
        new Wave2(),
        new SpiralingWave(),
        new AcidMode(),
        new Breathing(),
        new NormallyOn(),
        new RippleGraff(),
        new PassWithoutTrace(),
        new FastRunWithoutTrace(),
        new Matrix2(),
        new Matrix3(),
        new Rainbow(),
        new HeartbeatSensor(),
        new DigitTimes(),
        new Kamehemeha(),
        new Pingpong(),
        new Surmount(),
        new LEDOFF(),
    ];
    Built_inSelected=new GloriousMode();
    currentModeIndex=0;
    
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
            new GloriousMode(),
            new Wave1(),
            new Wave2(),
            new SpiralingWave(),
            new AcidMode(),
            new Breathing(),
            new NormallyOn(),
            new RippleGraff(),
            new PassWithoutTrace(),
            new FastRunWithoutTrace(),
            new Matrix2(),
            new Matrix3(),
            new Rainbow(),
            new HeartbeatSensor(),
            new DigitTimes(),
            new Kamehemeha(),
            new Pingpong(),
            new Surmount(),
            new LEDOFF(),
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
