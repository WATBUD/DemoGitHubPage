import { Component, OnInit } from '@angular/core';
import { ImgPathList } from './ImgPath';
import { KeyBoardManager } from './KeyBoardManager';

@Component({
  selector: 'app-perixx',
  templateUrl: './perixx.component.html',
  styleUrls: ['./perixx.component.css','./NavigationOption.css','./Lighting_Option.css','./Home_Option.css']
})
export class PerixxComponent implements OnInit {
  CRUDCheck = false;
  currentPage = "Home_Nav";
  ImgPath=ImgPathList.getInstance();
  KeyBoardManager = new KeyBoardManager(80,3);
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

  constructor() { }

  ngOnInit() {
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

}
