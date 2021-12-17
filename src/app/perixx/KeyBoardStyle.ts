/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardStyle:KeyBoardStyle Class
 * Processing KeyBoardStyle
-----------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core'
@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'perixx1'
    keyBoardList = {
        'perixx1': {
            ItemCss: [
                "margin-left: 48px;margin-top: 11px;display: flex;transform: rotate(7deg);",
                "margin-left: 72px;margin-top: 14px;display: flex;transform: rotate( 7deg);",
                "margin-top: 18px;margin-left: 96px;display: flex;transform: rotate( 7deg);",
                "margin-top: 21px; margin-left: 120px; display: flex; transform: rotate( 7deg);",
                "margin-top: 25px; margin-left: 144px; display: flex; transform: rotate( 7deg);",
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
            keyMapping:["Side Light","NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Perixx_Project/perixx1RemoveString.png)',
            BGImageKeyerEffects: 'url(./image/Perixx_Project/perixx1.png)',
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
        console.log("applyStyles", this.getTarget().ItemCss,target);
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if(target[index]){
                //console.log("applyStyles_ItemCss_"+index, target[index].style.cssText);
                target[index].style.cssText += element;
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
