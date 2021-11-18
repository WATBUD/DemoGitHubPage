import { BoxSelectionArea } from './BoxSelectionArea';
import { Injectable } from '@angular/core';
export class ModeParameter {
    frame_selection_range:any=[];  
    coordinateX: any = 0;
    coordinateY: any = 0;
    red: number = 0;
    green: number = 0;
    blue: number = 0;
    saturation: number = 0;//飽和度 0~1
    value: number = 0;//明度 0~1
    canEffectCenter: any =false;
    color_quantity:number=9;
    check: any = true;
    colors= ["#ff0000","#ff8000","#80ff00","#00ff00","#00ffff","#0000ff","#8000ff","#ff00ff","#ff0080","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"];//RGB
    ParameterNumberList=[
        {   
            visible:false,
            translate: 'OPACITY',
            maxValue:100,
            minValue:0,
            setValue:50,
            field:'opacity',
        },
        {   
            visible:false,
            translate: 'SPEED', 
            maxValue:10,
            minValue:1,
            setValue:1,
            field:'speed',
            
        },
        {   
            visible:false,
            translate: 'BANDWIDTH', 
            maxValue:500,
            minValue:50,
            setValue:50,
            field:'bandwidth',
        },
        {   
            visible:false,
            translate: 'ANGLE', 
            maxValue:360,
            minValue:0,
            setValue:0,
            field:'angle',
        },
        {   
            visible:false,
            translate: 'NUMBER', 
            maxValue:10,
            minValue:0,
            setValue:0,
            field:'number',
        },
        {   
            visible:false,
            translate: 'FIRE', 
            maxValue:10,
            minValue:0,
            setValue:0,
            field:'fire',
        },
        {   
            visible:false,
            translate: 'GAP', 
            maxValue:500,
            minValue:0,
            setValue:0,
            field:'gap',
        },
        {   
            visible:false,
            translate: 'SPEED', 
            maxValue:360,
            minValue:0,
            setValue:0,
            field:'speed',
        },
        {   
            visible:false,
            translate: 'RADIUS', 
            maxValue:300,
            minValue:0,
            setValue:0,
            field:'radius',
        },
        {   
            visible:false,
            translate: 'AMPLITUDE', 
            maxValue:8000,
            minValue:200,     
            setValue:200,
            field:'amplitude',
        },
    ] 

    ParameterBoolList=[
        {   
            visible:false,
            translate: 'BUMP',
            setValue:false,
            field:'bump',
        },
        {   
            visible:false,
            translate: 'SEPARATE',
            setValue:false,
            field:'separate',
        },
        {   
            visible:false,
            translate: 'DIRECTION',
            setValue:false,
            field:'direction',
        },
        {   
            visible:false,
            translate: 'FADE',
            setValue:false,
            field:'fade',
        },
        {   
            visible:false,
            translate: 'BIDIRECTIONAL',
            setValue:false,
            field:'bidirectional',
        },
        {   
            visible:false,
            translate: 'GRADIENT',
            setValue:false,
            field:'gradient',
        },
        {   
            visible:false,
            translate: 'FIXED',
            setValue:false,
            field:'fixed',
        },
    ] 

