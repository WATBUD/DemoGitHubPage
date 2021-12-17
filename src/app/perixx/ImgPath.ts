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
    MacroIcon: any = [
        "url('./image/ScriptSet/KeyUpIcon.png')",
        "url('./image/ScriptSet/KeyDownIcon.png')",
    ]
    IconRecord: any = [
        "./image/ScriptSet/Off/IconRecord.png",
        "./image/ScriptSet/On/IconRecord.png",
    ]
    Macro_Linking: any = [
        "./image/Perixx_Project/MacroPage/Off/Linking.png",
        "./image/Perixx_Project/MacroPage/On/Linking.png",
    ]
    Macro_Nav: any = [
        "./image/Perixx_Project/NavigationBar/Off/Macro_Nav.png",
        "./image/Perixx_Project/NavigationBar/On/Macro_Nav.png",
    ]
    Lighting_Nav: any = [
        "./image/Perixx_Project/NavigationBar/Off/Lighting_Nav.png",
        "./image/Perixx_Project/NavigationBar/On/Lighting_Nav.png",
    ]
    Keyboard_Nav: any = [
        "./image/Perixx_Project/NavigationBar/Off/Keyboard_Nav.png",
        "./image/Perixx_Project/NavigationBar/On/Keyboard_Nav.png",
    ]
    Home_Nav: any = [
        "./image/Perixx_Project/NavigationBar/Off/Home_Nav.png",
        "./image/Perixx_Project/NavigationBar/On/Home_Nav.png",
    ]
    Digit1: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit1.png",
        "./image/Perixx_Project/KeyIcon/On/Digit1.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit1.png",

    ]

    ShareOption:any = [
        "url('./image/P7/Off/Option.png')",
        "url('./image/P7/On/Option.png')",
    ]
  
    BellIcon:any = [
        "url('./image/Share/Off/Bell.png')",
        "url('./image/Share/On/Bell.png')",
    ]
    keyBindingIconList=[{
        'recordBindCodeName':"",
        'Icon':"",
    }]

   

}
