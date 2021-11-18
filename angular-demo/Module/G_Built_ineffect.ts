


import { Injectable } from '@angular/core';
@Injectable()
export class ModeParameter {
    color_quantity:number=1;
    translate="";
    PointEffectName;
    currentColorsIndex=0;
    colorPickerValue=[255,0,0,1];
    // colors= ["#ff0000","#ff8000","#80ff00","#00ff00","#00ffff","#0000ff","#8000ff","#ff00ff","#ff0080","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
    colors= [[255,0 ,0,1],[255 ,165,0,1],[255 ,255,0,1],[0,255,0,1],[0,127,255,1],[0,0,255,1],[139 ,0,255,1],[255 ,255,255,1]];
    ParameterNumberList=[
        {   
            visible:true,
            translate: 'SPEED', 
            maxValue:5,
            minValue:1,
            setValue:5,
            field:'speed',
            
        },
        {   
            visible:true,
            translate: 'BRIGHTNESS', 
            maxValue:4,
            minValue:0,
            setValue:4,
            field:'brightness',
            
        },
    ] 
    ParameterBoolList=[
        {   
            visible:false,
            translate: 'SEPARATE',
            setValue:false,
            field:'separate',
        },
        {   
            visible:true,
            translate: 'MULTICOLOR',
            setValue:false,
            field:'multicolor',
        },
    ] 
    constructor (){
    }
}
export class Neon_stream extends ModeParameter{

    constructor (){
        super();
        this.translate='Neon_stream';
        this.PointEffectName='WaveSync';
        this.colors=[];
        var findBoolList=['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue=true;
                    target.visible=false;
                        break;
            }
        }
    }


};

class Rainbow_wheel extends ModeParameter{
    constructor (){
        super();
        this.translate='Rainbow_wheel';
        this.PointEffectName='SpiralingWave';
        this.colors=[];
        var findBoolList=['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue=true;
                    target.visible=false;
                        break;
            }
        }
    }
    
};
class Adorn extends ModeParameter {
    constructor() {
        super();

        this.translate = 'Adorn';
        this.PointEffectName = 'Matrix3';
        this.colors = [];
        var findBoolList = ['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue = true;
                    target.visible = false;
                    break;
            }
        }
    }

};
class Stars_twinkle extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Stars_twinkle';
        this.PointEffectName='Starlight';
        this.colors=[];
        var findBoolList=['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue=true;
                    target.visible=false;
                        break;
            }
        }
    }
    
};                                                                                                                                                              
class Shadow_disappear extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Shadow_disappear';
        this.PointEffectName='Shadow_disappear';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class Retro_snake extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Retro_snake';
        this.PointEffectName='Retro_snake';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class ColorLoop extends ModeParameter {
    constructor() {
        super();
        this.translate = 'ColorLoop';
        this.PointEffectName = 'AcidMode';
        this.colors = [];
        var findBoolList = ['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue = true;
                    target.visible = false;
                    break;
            }
        }
    }
};
class Respire extends ModeParameter{
    constructor (){
        super();
        this.translate='Respire';
        this.PointEffectName='Breathing';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
};

class Fixed_on extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Fixed_on';
        this.PointEffectName='NormallyOn';
        var findlist=['speed'];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class Ripples_shining extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Ripples_shining';
        this.PointEffectName='RippleGraff';
        this.colors=[];
        var findBoolList = ['multicolor'];
        for (let index = 0; index < findBoolList.length; index++) {
            const element = findBoolList[index];
            var target = this.ParameterBoolList.find((x) => x.field == element)
            switch (element) {
                case 'multicolor':
                    target.setValue = true;
                    target.visible = false;
                    break;
            }
        }
    }
    
};
class Reaction extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Reaction';
        this.PointEffectName='PassWithoutTrace';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class Flash_away extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Flash_away';
        this.PointEffectName='FastRunWithoutTrace';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class Sine_wave extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Sine_wave';
        this.PointEffectName='HeartbeatSensor';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class Raindrops extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Raindrops';
        this.PointEffectName='DigitTimes';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
