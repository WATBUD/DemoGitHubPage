import { Injectable } from '@angular/core';
@Injectable()
export class ModeParameter {
    color_quantity:number=1;
    translate="";
    PointEffectName;
    Multicolor=false;
    currentColorsIndex=0;
    brightness=100;
    colors= ["#ff0000","#ff8000","#80ff00","#00ff00","#00ffff","#0000ff","#8000ff","#ff00ff","#ff0080","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
    speed=1;
    iconpath:any=["./image/ColorSet/Off/Cycle.png","./image/ColorSet/On/Cycle.png"];
    ParameterNumberList=[
        {   
            visible:true,
            translate: 'SPEED', 
            maxValue:3,
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
    }
}
export class Wave extends ModeParameter{//Wave

    constructor (){
        super();
        this.translate='Neon_stream';
        this.PointEffectName='WaveSync';
        this.colors= ["#ff0000","#ff8000","#80ff00","#00ff00","#00ffff","#0000ff","#8000ff","#ff00ff","#ff0080","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];
    }

};
class Rainbow_wheel extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Rainbow_wheel';
        this.PointEffectName='FastRunWithoutTrace';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Adorn extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Adorn';
        this.PointEffectName='Kamehemeha';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Starlight extends ModeParameter{//Starlight
    constructor (){
        super();
        
        this.translate='Stars_twinkle';
        this.PointEffectName='Starlight';
        this.colors= ["#ff0000"];
    }
};
class Shadow_disappear extends ModeParameter{
    constructor (){
        super();     
        this.translate='Shadow_disappear';
        this.PointEffectName='PassWithoutTrace';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Retro_snake extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Retro_snake';
        this.PointEffectName='Blossom';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Cycle extends ModeParameter{
    constructor (){
        super();
        
        this.translate='ColorLoop';
        this.PointEffectName='AcidMode';
        this.colors=[];
    }
};
class Breath extends ModeParameter{
    constructor (){
        super();   
        this.translate='Respire';
        this.PointEffectName='Breath';
        this.colors= ["#ff0000","#ff8000"];
        
    }
};
class Lighting extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Fixed_on';
        this.PointEffectName='Static';
        this.colors= ["#ff0000"];
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
class Ripple extends ModeParameter{
    constructor (){
        super();
        this.translate='Ripples_shining';
        this.PointEffectName='RippleGraff';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Trigger extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Reaction';
        this.PointEffectName='PassWithoutTrace';
        this.colors= ["#ff0000","#ff8000"];
    }
};
class Flash_away extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Flash_away';
        this.PointEffectName='Rain';
        this.colors= ["#ff0000"];

    }
};
class Sine_wave extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Sine_wave';
        this.PointEffectName='Rain';
        this.colors= ["#ff0000"];

    }
};
class Rain extends ModeParameter{
    constructor (){
        super();
        
        this.translate='Raindrops';
        this.PointEffectName='KeepRaining';
        this.colors= ["#ff0000"];

    }
};
class MAD_CATZ extends ModeParameter{
    constructor (){
        super();
        
        this.translate='MAD_CATZ';
        this.PointEffectName='Rain';
        this.colors= ["#ff0000"];

    }
};

export class M_Built_ineffect {
    ListData = [
        new Wave(),
        new Rainbow_wheel(),
        new Adorn(),
        new Starlight(),
        new Shadow_disappear(),
        new Retro_snake(),
        new Cycle(),
        new Breath(),
        new Lighting(),
        new Ripple(),
        new Trigger(),
        new Flash_away(),
        new Sine_wave(),
        new Rain(),
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
        return new Wave();
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
    getBuilt_inGraph(i,status){
     return  status?'./image/Built_inGraph/Off/'+this.ListData[i].translate+'.png':'./image/Built_inGraph/On/'+this.ListData[i].translate+'.png'
    }
}
