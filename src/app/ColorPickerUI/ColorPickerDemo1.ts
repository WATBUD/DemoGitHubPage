import { Component, OnInit } from '@angular/core';
import {
   ColorModule
} from '../../Module/TSImportManager';
import { Router } from '@angular/router';

import {
   M_Light_CS
} from './M_Light_CS';
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
   M_Light_APMode = new M_Light_CS(1);
   Built_inColor=new ColorModule("Built_inColor");


   HSL_Color=new ColorModule("Built_inColor");

   //radius=Saturation,angle=Hue, 
 

   constructor(private router: Router) {

    //this.router.navigate(['KeyBoard_RGB'], {});

   }
   ngOnInit() {
   }
   HSLColorPickerFN :any = [];
   calculationStart(event) {
      var coordinateCircle = document.getElementById("coordinateCircle");
      var testColorBlock = document.getElementById("testColorBlock");
      var cooordinate = [event.offsetX - 5, event.offsetY - 5];
      coordinateCircle.style.marginLeft = cooordinate[0] + 'px';
      coordinateCircle.style.marginTop = cooordinate[1] + 'px';
      console.log('%c ngAfterViewInit', 'background: black; color: white', coordinateCircle);

      //centrePoint
      //radius=Saturation,angle=Hue, 
      var centrePoint = [45, 45];
      var center = ""
      var angle = this.M_Light_APMode.PointRotation(centrePoint, cooordinate);//Hue
      var distance = this.findTheDistanceBetweenTwoPoints(centrePoint, cooordinate)*100/50;//Saturation

      
      this.HSL_Color.Hue = angle;
      this.HSL_Color.Saturation = distance;
      this.HSL_Color.Lightness = 50;

      this.HSL_Color.HSL_RGB_HexSet();
      //this.HSL_Color.hslToRGB(angle,distance,50);
      testColorBlock.style.background = this.HSL_Color.toCssRGB(this.HSL_Color.getRGBA());

      console.log('%c this.HSL_Color.getRGBA()', 'background: white; color: red', this.HSL_Color.getRGBA());

      console.log('%c angle', 'background: white; color: red', angle, distance);
   }
   BindingTooltipEvent: any;
   ngAfterViewInit(){
      var dataCCP = document.querySelector("[data-CCP]");
      //this.addColor_PickerEvent();
     //coordinateCircle.style.cssText;
   //   coordinateCircle.addEventListener("mousedown", (oEvent: MouseEvent) => {
   //    console.log('%c mousedown', 'background: black; color: white', oEvent);
   //   });
   //this.HSLColorPickerFN[0] = this.calculationStart().bind(this);
   this.HSLColorPickerFN[0]=this.calculationStart.bind(this);
   dataCCP.addEventListener("mousedown", this.HSLColorPickerFN[0]);
   dataCCP.addEventListener("mousemove", this.HSLColorPickerFN[0]);

   }




   findTheDistanceBetweenTwoPoints(PointA,PointB){
        // var Dx = Math.abs(PointB[0] - PointA[0]);
        // var Dy = Math.abs(PointB[1] - PointA[1]);
        var StraightLineDistance =Math.sqrt(Math.pow(PointB[0] - PointA[0],2)+Math.pow(PointB[1] - PointA[1],2));
        //var zzz2 =Math.pow(PointB[1] - PointA[1],2);
        console.log('%c StraightLineDistance', 'background: white; color: red', StraightLineDistance);
        return StraightLineDistance;
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
      this.M_Light_APMode.getTarget().colors[this.LedColor.currentRecordIndex] = this.LedColor.Hex;
      console.log('%c updateLedColorRGB', 'background: red; color: white', this.LedColor);
   }


   updateColorBlock() {
      //var target=LedColor;updateLedColorRGBupdateLedColorRGB
      switch (this.CurrentPageName) {
         case "LIGHTINGSETTING":
            this.LedColor.HSL_RGB_HexSet();
            this.LedColor.setGradientBGcolor();
            this.M_Light_APMode.getTarget().colors[this.LedColor.currentRecordIndex] = this.LedColor.Hex;
            //this.setAppModeToServer('byP1');//by updateColorBlock
            break;
         case "Built-ineffects":
            //   this.Built_inColor.HSL_RGB_HexSet();
            //   this.Built_inColor.setGradientBGcolor(); 
            //   // this.Built_ineffect.getTarget().colors[this.Built_inColor.currentRecordIndex]=this.Built_inColor.getRGBA();
            //   this.Built_ineffect.getTarget().currentColorsIndex=this.Built_inColor.currentRecordIndex;
            //   this.refreshM_Light_BuiltIn();
            break;
      }


   }

}