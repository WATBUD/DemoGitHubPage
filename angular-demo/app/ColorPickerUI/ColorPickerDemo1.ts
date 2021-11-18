import { Component, OnInit } from '@angular/core';
import {
   ColorModule, MacroScriptContent, MacroManager, Wave, APModeModule, KeyBoardManager, LedChainFramesManager,
   AssociateManager, EffectCenter, KeyShortcut, AlertDevice, EventManager, i18nManager, ImgPathList
   , count_boolean, CreateFakeArray, SharesFunction, ProgressBar, M_Light_CS,KeyAssignManager,
} from '../../Module/TSImportManager';
import { Router } from '@angular/router';
@Component({
   selector: 'app-ColorPickerDemo1',
   templateUrl: './ColorPickerDemo1.html',
   styleUrls: ['./ColorPickerDemo1.css'],
   // styles: [':host { display: block;border: 1px solid black; }']//:host custom component style 
}
)

export class ColorPickerDemo1Component implements OnInit {
   newcomponent = "Entered in new component created";
   CurrentPageName = "LIGHTINGSETTING";
   LedColor = new ColorModule("LedColor");
   M_Light_APMode = new APModeModule(1);
   Built_inColor=new ColorModule("Built_inColor");

   constructor(private router: Router) {

    //this.router.navigate(['KeyBoard_RGB'], {});

   }
   ngOnInit() {
   }
   ngAfterViewInit(){
      this.addColor_PickerEvent();
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