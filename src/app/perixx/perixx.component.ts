import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ImgPathList } from './ImgPath';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroManager } from './MacroModule';
import { i18nManager } from './i18n';
import { EventManager } from './EventManager';
import { KeyBoardStyle } from './KeyBoardStyle';
import { ThrowStmt, CompileShallowModuleMetadata } from '@angular/compiler';
import { M_Light_CS } from './M_Light_Perixx';
import { BoxSelectionArea } from './BoxSelectionArea';
import { SettingManager } from './SettingManager';
import { Built_ineffect } from './Built_ineffect';
import {ColorModule} from '../../Module/TSImportManager';
import { HttpService } from '../../Module/HttpService';

@Component({
  selector: 'app-perixx',
  templateUrl: './perixx.component.html',
  styleUrls: ['./NavigationOption.css',
  './LightingPage.scss','./MacroPage.scss','./KeyBoardPage.scss','./Home_Page.scss','./SoftwareSettingPage.scss','./perixx.component.scss',
  './CircleColorPicker.css',
]
})
export class PerixxComponent implements OnInit {
  currentPage = "";
  macroContentInEdit=false;
  softwareSettingCurrentPage="About"//About/Update/Help
  verticalAnimationLineValue="28";
  ImgPath=ImgPathList.getInstance();
  i18nManager=i18nManager.getInstance();
  macroOnEdit=false;
  softwareSettingPage=true;
  startTimeEditing=false;
  SettingManager=new SettingManager();
  Built_ineffect=new Built_ineffect(1);
  selectedMacroCode="";
  KeyBoardManager = new KeyBoardManager(1,3);
  KeyBoardLibray = new KeyBoardManager(1,3);
  MacroManager=new MacroManager();
  operationMenuFlag=false;
  KeyBoardStyle = new KeyBoardStyle();
  M_Light_Perixx= new M_Light_CS(80);
  BoxSelectionArea=new BoxSelectionArea("KeyBoard_Block");
  EM=new EventManager();
  ColorWheelModule=new ColorModule("Circle_Animation");
  theColorWheelISBeingClicked=false;
  currentTouchButtons="";
  keyboardColorHintMode="KeyBoardManager"//KeyBoardManager,KeyBoardLibray
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
  constructor(private changeDetectorRef: ChangeDetectorRef,private httpService: HttpService) { }

  ngOnInit() {
    //this.MacroManager.getClass().add
    this.initialzeTheDevice();
  }

  ngAfterViewInit(){
    document.addEventListener('click', (e:any)=>{
       var identity=e.target.dataset.identity
       //console.log('%c document_e.target','color:rgb(255,77,255)',  e.target);

        if (identity==undefined) {
            this.operationMenuFlag=false;
            this.startTimeEditing=false;
        }
        else{
          console.log('%c document_e.target','color:rgb(255,77,255)',  identity);
        }
        if(identity=="lightingNameField"){
          this.operationMenuFlag=false;
          //this.Built_ineffect.editingNumber = -5;
        }

    });
    this.MacroManager.createFolderFile();
       //["Keyboard_Nav","Macro_Nav","Home_Nav","Lighting_Nav","ConnectedPage"]
    this.setPageIndex('Macro_Nav');
    //var ssss="/upload/prime/version.json";//Remove the primary domain Set the primary domain from the proxy.conf file
    //var ssss="?format=json";//Remove the primary domain Set the primary domain from the proxy.conf file
    var ssss="https://api.ipify.org/?format=json";//Remove the primary domain Set the primary domain from the proxy.conf file
    //var ssss="https://app.fusebox.fm/api/players/track/32XDRaOgO0/44/";
    this.httpService.noOptionToGetURL(ssss).subscribe((res:any)=>{
      console.log('%c noOptionToGetURL', 'color:rgb(255,75,255,1)', res)

    }) ;
  }

  initialzeTheDevice(){
    var KeyBoardLength=this.KeyBoardStyle.getTarget().keyMapping.length;
    this.KeyBoardManager = new KeyBoardManager(KeyBoardLength,3);
    this.KeyBoardLibray = new KeyBoardManager(KeyBoardLength,3);
    this.Built_ineffect=new Built_ineffect(KeyBoardLength);
    this.M_Light_Perixx= new M_Light_CS(KeyBoardLength);
    this.KeyBoardManager.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
    this.KeyBoardLibray.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());

