import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImgPathList } from './ImgPath';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroManager,MacroScriptContent } from './MacroModule';
import { i18nManager } from './i18n';
import { EventManager } from './EventManager';
import { KeyBoardStyle } from './KeyBoardStyle';
import { ThrowStmt, CompileShallowModuleMetadata } from '@angular/compiler';
import { M_Light_CS } from './M_Light_Perixx';
import { BoxSelectionArea } from './BoxSelectionArea';
import { SettingManager } from './SettingManager';
import { Built_ineffect } from './Built_ineffect';
import { ColorModule } from '../../Module/TSImportManager';
import { HttpService } from '../../Module/HttpService';

@Component({
  selector: 'app-perixx',
  templateUrl: './perixx.component.html',
  styleUrls: ['./NavigationOption.css',
    './LightingPage.scss', './MacroPage.scss', './KeyBoardPage.scss', './Home_Page.scss', './SoftwareSettingPage.scss', './perixx.component.scss',
    './CircleColorPicker.css',
  ]
})
export class PerixxComponent implements OnInit {
  currentPage = "ConnectedPage";
  macroContentInEdit = false;
  softwareSettingCurrentPage = "About"//About/Update/Help
  verticalAnimationLineValue = "28";
  ImgPath = ImgPathList.getInstance();
  i18nManager = i18nManager.getInstance();
  macroOnEdit = false;
  softwareSettingPage = false;
  startTimeEditing = false;
  SettingManager = new SettingManager();
  Built_ineffect = new Built_ineffect(1);
  selectedMacroCode = "";
  lastSelectedMacroListCategory = "Macro";//Profile //Macro
  slidingTimer;
  activelyClickOnTheTitleToSlide=false;
  KeyBoardManager = new KeyBoardManager(1, 3);
  KeyBoardLibray = new KeyBoardManager(1, 3);
  MacroManager = new MacroManager();
  operationMenuFlag = false;
  macroRightClick = false;
  macro_ProfileRightClick= false;
  KeyBoardStyle = new KeyBoardStyle();
  M_Light_Perixx = new M_Light_CS(80);
  BoxSelectionArea = new BoxSelectionArea("KeyBoard_Block");
  EM = new EventManager();
  ColorWheelModule = new ColorModule("Circle_Animation");
  theColorWheelISBeingClicked = false;
  currentTouchButtons = "";
  keyboardColorHintMode = "KeyBoardManager"//KeyBoardManager,KeyBoardLibray
  checkForPassableKey = ["Custom_Fnkey", "FunctionLock", "WinLock"]
  settingsOption = [
    {
      'name': 'Information',
      'min':0,
      'max':123,
    },
    {
      'name': 'Layout',
      'min':123,
      'max':247,
    },
    {
      'name': 'Lighting',
      'min':247,
      'max':380,
    },
    {
      'name': 'Macro',
      'min':380,
      'max':471,
    },
    {
      'name': 'Auto Sleep',
      'min':471,
      'max':619,
    },
    {
      'name': 'Bluetooth',
      'min':619,
      'max':700,
    },
    {
      'name': 'Reset',
      'min':700,
      'max':900,
    },
  ]
  DefaultColorList = [
    [255, 0, 0], [255, 128, 0], [255, 255, 0], [128, 255, 0], [0, 255, 0], [0, 255, 128], [0, 255, 255], [0, 128, 255],
    [0, 0, 255], [128, 0, 255], [255, 0, 255], [255, 0, 128], [0, 0, 0], [255, 255, 255], [255, 152, 0], [0, 183, 195],
  ]
  CustomColorList = [
    [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255],
    [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255],
  ]
  settingLocation = "Information";
  //#region General software functions
  constructor(private changeDetectorRef: ChangeDetectorRef, private httpService: HttpService) { }
  ngOnInit() {
    this.initialzeTheDevice();
  }
  ngAfterViewInit() {
    document.addEventListener('click', (e: any) => {
      var identity = e.target.dataset.identity
      //console.log('%c document_e.target','color:rgb(255,77,255)',  e.target);

      if (identity == undefined) {
        this.operationMenuFlag = false;
        this.startTimeEditing = false;
        this.macroRightClick = false;
        this.macro_ProfileRightClick=false;
      }
      else {
        console.log('%c document_e.target', 'color:rgb(255,77,255)', identity);
      }
      if (identity == "lightingNameField") {
        this.operationMenuFlag = false;
        //this.Built_ineffect.editingNumber = -5;
      }

    });
    this.MacroManager.createFolderFile();
    //["Keyboard_Nav","Macro_Nav","Home_Nav","Lighting_Nav","ConnectedPage"]
    //this.setPageIndex('Macro_Nav');
    //var ssss="/upload/prime/version.json";//Remove the primary domain Set the primary domain from the proxy.conf file
    //var ssss="?format=json";//Remove the primary domain Set the primary domain from the proxy.conf file
    var ssss = "https://api.ipify.org/?format=json";//Remove the primary domain Set the primary domain from the proxy.conf file
    //var ssss="https://app.fusebox.fm/api/players/track/32XDRaOgO0/44/";
    this.httpService.noOptionToGetURL(ssss).subscribe((res: any) => {
      console.log('%c noOptionToGetURL', 'color:rgb(255,75,255,1)', res)

    });
  }

