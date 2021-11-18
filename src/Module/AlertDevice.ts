import { Injectable } from '@angular/core';

@Injectable()
export class AlertDevice{
    click(UIID="") {
        var Dom = document.getElementById(UIID);
        Dom.addEventListener("click", (e: MouseEvent) => {
            console.log("e=", e,"e.target", e.target);
            alert(e);
        });
    }
    
    AlertKeyDown(UIID=""){
        var Dom = document.getElementById(UIID);
        //var Dom = document.getElementById(UIID);
        Dom.addEventListener("keyup", (event) => {
            console.log("AlertKeyDown_e=", event,"e.target", event.target);
            alert(event.keyCode);
        });

    
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