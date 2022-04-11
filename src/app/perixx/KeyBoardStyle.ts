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


                "border-width: 0px; margin-left: 21px; margin-top: 12px; display: flex; transform: rotate(7deg);",
                "border-width: 0px;margin-left: 44px;margin-top: 15px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 18px;margin-left: 67px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 22px;margin-left: 92px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 25px;margin-left: 115px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 28px;margin-left: 138px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 31px;margin-left: 162px;display: flex;transform: rotate(7deg);",
                "border-width: 0px;margin-top: 31px;margin-left: 222px;display: flex;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 246px;margin-top: 28px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 270px;margin-top: 24px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 293px;margin-top: 21px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 316px;margin-top: 18px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 340px;margin-top: 15px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 363px;margin-top: 11px;transform: rotate(-8deg);",
                "border-width: 0px;width: 30px;margin-left: 389px;margin-top: 7px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 423px;margin-top: 5px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 447px;margin-top: 5px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 471px;margin-top: 5px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 17px;margin-top: 37px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 41px;margin-top: 42px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 64px;margin-top: 45px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 88px;margin-top: 48px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 112px;margin-top: 51px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 134px;margin-top: 54px;transform: rotate(8deg);",
                "border-width: 0px; margin-left: 158px; margin-top: 58px; transform: rotate(8deg);",
                "border-width: 0px;margin-left: 226px;margin-top: 57px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 250px;margin-top: 54px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 273px;margin-top: 51px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 297px;margin-top: 47px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 320px;margin-top: 43.7px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 343px;margin-top: 40px;transform: rotate(-9deg);",
                "border-width: 0px;width: 53px;margin-left: 369px;margin-top: 34px;transform: rotate(-9deg);",
                "border-width: 0px;margin-left: 424px;margin-top: 32px;",
                "border-width: 0px;margin-left: 447px;margin-top: 32px;",
                "border-width: 0px;margin-left: 472px;margin-top: 32px;",
                "border-width: 0px;margin-left: 498px;margin-top: 32px;",
                "border-width: 0px;margin-left: 522px;margin-top: 32px;",
                "border-width: 0px; margin-left: 546.5px; margin-top: 32px;",
                "border-width: 0px; margin-left: 570px; margin-top: 32px;",
                "border-width: 0px;width: 34px;margin-left: 13px;margin-top: 62px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 49px;margin-top: 67px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 73px;margin-top: 70px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 96px;margin-top: 73px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 120px;margin-top: 76px;transform: rotate(8deg);",
                "border-width: 0px;margin-left: 143px;margin-top: 80px;transform: rotate(8deg);",
                "border-width: 0px; margin-left: 223px; margin-top: 83px; transform: rotate(-8deg);",
                "border-width: 0px; margin-left: 246px; margin-top: 79px; transform: rotate(-8deg);",
                "border-width: 0px; margin-left: 269px; margin-top: 75.9px; transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 293px;margin-top: 72px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 317px;margin-top: 69px;transform: rotate(-8deg);",
                "border-width: 0px; margin-left: 340px; margin-top: 65px; transform: rotate(-8deg);",
                "border-width: 0px; margin-left: 364px; margin-top: 62px; transform: rotate(-8deg);",
                "border-width: 0px; width: 32px; margin-left: 386px; margin-top: 58px; transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 423px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 447px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 471px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 498px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 522px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 547px;margin-top: 56px;transform: rotate(0deg);",
                "border-width: 0px;height: 43px;margin-left: 571px;margin-top: 58px;transform: rotate(0deg);",
                "border-width: 0px;width: 31px;margin-left: 11px;margin-top: 87px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 52px;margin-top: 91px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 75px;margin-top: 94px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 99px;margin-top: 97px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 123px;margin-top: 100px;transform: rotate(7deg);",
                "border-width: 0px; margin-left: 146px; margin-top: 104px; transform: rotate(7deg);",
                "border-width: 0px;margin-left: 232px;margin-top: 105px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 256px;margin-top: 102px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 279px;margin-top: 99px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 303px;margin-top: 96px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 326px;margin-top: 92px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 350px;margin-top: 89px;transform: rotate(-8deg);",
                "border-width: 0px;width: 50px;margin-left: 371px;margin-top: 83px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 498px;margin-top: 80px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 522px;margin-top: 80px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 546px;margin-top: 80px;transform: rotate(0deg);",
                "border-width: 0px; width: 49px; height: 20px; margin-left: 8px; margin-top: 112px; transform: rotate(7deg);",
                "border-width: 0px;margin-left: 60px;margin-top: 116px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 84px;margin-top: 119.8px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 108px;margin-top: 123px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 131px;margin-top: 126px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 155px;margin-top: 130px;transform: rotate(7deg);",
                "border-width: 0px;margin-left: 247px;margin-top: 128px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 271px;margin-top: 124px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 294px;margin-top: 120px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 317px;margin-top: 117px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 341px;margin-top: 114px;transform: rotate(-8deg);",
                "border-width: 0px;width: 54px;margin-left: 367px;margin-top: 108px;transform: rotate(-8deg);",
                "border-width: 0px;margin-left: 448px;margin-top: 103px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 498px;margin-top: 104px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 522px;margin-top: 104px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 546px;margin-top: 104px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 570px;margin-top: 105px;height: 45px;transform: rotate(0deg);",
                "border-width: 0px;width: 33px;margin-left: 5px;margin-top: 134px;transform: rotate(10deg);",
                "border-width: 0px;margin-left: 43px;margin-top: 139px;transform: rotate(10deg);width: 21px;",
                "border-width: 0px;margin-left: 66px;margin-top: 144px;transform: rotate(10deg);width: 21px;",
                "border-width: 0px;margin-left: 90px;margin-top: 148px;transform: rotate(10deg);width: 21px;",
                "border-width: 0px;width: 75px;margin-left: 116px;margin-top: 154px;transform: rotate(7deg);",
                "border-width: 0px;width: 78px;margin-left: 215px;margin-top: 155px;transform: rotate(-7deg);",
                "border-width: 0px;margin-left: 300px;margin-top: 146px;transform: rotate(-7deg);",
                "border-width: 0px;width: 25px;margin-left: 327px;margin-top: 141px;transform: rotate(-7deg);",
                "border-width: 0px;width: 25px;margin-left: 356px;margin-top: 136px;transform: rotate(-7deg);",
                "border-width: 0px; width: 32px; margin-left: 386px; margin-top: 131px; transform: rotate(-7deg);",
                "border-width: 0px;margin-left: 423px;margin-top: 128px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 448px;margin-top: 128px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 471px;margin-top: 128px;transform: rotate(0deg);",
                "border-width: 0px;width: 45px;margin-left: 499px;margin-top: 128px;transform: rotate(0deg);",
                "border-width: 0px;margin-left: 546px;margin-top: 128px;transform: rotate(0deg);",

            ],
            quicklySelectTheBlockList: [
                { "name": "All Keys", "groupIndex": [1, 2, 3], 'currentStateOfTheSwitch': false },
                { "name": "Block 3", "groupIndex": [35, 36, 37, 38, 56, 57, 58, 59, 73, 74, 75, 89, 90, 91, 92, 106, 107], 'currentStateOfTheSwitch': false },
                { "name": "Block 2", "groupIndex": [15, 16, 17, 32, 33, 34, 53, 54, 55, 88, 103, 104, 105], 'currentStateOfTheSwitch': false },
                { "name": "Block 1", "groupIndex": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], 'currentStateOfTheSwitch': false },
                { "name": "Big Keys", "groupIndex": [0, 31, 39, 60, 72, 76, 87, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], 'currentStateOfTheSwitch': false },
                { "name": "Numerals", "groupIndex": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 'currentStateOfTheSwitch': false },
                { "name": "F Keys", "groupIndex": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 94], 'currentStateOfTheSwitch': false },
                { "name": "Characters", "groupIndex": [18, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], 'currentStateOfTheSwitch': false },


            ]
            ,
            keyMapping: ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "WinLock", "FunctionLock", "PrintScreen", "ScrollLock", "Pause", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Insert", "Home", "PageUp", "NumLock", "NumpadDivide", "NumpadMultiply", "NumpadSubtract", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "End", "PageDown", "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "Numpad4", "Numpad5", "Numpad6", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "Numpad1", "Numpad2", "Numpad3", "NumpadEnter", "ControlLeft", "Custom_Fnkey", "MetaLeft", "AltLeft", "Space", "Space", "AltRight", "MetaRight", "ContextMenu", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight", "Numpad0", "NumpadDecimal"],
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
            console.log('findKeyMappingIndex=lostcode', code);
        }
        return targetIndex;
    }
    /**
     * set keyBoardList cssText
     * @param target Array:HTMLElements List
    */
    applyStyles(target) {
        console.log("applyStyles", this.getTarget().ItemCss, target);
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if (target[index]) {
                //console.log("applyStyles_ItemCss_"+index, target[index].style.cssText);
                target[index].style.cssText += element;
            }
            else {
                console.log("applyStyles_ItemCss.forEach_Err", target[index], index);
            }
        });
        this.getTarget().keyMapping.forEach((element, index) => {
            if (target[index]) {
                target[index].setAttribute('keyMapping', element);
                //console.log("applyStyles_keyMapping", index);
            }
            else {
                console.log("applyStyles_keyMapping.forEach_Err", "color:red", target[index], index);
            }
        });
    }
}
