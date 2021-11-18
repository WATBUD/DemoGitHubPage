

import { Injectable } from '@angular/core';

@Injectable()
export class EffectCenter {
    RGBEffectCenterEventArr: any = [];
    mouseOn = false;
    TargerName:any= "";
    selectEffectCenter: Boolean=false;
    Led:any;
    App:any;
    constructor(){

    }

    mousedown() {
    }
    coordinate_move(e: MouseEvent) {
        if (!this.selectEffectCenter) return;
        console.log("coordinate_move",e.buttons,e.which,this.selectEffectCenter); 
        var RGBEffectCenter = document.getElementById("RGBEffectCenter");
        RGBEffectCenter.style.display = "block"
        RGBEffectCenter.style.left = e.layerX  + "px";
        //- RGBEffectCenter.clientWidth / 2 + "px";
        RGBEffectCenter.style.top = e.layerY  + "px";
        //- RGBEffectCenter.clientHeight / 2 + "px";
    }
    
    mousemove() {
    }

    tese(){

    }
    addCenterEvent(name){
        this.TargerName=name;
        var target=document.getElementById(this.TargerName);
        this.RGBEffectCenterEventArr[0] = (e: MouseEvent) => {
            if (e.buttons !== 1 || e.which !== 1 ) return;
            if (!this.selectEffectCenter) return;
            this.coordinate_move(e);
            target.addEventListener("mousemove", this.RGBEffectCenterEventArr[1]);
        }
        this.RGBEffectCenterEventArr[1] = (e: MouseEvent) => {
            if (!this.selectEffectCenter) return;
            this.coordinate_move(e);            
            this.App.M_Light_APMode.setCoordinate(e.layerX, e.layerY);
        }
        this.RGBEffectCenterEventArr[2] = (e: MouseEvent) => {
            if (!this.selectEffectCenter) return;
            this.App.M_Light_APMode.setCoordinate(e.layerX,e.layerY);
            target.removeEventListener("mousemove", this.RGBEffectCenterEventArr[1]);
            this.App.setAppModeToServer('RGBEffectCenter');
        }
        target.addEventListener("mousedown", this.RGBEffectCenterEventArr[0]);
        target.addEventListener("mousemove", this.RGBEffectCenterEventArr[1]);
        target.addEventListener("mouseup", this.RGBEffectCenterEventArr[2]);
        document.addEventListener("mouseup", (e: MouseEvent)=>{
            target.removeEventListener("mousemove", this.RGBEffectCenterEventArr[1]);
            if(this.selectEffectCenter){
                this.App.setAppModeToServer('DocumentMouseupRGBEffectCenter');
            }
        });
    }
}