import { Injectable } from '@angular/core';

@Injectable()
export class AssociateManager {
    AssociateArr: any = [];
    currentChooseIndex: any = 0;

    hibernateTimeArr:any= [1,3,5,10];
    ProgramNameTest: any = ["AnyDesk.exe","chrome.exe","bushound.exe","BCompare.exe"];
    constructor() {
        for (let index = 0; index < 0; index++) {
            this.AssociateArr.push({
                name: "LOL" + this.AssociateArr.length,
                hibernate: false,
                winLock: false,
                directionSwitch: false,
                hibernateTime: 1,
                assignKeyboardProfile:0,
                advanceModeCode:0,
                associatePath:"",
            });
        }
    }
    setAssignKeyboardProfile(index){
        if(this.has())
        this.getClass().assignKeyboardProfile=index;

    }
   

    has(){
        if (this.AssociateArr.length > 0) {
            //console.log("AssociateManagerhas",true);
            return true;
        }
        else{           
            //console.log("AssociateManagerhas",false);
            return false;
        }
    }
     
      




    getClass() {
        //console.log("AssociateManagergetClass",this.AssociateArr.length);
        if (this.AssociateArr.length > 0) {
            return this.AssociateArr[this.currentChooseIndex];
        }
      
    }
    check_length() {
        return this.AssociateArr.length <= 0 ? false : true;
    }

    ImportClassData(InputData) {
        console.log("ImportMangerClassData", InputData, typeof InputData, typeof InputData[1]);

        InputData = JSON.parse(JSON.stringify(InputData));

        var arrkeys = Object.keys(InputData[0]);//取得欄位變成陣列

        for (let index = 0; index < arrkeys.length; index++) {
            this[arrkeys[index]] = InputData[0][arrkeys[index]];
        }
        this.getClass().ImportCustomLedData(InputData[1]);

    }
    
    Order(command = "") {
        switch (command) {
            case "Add":
                //if(this.AssociateArr.length>19){return}
                //var Tname="名稱"+this.matrix_frames.length;
                if (this.has()) {
                    this.currentChooseIndex += 1;
                }
                else{
                    this.currentChooseIndex = 0;
                }
                this.AssociateArr.push({
                    name: "預設" + this.AssociateArr.length,
                    hibernate: false,
                    winLock: false,
                    directionSwitch: false,
                    hibernateTime: 1,
                    assignKeyboardProfile:0,
                    advanceModeCode:0,
                    associatePath:"",
                });
                
                return this.AssociateArr[this.currentChooseIndex] ;

            case "Delete":
                if (this.currentChooseIndex > 0) {
                    var T = this.currentChooseIndex;
                    this.currentChooseIndex -= 1;
                    this.AssociateArr.splice(T, 1);
                }
                else if (this.currentChooseIndex == 0) {
                    this.AssociateArr.splice(this.currentChooseIndex, 1);
                }

                break;

        }
    }


}
