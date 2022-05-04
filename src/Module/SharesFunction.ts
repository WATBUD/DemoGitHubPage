import { Injectable } from '@angular/core';
@Injectable()
export class SharesFunction{
    recordClientX=0;
    recordClientY=0;
    static instance=undefined;
    constructor(
    ) {
        SharesFunction.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new SharesFunction();
            console.log('%c SharesFunction_getInstance','background: blue; color: red');
            return this.instance;
        }
    }
    logCustom(Message,data){
        console.log("SharesFunction_log",Message,data);

    }
    get_Windows_Vw_Vh(){

    let _1vw = Math.round(window.innerWidth / 100);
    let _1vh= Math.round(window.innerHeight / 100);
    
    var arr=[_1vw,_1vh];
    return arr;
    }
    TipUIMessage(setMessage,targetDOM){
        var BtnTextTip=document.getElementById("BtnTextTip");
        //console.log("TipUIMessage,targetDOM",targetDOM);
        BtnTextTip.children[0].innerHTML="&nbsp;"+setMessage+"&nbsp;"
        BtnTextTip.style.left=
        //this.recordClientX
        targetDOM.clientX+"px";
        BtnTextTip.style.top= 
        //this.recordClientY
        targetDOM.clientY+"px";
        BtnTextTip.style.display="block"
        targetDOM.srcElement.addEventListener('mouseleave', e => {
            //console.log("TipUIMessage,targetDOM_mouseleave",targetDOM);
            BtnTextTip.style.display="none";
        });
    }
    TipUIHide(){

        var BtnTextTip=document.getElementById("BtnTextTip");
        BtnTextTip.style.display="none"
        //targetDOM.
    }

    addMousePosition(){
      document.addEventListener('mousemove', e => {
        console.log("addMousePosition",e);

           this.recordClientX=e.clientX;
           this.recordClientY=e.clientY;
      });
    }
    regexCustom(event) {
        console.log("EM.regexCustom",event);
        //var validator = new RegExp('^[A-Za-z0-9_]*$');
        var validator = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+$');
        var runner = validator.test(event.key);
        console.log("EM.regexCustom",event,runner);
        if (runner) {
        }
        else {
            event.preventDefault();
        }
    }

    regexOnlyNumber(event) {
        var validator = new RegExp(/^[0-9\s]*$/);
        var runner = validator.test(event.key);
        //console.log("EM.regexOnlyNumber",event,runner);
        if (!runner) {
            event.preventDefault();
        }
        else {

        }
    }
    clicklog(event){
        console.log(" clicklog: ",event);
        // var  obj=  document.getElementById("obj") as HTMLDivElement;
        // obj.style.display='none';

       
    }
    movelog(event){
        //console.log(" movelogEvent: ",event);
    }
    click(UIID="") {
        var Dom = document.getElementById(UIID);
        Dom.addEventListener("click", (e: MouseEvent) => {
            console.log("e=", e,"e.target", e.target);
            alert(e);
        });
    }
    onkeyupEnter(event){
        if(event.keyCode==13){
            return true;
        }
        else{
            return false;
        }
    }
    setMinMax(event,min=0,max=0){
        console.log("EM.minmax",event);
        event.target.value=event.target.value.replace(/[^\d]/g,'');
        if(event.target.value<min){event.target.value=min} 
        if(event.target.value>max){event.target.value=max};

        //onkeyup="value=value.replace(/[^\d]/g,'');if(value<100){value=100} if(value>65535){value=65535};

    }
    AlertKeyDown(UIID=""){
        var Dom = document.getElementById(UIID);
        //var Dom = document.getElementById(UIID);
        Dom.addEventListener("keyup", (event) => {
            console.log("AlertKeyDown_e=", event,"e.target", event.target);
            alert(event.keyCode);
        });

    
    }
    ForceFocusUI(UIID=""){
        console.log("ForceFocusUI",UIID);
        var Dom = document.getElementById(UIID);
        Dom.focus();
    }
    ForceFocusUIByClass(UIID="",index=0){
        //console.log("ForceFocusUI",UIID);
        var Dom = document.getElementsByClassName(UIID);
        var D=Dom[index] as HTMLElement;
        D.focus();
    }
    focus(UIID=""){
        var Dom = document.getElementById(UIID);
        Dom.addEventListener("focus", (event) => {
            console.log("AlertKeyDown_e=", event,"e.target", event.target);            
        });
    }
    blur(UIID=""){
        var Dom = document.getElementById(UIID);
        Dom.addEventListener("blur", (event) => {
            console.log("AlertKeyDown_e=", event,"e.target", event.target);            
        });
    }

}
export function count_boolean (inputArr=[],type=false) {
    var count=0;
    inputArr.forEach(element => {
        if (element == type) {
            count += 1;
        }
    });
     return count;
}
export function CreateFakeArray(length=0){
    return  Array(length).fill(4);
}

export function getMatchedCSS(targetDiv,name){
    //var ax=new SharesFunction();
    //console.log("getMatchedCSS",targetDiv);

    var target=document.getElementById(targetDiv);
    return parseInt(getComputedStyle(target)[name]);
}
export function getElementCSS(targetDiv,name){
    //var ax=new SharesFunction();
    //console.log("getMatchedCSS",targetDiv);

    //var target=document.getElementById(targetDiv);
    return parseInt(getComputedStyle(targetDiv)[name]);
}
//檢查目標是否在陣列內
function checkExist(array,findTarget){
    //console.log("checkExistArr",ary,findTarget);
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(element==findTarget){
            console.log("存在值",element,findTarget);
            return true;
        }
    }
    return false;    
}

