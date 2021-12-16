import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ImgPathList } from './ImgPath';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroManager } from './MacroModule';
import { i18nManager } from './i18n';
import { EventManager } from './EventManager';
import { KeyBoardStyle } from './KeyBoardStyle';
import { ThrowStmt } from '@angular/compiler';
import { M_Light_CS } from './M_Light_Perixx';
import { BoxSelectionArea } from './BoxSelectionArea';
import {
  ColorModule
} from '../../Module/TSImportManager';
import { ColorOutput } from '../ngcolor/color-output';

@Component({
  selector: 'app-perixx',
  templateUrl: './perixx.component.html',
  styleUrls: ['./perixx.component.css','./NavigationOption.css',
  './Lighting_Option.css','./Home_Option.css',
  './MacroPage.scss','./KeyBoardPage.scss','./CircleColorPicker.css'
,]
})
export class PerixxComponent implements OnInit {
  CRUDCheck = false;
  currentPage = "";
  ImgPath=ImgPathList.getInstance();
  i18nManager=i18nManager.getInstance();
  macroOnEdit=false;
  macroContentInEdit=false;
  KeyBoardManager;
  KeyBoardLibray;
  MacroManager=new MacroManager();
  operationMenuFlag=false;
  KeyBoardStyle = new KeyBoardStyle();
  M_Light_Perixx= new M_Light_CS(80);
  BoxSelectionArea=new BoxSelectionArea("KeyBoard_Block");
  EM=new EventManager();
  ColorWheelModule=new ColorModule("Circle_Animation");
  theColorWheelISBeingClicked=false;
  settingsOption=[
    {'name':'Information'
    },
    {'name':'Layout'
    },
    {'name':'Lighting'
    },
    {'name':'Macro'
    },
    {'name':'Auto Sleep'
    },
    {'name':'Bluetooth'
    },
    {'name':'Reset'
    },
  ]
  DefaultColorList = [
    [255, 0, 0], [255, 128, 0], [255, 255, 0], [128, 255, 0], [0, 255, 0], [0, 255, 128], [0, 255, 255], [0, 128, 255],
    [0, 0, 255], [128, 0, 255], [255, 0, 255],[255, 0, 128],[0, 0, 0],[255, 255, 255], [255, 152, 0], [0, 183, 195],
  ]
  CustomColorList = [
    [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255],[255, 255, 255],
    [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255],[255, 255, 255],
  ]