    constructor (inputmax){
        for (let index = 0; index < inputmax; index++) {
           this.frame_selection_range.push(true);     
        }
    }
}

    export class Wave extends ModeParameter {
        sortPosition:any=0;
        iconpath:any=["./image/ColorSet/Off/Wave.png","./image/ColorSet/On/Wave.png"];
        name: any = 'Wave'; 
        constructor (inputmax){
            super(inputmax);
            var findlist=['opacity','speed','bandwidth','angle']
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'bandwidth':
                        target.setValue=200;                       
                        break;
                    case 'speed':
                        target.setValue=5;
                            break;
                }
            }
            var findlist=['gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }
        }
    };
    class ConicBand extends ModeParameter  {
        sortPosition: any = 1;
        iconpath: any = ["./image/ColorSet/Off/ConicBand.png", "./image/ColorSet/On/ConicBand.png"]
        name: any = 'ConicBand';
        constructor(inputmax) {
            super(inputmax);
            this.canEffectCenter = true;
            var findlist = ['opacity', 'speed', 'bandwidth'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element);
                if(target==undefined){
                    console.log('find_Data_fail',target,element);
                    continue;
                }
                else{
                }
                target.visible = true;
                switch (element) {
                    case 'bandwidth':
                        target.setValue = 100;
                        break;
                    case 'speed':
                        target.setValue = 5;
                        break;
                }
            }
            var findlist=['gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }
        }
    };
   
    class Spiral extends ModeParameter {
        sortPosition:any=2;
        iconpath:any=["./image/ColorSet/Off/Spiral.png","./image/ColorSet/On/Spiral.png"]   
        name: any = 'Spiral'; 
        constructor (inputmax){
            super(inputmax);
            this.canEffectCenter = true;
            var findlist=['opacity','speed'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'bandwidth':
                        target.setValue=50;
                        break;
                    case 'speed':
                        target.setValue=5;
                            break;
                }
            }
            var findlist=['gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }
        }
    };
    class Cycle extends ModeParameter {
        sortPosition:any=3;
        iconpath:any=["./image/ColorSet/Off/Cycle.png","./image/ColorSet/On/Cycle.png"]  
        name: any = 'Cycle'; 
        constructor (inputmax){
            super(inputmax);
            var findlist=['opacity','speed'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'speed':
                        target.setValue=2;
                            break;
                }
            }
            var findlist=['gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }
        }
    };
    class LinearWave extends ModeParameter {
        sortPosition:any=4;        
        iconpath:any=["./image/ColorSet/Off/LinearWave.png","./image/ColorSet/On/LinearWave.png"]           
        name: any = 'LinearWave';                          
        constructor (inputmax){
            super(inputmax);
            var findlist=['opacity','speed','bandwidth','angle','gap'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'speed':
                        target.setValue=10;
                            break;
                }
            }
            var findlist=['bump','bidirectional','gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }

        }
    };
    class Ripple extends ModeParameter {
        sortPosition:any=5;
        iconpath:any=["./image/ColorSet/Off/Ripple.png","./image/ColorSet/On/Ripple.png"]   
        name: any = 'Ripple'; 
        constructor (inputmax){
            super(inputmax);
            //sadad=['opacity','speed','bandwidth','angle','number','fire','gap','????','randomspeed','time','radius','amplitude'];
            var findlist=['opacity','speed','bandwidth','gap'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'speed':
                        target.setValue=10;
                            break;
                }
            }
            var findlist=['gradient'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target2 = this.ParameterBoolList.find((x) => x.field == element)
                target2.visible=true;
            }
        }
    };
    class Breathing extends ModeParameter {
        sortPosition:any=6;
        iconpath:any=["./image/ColorSet/Off/Breathing.png","./image/ColorSet/On/Breathing.png"]   
        name:any= 'Breathing'; 
        constructor (inputmax){
            super(inputmax);
             //sadad=['opacity','speed','bandwidth','angle','number','fire','gap','????','randomspeed','time','radius','amplitude'];
             var findlist=['opacity','speed','bandwidth','gap'];
             for (let index = 0; index < findlist.length; index++) {
                 const element = findlist[index];
                 var target = this.ParameterNumberList.find((x) => x.field == element)
                 target.visible=true;
                 switch (element) {
                    case 'bandwidth':
                        target.setValue=500;
                            break;
                     case 'speed':
                         target.setValue=2;
                             break;
                 }
             }
             findlist=[];
             for (let index = 0; index < findlist.length; index++) {
                 const element = findlist[index];
                 var target2 = this.ParameterBoolList.find((x) => x.field == element)
                 target2.visible=true;
             }
        }
    };
    class Rain extends ModeParameter {
        sortPosition:any=7;
        iconpath:any=["./image/ColorSet/Off/Rain.png","./image/ColorSet/On/Rain.png"]   
        name: any = 'Rain'; 
        constructor (inputmax){
            super(inputmax);
              //sadad=['opacity','speed','bandwidth','angle','number','fire','gap','????','randomspeed','time','radius','amplitude'];
              var findlist=['opacity','speed','angle','number'];
              for (let index = 0; index < findlist.length; index++) {
                  const element = findlist[index];
                  var target = this.ParameterNumberList.find((x) => x.field == element)
                  target.visible=true;
                  switch (element) {
                      case 'speed':
                          target.setValue=8;
                              break;
                      case 'number':
                            target.setValue = 5;
                            break;   
                  }
              }
              findlist=[];
              for (let index = 0; index < findlist.length; index++) {
                  const element = findlist[index];
                  var target2 = this.ParameterBoolList.find((x) => x.field == element)
                  target2.visible=true;
              }
        } 
    };
    class Fire extends ModeParameter {
        sortPosition:any=8;
        iconpath:any=["./image/ColorSet/Off/Fire.png","./image/ColorSet/On/Fire.png"]   
        name: any = 'Fire';
        constructor (inputmax){
            super(inputmax);
            this.color_quantity=1;
            this.colors= ["#ff0000"];
              //sadad=['opacity','speed','bandwidth','angle','number','fire','gap','????','randomspeed','time','radius','amplitude'];
              var findlist=['opacity','fire'];
              for (let index = 0; index < findlist.length; index++) {
                  const element = findlist[index];
                  var target = this.ParameterNumberList.find((x) => x.field == element)
                  target.visible=true;
                  switch (element) {
                      case 'opacity':
                          target.setValue=50;
                              break;
                     case 'fire':
                          target.setValue=1;
                              break;

                  }
              }
              findlist=[];
              for (let index = 0; index < findlist.length; index++) {
                  const element = findlist[index];
                  var target2 = this.ParameterBoolList.find((x) => x.field == element)
                  target2.visible=true;
              }
        }
    };

    class Trigger extends ModeParameter {
        sortPosition:any=9;
        iconpath:any=["./image/ColorSet/Off/Trigger.png","./image/ColorSet/On/Trigger.png"]   
        name: any = 'Trigger';
        constructor (inputmax){
            super(inputmax);
            var findlist=['opacity'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'opacity':
                        target.setValue=50;
                            break;

                }
            }
        }
    };
    class AudioCap extends ModeParameter {
        sortPosition:any=10;
        iconpath:any=["./image/ColorSet/Off/AudioCap.png","./image/ColorSet/On/AudioCap.png"]   
        check:any=true;
        name:any= 'AudioCap'; 
        constructor (inputmax){
            super(inputmax);
            this.color_quantity=1;
            this.colors= ["#ff0000"];
            var findlist=['opacity','amplitude'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible=true;
                switch (element) {
                    case 'opacity':
                        target.setValue=50;
                            break;

                }
            }
        }
    };

    class Static extends ModeParameter  {
        sortPosition:any=11;
        iconpath:any=["./image/ColorSet/Off/Static.png","./image/ColorSet/On/Static.png"]   
        name: any = 'Static'; 
        constructor (inputmax){
            super(inputmax);
            this.color_quantity = 1;
            this.colors= ["#ff0000"];//RGB

            //sadad=['opacity','speed','bandwidth','angle','number','fire','gap','????','randomspeed','time','radius','amplitude'];
            var findlist = ['opacity'];
            for (let index = 0; index < findlist.length; index++) {
                const element = findlist[index];
                var target = this.ParameterNumberList.find((x) => x.field == element)
                target.visible = true;
                switch (element) {

                }
            }          
        }
    };
   
    
    export class APModeModule{
        //左上,右上,左下,右下
        maxkaycapNumber=0;
        frame_selectionColors=["#000000","#ffffff"];
        ledcoordinates:any=[];
        AllBlockColor:any=[]//TOTAL NUMBER
        mode_name:any=['Wave','ConicBand','Spiral','Cycle','LinearWave','Ripple','Breathing','Rain','Fire','Trigger','AudioCap'];
        //mode_name:any=["波浪","撞擊","螺旋","循環","觸發","漣漪","呼吸","下雨","火焰","點亮","音樂"];
        modeClassArr:any=[];
        recordModeArr:any=[];
        currentModeIndex:any=0;
        BSModule_L =new BoxSelectionArea("RGBColorBlockStyle");
        constructor(inputMax){
            this.maxkaycapNumber=inputMax;
            this.modeClassArr=[
                new Wave(this.maxkaycapNumber),
                new ConicBand(this.maxkaycapNumber),
                new Spiral(this.maxkaycapNumber),
                new Cycle(this.maxkaycapNumber),
                new LinearWave(this.maxkaycapNumber),
                new Ripple(this.maxkaycapNumber),
                new Breathing(this.maxkaycapNumber),
                new Rain(this.maxkaycapNumber),
                new Fire(this.maxkaycapNumber),
                new Trigger(this.maxkaycapNumber),
                new AudioCap(this.maxkaycapNumber)];
            this.recordModeArr=[
                new Wave(this.maxkaycapNumber),
            ]
            for (var i = 0; i <= this.maxkaycapNumber; i++) {//61Key
                this.AllBlockColor.push({color:this.frame_selectionColors[0],border:true});
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
        getNameSortposition(name){
            console.log("getNameSortposition_indexOf=", this.mode_name.indexOf(name));
           return this.mode_name.indexOf(name);
        }
          
        ImportLedClassData(InputData) {
            console.log("ImportLedClassData", InputData);
            var arr = Object.keys(this.getTarget());
                for (let index = 0; index < arr.length; index++) {
                    if (arr[index] != "") {
                        this.getTarget()[arr[index]] = InputData[arr[index]];
                    }
                }
            
        }
        ImportCreateLedData(InputData) {
            console.log("ImportCreateLedData", InputData);
            InputData=JSON.parse(JSON.stringify(InputData));
            this.recordModeArr.push(InputData);
        }


        getTarget() {
            //console.log(" this.recordModeArr[this.currentModeIndex];", this.recordModeArr[this.currentModeIndex]);
            return this.recordModeArr[this.currentModeIndex];
        }
        switchEffectMode(index){
            var clone = JSON.parse(JSON.stringify(this.modeClassArr[index]))
            console.log("NewswitchEffectMode",clone);
            this.recordModeArr[this.currentModeIndex]=clone;
        }
        deleteChoose(){
            if(this.recordModeArr.length>1){
            this.recordModeArr.splice(this.currentModeIndex,1);
            
            }
            if(this.currentModeIndex-1>=0){

                this.currentModeIndex-=1;
            }

            this.updateframe_selection_range();
            console.log('deleteChoose',"=>currentModeIndex"+this.currentModeIndex);
        }
        addNewChoose(){
            if(this.recordModeArr.length>10){
                return;       
            }

            this.recordModeArr.push(new Wave(this.maxkaycapNumber));
        }
      

        setModeFrameRange(){
            let isAllTrue = this.BSModule_L.checkArrayisAllTrue(this.AllBlockColor);//原本是否框著  TRUE=是
            var selectedEls=this.BSModule_L.selectedEls;
            if (isAllTrue) {
                for (var i = 0; i < this.BSModule_L.selectedEls.length; i++) {
                    this.AllBlockColor[selectedEls[i]].color = this.frame_selectionColors[0];
                    this.AllBlockColor[selectedEls[i]].border = false;
                }
            }
            else {
                for (var i = 0; i < this.BSModule_L.selectedEls.length; i++) {
                    this.AllBlockColor[selectedEls[i]].color = this.frame_selectionColors[1];
                    this.AllBlockColor[selectedEls[i]].border = true;
                }
            }
            console.log("Result_isAllTrue", isAllTrue);
            console.log("Result_selectedEls", selectedEls);
            var nowMode=this.recordModeArr[this.currentModeIndex];
            for (let index = 0; index < selectedEls.length; index++) {
                nowMode.frame_selection_range[selectedEls[index]]=!isAllTrue;
            }
            this.updateframe_selection_range();
            this.BSModule_L.mouseOn = false;
            return "Finish";

        }
        //原有邊框架構 因客戶要求不顯示邊框 這邊採用border判斷是否顯示此格
        updateframe_selection_range(){
            var range=this.recordModeArr[this.currentModeIndex].frame_selection_range;
            // console.log("LEDModeSelect:range:",range);
            for (let i = 0; i < range.length; i++) {
                //const element = range[index];
                if(range[i]==true){
                    //console.log("LEDModeSelect:true:",i); 
                this.AllBlockColor[i].border=true;
                this.AllBlockColor[i].color=this.frame_selectionColors[1];
                }
                else{
                this.AllBlockColor[i].border=false;
                this.AllBlockColor[i].color=this.frame_selectionColors[0];
                }
            }
        }

  






        setCoordinate(X,Y){
            console.log("setCoordinate",X,Y); 
            this.recordModeArr[this.currentModeIndex].coordinateX=X;
            this.recordModeArr[this.currentModeIndex].coordinateY=Y;

        }
        setDefault(){
            
            
        }
    }



       



    




