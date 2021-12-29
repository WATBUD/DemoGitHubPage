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
    BackupPath: any = [
        "url('./image/Share/ExitApplication.png')",
        "url('./image/Share/KeyDownIcon.png')",
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
    Digit0: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit0.png",
        "./image/Perixx_Project/KeyIcon/On/Digit0.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit0.png",
    ]
    Digit1: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit1.png",
        "./image/Perixx_Project/KeyIcon/On/Digit1.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit1.png",
    ]
    Digit2: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit2.png",
        "./image/Perixx_Project/KeyIcon/On/Digit2.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit2.png",
    ]
    Digit3: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit3.png",
        "./image/Perixx_Project/KeyIcon/On/Digit3.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit3.png",
    ]
    Digit4: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit4.png",
        "./image/Perixx_Project/KeyIcon/On/Digit4.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit4.png",
    ]
    Digit5: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit5.png",
        "./image/Perixx_Project/KeyIcon/On/Digit5.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit5.png",
    ]
    Digit6: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit6.png",
        "./image/Perixx_Project/KeyIcon/On/Digit6.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit6.png",
    ]
    Digit7: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit7.png",
        "./image/Perixx_Project/KeyIcon/On/Digit7.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit7.png",
    ]
    Digit8: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit8.png",
        "./image/Perixx_Project/KeyIcon/On/Digit8.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit8.png",
    ]
    Digit9: any = [
        "./image/Perixx_Project/KeyIcon/Off/Digit9.png",
        "./image/Perixx_Project/KeyIcon/On/Digit9.png",
        "./image/Perixx_Project/KeyIcon/Print/Digit9.png",
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

   
    getThePicture(KeyString=""){

    var imagePath=[
        "./image/Perixx_Project/KeyIcon/Off/"+KeyString+".png",
        "./image/Perixx_Project/KeyIcon/On/"+KeyString+".png",
        "./image/Perixx_Project/KeyIcon/Print/"+KeyString+".png",
    ]
    //console.log('%c getThePicture', 'background: black; color: white', KeyString,imagePath);

    return imagePath;
   }
}