  initialzeTheDevice() {
    var KeyBoardLength = this.KeyBoardStyle.getTarget().keyMapping.length;
    this.KeyBoardManager = new KeyBoardManager(KeyBoardLength, 3);
    this.KeyBoardLibray = new KeyBoardManager(KeyBoardLength, 3);
    this.Built_ineffect = new Built_ineffect(KeyBoardLength);
    this.M_Light_Perixx = new M_Light_CS(KeyBoardLength);
    this.KeyBoardManager.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
    this.KeyBoardLibray.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
    this.project_select(event,0);
  }
  setPageIndex(pageName = "") {
    if (this.currentPage != pageName)
      this.currentPage = pageName;
    this.changeDetectorRef.detectChanges();

    switch (this.currentPage) {
      case "Home_Nav":

        break;
      case "Keyboard_Nav":
        setTimeout(() => {
          var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
          this.KeyBoardStyle.applyStyles(Keyboard_NavList);
        }, 50);
        break;
      case "Lighting_Nav":
        this.HSLColorPickerFN[0] = ((oEvent: MouseEvent) => {
          //console.log('%c HSL_mousedown', 'background: black; color: white', oEvent);
          this.theColorWheelISBeingClicked = true;
          this.ColorWheelModule.setTheColorWheelValue(oEvent);
        });
        this.HSLColorPickerFN[1] = ((oEvent: MouseEvent) => {
          //console.log('%c mousemove', 'background: black; color: white', oEvent);
          if (this.theColorWheelISBeingClicked) {
            this.ColorWheelModule.setTheColorWheelValue(oEvent);
            this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
          }
        });
        this.HSLColorPickerFN[2] = ((oEvent: MouseEvent) => {
          //console.log('%c HSL_mouseup', 'background: black; color: white', oEvent);
          this.theColorWheelISBeingClicked = false;
          this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
        });
        setTimeout(() => {
          var Keyboard_NavList = document.querySelectorAll(".KeyBoard_Block");
          this.KeyBoardStyle.applyStyles(Keyboard_NavList);
          var dataCCP = document.querySelector("[data-CCP]");
          if (dataCCP != undefined) {
            dataCCP.removeEventListener("mousedown", this.HSLColorPickerFN[0]);
            dataCCP.removeEventListener("mousemove", this.HSLColorPickerFN[1]);
            dataCCP.removeEventListener("mouseup", this.HSLColorPickerFN[2]);
            dataCCP.addEventListener("mousedown", this.HSLColorPickerFN[0]);
            dataCCP.addEventListener("mousemove", this.HSLColorPickerFN[1]);
            dataCCP.addEventListener("mouseup", this.HSLColorPickerFN[2]);
          }
          //this.Built_ineffect.switchBuilt_ineffect(0);

        }, 50);
        break;
      case "Macro_Nav":
        setTimeout(() => {
          var Macro_BlockList = document.querySelectorAll("[data-Macro_Block]");
          this.KeyBoardStyle.applyStyles(Macro_BlockList);
          this.refreshTheSoftwareMacroCode();
          this.macroFileLeftClick(0);
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

    var exoprtData = undefined;
    switch (this.currentPage) {
      case "Keyboard_Nav":
        exoprtData = this.KeyBoardLibray.getTarget();
        break
      case "Macro_Nav":
        exoprtData = this.MacroManager.getExoprtData();
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
    console.log('%c downloadExportData', 'color:rgb(255,77,255)', exoprtData, this.currentPage);
    var stringifyExoprtData = JSON.stringify(exoprtData);

    if (exoprtData != undefined) {
      //download(stringifyExoprtData, this.currentPage+'_Data.txt', 'text/plain');
      download(stringifyExoprtData, this.currentPage + '_Data.Perixx', 'text/plain');
    }
  }

  project_select(event, index) {
    console.log("project_select: ", event, index);
    this.keyboardColorHintMode = 'KeyBoardManager';
    //if (this.KeyBoardManager.keyboardOfChoice != index) {
    this.KeyBoardManager.keyboardOfChoice = index;
    this.KeyBoardManager.refreshKeyBoardTemp();
    //}
  }

  settingLayoutChoice() {
  };
  //#endregion General software functions

  //#region Home_Nav 

  restoreFactorySettings(){
    var KeyBoardLength = this.KeyBoardStyle.getTarget().keyMapping.length;
    this.KeyBoardManager = new KeyBoardManager(KeyBoardLength, 3);
    this.Built_ineffect = new Built_ineffect(KeyBoardLength);
    this.M_Light_Perixx = new M_Light_CS(KeyBoardLength);
    this.KeyBoardManager.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
    this.project_select(event,0);
  }
  scrollMoveToTheSpecifiedlocation(areaName = "") {
    console.log('%c scrollMoveToTheSpecifiedlocation', 'background: black; color: white', areaName, this);

    this.settingLocation = areaName;
    // document.getElementById(areaName).scrollIntoView(
    //   {
    //     behavior: 'smooth', block: 'start', inline: 'nearest'
    //   }
    // );
    // document.getElementById(areaName).scrollIntoView({ behavior: 'smooth', block: 'start', 
    // callback: scrollEvent => {
    //   console.log('The browser has finished scrolling')
    // }})
    clearTimeout(this.slidingTimer);
    this.activelyClickOnTheTitleToSlide = true;
    this.slidingTimer = setTimeout(() => {
      this.activelyClickOnTheTitleToSlide = false;
    }, 500);
    document.getElementById(areaName).scrollIntoView(
      {
        behavior: 'smooth', block: 'start', inline: 'nearest'
      }
    );
  }
  triggeredWhenTheScrollBarSlides(event) {
    //event.preventDefault();
    
    //event.isTrusted=false;
    console.log('%c triggeredWhenTheScrollBarSlides', 'color:rgb(255,75,255,1)', event);
    console.log('%c triggeredWhenTheScrollBarSlides', 'color:rgb(255,75,255,1)', event.target.scrollTop);
    // var compareValue = event.target.scrollTop;
    // if(!this.activelyClickOnTheTitleToSlide){
    //   for (let index = 0; index < this.settingsOption.length; index++) {
    //     const element = this.settingsOption[index];
    //     if (compareValue < element.max && compareValue > element.min) {
    //       this.settingLocation = element.name;
    //     }
    //   }
    // }
  }
  linkToTheDesignatedWebsite(weburl = "") {
    window.open(weburl, "_blank");
    // function aaa() { 
    //   window.open( 
    //     "https://www.yourURL.com", "_blank");
    // }
  }
  //#endregion Home_Nav 

  //#region ColorWheel 
  HSLColorPickerFN = [];
  updateColorWheel(event) {
    console.log('%c updateColorWheel', 'background: black; color: white', event);
    let backgroundColor = event.target.style.backgroundColor;
    this.ColorWheelModule.onclickColorDefault(event.target, 0);
    //this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();
    this.Built_ineffect.setGroupArrayColor(this.ColorWheelModule.getRGBA());
    console.log('%c backgroundColor', 'background: black; color: white', backgroundColor);
  }

  updateCustomColorList(index) {
    console.log('%c updateCustomColorList', 'background: black; color: white', event);
    this.CustomColorList[index] = this.ColorWheelModule.getRGB();
    // let backgroundColor = event.target.style.backgroundColor;
    // this.ColorWheelModule.onclickColorDefault(event.target,0);
    // this.M_Light_Perixx.getNowBlock().color=this.ColorWheelModule.getRGBA();
    //console.log('%c backgroundColor', 'background: black; color: white', backgroundColor)

  }
  //#endregion ColorWheel

  //#region Lighting_Nav 
  lighting_RClick(i, Event) {
    this.Built_ineffect.switchBuilt_ineffect(i);
    if (this.Built_ineffect.editingNumber == i || this.Built_ineffect.Built_inSelected.hasSingleKeyLighting == false) {
      return;
    }
    if(i<8){
      this.operationMenuFlag = true;
    }
    else{
      this.operationMenuFlag = false;
    }
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
        this.Built_ineffect.editingNumber = this.Built_ineffect.currentModeIndex;

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
    this.Built_ineffect.getTarget().PointEffectName = startTimeStr;
    //this.changeDetectorRef.detectChanges();
    //}
    console.log("lightingRename", event, runner);

    //this.setDBDataToServer('lightingRename');
  }
  quicklySelectTheBlockFunction(areaName = "") {
    var mainData = this.KeyBoardStyle.getTarget().quicklySelectTheBlockList;
    var target = this.KeyBoardStyle.getTarget().quicklySelectTheBlockList.find((x) => x.name == areaName)
    if (target != undefined) {
      target.currentStateOfTheSwitch = !target.currentStateOfTheSwitch;
      if (target.name == "All Keys") {
        for (let index = 0; index < mainData.length; index++) {
          const element = mainData[index];
          element.currentStateOfTheSwitch = target.currentStateOfTheSwitch;
        }
      }
      else {

        var allAreasHaveBeenSelected = true;
        for (let index = 0; index < mainData.length; index++) {
          const element = mainData[index];
          if (element.name != "All Keys" && element.currentStateOfTheSwitch == false) {
            allAreasHaveBeenSelected = false;
          }
        }
        var AllKeytarget = this.KeyBoardStyle.getTarget().quicklySelectTheBlockList.find((x) => x.name == "All Keys")
        AllKeytarget.currentStateOfTheSwitch = allAreasHaveBeenSelected;
      }
      this.Built_ineffect.setQuicklySelectionArea(target);

    }
  }
  //#endregion Lighting_Nav 

  //#region Macro_Nav

  loadTemporaryMacroData() {
    var target = this.KeyBoardManager.keyBoardTemp;
    var keyMatrix = target.getNowModeKeyMatrix();
    for (let index = 0; index < keyMatrix.length; index++) {
      const element = keyMatrix[index];
      //if(!(String(element.selectedMacroCode).includes("_profile"))){
          var macroFile = target.macroFiletItem.find((x) => x.selectedMacroCode == element.selectedMacroCode);
          if(macroFile==undefined)//repeated
          {
            var keyMacro=this.MacroManager.getClass().getTargetMacro(element.selectedMacroCode);
            if(keyMacro!=undefined){
              var  newMacroCode=target.getNotRepeatMacroCode(element.selectedMacroCode+"_p");
              keyMacro=JSON.parse(JSON.stringify(keyMacro));
              // element.selectedMacroCode=newMacroCode;
              // keyMacro.selectedMacroCode=newMacroCode;
              target.macroFiletItem.push(keyMacro);
            }
          }
      //}
    }

    //-------------------delete macros that does not exist------------------//
    var newMacroFiletItem=[];
    for (let m_Index = 0; m_Index < target.macroFiletItem.length; m_Index++) {
      const macroData = target.macroFiletItem[m_Index];
      var statusThatNeedsToBeRemoved=true;
      for (let k_Index = 0; k_Index < keyMatrix.length; k_Index++) {
        const keyData = keyMatrix[k_Index];
        if(keyData.selectedMacroCode==macroData.selectedMacroCode){
          statusThatNeedsToBeRemoved=false;
        }
      }
      if(statusThatNeedsToBeRemoved==false){
        newMacroFiletItem.push(target.macroFiletItem[m_Index]);
      }
    }
    target.macroFiletItem=newMacroFiletItem;

    this.KeyBoardManager.loadTemporaryKeyboardData();
    this.refreshTheSoftwareMacroCode();
  }

  clickMacroInTheAreaOfTheKeyboard(index) {
    var target = this.KeyBoardManager.keyBoardTemp;
    // var targetMatrixKey=target.getNowModeTargetMatrixKey();
    var keyMatrix = target.getNowModeKeyMatrix();
    var keyIsExist = this.checkForPassableKey.find((x) => x == keyMatrix[index].defaultValue);
    //console.log('%c  keyMatrix[i].defaultValue', 'color:rgb(255,77,255)', keyMatrix[index].defaultValue, keyIsExist);
    if (keyIsExist != undefined) {
      return;
    }
    this.KeyBoardManager.keyBoardTemp.recordAssignBtnIndex = index;
        //if(this.KeyBoardManager.getTarget().getTargetMacro(this.selectedMacroCode)!=undefined){


    var mainMacroCode=keyMatrix[index].selectedMacroCode;
    if (mainMacroCode != "") {
      this.selectedMacroCode = mainMacroCode;
      if (this.KeyBoardManager.getTarget().getTargetMacro(mainMacroCode) != undefined) {
        this.lastSelectedMacroListCategory = "Profile";
        var scriptContent = new MacroScriptContent();
        scriptContent.importMacroData(this.KeyBoardManager.getTarget().getTargetMacro(mainMacroCode));
        this.MacroManager.tempMacroContent = scriptContent;
      }
      else if (this.MacroManager.getClass().getTargetMacro(mainMacroCode) != undefined) {
        this.lastSelectedMacroListCategory = "Macro";
        // var scriptContent = new MacroScriptContent();
        // scriptContent.importMacroData(this.MacroManager.getClass().getTargetMacro(mainMacroCode));
        this.MacroManager.tempMacroContent = this.MacroManager.getClass().getTargetMacro(mainMacroCode);
      }
    }
    console.log('%c keyMatrix[index].selectedMacroCode', 'color:rgb(255,77,255)', keyMatrix[index].selectedMacroCode);
    //this.changeDetectorRef.detectChanges();
    console.log('%c clickMacroInTheAreaOfTheKeyboard', 'color:rgb(255,77,255)', this.selectedMacroCode, this.lastSelectedMacroListCategory);
    console.log('%c clickMacroInTheAreaOfTheKeyboard', 'color:rgb(255,77,255)', keyMatrix);
  }
  refreshTheSoftwareMacroCode(){
    var target = this.KeyBoardManager.keyBoardTemp;
    var keyMatrix = target.getNowModeKeyMatrix();
    for (let m_Index = 0; m_Index < this.MacroManager.getClass().macroFiletItem.length; m_Index++) {
      var macroData = this.MacroManager.getClass().macroFiletItem[m_Index];
      for (let k_Index = 0; k_Index < keyMatrix.length; k_Index++) {
        var keyData = keyMatrix[k_Index];
        if(keyData.selectedMacroCode==macroData.selectedMacroCode){
          var newKeyMacroName=this.KeyBoardManager.keyBoardTemp.getNotRepeatMacroCode(macroData.selectedMacroCode);
          macroData.selectedMacroCode=this.MacroManager.getClass().getNotRepeatMacroCode(newKeyMacroName);
        }
      }
    }
    // console.log('%c refreshTheSoftwareMacroCode_this.MacroManager.getClass()', 'color:rgb(255,77,255)', this.MacroManager.getClass().macroFiletItem);

    // console.log('%c refreshTheSoftwareMacroCode_keyBoardTemp', 'color:rgb(255,77,255)', this.KeyBoardManager.keyBoardTemp.macroFiletItem);


  }
  rightClickOnTheMacroBindKey(index) {
    var target = this.KeyBoardManager.keyBoardTemp;
    // var targetMatrixKey=target.getNowModeTargetMatrixKey();
    var keyMatrix = target.getNowModeKeyMatrix();
    var keyIsExist = this.checkForPassableKey.find((x) => x == keyMatrix[index].defaultValue);
    //console.log('%c  keyMatrix[i].defaultValue', 'color:rgb(255,77,255)', keyMatrix[index].defaultValue, keyIsExist);
    if (keyIsExist != undefined) {
      return;
    }
    this.KeyBoardManager.keyBoardTemp.recordAssignBtnIndex = index;

    if (keyMatrix[index].recordBindCodeType != "MacroFunction") {
      //keyMatrix[index].selectedMacroCode = this.selectedMacroCode;
      //keyMatrix[index].selectedMacroCode = this.KeyBoardManager.getTarget().getNotRepeatMacroCode(this.selectedMacroCode);
      var macroManagerTarget=this.MacroManager.getClass().getTargetMacro(this.selectedMacroCode);
        if (this.KeyBoardManager.getTarget().getTargetMacro(this.selectedMacroCode) != undefined) {
          this.lastSelectedMacroListCategory = "Profile";
          keyMatrix[index].recordBindCodeType = "MacroFunction";
          keyMatrix[index].selectedMacroCode = this.selectedMacroCode;
          var scriptContent = new MacroScriptContent();
          scriptContent.importMacroData(this.KeyBoardManager.getTarget().getTargetMacro(this.selectedMacroCode));
          this.MacroManager.tempMacroContent = scriptContent;
        }
        else if (macroManagerTarget != undefined) {
          this.lastSelectedMacroListCategory = "Macro";
          keyMatrix[index].recordBindCodeType = "MacroFunction";
          keyMatrix[index].selectedMacroCode = this.selectedMacroCode;
          //keyMatrix[index].isTheNewlyDesignatedMacro=true;
          // var  newMacroCode=this.KeyBoardManager.keyBoardTemp.getNotRepeatMacroCode(this.selectedMacroCode);
          // macroManagerTarget.selectedMacroCode=newMacroCode;
          // keyMatrix[index].selectedMacroCode = newMacroCode;
          this.MacroManager.tempMacroContent = macroManagerTarget;
        }
    }
    else if (keyMatrix[index].recordBindCodeType == "MacroFunction") {
      keyMatrix[index].recordBindCodeType = "";
      keyMatrix[index].selectedMacroCode = "";
    }
    console.log('%c rightClickOnTheMacroBindKey', 'color:rgb(255,77,255)', this.selectedMacroCode, this.lastSelectedMacroListCategory);
  }
  macroEditkeyCode(keyCode, index, event) {
    console.log("macroEditkeyCode=" + keyCode, this.MacroManager.tempMacroContent.Data);
    //event.preventDefault();
    if (this.MacroManager.tempMacroContent.Data[index].inTheSelectionList == true) {
      this.MacroManager.tempMacroContent.Data[index].byKeyCode = String(keyCode);
      console.log("getkeyCodeTxt=" + this.EM.getkeyCodeTxt(String(keyCode)));
      this.changeDetectorRef.detectChanges();
      event.target.value = this.EM.getkeyCodeTxt(String(keyCode));
      //this.setDBDataToServer('MacroManager');
    }

  }

  macroEditStartTime(event, index) {
    var validator = new RegExp(/^[0-9]*$/);
    //var validator = new RegExp(/^[0]+[0-9]*$/,"");
    event.target.value = event.target.value.replace(/^[0]+[0-9]*$/gi, "");
    var startTimeStr = event.target.value;
    var startTimeNum = parseInt(event.target.value);
    var runner = validator.test(startTimeStr);
    console.log('%c runner', 'color:rgb(255,77,255)', startTimeStr, runner);
    // if (event.type == 'keyup') {

    // }
    // else if(event.type=='blur'){
    if (!runner || startTimeNum < 0 || startTimeStr == "") {
      //event.preventDefault();
      startTimeNum = 0;
    }
    if (startTimeNum > 65536) {
      //event.preventDefault();
      startTimeNum = 65536;
    }
    console.log('%c startTimeTemp', 'color:rgb(255,77,255)', startTimeNum);
    // var zzz=this.MacroManager.tempMacroContent.Data;
    // for (let index = 0; index < zzz.length; index++) {
    //   const element = zzz[index];
    //   element.byStartTime=startTimeTemp;
    // }
    event.target.value = startTimeNum;
    this.MacroManager.tempMacroContent.Data[index].byStartTime = startTimeNum;
    //this.changeDetectorRef.detectChanges();
    //}
    console.log("macroEditStartTime", event, runner);

    //this.setDBDataToServer('MacroManager');
  }
  macroEditduration(event, index) {
    var validator = new RegExp(/^[0-9]*$/);
    //var validator = new RegExp(/^[0]+[0-9]*$/,"");
    event.target.value = event.target.value.replace(/^[0]+[0-9]*$/gi, "");
    var durationTemp = event.target.value;
    var runner = validator.test(durationTemp);
    console.log('%c runner', 'color:rgb(255,77,255)', durationTemp, runner);
    if (!runner || durationTemp < 0 || durationTemp == "") {
      durationTemp = 0;
    }
    if (durationTemp > 65536) {
      //event.preventDefault();
      durationTemp = 65536;
    }
    console.log('%c durationTemp', 'color:rgb(255,77,255)', durationTemp);
    event.target.value = durationTemp;
    this.MacroManager.tempMacroContent.Data[index].duration = durationTemp;
    console.log("macroEditStartTime", event, runner);
    //this.setDBDataToServer('MacroManager');
  }

  selectMacroSubContent(event, index) {
    this.MacroManager.tempMacroContent.indexPosition = index;
    this.MacroManager.tempMacroContent.selectAllMacroData(false);
    this.MacroManager.tempMacroContent.Data[index].inTheSelectionList = true;
    console.log('%c selectMacroSubContent', 'color:rgb(255,77,255)', index, event.target);
    this.changeDetectorRef.detectChanges();
    if (event.target != undefined) {
      event.target.focus();
    }

  }
  macroOperationOption(FNname = "") {
    this.macroRightClick = false;
    //var typeName="";
    console.log('%c macroOperationOption', 'color:rgb(255,77,255)', this.operationMenuFlag);
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
  macroBindKeyOption(FNname = "") {
    this.macroRightClick = false;
    //var typeName="";
    console.log('%c macroBindKeyOption', 'color:rgb(255,77,255)', this.operationMenuFlag);
    switch (FNname) {
      case "startRenameMacroFile":
        this.bindKeyMacroFileRename();
        break;
      case "copyFolderFile":
        this.KeyBoardManager.keyBoardTemp.copyFolderFile();
        break;
      case "deleteMacroFile":
        this.KeyBoardManager.keyBoardTemp.deleteMacroFile(this.selectedMacroCode);
        break;
      default:
        alert("macroBindKeyOption_Error");
        return;
    }
  }
  bindKeyMacroFileRename() {
    this.macro_ProfileRightClick = false;
    this.macroOnEdit = true;
    this.MacroManager.editMacroFileName();
    this.changeDetectorRef.detectChanges();
    var m_list = document.querySelectorAll<HTMLElement>('.MacroFileName');
    var target = m_list[this.MacroManager.getClass().currentChooseMacro];
    console.log('%c m_list.target', 'color:rgb(255,77,255)', m_list, target);

    if (target != undefined) {
      console.log('%c focus', 'color:rgb(255,77,255)', 'focus');
      target.focus();
    }
  }




  macroProfileFileRightClick(data, event) {
    this.macro_ProfileRightClick=true;
    this.selectedMacroCode = data.selectedMacroCode;
    this.lastSelectedMacroListCategory = "Profile";
    this.macroRightClick = false;
    var keyMacro=this.KeyBoardManager.keyBoardTemp.getTargetMacro(data.selectedMacroCode);
    if(keyMacro!=undefined){
      this.MacroManager.tempMacroContent =keyMacro;
    }

    var macroFileOptions = document.getElementById("macroFileProfileOptions") as HTMLDivElement;
    macroFileOptions.style.left = event.pageX + "px";
    //event.clientX  + "px";
    macroFileOptions.style.top = event.pageY  -25+"px";
    //event.clientY + "px";
    console.log('%c macroProfileFileRightClick', 'color:rgb(255,77,255)', event);
  }
  macroProfileFileLeftClick(data) {

    this.macro_ProfileRightClick = false;
    this.selectedMacroCode = data.selectedMacroCode;
    this.lastSelectedMacroListCategory = "Profile";
    this.macroRightClick = false;
    //var keyMacro=this.KeyBoardManager.keyBoardTemp.getTargetMacro(data.selectedMacroCode);
    var targetIndex = this.KeyBoardManager.keyBoardTemp.macroFiletItem.findIndex((x) => x.selectedMacroCode == data.selectedMacroCode)
    if (targetIndex != -1) {
      var keyMacro=this.KeyBoardManager.keyBoardTemp.macroFiletItem[targetIndex];
      var scriptContent = new MacroScriptContent();
      scriptContent.importMacroData(keyMacro);
      this.KeyBoardManager.keyBoardTemp.macroFiletItem[targetIndex]=scriptContent;
      this.MacroManager.tempMacroContent = scriptContent;
      
    }
    console.log('%c macroProfileFileLeftClick', 'color:rgb(255,77,255)', this.selectedMacroCode,keyMacro);
  }

  macroFileRightClick(i, event) {
    this.MacroManager.getClass().currentChooseMacro = i;
    this.lastSelectedMacroListCategory = "Macro";
    this.selectedMacroCode = this.MacroManager.getClass().getTarget().selectedMacroCode;
    this.MacroManager.tempMacroContent=this.MacroManager.getClass().getTarget();
    
    this.macroRightClick=true;
    var macroFileOptions = document.getElementById("macroFileOptions") as HTMLDivElement;
    macroFileOptions.style.left = event.pageX + "px";
    //event.clientX  + "px";
    macroFileOptions.style.top = event.pageY  -25+"px";
    //event.clientY + "px";
    console.log('%c macroFileRightClick', 'color:rgb(255,77,255)', event);
  }
  
  macroFileLeftClick(index) {
    this.macroRightClick = false;
    this.macro_ProfileRightClick = false;
    this.MacroManager.getClass().currentChooseMacro = index;
    this.lastSelectedMacroListCategory = "Macro";
    this.selectedMacroCode = this.MacroManager.getClass().getTarget().selectedMacroCode;
    this.MacroManager.tempMacroContent = this.MacroManager.getClass().getTarget();
    console.log('%c macroFileLeftClick', 'color:rgb(255,77,255)', this.selectedMacroCode, this.lastSelectedMacroListCategory);
  }

  onRecordClick() {
    this.MacroManager.onRecord = true;
    this.MacroManager.allRecordKeys = [];
    //this.MacroManager.tempMacroContent.importMacroData(this.MacroManager.getClass().getTarget());
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
    console.log('%c m_list.target', 'color:rgb(255,77,255)', m_list, target);

    if (target != undefined) {
      console.log('%c focus', 'color:rgb(255,77,255)', 'focus');
      target.focus();
    }
  }

  renameMacroFile(event) {
    console.log("event=" + event.target.value);
    var regex = event.target.value.replace(/[^\a-\z\A-\Z^0-9\u4E00-\u9FA5]/g, '');
    this.MacroManager.updeteMacroFileName(regex);
    //this.setDBDataToServer('MacroManager');
  }
 //#endregion Macro_Nav

  //#region Keyboard_Nav
  clickTheKeyBindButton(i) {
    var keyMatrix = this.KeyBoardManager.keyBoardTemp.getNowModeKeyMatrix();


    var keyIsExist = this.checkForPassableKey.find((x) => x == keyMatrix[i].defaultValue);
    console.log('%c  keyMatrix[i].defaultValue', 'color:rgb(255,77,255)', keyMatrix[i].defaultValue, keyIsExist);

    if (keyIsExist == undefined) {
      this.KeyBoardManager.keyBoardTemp.recordAssignBtnIndex = i;
    }
  }
  keyboardRMenu(FNname = "") {
    this.operationMenuFlag = false;
    console.log('%c keyboardRMenu', 'color:rgb(255,77,255)', this.operationMenuFlag);
    switch (FNname) {
      case "m_Create":
        this.KeyBoardLibray.create_KeyBoard();
        var targetGTLO = this.KeyBoardLibray.getTheLastObject();
        targetGTLO.setTargetDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
        break;
      case "m_Rename":
        this.KeyBoardLibray.editingName = true;
        this.KeyBoardLibray.updatenameBeingEdited();
        //var m_list= document.getElementsByClassName('MacroFileName');
        this.changeDetectorRef.detectChanges();
        var m_list = document.querySelectorAll<HTMLElement>('.KeyBoardLibrayName');
        var target = m_list[this.KeyBoardLibray.keyboardOfChoice];
        console.log('%c m_list.target', 'color:rgb(255,77,255)', m_list, target);

        if (target != undefined) {
          console.log('%c focus', 'color:rgb(255,77,255)', 'focus');
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
  loadTemporaryKeyboardData() {
    this.KeyBoardManager.loadTemporaryKeyboardData();
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
    target.layoutMode = "Custom";

    if (this.keyboardColorHintMode == 'KeyBoardLibray') {
      this.KeyBoardLibray.getTarget().ImportClassData(this.KeyBoardManager.keyBoardTemp);
    }
    else if (this.keyboardColorHintMode == 'KeyBoardManager') {
      //this.loadTemporaryKeyboardData();
    }

  }
  getKeyBindingIcon(index) {
    var target = this.KeyBoardManager.keyBoardTemp;
    var KeyMatrix = target.getNowModeKeyMatrix();
    var targetMatrixKey = KeyMatrix[index];
    var path
    if (this.keyboardColorHintMode == 'KeyBoardManager') {
      var layoutMode = target.layoutMode//this.KeyBoardManager.getTarget().layoutMode;
      //console.log('%c getKeyBindingIcon_layoutMode','color:rgb(255,77,255)',  layoutMode);

      if (layoutMode == "Default") {
        path = this.ImgPath.getThePicture(targetMatrixKey.defaultValue);//defaultValue recordBindCodeName
      }
      else if (layoutMode == "Custom") {
        path = this.ImgPath.getThePicture(targetMatrixKey.recordBindCodeName);
      }
    }
    else if (this.keyboardColorHintMode == 'KeyBoardLibray') {
      path = this.ImgPath.getThePicture(targetMatrixKey.recordBindCodeName);//defaultValue recordBindCodeName
    }


    //this.ImgPath[targetMatrixKey.recordBindCodeName];
    if (path != undefined) {
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
  keyboardLeftClick(index) {
    this.keyboardColorHintMode = 'KeyBoardLibray';
    this.KeyBoardLibray.keyboardOfChoice = index;
    //this.KeyBoardManager.keyBoardTemp=this.KeyBoardLibray.getTarget();
    this.KeyBoardManager.keyBoardTemp.ImportClassData(this.KeyBoardLibray.getTarget());

  }
  keyboardRightClick(i, Event) {
    this.KeyBoardLibray.keyboardOfChoice = i;
    this.KeyBoardManager.keyBoardTemp.ImportClassData(this.KeyBoardLibray.getTarget());
    this.operationMenuFlag = true;
    var KeyBoardLibrayOptions = document.getElementById("KeyBoardLibrayOptions") as HTMLDivElement;
    KeyBoardLibrayOptions.style.left = Event.layerX + "px";
    //Event.clientX  + "px";
    KeyBoardLibrayOptions.style.top = Event.layerY + 80 + "px";
    //Event.clientY + "px";
    console.log('%c keyboardRightClick', 'color:rgb(255,77,255)', Event);
  }
  //#endregion Keyboard_Nav








}
