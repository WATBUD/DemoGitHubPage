
/*
  * 分析：
  * 獲取滑鼠實時移動的座標；m_move_x,m_move_y
  * 滑鼠按下時的座標；m_down_x,m_down_y
  * div的座標；dx,dy
  * 滑鼠按下時，滑鼠與div的偏移量；md_x,md_y
  * div的新座標；ndx,ndy

  */
document.write('<script src="SharesFunction.js"></script>');
class MouseMoveObjectManager{
    MouseMoveObjectArr=[];
    //fnEanble = false;
    scaleConfig = {
        scaleMultipleConfig: [0.25, 0.5, 1, 2, 4],
        scaleMultiple: 1,
    }
    switchShowBtn(targetDom) {
        console.log('targetDom', targetDom);
        targetDom.value = 'MoveMouseEvent ' + !this.MouseMoveObjectArr[0].fnEanble;
    }
   
    setAllMoveObject(){
        console.log('setAllMoveObject', this.MouseMoveObjectArr);

        for (let index = 0; index <  this.MouseMoveObjectArr.length; index++) {
            const element =  this.MouseMoveObjectArr[index];
            //element.fnEanble=var_fnEanble;
            element.switchMouseEvent();
            console.log('setAllMoveObject', element.targetUI);

        }   
    } 
    setAllMoveObjectfnEanble(var_fnEanble){
        for (let index = 0; index <  this.MouseMoveObjectArr.length; index++) {
            let element =  this.MouseMoveObjectArr[index];
            element.fnEanble=var_fnEanble;
        }   

    }



    setScaleConfig(input){
        for (let index = 0; index <  this.MouseMoveObjectArr.length; index++) {
            const element =  this.MouseMoveObjectArr[index];
            element.scaleConfig=input;
        }  
    }
    addMoveObject(setTargetName){
        this.MouseMoveObjectArr.push(new MouseMoveObject(setTargetName));
    }
  

  
  }
class MouseMoveObject {
    isDown = false;//記錄滑鼠狀態
    md_x;
    md_y;
    nowText = [];
    fnEanble = false;
    scaleConfig = {
        scaleMultipleConfig: [0.25, 0.5, 1, 2, 4],
        scaleMultiple: 1,
    }
    SharesFn;

    eventArray = [];
    ScrollArea;
    targetUI;
    targetName;
    ScrollContentArea;
    constructor(setTargetName) {
        this.SharesFn = new SharesFunction();
        this.targetName =setTargetName;

        
    }

    getScaleConfig() {


    }
    // switchShowBtn(targetDom) {
    //     console.log('targetDom', targetDom);
    //     targetDom.value = 'MoveMouseEvent ' + !this.fnEanble;
    // }
   