  settingLocation="Information";
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    //this.MacroManager.getClass().add
    this.initialzeTheDevice();
  }

  ngAfterViewInit(){
    //this.setPageIndex('SelectDevice');
    //this.setPageIndex('KEYBOARDSETTINGS');
    document.addEventListener('click', (e:any)=>{
       //console.log('%c document_e.target','color:rgb(255,77,255)',  e.target);
        if (e.target.dataset.identity==undefined) {
            this.CRUDCheck = false;
            this.operationMenuFlag=false;
            //this.macroOnEdit= false;
        }
    });
    this.MacroManager.createFolderFile();
    this.setPageIndex('Lighting_Nav');
  }

  initialzeTheDevice(){
    var KeyBoardLength=this.KeyBoardStyle.getTarget().keyMapping.length;
    this.KeyBoardManager = new KeyBoardManager(KeyBoardLength,3);
    this.KeyBoardLibray = new KeyBoardManager(KeyBoardLength,3);
    this.M_Light_Perixx= new M_Light_CS(KeyBoardLength);
  }

  HSLColorPickerFN=[];
  updateColorWheel(event) {
    console.log('%c updateColorWheel', 'background: black; color: white', event);
    let backgroundColor = event.target.style.backgroundColor;
    this.ColorWheelModule.onclickColorDefault(event.target,0);
    this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();
    console.log('%c backgroundColor', 'background: black; color: white', backgroundColor);
  }

   //["Keyboard_Nav","Macro_Nav","Home_Nav"]
  setPageIndex(pageName = "") {

    if (this.currentPage !=pageName)
    this.currentPage = pageName;
    this.changeDetectorRef.detectChanges();

    switch (this.currentPage) {
      case "Home_Nav":

        break;
      case "Keyboard_Nav":
        setTimeout(() => {
          var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
          this.KeyBoardStyle.applyStyles(Keyboard_NavList);
          this.KeyBoardManager.refreshKeyBoardTemp();
        }, 500);
        break;
      case "Lighting_Nav":
        setTimeout(() => {
          var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
          this.KeyBoardStyle.applyStyles(Keyboard_NavList);
          this.KeyBoardManager.refreshKeyBoardTemp();
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
            this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();

         });

         var dataCCP = document.querySelector("[data-CCP]");
         if(dataCCP!=undefined){
          dataCCP.addEventListener("mousedown", this.HSLColorPickerFN[0]);
          dataCCP.addEventListener("mousemove", this.HSLColorPickerFN[1]);
          dataCCP.addEventListener("mouseup", this.HSLColorPickerFN[2]);
         }

      
      
        }, 50);
        break;
      case "Macro_Nav":
        //this.changeDetectorRef.checkNoChanges();
        setTimeout(() => {
          //..KeyBoard_Block
          var Macro_BlockList = document.querySelectorAll("[data-Macro_Block]");
          this.KeyBoardStyle.applyStyles(Macro_BlockList);
          this.KeyBoardManager.refreshKeyBoardTemp();
        }, 500);
        

        //this.changeDetectorRef.detectChanges();
        break;
      default:
        break;
    }

  }

  /**
   * move color picker
   * @param result
   */
  colorPickerChange(result: ColorOutput) {
    console.log('colorPickerChange');
    var RGB_Arr = [result.rgb.red, result.rgb.green, result.rgb.blue, 1];

  }

  project_select(event,index){
    console.log("project_select: ", event, index);
    if (this.KeyBoardManager.keyboardOfChoice  != index) {
        this.KeyBoardManager.keyboardOfChoice  = index;
        this.KeyBoardManager.refreshKeyBoardTemp();
    }
  }
  ExportProfile() {
    this.CRUDCheck = !this.CRUDCheck;
    var typeName = "";
    var defaultName = "";
    switch (this.currentPage) {
      case "LIGHTINGSETTING":
        typeName = "APMode"
        //defaultName=this.M_Light_APMode.getTarget().name;
        break
      case "KEYBOARDSETTINGS":
        typeName = "KeyAssign"
        //defaultName=this.KeyBoardManager.getTarget().projectName;
        break
      case "MACROSETTINGS":
        typeName = "Macro"
        //defaultName=this.MacroManager.getClass().getTarget().name;
        break
      case "AboutPage":
          typeName = "Macro"
          //defaultName=this.MacroManager.getClass().getTarget().name;
          break
      case "ConnectedPage":
        typeName = "Advanced"
        //defaultName=this.LCFM.getClass().projectName;
        break
    }
  }
  getExoprtData(){
    function download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }
    var t_Data=this.MacroManager.getExoprtData();
    if(t_Data){
      download(t_Data, 'json.txt', 'text/plain');
    }
  }

  clickMacroInTheAreaOfTheKeyboard(index){
    //var target=this.KeyBoardManager.getTarget();
    var target=this.KeyBoardManager.keyBoardTemp;           
    target.recordAssignBtnIndex=index;
    var targetMatrixKey=target.getNowModeTargetMatrixKey();
    var KeyMatrix=target.getNowModeKeyMatrix();
    targetMatrixKey.recordBindCodeType = "MacroFunction";
    //this.changeDetectorRef.detectChanges();
    console.log('%c clickMacroInTheAreaOfTheKeyboard','color:rgb(255,77,255)',  targetMatrixKey,target);
    console.log('%c KeyMatrix','color:rgb(255,77,255)',  KeyMatrix);


  }


  MacroEditkeyCodeFn(keyCode,index){
    console.log("MacroEditkeyCodeFn=" + keyCode,this.MacroManager.tempMacroContent.Data);
    //event.preventDefault();
    this.MacroManager.tempMacroContent.Data[index].byKeyCode=String(keyCode);
    //this.setDBDataToServer('MacroManager');
}
  macroOperationOption(FNname="") {
    //this.CRUDCheck=!this.CRUDCheck;
    this.operationMenuFlag=false;
    //var typeName="";
    console.log('%c macroOperationOption','color:rgb(255,77,255)',this.operationMenuFlag);

    switch (FNname) {
        case "startRenameMacroFile":
            this.startRenameMacroFile();
            break;
        case "copyFolderFile":
            this.MacroManager.copyFolderFile();
            break;
        case "ExportProfile":
            this.ExportProfile();
            break;
        case "deleteMacroFile":
          this.MacroManager.deleteMacroFile();
            break;
        default:
            alert("macroOperationOption_Error");
            return;
    }




}
macroFileRightClick(i,Event){
  this.MacroManager.getClass().currentChooseMacro=i;
  this.MacroManager.tempMacroContent=this.MacroManager.getClass().getTarget();
  this.operationMenuFlag=true;
  var macroFileOptions = document.getElementById("macroFileOptions") as HTMLDivElement;
  macroFileOptions.style.left = Event.layerX  + "px";
  //Event.clientX  + "px";
  macroFileOptions.style.top = Event.layerY + 80+"px";
  //Event.clientY + "px";
  console.log('%c macroFileRightClick','color:rgb(255,77,255)',  Event);
}
macroFileLeftClick(index){
  this.MacroManager.getClass().currentChooseMacro=index;
  this.MacroManager.tempMacroContent=this.MacroManager.getClass().getTarget();
}
onRecordClick(){
  this.MacroManager.onRecord=true;
  this.MacroManager.allRecordKeys=[];
  this.MacroManager.tempMacroContent=this.MacroManager.getClass().getTarget();
  this.MacroManager.tempMacroContent.resetDefaultData();
  this.MacroManager.addMacroEvent();
}