class MAD_CATZ extends ModeParameter{
    constructor (){
        super();
        
        this.translate='MAD_CATZ';
        this.PointEffectName='MAD_CATZ';
        var findlist=[];
        for (let index = 0; index < findlist.length; index++) {
            const element = findlist[index];
            var target = this.ParameterNumberList.find((x) => x.field == element)
            target.visible=false;
            // switch (element) {
            //     case 'speed':
            //         target.setValue=8;
            //             break;
            //     case 'number':
            //           target.setValue = 5;
            //           break;   
            // }
        }
    }
    
};
// Neon_stream  隨波逐流(默認)-----Wave1
// Rainbow_wheel 彩虹輪盤-------------SpiralingWave
// Adorn 百花爭艷-------------Matrix3
// Stars_twinkle繁星點點-------------Starlight
// Shadow_disappear 踏雪無痕-------------無對應
// Retro_snake 川流不息-------------Retro_snake
// ColorLoop 光譜循環-------------AcidMode
// Respire呼吸模式-------------Breating
// Fixed_on常亮模式-------------NormallyOn
// Ripples_shining 漣漪擴散-------------RippleGraff
// Reaction如影隨形-------------PassWithoutTrace
// Flash_away一觸即發-------------FastRunWithoutTrace
// Sine_wave 正旋光波-------------HeartbeatSensor
// Raindrops雨中漫步-------------DigitTimes
// MAD_CATZ 廠商-------------MAD_CATZ


export class G_Built_ineffect {
    ListData = [
      new Neon_stream(),
      new Rainbow_wheel(),
      new Adorn(),
      new Stars_twinkle(),
      new Shadow_disappear(),
      new Retro_snake(),
      new ColorLoop(),
      new Respire(),
      new Fixed_on(),
      new Ripples_shining(),
      new Reaction(),
      new Flash_away(),
      new Sine_wave(),
      new Raindrops(),
      new MAD_CATZ(),
    ];
    //Built_inSelected=new Wave();
    currentModeIndex=0;
    constructor() {
        //this.Built_ineffectsData.test
        console.log("Built_ineffect","color:red",this.ListData);
    }
    getTarget() {
        //console.log(" this.recordModeArr[this.currentModeIndex];", this.recordModeArr[this.currentModeIndex]);
        return this.ListData[this.currentModeIndex];
    }
    getDefault(){
        // return {
        //     translate:'Neon_stream',
        //     PointEffectName:'WaveSync',
        //     colorPickerValue:[255,0,0,1],
        //     brightness:100,
        //     speed:100,
        // };
        return new Neon_stream();
    }
  
    setModeIndex($event,index){
     
        this.currentModeIndex=index;
    }
    setModeForName(obj){
        console.log("%c Built_ineffect_setModeForName","color:red",obj);
        var target = this.ListData.findIndex((x) => x.translate == obj.translate);

        if(target!=-1){
            this.currentModeIndex=target;
            this.ListData[this.currentModeIndex]=obj;
        }
    }
    getTargetNumberParameters(filedName=''){
        var target = this.getTarget().ParameterNumberList.find((x) => x.field == filedName);
        if(target!=undefined){
            console.log('%c getTargetNumberParameters', 'color:rgb(255,75,255,1)', filedName,target);
            return target.setValue;

        }
        else{
            alert('getTargetNumberParameters=>'+filedName);
            //console.log('%c AL_OverAll_List_undefined', 'color:rgb(255,75,255,1)', target);
        }
    }
    getTargetBoolParameters(filedName=''){

        var target = this.getTarget().ParameterBoolList.find((x) => x.field == filedName);
        if(target!=undefined){
            console.log('%c getTargetBoolParameters', 'color:rgb(255,75,255,1)', filedName,target);
            return target.setValue;

        }
        else{
            alert('getTargetBoolParameters=>'+filedName);
            //console.log('%c AL_OverAll_List_undefined', 'color:rgb(255,75,255,1)', target);
        }
    }

    checkNullThenUpdateValue(){

        var target=this.getTarget();
        console.log('%c checkNullThenUpdateValue', 'color:rgb(255,75,255,1)', target);
        for (let index = 0; index <target.ParameterNumberList.length; index++) {
            var element = target.ParameterNumberList[index]
            if(element.setValue===null || element.setValue<element.minValue){
                element.setValue=element.minValue;
            }
            if(element.setValue>element.maxValue){
                element.setValue=element.maxValue;
            }
        }
        // for (let index = 0; index <target.ParameterNumberList.length; index++) {
        //     var element = target.ParameterNumberList[index]
            
        //     if(target[element.field]===null || target[element.field]<element.minValue){
        //         target[element.field]=element.minValue;
        //     }
        //     if(target[element.field]>element.maxValue){
        //         target[element.field]=element.maxValue;
        //     }
        // }
    }
    getBuilt_inGraph(i,status){
     return  status?'./image/Built_inGraph/Off/'+this.ListData[i].translate+'.png':'./image/Built_inGraph/On/'+this.ListData[i].translate+'.png'
    }
}