    addMoveMouseEvent() {
        this.targetUI = document.getElementById(this.targetName);
        this.ScrollArea = document.getElementById("ScrollArea");
        this.ScrollContentArea = document.getElementById("ScrollContentArea");
        //console.log(SharesFn.get_Windows_Vw_Vh()[0]*100);
        this.eventArray[0] = (e) => {
            this.isDown = true;
            // //獲取div座標
            // dx = move_div.offsetLeft;//200
            // dy = move_div.offsetTop;//150
            //獲取滑鼠與div偏移量
            var T2 = document.getElementById("ScrollContentArea").getBoundingClientRect();

            this.md_x = event.pageX - //T2.left;
                this.targetUI.offsetLeft * this.scaleConfig.scaleMultiple;
            this.md_y = event.pageY - //T2.top;
                this.targetUI.offsetTop * this.scaleConfig.scaleMultiple;

            var txtShow = document.getElementById('txtShow');
            //move_divcs = document.getElementsByClassName("move_div");
            // console.log(event);
            // console.log(move_div.attributes);
            // console.log("div_dir");
            // console.dir(move_div);
            // console.log("class_dir");


            var obj = {
                'event.pageX': event.pageX,
                "event.pageY": event.pageY,
                "move_div.offsetLeft": this.targetUI.offsetLeft,
                "move_div.offsetTop": this.targetUI.offsetTop,
                "md_x": this.md_x,
                "md_y": this.md_y,
                "move_div.scrollWidth": this.targetUI.scrollWidth,
                "move_div.scrollHeight": this.targetUI.scrollHeight,

                //   "document.style.":document.style,      
            };
            this.nowText[0] = "onmousedown:<BR>" + JSON.stringify(obj).replace(/,/g, ',\n').replace(/{/g, '{\n').replace(/}/g, '\n}')
            //txtShow.innerHTML = "onmousedown:<BR>";

            txtShow.innerText = this.nowText[0] + this.nowText[1];
            //console.log(event, event.target.scrollTop);

        };
        this.eventArray[1] = (e) => {
            // dx = move_div.offsetLeft;//實時更新div的座標
            // dy = move_div.offsetTop;//滑鼠按下時移動才觸發
            //var T1=getMatchedCSS(move_div,"offsetLeft");
            var T2 = getMatchedCSS(this.targetName, "width");
            var T4 = getMatchedCSS(this.targetName, "height");

            var T3 = getElementCSS(ScrollContentArea, "width");
            //SharesFn.get_Windows_Vw_Vh()[0]*50;
            var T5 =
                //SharesFn.get_Windows_Vw_Vh()[1]*50;
                getElementCSS(ScrollContentArea, "height");




            if (this.isDown) {
                var ndx = (event.pageX - this.md_x) / this.scaleConfig.scaleMultiple;//獲取新div滑鼠實時座標滑鼠與div=>X偏移量
                var ndy = (event.pageY - this.md_y) / this.scaleConfig.scaleMultiple;//獲取新div滑鼠實時座標滑鼠與div=>X偏移量
                var maxOffset = 10;
                ndx = ndx < 0 ? 0 : ndx;
                ndy = ndy < 0 ? 0 : ndy;
                ndx = ndx > (T3 - T2) ? (T3 - T2) : ndx;
                ndy = ndy > (T5 - T4) ? (T5 - T4) : ndy;

                this.targetUI.style.left = ndx + "px";//把新div座標值賦給div物件
                this.targetUI.style.top = ndy + "px";//把新div座標值賦給div物件



            };
            //console.log("move_div.parentElement.width",getComputedStyle(move_div.parentElement));
            //console.dir(getComputedStyle(move_div.parentElement).getPropertyValue("width"));
            //console.log(getComputedStyle(move_div.parentElement,null).getPropertyValue("width").match(/\d+/)[0]);
            //console.log(move_div.offsetLeft,T2,T3);




            ScrollArea.addEventListener("scroll", function (event) {
                //var scroll = this.scrollY;
                //console.log(event.target.scrollLeft, event.target.scrollTop);
            });

            var obj = {
                'event.pageX': event.pageX,
                "event.pageY": event.pageY,
                "move_div.offsetLeft": this.targetUI.offsetLeft,
                "move_div.offsetTop": this.targetUI.offsetTop,
                "move_div.scrollWidth": this.targetUI.scrollWidth,
                "move_div.scrollHeight": this.targetUI.scrollHeight,
                "T2": T2,
                "T3": T3,
                "T4": T4,
                "T5": T5,
                "T5": T5,
                "ScrollArea.scrollTop": ScrollArea.scrollTop,
                "ScrollArea.scrollLeft": ScrollArea.scrollLeft,
                //   "document.style.":document.style,      
            };
            this.nowText[1] = "onmousemove:<BR>" + JSON.stringify(obj).replace(/,/g, ',\n').replace(/{/g, '{\n').replace(/}/g, '\n}')
            txtShow.innerText = this.nowText[0] + this.nowText[1];


            //txtShow.innerHTML = "onmousemove:<BR>";
            //txtShow.innerText += JSON.stringify(obj).replace(/,/g, ',\n').replace(/{/g, '{\n').replace(/}/g, '\n}');
        };
        this.eventArray[2] = (e) => {

            this.isDown = false;
        };
        this.targetUI.addEventListener("mousedown", this.eventArray[0]);
        document.addEventListener("mousemove", this.eventArray[1]);
        document.addEventListener("mouseup", this.eventArray[2]);



    }
    removeMoveMouseEvent() {

        if(this.targetUI!=undefined){
        this.targetUI.removeEventListener("mousedown", this.eventArray[0]);
        document.removeEventListener("mousemove", this.eventArray[1]);
        document.removeEventListener("mouseup", this.eventArray[2]);
        }
    }

    switchMouseEvent() {
        //this.fnEanble = !this.fnEanble;
        switch (this.fnEanble) {
            case true:
                this.addMoveMouseEvent();
                break;
            case false:
                this.removeMoveMouseEvent();

                break;

        }
    }







   

}



// class ScaleEventManager{    
//     scaleConfig = {
//         scaleMultipleConfig: [0.25, 0.5, 1, 2, 4],
//         scaleMultiple: 1,
//     }
//     addScaleEvent(targetName) {
//         document.addEventListener('keydown', (e) => {
//             if (e.code == "NumpadAdd") {
//                 this.scaleConfig.scaleMultiple += 0.1;
//                 document.getElementById(targetName).style.transform = "scale(" + this.scaleConfig.scaleMultiple + ")"
//                 this.calculatorScroll();

//             }
//             if (e.code == "NumpadSubtract") {
//                 this.scaleConfig.scaleMultiple -= 0.1;

//                 document.getElementById(targetName).style.transform = "scale(" + this.scaleConfig.scaleMultiple + ")"
//                 this.calculatorScroll();
//             }
//         }) 

//     }
//     calculatorScroll() {

//         var ScrollArea = document.getElementById("ScrollArea");
//         ScrollArea.scrollTop = (getMatchedCSS("ScrollContentArea", "height") *  this.scaleConfig.scaleMultiple - getMatchedCSS("ScrollArea", "height")) / 2;
//         ScrollArea.scrollLeft = (getMatchedCSS("ScrollContentArea", "width") *  this.scaleConfig.scaleMultiple - getMatchedCSS("ScrollArea", "width")) / 2;;
//     }
//   }