startRenameMacroFile() {
  this.macroOnEdit = true;
  this.MacroManager.editMacroFileName();
  //var m_list= document.getElementsByClassName('MacroFileName');
  this.changeDetectorRef.detectChanges();
  var m_list = document.querySelectorAll<HTMLElement>('.MacroFileName');
  var target = m_list[this.MacroManager.getClass().currentChooseMacro];
  console.log('%c m_list.target','color:rgb(255,77,255)',  m_list,target);

  if (target != undefined) {
    console.log('%c focus','color:rgb(255,77,255)',  'focus');
    target.focus();
  }
}
renameMacroFile(event) {
  console.log("event=" + event.target.value);
  var regex = event.target.value.replace(/[^\a-\z\A-\Z^0-9\u4E00-\u9FA5]/g, '');
  this.MacroManager.updeteMacroFileName(regex);
  //this.setDBDataToServer('MacroManager');
}

keyboardRMenu(FNname="") {
  this.operationMenuFlag=false;
  console.log('%c keyboardRMenu','color:rgb(255,77,255)',this.operationMenuFlag);
  switch (FNname) {
      case "m_Rename":
        this.KeyBoardLibray.editingName = true;
        this.KeyBoardLibray.updatenameBeingEdited();
        //var m_list= document.getElementsByClassName('MacroFileName');
        this.changeDetectorRef.detectChanges();
        var m_list = document.querySelectorAll<HTMLElement>('.KeyBoardLibrayName');
        var target = m_list[this.KeyBoardLibray.keyboardOfChoice];
        console.log('%c m_list.target','color:rgb(255,77,255)',  m_list,target);
    
        if (target != undefined) {
          console.log('%c focus','color:rgb(255,77,255)',  'focus');
          target.focus();
        }
        break;
      case "m_Copy":
          this.KeyBoardLibray.copyFolderFile();
          break;
      case "m_Export":
          this.ExportProfile();
          break;
      case "m_Delete":
        this.KeyBoardLibray.delete_KeyBoard();
          break;
      default:
          alert("keyboardRMenu_Error");
          return;
  }




}
renameKeyboard(event) {
  console.log("event=" + event.target.value);
  var regex = event.target.value.replace(/[^\a-\z\A-\Z^0-9\u4E00-\u9FA5]/g, '');
  this.KeyBoardLibray.updeteProjectName(regex);
  //this.setDBDataToServer('MacroManager');
}
keyboardLeftClick(index){
  this.KeyBoardLibray.keyboardOfChoice=index;
  this.KeyBoardManager.keyBoardTemp.ImportClassData(this.KeyBoardLibray.getTarget());
}
keyboardRightClick(i,Event){
  this.KeyBoardLibray.keyboardOfChoice=i;
  this.KeyBoardManager.keyBoardTemp.ImportClassData(this.KeyBoardLibray.getTarget());
  this.operationMenuFlag=true;
  var KeyBoardLibrayOptions = document.getElementById("KeyBoardLibrayOptions") as HTMLDivElement;
  KeyBoardLibrayOptions.style.left = Event.layerX  + "px";
  //Event.clientX  + "px";
  KeyBoardLibrayOptions.style.top = Event.layerY + 80+"px";
  //Event.clientY + "px";
  console.log('%c keyboardRightClick','color:rgb(255,77,255)',  Event);
}



}
