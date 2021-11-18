import { Injectable } from "@angular/core";

@Injectable()
export class ImgPathList{
    static instance=undefined;
    constructor(
    ) {
        ImgPathList.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            //console.log("new ImgPathList Class");
            this.instance = new ImgPathList();
            console.log('%c ImgPathList_getInstance','background: blue; color: red');
            return this.instance;
        }
    }

    dirBgNormalR: any = [
        "url('./image/skin/dirBgNormalRHover.png')",
        "url('./image/skin/dirBgNormalR.png')",
    ];



    SwitchIcon: any = [
        "./image/ColorSet/Off/SwitchIcon.png",
        "./image/ColorSet/On/SwitchIcon.png",
    ];


    LedModeCanSee: any = [
        "./image/ColorSet/Off/EyeNotSee.png",
        "./image/ColorSet/On/EyeCanSee.png",
        "./image/ColorSet/Off/EyeNotSeeWhite.png",
        "./image/ColorSet/On/EyeCanSeeWhite.png",
    ];
    


    P_S_OSettingOpen: any = [
        "./image/Keyboard/Off/P_S_OSettingOpen.png",
        "./image/Keyboard/On/P_S_OSettingOpen.png",
    ]

    SystemSettingBtn: any = [
        "url(./image/Share/Off//SystemSettingBtn.png)",
        "url(./image/Share/On//SystemSettingBtn.png)",
    ]
    
    EditNameIcon: any = 
    ["./image/ScriptSet/Off/EditName.png",
    "./image/ScriptSet/On/EditName.png"]
    MacroIcon: any = [
        "url('./image/ScriptSet/KeyUpIcon.png')",
        "url('./image/ScriptSet/KeyDownIcon.png')",
    ]
    IconRecord: any = [
        "./image/ScriptSet/Off/IconRecord.png",
        "./image/ScriptSet/On/IconRecord.png",
    ]
    IconDelete: any = [
        "./image/ScriptSet/Off/IconDelete.png",
        "./image/ScriptSet/On/IconDelete.png",
    ]
    IconEdit: any = [
        "./image/ScriptSet/Off/IconEdit.png",
        "./image/ScriptSet/On/IconEdit.png",
    ]
    IconMoveDown: any = [
        "./image/ScriptSet/Off/IconMoveDown.png",
        "./image/ScriptSet/On/IconMoveDown.png",
    ]
    IconMoveUP:any = [
        "./image/ScriptSet/Off/IconMoveUP.png",
        "./image/ScriptSet/On/IconMoveUp.png",
    ]
    IconAdd:any = [
        "./image/ScriptSet/Off/IconAdd.png",
        "./image/ScriptSet/On/IconAdd.png",
    ]
    FileSmallIcon:any = [
        "./image/ScriptSet/FileSmallIcon.png",
    ]

    FNIcon:any = [
        "./image/Keyboard/Off/FnIcon.png",
        "./image/Keyboard/On//FnIcon.png",
    ]
    FNIcon1:any = [
        "./image/Keyboard/Off/FnIcon1.png",
        "./image/Keyboard/On//FnIcon1.png",
    ]
    FNIcon2:any = [
        "./image/Keyboard/Off/FnIcon2.png",
        "./image/Keyboard/On//FnIcon2.png",
    ]
    FNIcon3:any = [
        "./image/Keyboard/Off/FnIcon3.png",
        "./image/Keyboard/On//FnIcon3.png",
    ]
    ReportRate:any = [
        "./image/P7/Off/ReportRate.png",
        "./image/P7/On//ReportRate.png",
    ]
    BatteryStats:any = [
        "url(./image/FirstPage/0%.png)",
        "url(./image/FirstPage/Charging.png)",
        "url(./image/FirstPage/Charging.png)",
        "url(./image/FirstPage/Charging.png)",
        "url(./image/FirstPage/Charging.png)",
        "url(./image/FirstPage/100%.png)",
    ]
    ShareOption:any = [
        "url('./image/P7/Off/Option.png')",
        "url('./image/P7/On/Option.png')",
    ]
    Page1:any = [
        "url('./image/Share/Off/Page1.png')",
        "url('./image/Share/mouseover/Page1.png')",
        "url('./image/Share/On/Page1.png')",
    ]
    Page2:any = [
        "url('./image/Share/Off/Page2.png')",
        "url('./image/Share/mouseover/Page2.png')",
        "url('./image/Share/On/Page2.png')",
    ]
    Page3:any = [
        "url('./image/Share/Off/Page3.png')",
        "url('./image/Share/mouseover/Page3.png')",
        "url('./image/Share/On/Page3.png')",
    ]
    Page4:any = [
        "url('./image/Share/Off/Page4.png')",
        "url('./image/Share/mouseover/Page4.png')",
        "url('./image/Share/On/Page4.png')",
    ]
    BoxState:any = [
        "url('./image/Share/Off/BoxState.png')",
        "url('./image/Share/On/BoxState.png')",
    ]  
    APModeSelectBtn:any = [
        "url('./image/ColorSet/Off/APModeSelectBtn.png')",
        "url('./image/ColorSet/On/APModeSelectBtn.png')",
    ]  

    APModeCenterBtn:any = [
        "url('./image/ColorSet/Off/APModeCenterBtn.png')",
        "url('./image/ColorSet/On/APModeCenterBtn.png')",
    ]  
    FileIcon:any = [
        "url('./image/ScriptSet/FileIconOff.png')",
        "url('./image/ScriptSet/FileIconOn.png')",
    ]
    BellIcon:any = [
        "url('./image/Share/Off/Bell.png')",
        "url('./image/Share/On/Bell.png')",
    ]
    SystemDefault:any = [
        "url('./image/Share/Off/SystemSettingBtn1.png')",
        "url('./image/Share/On/SystemSettingBtn1.png')",
        "url('./image/Share/mouseover/SystemSettingBtn1.png')",

    ]
    KBottomBtn: any = [
        "url('./image/Keyboard/Off/KBottomBtn0.png')",
        "url('./image/Keyboard/On/KBottomBtn0.png')",
        "url('./image/Keyboard/Off/KBottomBtn1.png')",
        "url('./image/Keyboard/On/KBottomBtn1.png')",
        "url('./image/Keyboard/Off/KBottomBtn2.png')",
        "url('./image/Keyboard/On/KBottomBtn2.png')",
        "url('./image/Keyboard/Off/KBottomBtn3.png')",
        "url('./image/Keyboard/On/KBottomBtn3.png')",
        "url('./image/Keyboard/Off/KBottomBtn4.png')",
        "url('./image/Keyboard/On/KBottomBtn4.png')",
        "url('./image/Keyboard/Off/KBottomBtn5.png')",
        "url('./image/Keyboard/On/KBottomBtn5.png')",
        "url('./image/Keyboard/Off/KBottomBtn6.png')",
        "url('./image/Keyboard/On/KBottomBtn6.png')",
        "url('./image/Keyboard/Off/KBottomBtn7.png')",
        "url('./image/Keyboard/On/KBottomBtn7.png')",
    ]

  
  

}
