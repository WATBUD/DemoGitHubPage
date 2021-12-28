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
                "margin-left: 49px; margin-top: 11px; display: flex; transform: rotate(7deg);",
                "margin-left: 72px; margin-top: 14px; display: flex; transform: rotate(7deg);",
                "margin-top: 18px; margin-left: 96px; display: flex; transform: rotate(7deg);",
                "margin-top: 21px; margin-left: 120px; display: flex; transform: rotate(7deg);",
                "margin-top: 25px;margin-left: 142px;display: flex;transform: rotate(7deg);",
                "margin-top: 28px;margin-left: 166px;display: flex;transform: rotate(7deg);",
                "margin-top: 31px; margin-left: 189px; display: flex; transform: rotate(7deg);",
                "margin-top: 31px;margin-left: 249px;display: flex;transform: rotate(-8deg);",
                "margin-left: 273px;margin-top: 28px;transform: rotate(-8deg);",
                "margin-left: 297px;margin-top: 24px;transform: rotate(-8deg);",
                "margin-left: 320px; margin-top: 21px; transform: rotate(-8deg);",
                "margin-left: 344px;margin-top: 18px;transform: rotate(-8deg);",
                "margin-left: 368px;margin-top: 15px;transform: rotate(-8deg);",
                "margin-left: 391px;margin-top: 11px;transform: rotate(-8deg);",
                "width: 30px;margin-left: 415px;margin-top: 7px;transform: rotate(-8deg);",
                "margin-left: 450px; margin-top: 5px; transform: rotate(0deg);",
                "margin-left: 474px;margin-top: 5px;transform: rotate(0deg);",
                "margin-left: 499px;margin-top: 5px;transform: rotate(0deg);",
                "margin-left: 45px;margin-top: 37px;transform: rotate(8deg);",
                "margin-left: 68px; margin-top: 40px; transform: rotate(8deg);",
                "margin-left: 92px; margin-top: 44px; transform: rotate(8deg);",
                "margin-left: 116px;margin-top: 47px;transform: rotate(8deg);",
                "margin-left: 140px;margin-top: 50px;transform: rotate(8deg);",
                "margin-left: 163px;margin-top: 53px;transform: rotate(8deg);",
                "margin-left: 186px;margin-top: 57px;transform: rotate(8deg);",
                "margin-left: 253px;margin-top: 57px;transform: rotate(-9deg);",
                "margin-left: 277px;margin-top: 54px;transform: rotate(-9deg);",
                "margin-left: 300px;margin-top: 51px;transform: rotate(-9deg);",
                "margin-left: 324px;margin-top: 47px;transform: rotate(-9deg);",
                "margin-left: 347px;margin-top: 43.7px;transform: rotate(-9deg);",
                "margin-left: 370px;margin-top: 40px;transform: rotate(-9deg);",
                "width: 53px; margin-left: 393px; margin-top: 34px; transform: rotate(-9deg);",
                "margin-left: 450px;margin-top: 32px;",
                "margin-left: 475px;margin-top: 32px;",
                "margin-left: 499px;margin-top: 32px;",
                "margin-left: 525px; margin-top: 32px;",
                "margin-left: 549px;margin-top: 32px;",
                "margin-left: 573.5px;margin-top: 32px;",
                "margin-left: 598px;margin-top: 32px;",
                "width: 34px;margin-left: 41px;margin-top: 62px;transform: rotate(8deg);",
                "margin-left: 76px; margin-top: 67px; transform: rotate(8deg);",
                "margin-left: 100px; margin-top: 70px; transform: rotate(8deg);",
                "margin-left: 124px; margin-top: 73px; transform: rotate(8deg);",
                "margin-left: 147px; margin-top: 76px; transform: rotate(8deg);",
                "margin-left: 171px; margin-top: 80px; transform: rotate(8deg);",
                "margin-left: 249px; margin-top: 83px; transform: rotate(-8deg);",
                "margin-left: 273px; margin-top: 79px; transform: rotate(-8deg);",
                "margin-left: 297px; margin-top: 75.9px; transform: rotate(-8deg);",
                "margin-left: 320px; margin-top: 72px; transform: rotate(-8deg);",
                "margin-left: 344px; margin-top: 69px; transform: rotate(-8deg);",
                "margin-left: 368px;margin-top: 65px;transform: rotate(-8deg);",
                "margin-left: 391px; margin-top: 62px; transform: rotate(-8deg);",
                "width: 32px; margin-left: 415px; margin-top: 58px; transform: rotate(-8deg);",
                "margin-left: 450px; margin-top: 58px; transform: rotate(0deg);",
                "margin-left: 475px; margin-top: 58px; transform: rotate(0deg);",
                "margin-left: 499px; margin-top: 58px; transform: rotate(0deg);",
                "margin-left: 525px;margin-top: 56px;transform: rotate(0deg);",
                "margin-left: 549px;margin-top: 56px;transform: rotate(0deg);",
                "margin-left: 573px;margin-top: 56px;transform: rotate(0deg);",
                "height: 43px; margin-left: 598px; margin-top: 58px; transform: rotate(0deg);",
                "width: 31px; margin-left: 39px; margin-top: 87px; transform: rotate(7deg);",
                "margin-left: 79px; margin-top: 91px; transform: rotate(7deg);",
                "margin-left: 103px; margin-top: 94px; transform: rotate(7deg);",
                "margin-left: 126px; margin-top: 97px; transform: rotate(7deg);",
                "margin-left: 150px; margin-top: 100px; transform: rotate(7deg);",
                "margin-left: 174px;margin-top: 105px;transform: rotate(7deg);",
                "margin-left: 261px; margin-top: 107px; transform: rotate(-8deg);",
                "margin-left: 284px; margin-top: 103px; transform: rotate(-8deg);",
                "margin-left: 308px; margin-top: 100px; transform: rotate(-8deg);",
                "margin-left: 331px; margin-top: 96px; transform: rotate(-8deg);",
                "margin-left: 355px; margin-top: 92px; transform: rotate(-8deg);",
                "margin-left: 377px; margin-top: 90px; transform: rotate(-8deg);",
                "width: 50px; margin-left: 399px; margin-top: 84px; transform: rotate(-8deg);",
                "margin-left: 525px;margin-top: 80px;transform: rotate(0deg);",
                "margin-left: 549px;margin-top: 80px;transform: rotate(0deg);",
                "margin-left: 573px;margin-top: 80px;transform: rotate(0deg);",
                "width: 49px;height: 20px; margin-left: 36px;margin-top: 112px;transform: rotate(7deg);",
                "margin-left: 88px;margin-top: 116px;transform: rotate(7deg);",
                "margin-left: 112px;margin-top: 119.8px;transform: rotate(7deg);",
                "margin-left: 135px;margin-top: 123px;transform: rotate(7deg);",
                "margin-left: 159px;margin-top: 126px;transform: rotate(7deg);",
                "margin-left: 182px;margin-top: 130px;transform: rotate(7deg);",
                "margin-left: 275px;margin-top: 128px;transform: rotate(-8deg);",
                "margin-left: 298px;margin-top: 124px;transform: rotate(-8deg);",
                "margin-left: 322px;margin-top: 120px;transform: rotate(-8deg);",
                "margin-left: 345px;margin-top: 117px;transform: rotate(-8deg);",
                "margin-left: 368px;margin-top: 114px;transform: rotate(-8deg);",
                "width: 54px;margin-left: 393px;margin-top: 108px;transform: rotate(-8deg);",
                "margin-left: 475px;margin-top: 103px;transform: rotate(0deg);",
                "margin-left: 525px;margin-top: 104px;transform: rotate(0deg);",
                "margin-left: 549px;margin-top: 104px;transform: rotate(0deg);",
                "margin-left: 573px;margin-top: 104px;transform: rotate(0deg);",
                "margin-left: 598px;margin-top: 105px;height: 45px;transform: rotate(0deg);",
                "width: 33px; margin-left: 35px; margin-top: 134px; transform: rotate(10deg);",
                "margin-left: 71px;margin-top: 139px;transform: rotate(10deg);width: 21px;",
                "margin-left: 95px;margin-top: 143px;transform: rotate(10deg);width: 21px;",
                "margin-left: 118px;margin-top: 147px;transform: rotate(10deg);width: 21px;",
                "width: 75px;margin-left: 144px;margin-top: 154px;transform: rotate(7deg);",
                "width: 78px;margin-left: 242px;margin-top: 155px;transform: rotate(-7deg);",
                "margin-left: 328px;margin-top: 146px;transform: rotate(-7deg);",
                "width: 25px;margin-left: 356px;margin-top: 141px;transform: rotate(-7deg);",
                "width: 25px;margin-left: 385px;margin-top: 136px;transform: rotate(-7deg);",
                "width: 32px;margin-left: 413px;margin-top: 131px;transform: rotate(-7deg);",
                "margin-left: 450px;margin-top: 128px;transform: rotate(0deg);",
                "margin-left: 475px;margin-top: 128px;transform: rotate(0deg);",
                "margin-left: 499px;margin-top: 128px;transform: rotate(0deg);",
                "width: 45px;margin-left: 526px;margin-top: 128px;transform: rotate(0deg);",
                "margin-left: 573px;margin-top: 128px;transform: rotate(0deg);",
            ],
            quicklySelectTheBlockList: [
                { "name": "Characters", "groupIndex": [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85], 'currentStateOfTheSwitch': false },
                { "name": "F Keys", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
                { "name": "Numerals", "groupIndex": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'currentStateOfTheSwitch': false },
                { "name": "Big Keys", "groupIndex": [18, 31, 39, 51, 59, 71, 75, 86, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], 'currentStateOfTheSwitch': false },
                { "name": "Block 1", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
                { "name": "Block 2", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
                { "name": "Block 3", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
                { "name": "All Keys", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
            ]
            ,
            keyMapping: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            withoutTraceFakeCoordinates: [
                [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0],
                [0, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [6, 1],
                [0, 2], [1, 2], [2, 2], [3, 2], [4, 2],
                [0, 3], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [5, 3],
                [0, 4], [1, 4], [2, 4], [3, 4]],
            fakeCoordinates: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, 0],
            [0, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [0, 1], [0, 1],
            [0, 2], [1, 2], [2, 2], [3, 2], [0, 2],
            [0, 3], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [0, 3], [0, 3],
            [0, 4], [1, 4], [2, 4], [0, 4]],
            hasValueStyle: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
            ,
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Perixx_Project/perixx1RemoveString.png)',
            BGImageKeyerEffects: 'url(./image/Perixx_Project/perixx1.png)',
            centerBlockPoint: 18,
            qigong_Step1_Range: [0, 15, 30, 58, 71, 82],
            qigong_Step2_Range: [11, 19, 25, 24, 23, 17, 9, 10],
            qigong_Special1_Step: [
                1, 2, 3, "NumpadMultiply", "NumpadSubtract", "ROTARY ENCODER", "Side Light",
                1, 1, 2, 3, "Numpad9", "NumpadAdd", "slider", "Side Light", "Side Light",
                1, "Numpad4", "Numpad5", "Numpad6", 1,
                "Side Light", "Side Light", "Numpad1", "Numpad2", 3, 1, 1, 1,
                "Side Light", 3, 2, 1],
            snowing_Special1: [
                "Side Light", 1, 999, 1, 999, "ROTARY ENCODER", "Side Light",
                1, "Side Light", "Numpad7", 2, "Numpad9", 2, "slider", "Side Light", "Side Light",
                2, 999, 3, 999, "Side Light",
                "Side Light", "Side Light", 3, "Numpad2", 4, 4, 3, 3,
                "Side Light", 4, "NumpadDecimal", 4],
            fixedColor: [[0, 0, 255, 1], [0, 255, 255, 1], [0, 0, 255, 1], [255, 0, 255, 1], [255, 0, 255, 1], [255, 0, 255, 1], [0, 0, 255, 1],
            [0, 0, 255, 1], [0, 0, 255, 1], [0, 255, 0, 1], [0, 255, 255, 1], [0, 0, 255, 1], [255, 0, 255, 1], [0, 0, 0, 1], [0, 0, 255, 1], [0, 0, 255, 1],
            [0, 0, 255, 1], [255, 255, 0, 1], [255, 255, 0, 1], [0, 255, 255, 1], [0, 0, 255, 1],
            [0, 0, 255, 1], [0, 0, 255, 1], [255, 0, 0, 1], [255, 180, 0, 1], [0, 255, 0, 1], [255, 180, 0, 1], [0, 0, 255, 1], [0, 0, 255, 1],
            [0, 0, 255, 1], [255, 0, 0, 1], [255, 255, 0, 1], [0, 0, 255, 1]],
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
