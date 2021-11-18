/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardStyle:KeyBoardStyle Class
 * Processing KeyBoardStyle
-----------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core'
@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'GMMK NUMPAD'
    keyBoardList = {
        'GMMK NUMPAD': {
            ItemCss: [
                "height: 42px;width: 51px;margin-top: 26px;",
                "margin-top: 30px;margin-left: 101px;display: flex;",
                "margin-top: 30px;margin-left: 157px;display: flex;",
                "margin-top: 30px;margin-left: 213px;display: flex;",
                "margin-top: 30px;margin-left: 269px;display: flex;",
                "margin-top: 31px;margin-left: 348px;display: flex;border-radius: 31px;",
                "display: flex;margin-left: 446px;margin-top: 26px;height: 42px;width: 51px;",
                "margin-top: 66px;height: 42px;width: 51px;",
                "margin-top: 108px;height: 42px;width: 51px;",
                "display: flex;margin-left: 101px;margin-top: 86px;",
                "margin-top: 86px;margin-left: 158px;",
                "margin-top: 85px;margin-left: 213px;",
                "margin-top: 85px;margin-left: 269px;height: 111px;",
                "margin-top: 206px;margin-left: 345px;border-radius: 28px;height: 32px;width: 59px;display: flex;",
                "margin-top: 65px;margin-left: 446px;height: 42px;width: 51px;",
                "margin-top: 106px;margin-left: 446px;height: 42px;width: 51px;",
                "margin-top: 150px;height: 42px;width: 51px;",
                "margin-top: 142px;margin-left: 101px;",
                "margin-top: 142px;margin-left: 157px;",
                "margin-top: 141px;margin-left: 213px;",
                "margin-top: 148px;margin-left: 446px;height: 42px;width: 51px;",
                "margin-top: 192px;height: 42px;width: 51px;",
                "margin-top: 233px;margin-left: 0px;height: 42px;width: 51px;",
                "margin-top: 197px;margin-left: 102px;",
                "margin-top: 197px;margin-left: 158px;",
                "margin-top: 197px;margin-left: 213px;",
                "margin-top: 197px;margin-left: 269px;height: 111px;",
                "margin-top: 190px;margin-left: 446px;height: 42px;width: 51px;",
                "margin-top: 232px;margin-left: 446px;height: 42px;width: 51px;",
                "margin-top: 274px;height: 42px;width: 51px;",
                "margin-top: 252px;margin-left: 101px;width: 112px;",
                "margin-top: 253px;margin-left: 213px;",
                "margin-top: 274px;margin-left: 446px;height: 42px;width: 51px;",
            ]
            ,
            withoutTraceFakeCoordinates:[
            [0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],
            [0,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[6,1],
            [0,2],[1,2],[2,2],[3,2],[4,2],
            [0,3],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[5,3],
            [0,4],[1,4],[2,4],[3,4]],
            fakeCoordinates:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[0,0],
            [0,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[0,1],[0,1],
            [0,2],[1,2],[2,2],[3,2],[0,2],
            [0,3],[0,3],[1,3],[2,3],[3,3],[4,3],[0,3],[0,3],
            [0,4],[1,4],[2,4],[0,4]],
            hasValueStyle:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
            ,
            keyMapping:[
                "Side Light","NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract","ROTARY ENCODER","Side Light",
                "Side Light","Side Light","Numpad7","Numpad8","Numpad9","NumpadAdd","slider","Side Light","Side Light",
                "Side Light","Numpad4","Numpad5","Numpad6","Side Light",
                "Side Light","Side Light","Numpad1","Numpad2","Numpad3","NumpadEnter","Side Light","Side Light",
                "Side Light","Numpad0","NumpadDecimal","Side Light"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
            centerBlockPoint:18,
            qigong_Step1_Range: [0, 15, 30, 58, 71, 82],
            qigong_Step2_Range: [11, 19, 25, 24,23,17,9, 10],
            qigong_Special1_Step:[
            1,2,3,"NumpadMultiply","NumpadSubtract","ROTARY ENCODER","Side Light",
            1,1,2,3,"Numpad9","NumpadAdd","slider","Side Light","Side Light",
            1,"Numpad4","Numpad5","Numpad6",1,
            "Side Light","Side Light","Numpad1","Numpad2",3,1,1,1,
            "Side Light",3,2,1],
            snowing_Special1:[                
                "Side Light",1,999,1,999,"ROTARY ENCODER","Side Light",
                1,"Side Light","Numpad7",2,"Numpad9",2,"slider","Side Light","Side Light",
                2,999,3, 999,"Side Light",
                "Side Light","Side Light",3,"Numpad2",4,4,3,3,
                "Side Light",4,"NumpadDecimal",4],
            fixedColor:[[0,0,255,1],[0,255,255,1],[0,0,255,1],[255,0,255,1],[255,0,255,1],[255,0,255,1],[0,0,255,1],
            [0,0,255,1],[0,0,255,1],[0,255,0,1],[0,255,255,1],[0,0,255,1],[255,0,255,1],[0,0,0,1],[0,0,255,1],[0,0,255,1],
            [0,0,255,1],[255,255,0,1],[255,255,0,1],[0,255,255,1],[0,0,255,1],
            [0,0,255,1],[0,0,255,1],[255,0,0,1],[255,180,0,1],[0,255,0,1],[255,180,0,1],[0,0,255,1],[0,0,255,1],
            [0,0,255,1],[255,0,0,1],[255,255,0,1],[0,0,255,1]],    
            KeyTableArray: [[0, 6], [7, 16], [17, 20], [20, 28], [29, 32]],
            imageMaxWidth: 512,
            imageMaxHeight: 333,
        },
    }
    /**
     * getAssignTarget
     * @param name string:keyBoard name
    */
    getAssignTarget(name) {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[name]
    }

    /**
     * get nowTargetkeyBoard name
    */
    getTarget() {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[this.nowTargetKey]
    }

    /**
     * get nowTargetkeyBoard keyMapping
    */
    getTargetDefaultKeyArray() {
        return this.getTarget().keyMapping;
    }

    /**
     * find KeyMappingIndex
     * @param code string:Key name
    */
    findKeyMappingIndex(code = "") {
        let targetIndex = this.getTargetDefaultKeyArray().findIndex((x) => x == code)
        if (targetIndex == -1) {
            console.log('findKeyMappingIndex=lostcode',code);
        }
        return targetIndex;
    }
    /**
     * set keyBoardList cssText
     * @param target Array:HTMLElements List
    */
    applyStyles(target) {
        //console.log("applyStyles", this.getTarget().ItemCss,target);
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if(target[index]){
                //console.log("applyStyles_ItemCss_"+index, target[index].style.cssText);
                target[index].style.cssText = element;
            }
            else{
              console.log("applyStyles_ItemCss.forEach_Err",target[index],index);
            }
        });
        this.getTarget().keyMapping.forEach((element, index) => {
            if(target[index]){
                target[index].setAttribute('keyMapping', element);
                //console.log("applyStyles_keyMapping", index);
            }
            else{
              console.log("applyStyles_keyMapping.forEach_Err","color:red",target[index],index);
            }
        });
    }
}
