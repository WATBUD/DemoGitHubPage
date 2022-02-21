import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import {CentralControl} from '../../Module/CentralControl';
@Component({
  selector: 'app-DemoListUI',
  templateUrl: './DemoListUI.component.html',
  styleUrls: ['./DemoListUI.component.css']
})
export class DemoListUIComponent implements OnInit {
  selectPageIndex = 0;
  customRouteList = [];
  CentralControl=CentralControl.getInstance();
   ttttttt={

   }





  //private titleService: Title=new Title();
  constructor(private router: Router,private titleService: Title) {
    console.log('%c Enter DemoListUIComponent constructor', 'color:rgb(255,0,0,1)');

    for (let index = 0; index < router.config.length; index++) {
      if (router.config[index].path != 'DemoListUI') {
        this.customRouteList.push(router.config[index]);
        //this.customRouteList['colorValue'] = 'rgb(255,255,255)';
      }
    }
    //this.router.config
    //varthis.router.config[0].path
    //this.router.navigate([this.router.config[this.selectPageIndex].path]);
    //console.log('%c this.router', 'color:rgb(255,75,255,1)', this.router, this.router.config[0].path);
    //console.log('%c this.router', 'color:rgb(255,75,255,1)', this.router, this.router.config[0].path);
    this.CentralControl.NavVisible=true;

  }
  ngOnInit() {
  }
  
  scrollToX(int){
    window.scrollTo({
      top: int,
      left: 0,
      behavior: 'smooth'
    });
  }


  colorPickerFnArrP1=[];
  ngAfterViewInit(): void {

    //document.removeEventListener('keyup', this.colorPickerFnArrP1[1]);

    this.colorPickerFnArrP1[1] = ((event) => {
      console.log("KeyShortcut_event.keyCode", event.keyCode);
      // if (event.keyCode == 13) {//Enter
      //   //document.removeEventListener('keyup', this.colorPickerFnArrP1[1]);
      //   //document.onkeyup = null;
      //   this.router.navigate([this.customRouteList[this.selectPageIndex].path]);
      // }
      // if (event.keyCode == 38) {//up
      //   if (this.selectPageIndex > 0) {
      //     this.selectPageIndex -= 1;
      //   }
      //   else {
      //     this.selectPageIndex = this.customRouteList.length - 1;
      //   }
      // }
      // if (event.keyCode == 40) {//down
      //   if (this.selectPageIndex < this.customRouteList.length-1) {
      //     this.selectPageIndex += 1;
      //   }
      //   else {
      //     this.selectPageIndex = 0;
      //   }
      // }
      // if (event.keyCode == 8 && this.router.url != "/DemoListUI") {//Backspace
      //   document.removeEventListener('keyup', this.colorPickerFnArrP1[1]);
      //   this.router.navigate(['DemoListUI'], {});
      // }
      //this.titleService.setTitle(this.customRouteList[this.selectPageIndex].path);
    });
    //document.onkeyup = null;
    //document.removeEventListener('keyup', undefined);
    console.log('%c DemoListUI.addEventListener', 'color:rgb(255,75,255,1)');

    //document.addEventListener('keyup', this.colorPickerFnArrP1[1]);

    // document.onkeyup = null;
    // document.removeEventListener("mousemove", myFunction);
  }



}
