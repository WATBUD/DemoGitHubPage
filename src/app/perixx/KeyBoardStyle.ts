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
                "margin-left: 48px; margin-top: 11px; display: flex; transform: rotate(7deg);" ,
                "margin-left: 72px; margin-top: 14px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 18px; margin-left: 96px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 21px; margin-left: 120px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 25px; margin-left: 144px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 28px; margin-left: 168px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 31px; margin-left: 192px; display: flex; transform: rotate(7deg);" ,
                "margin-top: 31px; margin-left: 248px; display: flex; transform: rotate(-8deg);" ,
                "margin-left: 272px;margin-top: 28px;transform: rotate(-8deg);" ,
                "margin-left: 296px;margin-top: 25px;transform: rotate(-8deg);" ,
                "margin-left: 320px;margin-top: 21px;transform: rotate(-8deg);" ,
                "margin-left: 343px;margin-top: 18px;transform: rotate(-8deg);" ,
                "margin-left: 366px;margin-top: 15px;transform: rotate(-8deg);" ,
                "margin-left: 390px;margin-top: 12px;transform: rotate(-8deg);" ,
                "width: 30px;margin-left: 415px;margin-top: 7px;transform: rotate(-8deg);" ,
                "margin-left: 450px;margin-top: 5px;transform: rotate(1deg);" ,
                "margin-left: 475px;margin-top: 5px;transform: rotate(1deg);" ,
                "margin-left: 500px;margin-top: 5px;transform: rotate(1deg);" ,
                "margin-left: 44px;margin-top: 37px;transform: rotate(8deg);" ,
                "margin-left: 68px;margin-top: 40px;transform: rotate(8deg);" ,
                "margin-left: 92px;margin-top: 44px;transform: rotate(8deg);" ,
                "margin-left: 116px;margin-top: 48px;transform: rotate(8deg);" ,
                "margin-left: 140px;margin-top: 51px;transform: rotate(8deg);" ,
                "margin-left: 163px;margin-top: 55px;transform: rotate(8deg);" ,
                "margin-left: 187px;margin-top: 58px;transform: rotate(8deg);" ,
                "margin-left: 251px;margin-top: 58px;transform: rotate(-9deg);" ,
                "margin-left: 276px;margin-top: 54px;transform: rotate(-9deg);" ,
                "margin-left: 300px;margin-top: 51px;transform: rotate(-9deg);" ,
                "margin-left: 323px;margin-top: 47px;transform: rotate(-9deg);" ,
                "margin-left: 346px;margin-top: 44px;transform: rotate(-9deg);" ,
                "margin-left: 369px;margin-top: 40px;transform: rotate(-9deg);" ,
                "width: 53px;margin-left: 393px;margin-top: 34px;transform: rotate(-9deg);" ,
                "margin-left: 450px;margin-top: 32px;" ,
                "margin-left: 475px;margin-top: 33px;" ,
                "margin-left: 500px;margin-top: 33px;" ,
                "margin-left: 526px;margin-top: 33px;" ,
                "margin-left: 550px;margin-top: 33px;" ,
                "margin-left: 574px;margin-top: 33px;" ,
                "margin-left: 598px;margin-top: 33px;" ,
                "width: 58px;margin-left: 41px;margin-top: 64px;transform: rotate(8deg);" ,
                "margin-left: 100px;margin-top: 70px;transform: rotate(8deg);" ,
                "margin-left: 124px;margin-top: 73px;transform: rotate(8deg);" ,
                "margin-left: 147px;margin-top: 76px;transform: rotate(8deg);" ,
                "margin-left: 171px;margin-top: 80px;transform: rotate(8deg);" ,
                "margin-left: 249px;margin-top: 83px;transform: rotate(-8deg);" ,
                "margin-left: 273px;margin-top: 80px;transform: rotate(-8deg);" ,
                "margin-left: 297px;margin-top: 77px;transform: rotate(-8deg);" ,
                "margin-left: 321px;margin-top: 74px;transform: rotate(-8deg);" ,
                "margin-left: 344px;margin-top: 71px;transform: rotate(-8deg);" ,
                "margin-left: 369px;margin-top: 68px;transform: rotate(-8deg);" ,
                "margin-left: 392px;margin-top: 65px;transform: rotate(-8deg);" ,
                "width: 32px;margin-left: 415px;margin-top: 61px;transform: rotate(-8deg);" ,
                "margin-left: 451px;margin-top: 58px;transform: rotate(0deg);" ,
                "margin-left: 476px;margin-top: 58px;transform: rotate(0deg);" ,
                "margin-left: 500px;margin-top: 58px;transform: rotate(0deg);" ,
                "margin-left: 527px;margin-top: 58px;transform: rotate(0deg);" ,
                "margin-left: 551px;margin-top: 58px;transform: rotate(0deg);" ,
                "margin-left: 575px;margin-top: 58px;transform: rotate(0deg);" ,
                "height: 43px;margin-left: 599px;margin-top: 58px;transform: rotate(0deg);" ,
                "width: 31px;margin-left: 39px;margin-top: 87px;transform: rotate(7deg);" ,
                "margin-left: 81px;margin-top: 93px;transform: rotate(7deg);" ,
                "margin-left: 104px;margin-top: 96px;transform: rotate(7deg);" ,
                "margin-left: 128px;margin-top: 99px;transform: rotate(7deg);" ,
                "margin-left: 152px;margin-top: 102px;transform: rotate(7deg);" ,
                "margin-left: 175px;margin-top: 106px;transform: rotate(7deg);" ,
                "margin-left: 261px;margin-top: 107px;transform: rotate(-8deg);" ,
                "margin-left: 284px;margin-top: 104px;transform: rotate(-8deg);" ,
                "margin-left: 308px;margin-top: 101px;transform: rotate(-8deg);" ,
                "margin-left: 331px;margin-top: 98px;transform: rotate(-8deg);" ,
                "margin-left: 355px;margin-top: 94px;transform: rotate(-8deg);" ,
                "margin-left: 377px;margin-top: 90px;transform: rotate(-8deg);" ,
                "width: 50px;margin-left: 401px;margin-top: 87px;transform: rotate(-8deg);" ,
                "margin-left: 527px;margin-top: 81px;transform: rotate(1deg);" ,
                "margin-left: 551px;margin-top: 81px;transform: rotate(1deg);" ,
                "margin-left: 575px;margin-top: 81px;transform: rotate(1deg);" ,
                "width: 48px;margin-left: 37px;margin-top: 113px;transform: rotate(7deg);" ,
                "margin-left: 90px;margin-top: 118px;transform: rotate(7deg);" ,
                "margin-left: 114px;margin-top: 121px;transform: rotate(7deg);" ,
                "margin-left: 137px;margin-top: 124px;transform: rotate(7deg);" ,
                "margin-left: 161px;margin-top: 127px;transform: rotate(7deg);" ,
                "margin-left: 184px;margin-top: 130px;transform: rotate(7deg);" ,
                "margin-left: 276px;margin-top: 130px;transform: rotate(-8deg);" ,
                "margin-left: 300px;margin-top: 126px;transform: rotate(-8deg);" ,
                "margin-left: 323px;margin-top: 123px;transform: rotate(-8deg);" ,
                "margin-left: 346px;margin-top: 120px;transform: rotate(-8deg);" ,
                "margin-left: 370px;margin-top: 117px;transform: rotate(-8deg);" ,
                "width: 54px;margin-left: 393px;margin-top: 110px;transform: rotate(-8deg);" ,
                "margin-left: 476px;margin-top: 105px;transform: rotate(-1deg);" ,
                "margin-left: 526px;margin-top: 105px;transform: rotate(-1deg);" ,
                "margin-left: 551px;margin-top: 105px;transform: rotate(-1deg);" ,
                "margin-left: 575px;margin-top: 105px;transform: rotate(-1deg);" ,
                "margin-left: 599px;margin-top: 105px;height: 45px;transform: rotate(-1deg);" ,
                "width: 33px;margin-left: 35px;margin-top: 134px;transform: rotate(10deg);" ,
                "margin-left: 73px;margin-top: 141px;transform: rotate(10deg);" ,
                "margin-left: 96px;margin-top: 145px;transform: rotate(10deg);" ,
                "margin-left: 120px;margin-top: 149px;transform: rotate(10deg);" ,
                "width: 75px;margin-left: 144px;margin-top: 157px;transform: rotate(7deg);" ,
                "width: 78px;margin-left: 243px;margin-top: 157px;transform: rotate(-7deg);" ,
                "margin-left: 329px;margin-top: 147px;transform: rotate(-7deg);" ,
                "width: 25px;margin-left: 356px;margin-top: 143px;transform: rotate(-7deg);" ,
                "width: 25px;margin-left: 384px;margin-top: 139px;transform: rotate(-7deg);" ,
                "width: 32px;margin-left: 413px;margin-top: 134px;transform: rotate(-7deg);" ,
                "margin-left: 452px;margin-top: 129px;transform: rotate(0deg);" ,
                "margin-left: 452px;margin-top: 129px;transform: rotate(0deg);" ,
                "margin-left: 476px;margin-top: 129px;transform: rotate(0deg);" ,
                "margin-left: 500px;margin-top: 129px;transform: rotate(0deg);" ,
                "width: 45px;margin-left: 526px;margin-top: 129px;transform: rotate(0deg);" ,
                "margin-left: 575px;margin-top: 129px;transform: rotate(0deg);" ,
            ],
            quicklySelectTheBlockList:[
                {"name":"Characters","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"F Keys","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"Numerals","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"Big Keys","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"Block 1","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"Block 2","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"Block 3","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
                {"name":"All Keys","groupIndex":[1,2,3],'currentStateOfTheSwitch':false},
            ]
            ,
            keyMapping:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],
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
