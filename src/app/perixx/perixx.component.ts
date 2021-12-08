import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ImgPathList } from './ImgPath';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroManager } from './MacroModule';
import { i18nManager } from './i18n';

@Component({
  selector: 'app-perixx',
  templateUrl: './perixx.component.html',
  styleUrls: ['./perixx.component.css','./NavigationOption.css',
  './Lighting_Option.css','./Home_Option.css',
  './MacroPage.scss']
})
export class PerixxComponent implements OnInit {
  CRUDCheck = false;
  currentPage = "Macro_Nav";
  ImgPath=ImgPathList.getInstance();
  i18nManager=i18nManager.getInstance();
  macroOnEdit=false;
  KeyBoardManager = new KeyBoardManager(80,3);
  MacroManager=new MacroManager();
  operationMenuFlag=true;
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
  settingLocation="Information";
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    //this.MacroManager.getClass().add
  }

  ngAfterViewInit(){
    //this.setPageIndex('SelectDevice');
    //this.setPageIndex('KEYBOARDSETTINGS');
    document.addEventListener('click', (e:any)=>{
       //console.log('%c document_e.target','color:rgb(255,77,255)',  e.target);
        if (e.target.dataset.identity==undefined) {
            this.CRUDCheck = false;
            //this.macroOnEdit= false;
        }
    });

  }
  onRecordClick(){
    this.MacroManager.onRecord=!this.MacroManager.onRecord;
    this.MacroManager.tempMacroContent=this.MacroManager.getClass().getTarget();
    this.MacroManager.addMacroEvent();
  }
  project_select(event,index){
    console.log("project_select: ", event, index);
    if (this.KeyBoardManager.currentChooseKeyBoard != index) {
        this.KeyBoardManager.currentChooseKeyBoard = index;
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




}
