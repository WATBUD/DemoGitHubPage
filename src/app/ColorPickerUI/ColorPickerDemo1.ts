import { Component, OnInit } from '@angular/core';
import {
   ColorModule
} from '../../Module/TSImportManager';

import { Router } from '@angular/router';

// import {
//    M_Light_CS
// } from './M_Light_CS';
@Component({
   selector: 'app-ColorPickerDemo1',
   templateUrl: './ColorPickerDemo1.html',
   styleUrls: ['./ColorPickerDemo1.css','./CircleColorPicker.css'],
   // styles: [':host { display: block;border: 1px solid black; }']//:host custom component style 
}
)

export class ColorPickerDemo1Component implements OnInit {
   newcomponent = "Entered in new component created";
   CurrentPageName = "";//LIGHTINGSETTING
   LedColor = new ColorModule("LedColor");
   //M_Light_APMode = new M_Light_CS(1);
   Built_inColor=new ColorModule("Built_inColor");
   ColorWheelModule=new ColorModule("Circle_Animation");
   theColorWheelISBeingClicked=false;

   DefaultColorList=[
      [255,0,0],[255,128,0],[255,255,0],[128,255,0],[255,128,0],[0,255,128],[0,255,255],[0,128,255],
      [0,0,255],[128,0,255],[255,0,128],[255,255,255],[255,152,0],[0,183,195],
   ]
   CustomColorList=[
      [255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],
      [255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],
   ]



   //radius=Saturation,angle=Hue, 
   constructor(private router: Router) {
    //this.router.navigate(['KeyBoard_RGB'], {});
   }
   ngOnInit() {
   }
   HSLColorPickerFN :any = [];
   ngAfterViewInit(){
      //this.addColor_PickerEvent();
     //coordinateCircle.style.cssText;
   //   coordinateCircle.addEventListener("mousedown", (oEvent: MouseEvent) => {
   //    console.log('%c mousedown', 'background: black; color: white', oEvent);
   //   });
   //this.HSLColorPickerFN[0] = this.setTheColorWheelValue().bind(this);
   this.HSLColorPickerFN[0]=((oEvent: MouseEvent) => {
      console.log('%c mousedown', 'background: black; color: white', oEvent);
      this.theColorWheelISBeingClicked=true;
      this.ColorWheelModule.setTheColorWheelValue(oEvent);
   });
   this.HSLColorPickerFN[1]=((oEvent: MouseEvent) => {
      //console.log('%c mousemove', 'background: black; color: white', oEvent);
      //this.theColorWheelISBeingClicked=true;
      if(this.theColorWheelISBeingClicked){
         this.ColorWheelModule.setTheColorWheelValue(oEvent);
      }

   });
   this.HSLColorPickerFN[2]=((oEvent: MouseEvent) => {
      console.log('%c mouseup', 'background: black; color: white', oEvent);
      this.theColorWheelISBeingClicked=false;
   });




   //this.setTheColorWheelValue.bind(this);
   var dataCCP = document.querySelector("[data-CCP]");
   dataCCP.addEventListener("mousedown", this.HSLColorPickerFN[0]);
   dataCCP.addEventListener("mousemove", this.HSLColorPickerFN[1]);
   dataCCP.addEventListener("mouseup", this.HSLColorPickerFN[2]);

   }
    
   updateColorWheel(event) {
      console.log('%c updateColorWheel', 'background: black; color: white', event);
      let backgroundColor = event.target.style.backgroundColor;
      this.ColorWheelModule.onclickColorDefault(event.target,0);
      
      console.log('%c backgroundColor', 'background: black; color: white', backgroundColor);
   }







   LedColorhueChange() {
      this.updateColorBlock(); //by hueChange 
   }
   colorPickerFnArrP1: any = [];
   addColor_PickerEvent() {
      console.log('%c addColor_PickerEvent', 'background: black; color: white', this.colorPickerFnArrP1);
      this.colorPickerFnArrP1[1] = (oEvent: MouseEvent) => {
         switch (this.CurrentPageName) {
            case "LIGHTINGSETTING":
               this.LedColor.mousemove(oEvent);
               break;
            case "Built-ineffects":
               this.Built_inColor.mousemove(oEvent);
               break;
         }
         this.updateColorBlock(); //by colorPicker          
      };
      this.colorPickerFnArrP1[0] = (oEvent: MouseEvent) => {
         switch (this.CurrentPageName) {
            case "LIGHTINGSETTING":
               this.LedColor.mousedown(oEvent);
               break;
            case "Built-ineffects":
               this.Built_inColor.mousedown(oEvent);
               break;
         }
         this.updateColorBlock();  //by colorPicker 
         document.addEventListener("mousemove", this.colorPickerFnArrP1[1]);
      };
      document.addEventListener("mouseup", () => {
         document.removeEventListener("mousemove", this.colorPickerFnArrP1[1]);
      });
      var parentDiv;
      switch (this.CurrentPageName) {
         case "LIGHTINGSETTING":
            parentDiv = this.LedColor.getParentDiv();
            break;
         case "Built-ineffects":
            parentDiv = this.Built_inColor.getParentDiv();
            break;
      }
      parentDiv.removeEventListener("mousedown", this.colorPickerFnArrP1[0]);
      parentDiv.addEventListener("mousedown", this.colorPickerFnArrP1[0]);



   }
   
   updateLedColorRGB(){
      this.LedColor.update_RGBA_value();
      //this.M_Light_APMode.getTarget().colors[this.LedColor.currentRecordIndex] = this.LedColor.Hex;
      console.log('%c updateLedColorRGB', 'background: red; color: white', this.LedColor);
   }


   updateColorBlock() {
      //var target=LedColor;updateLedColorRGBupdateLedColorRGB
      switch (this.CurrentPageName) {
         case "LIGHTINGSETTING":
            this.LedColor.HSL_RGB_HexSet();
            this.LedColor.setGradientBGcolor();
            //this.M_Light_APMode.getTarget().colors[this.LedColor.currentRecordIndex] = this.LedColor.Hex;
            //this.setAppModeToServer('byP1');//by updateColorBlock
            break;
      }


   }

}