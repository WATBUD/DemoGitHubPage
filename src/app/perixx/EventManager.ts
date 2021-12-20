
import { Injectable } from '@angular/core';
import { AllFunctionMapping } from './SupportData';
@Injectable()
export class EventManager{
    getkeyCodeTxt(keyCode) {
        //console.log('getkeyCodeTxt', keyCode);
        let index = AllFunctionMapping.findIndex(
            (x) => x.code == keyCode
        )
        if (index != -1) {
            //console.log('AllFunctionMapping_index', index);
            return AllFunctionMapping[index].translate;
        }
        else{
            return "NoValue";
        }
    
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