    this.keyboardLeftClick(0);
  }

  
  scrollMoveToTheSpecifiedlocation(areaName=""){
    console.log('%c scrollMoveToTheSpecifiedlocation', 'background: black; color: white', areaName,this);

      this.settingLocation=areaName;
      document.getElementById(areaName).scrollIntoView(
        {
          behavior: 'smooth', block: 'start', inline: 'nearest'
        }
        );

  }
  quicklySelectTheBlockFunction(areaName=""){
    var mainData=this.KeyBoardStyle.getTarget().quicklySelectTheBlockList;
    var target =this.KeyBoardStyle.getTarget().quicklySelectTheBlockList.find((x) => x.name == areaName)
    if(target!=undefined){
      target.currentStateOfTheSwitch=!target.currentStateOfTheSwitch;
      if(target.name=="All Keys"){
        for (let index = 0; index < mainData.length; index++) {
          const element = mainData[index];
          element.currentStateOfTheSwitch=target.currentStateOfTheSwitch;
        }
      }
      else{

        var allAreasHaveBeenSelected=true;
        for (let index = 0; index < mainData.length; index++) {
          const element = mainData[index];
          if(element.name!="All Keys"&&element.currentStateOfTheSwitch==false){
            allAreasHaveBeenSelected=false;
          }
        }
          var AllKeytarget =this.KeyBoardStyle.getTarget().quicklySelectTheBlockList.find((x) => x.name == "All Keys")
          AllKeytarget.currentStateOfTheSwitch=allAreasHaveBeenSelected;
      }
      this.Built_ineffect.setQuicklySelectionArea(target);

    }
  }
  linkToTheDesignatedWebsite(weburl="") {
    window.open(weburl, "_blank");
  // function aaa() { 
  //   window.open( 
  //     "https://www.yourURL.com", "_blank");
  // }
}

  HSLColorPickerFN=[];
  updateColorWheel(event) {
    console.log('%c updateColorWheel', 'background: black; color: white', event);
    let backgroundColor = event.target.style.backgroundColor;
    this.ColorWheelModule.onclickColorDefault(event.target,0);
    //this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();
    this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
    console.log('%c backgroundColor', 'background: black; color: white', backgroundColor);
  }

  updateCustomColorList(index){
    console.log('%c updateCustomColorList', 'background: black; color: white', event);
    this.CustomColorList[index]=this.ColorWheelModule.getRGB();
    // let backgroundColor = event.target.style.backgroundColor;
    // this.ColorWheelModule.onclickColorDefault(event.target,0);
    // this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();
    //console.log('%c backgroundColor', 'background: black; color: white', backgroundColor)

  }
  settingLayoutChoice(){
  };


  setPageIndex(pageName = "") {
    if (this.currentPage !=pageName)
    this.currentPage = pageName;
    this.changeDetectorRef.detectChanges();

    switch (this.currentPage) {
      case "Home_Nav":

        break;
      case "Keyboard_Nav":
        this.keyboardPageInitial();
        break;
      case "Lighting_Nav":
        this.HSLColorPickerFN[0]=((oEvent: MouseEvent) => {
          //console.log('%c HSL_mousedown', 'background: black; color: white', oEvent);
          this.theColorWheelISBeingClicked=true;
          this.ColorWheelModule.setTheColorWheelValue(oEvent);
       });
       this.HSLColorPickerFN[1]=((oEvent: MouseEvent) => {
          //console.log('%c mousemove', 'background: black; color: white', oEvent);
          if(this.theColorWheelISBeingClicked){
             this.ColorWheelModule.setTheColorWheelValue(oEvent);
             this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
          }
       });
       this.HSLColorPickerFN[2]=((oEvent: MouseEvent) => {
          //console.log('%c HSL_mouseup', 'background: black; color: white', oEvent);
          this.theColorWheelISBeingClicked=false;
          this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
       });
        setTimeout(() => {
          var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
          this.KeyBoardStyle.applyStyles(Keyboard_NavList);
          this.KeyBoardManager.refreshKeyBoardTemp();
         var dataCCP = document.querySelector("[data-CCP]");
         if(dataCCP!=undefined){
          dataCCP.removeEventListener("mousedown", this.HSLColorPickerFN[0]);
          dataCCP.removeEventListener("mousemove", this.HSLColorPickerFN[1]);
          dataCCP.removeEventListener("mouseup", this.HSLColorPickerFN[2]);
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
        }, 50);
        

        //this.changeDetectorRef.detectChanges();
        break;
      default:
        break;
    }

  }
  downloadExportData() {
    var defaultName = "";
    //["Keyboard_Nav","Macro_Nav","Home_Nav","Lighting_Nav","ConnectedPage"]

    var exoprtData=undefined;
    switch (this.currentPage) {
      case "Keyboard_Nav":
        exoprtData=this.KeyBoardLibray.getTarget();
        break
      case "Macro_Nav":
        exoprtData=this.MacroManager.getExoprtData();
        break
      // case "Lighting_Nav":
      //   exoprtData=this.Built_ineffect.Built_inSelected;
      //   // var testIndexList=[];
      //   // var target=this.Built_ineffect.Built_inSelected.AllBlockColor;
      //   // for (let index = 0; index < target.length; index++) {
      //   //   const element = target[index];
      //   //   if(element.choosing==true){
      //   //     testIndexList.push(index);
      //   //   }
      //   // }
      //   // exoprtData=testIndexList;
      //   break;
    }
    function download(content, fileName, contentType) {
      var a = document.createElement("a");
      var file = new Blob([content], { type: contentType });
      a.href = URL.createObjectURL(file);
      a.download = fileName;
      a.click();
    }

    //console.log('%c originalData','color:rgb(255,77,255)',  exoprtData);
    console.log('%c downloadExportData','color:rgb(255,77,255)',  exoprtData,this.currentPage);
    var stringifyExoprtData=JSON.stringify(exoprtData);

    if(exoprtData!=undefined){
      //download(stringifyExoprtData, this.currentPage+'_Data.txt', 'text/plain');
      download(stringifyExoprtData, this.currentPage+'_Data.Perixx', 'text/plain');
    }
  }

  //--------------------------------------------------Lighting_Nav---------------------------------------------//

    lighting_RClick(i, Event) {
    this.Built_ineffect.switchBuilt_ineffect(i);
    if(this.Built_ineffect.editingNumber==i||this.Built_ineffect.Built_inSelected.hasSingleKeyLighting==false){
      return;
    }
    this.operationMenuFlag = true;
    var Built_ineffectRMenu = document.getElementById("Built_ineffectRMenu") as HTMLDivElement;
    Built_ineffectRMenu.style.left = Event.layerX + "px";
    //Event.clientX  + "px";
    Built_ineffectRMenu.style.top = Event.layerY + "px";
    //Event.clientY + "px";
    console.log('%c lighting_RClick', 'color:rgb(255,77,255)', Event);
    }
    lighting_MenuFn(FNname = "") {
    this.operationMenuFlag = false;
    console.log('%c lighting_MenuFn', 'color:rgb(255,77,255)', this.operationMenuFlag);
    switch (FNname) {
      case "m_Rename":
        // this.KeyBoardLibray.updatenameBeingEdited();
        // if(this.Built_ineffect.editingNumber!=this.Built_ineffect.currentModeIndex){
        //   this.Built_ineffect.editingNumber=this.Built_ineffect.currentModeIndex;
        // }
        // else{
        // }
        this.Built_ineffect.editingNumber=this.Built_ineffect.currentModeIndex;

        this.changeDetectorRef.detectChanges();
        var m_list = document.querySelectorAll<HTMLElement>('.lightingNameField');
        var target = m_list[this.Built_ineffect.currentModeIndex];
        console.log('%c m_list.target', 'color:rgb(255,77,255)', m_list, target);

        if (target != undefined) {
          console.log('%c focus', 'color:rgb(255,77,255)', 'focus');
          target.focus();
        }
        break;
      case "m_Reset":
        this.Built_ineffect.resetTarget();
        break;
      default:
        alert("lighting_MenuFn_Error");
        return;
    }




    }
    lightingRename(event, index) {
    var validator = new RegExp(/^[0-9]*$/);
    //var validator = new RegExp(/^[0]+[0-9]*$/,"");
    event.target.value = event.target.value.replace(/^[0]+[0-9]*$/gi, "");
    var startTimeStr = event.target.value;
    //var startTimeNum = parseInt(event.target.value);
    var runner = validator.test(startTimeStr);
    console.log('%c runner', 'color:rgb(255,77,255)', startTimeStr, runner);
    // if (event.type == 'keyup') {

    // }
    // else if(event.type=='blur'){
    // if (!runner || startTimeNum < 0 || startTimeStr == "") {
    //   //event.preventDefault();
    //   startTimeNum = 0;
    // }
    // if (startTimeNum > 65536) {
    //   //event.preventDefault();
    //   startTimeNum = 65536;
    // }
    console.log('%c startTimeTemp', 'color:rgb(255,77,255)', startTimeStr);
    //event.target.value = startTimeStr;
    this.Built_ineffect.getTarget().PointEffectName= startTimeStr;
    //this.changeDetectorRef.detectChanges();
    //}
    console.log("lightingRename", event, runner);

    //this.setDBDataToServer('lightingRename');
    }
  //--------------------------------------------------Macro_Nav---------------------------------------------//

  clickMacroInTheAreaOfTheKeyboard(index,bool=false){
    //var target=this.KeyBoardManager.getTarget();
    var target=this.KeyBoardManager.keyBoardTemp;           
    // target.recordAssignBtnIndex=index;
    // var targetMatrixKey=target.getNowModeTargetMatrixKey();
    var KeyMatrix=target.getNowModeKeyMatrix();
    if(bool){
      KeyMatrix[index].recordBindCodeType = "MacroFunction";
    }
    else{
      if(KeyMatrix[index].recordBindCodeType=="MacroFunction"){
        KeyMatrix[index].recordBindCodeType = "";
      }
    }
    //this.changeDetectorRef.detectChanges();
    //console.log('%c clickMacroInTheAreaOfTheKeyboard','color:rgb(255,77,255)',  targetMatrixKey,target);
    console.log('%c clickMacroInTheAreaOfTheKeyboard','color:rgb(255,77,255)',  KeyMatrix);


  }


  macroEditkeyCode(keyCode,index,event){
    console.log("macroEditkeyCode=" + keyCode,this.MacroManager.tempMacroContent.Data);
    //event.preventDefault();
    if(this.MacroManager.tempMacroContent.Data[index].inTheSelectionList==true){
      this.MacroManager.tempMacroContent.Data[index].byKeyCode=String(keyCode);
      console.log("getkeyCodeTxt="+this.EM.getkeyCodeTxt(String(keyCode)));
      this.changeDetectorRef.detectChanges();
      event.target.value=this.EM.getkeyCodeTxt(String(keyCode));
      //this.setDBDataToServer('MacroManager');
    }

  }
  macroEditStartTime(event,index){
    var validator = new RegExp(/^[0-9]*$/);
    //var validator = new RegExp(/^[0]+[0-9]*$/,"");
    event.target.value=event.target.value.replace(/^[0]+[0-9]*$/gi,"");
    var startTimeStr =event.target.value;
    var startTimeNum =parseInt(event.target.value);
    var runner = validator.test(startTimeStr);
    console.log('%c runner','color:rgb(255,77,255)',startTimeStr,runner);
    // if (event.type == 'keyup') {
    
    // }
    // else if(event.type=='blur'){
      if (!runner||startTimeNum<0||startTimeStr=="") {
        //event.preventDefault();
        startTimeNum=0;
      }
      if (startTimeNum>65536) {
        //event.preventDefault();
        startTimeNum=65536;
      }
      console.log('%c startTimeTemp','color:rgb(255,77,255)',startTimeNum);
      // var zzz=this.MacroManager.tempMacroContent.Data;
      // for (let index = 0; index < zzz.length; index++) {
      //   const element = zzz[index];
      //   element.byStartTime=startTimeTemp;
      // }
      event.target.value=startTimeNum;
      this.MacroManager.tempMacroContent.Data[index].byStartTime=startTimeNum;
      //this.changeDetectorRef.detectChanges();
    //}
    console.log("macroEditStartTime",event,runner);
  
    //this.setDBDataToServer('MacroManager');
  }
  macroEditduration(event,index){
    var validator = new RegExp(/^[0-9]*$/);
    //var validator = new RegExp(/^[0]+[0-9]*$/,"");
    event.target.value=event.target.value.replace(/^[0]+[0-9]*$/gi,"");
    var durationTemp = event.target.value;
    var runner = validator.test(durationTemp);
    console.log('%c runner','color:rgb(255,77,255)',durationTemp,runner);
      if (!runner||durationTemp<0||durationTemp=="") {
        durationTemp=0;
      }
      if (durationTemp>65536) {
        //event.preventDefault();
        durationTemp=65536;
      }
      console.log('%c durationTemp','color:rgb(255,77,255)',durationTemp);
      event.target.value=durationTemp;
      this.MacroManager.tempMacroContent.Data[index].duration=durationTemp;
    console.log("macroEditStartTime",event,runner);
    //this.setDBDataToServer('MacroManager');
  }



  selectMacroSubContent(event,index){

    this.MacroManager.tempMacroContent.indexPosition=index;
    this.MacroManager.tempMacroContent.selectAllMacroData(false);
    this.MacroManager.tempMacroContent.Data[index].inTheSelectionList=true;
    console.log('%c selectMacroSubContent','color:rgb(255,77,255)',index,event.target);
    this.changeDetectorRef.detectChanges();
    if (event.target != undefined) {
      event.target.focus();
    }

  }


  macroOperationOption(FNname="") {
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
  //this.selectedMacroCode=this.MacroManager.getClass().getTarget().code
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




//--------------------------------------------------Keyboard_Nav---------------------------------------------//
keyboardPageInitial(FNname = "") {
    this.keyboardColorHintMode = 'KeyBoardManager';
    setTimeout(() => {
      var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
      this.KeyBoardStyle.applyStyles(Keyboard_NavList);
      this.KeyBoardManager.refreshKeyBoardTemp();
    }, 50);
  }

keyboardRMenu(FNname="") {
  this.operationMenuFlag=false;
  console.log('%c keyboardRMenu','color:rgb(255,77,255)',this.operationMenuFlag);
  switch (FNname) {
      case "m_Create":
      this.KeyBoardLibray.create_KeyBoard();
      var targetGTLO=this.KeyBoardLibray.getTheLastObject();
      targetGTLO.setTargetDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
      break;
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
      case "m_Delete":
          this.KeyBoardLibray.delete_KeyBoard();
          break;
      case "m_Reset":
        this.KeyBoardLibray.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
        break;
      default:
          alert("keyboardRMenu_Error");
          return;
  }
}
loadTemporaryKeyboardData(){
  this.KeyBoardManager.loadTemporaryKeyboardData();
  this.KeyBoardManager.getTarget().layoutMode = "Custom";

  if (this.keyboardColorHintMode == 'KeyBoardManager') {
  }
}
setKeyBindingData(dataValue = "") {
    //if(dataValue!=""){
    var target = this.KeyBoardManager.keyBoardTemp;
    var targetMatrixKey = target.getNowModeTargetMatrixKey();
    //var KeyMatrix=target.getNowModeKeyMatrix();
    targetMatrixKey.recordBindCodeType = "GeneralBinding";
    targetMatrixKey.recordBindCodeName = dataValue;
    if (this.keyboardColorHintMode == 'KeyBoardLibray') {
      this.KeyBoardLibray.getTarget().ImportClassData(this.KeyBoardManager.keyBoardTemp);
    }
    //}
}
getKeyBindingIcon(index){
  var target=this.KeyBoardManager.keyBoardTemp;           
  var KeyMatrix=target.getNowModeKeyMatrix();
  var targetMatrixKey=KeyMatrix[index];
  var path
  if(this.keyboardColorHintMode=='KeyBoardManager'){
    var layoutMode=this.KeyBoardManager.getTarget().layoutMode;
    //console.log('%c getKeyBindingIcon_layoutMode','color:rgb(255,77,255)',  layoutMode);

    if(layoutMode=="Default"){
      path =this.ImgPath.getThePicture(targetMatrixKey.defaultValue);//defaultValue recordBindCodeName
    }
    else if(layoutMode=="Custom"){
      path =this.ImgPath.getThePicture(targetMatrixKey.recordBindCodeName);
    }
  }
  else if(this.keyboardColorHintMode=='KeyBoardLibray'){
      path =this.ImgPath.getThePicture(targetMatrixKey.recordBindCodeName);//defaultValue recordBindCodeName
  }


  //this.ImgPath[targetMatrixKey.recordBindCodeName];
  if(path!=undefined) {
    return path[2];
  }
  return "";

}

renameKeyboard(event) {
  console.log("event=" + event.target.value);
  var regex = event.target.value.replace(/[^\a-\z\A-\Z^0-9\u4E00-\u9FA5]/g, '');
  this.KeyBoardLibray.updeteProjectName(regex);
  //this.setDBDataToServer('MacroManager');
}
 
project_select(event,index){
  console.log("project_select: ", event, index);
  this.keyboardColorHintMode='KeyBoardManager';

  //if (this.KeyBoardManager.keyboardOfChoice != index) {
      this.KeyBoardManager.keyboardOfChoice  = index;
      this.KeyBoardManager.refreshKeyBoardTemp();
  //}
}
keyboardLeftClick(index){ 
  this.keyboardColorHintMode='KeyBoardLibray';
  this.KeyBoardLibray.keyboardOfChoice=index;
  //this.KeyBoardManager.keyBoardTemp=this.KeyBoardLibray.getTarget();
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
