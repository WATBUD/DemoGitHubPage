declare var require: any
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
let i18n_File = require("../i18n/i18n_Localization");
import {i18nManager } from '../Module/TSImportManager';
import {CentralControl} from '../Module/CentralControl';
import { Location } from '@angular/common';
@Component({
  selector: 'app-entry-page',
  templateUrl: './EntryPage.html',
  styleUrls: ['./EntryPage.css','./NavUI.css']
})
export class EntryPageComponent implements OnInit {
  i18nManager=i18nManager.getInstance();
  CentralControl=CentralControl.getInstance();
  constructor(private router: Router,private activatedRoute: Router,private location: Location) {
    //this.router.config
    console.log('%c Enter EntryPageComponent constructor', 'color:rgb(255,0,0,1)');

    // console.log('%c this.router', 'color:rgb(255,75,255,1)', this.router);
    // console.log('%c this.i18nManager', 'color:rgb(255,75,255,1)', this.i18nManager,i18n_File);
  }
  colorPickerFnArrP1=[];
  ngOnInit() {
    //this.router.navigate(['keyboardNumPad'], {queryParams: {Device: JSON.stringify(obj)}});
    //this.router.navigate(['ColorPickerDemo1'], {queryParams: {Device: {}}});
    //this.router.navigate(['ColorPickerDemo1'], {});
    //this.router.navigate(['ScrollDemo1'], {});
    //this.router.navigate(['KeyBoard_RGB'], {});
    //this.router.navigate(['DemoListUI'], {});
    // window.onresize = resize;
    console.log('%c this.router', 'color:rgb(255,75,255,1)', String(this.router.url));

    // if (this.router.url == "/") {//Backspace
    //   this.router.navigate(['DemoListUI'], {});
    // }

    // function resize()
    // {
    //  alert("检测到resize事件!");
    // }
    this.CentralControl.NavVisible=true;
    this.colorPickerFnArrP1[1] = ((event) => {
    //document.addEventListener('keyup', (event) => {
      console.log("KeyShortcut_event.keyCode", event.keyCode);
      //this.router.url != "/DemoListUI"
      if (event.keyCode == 8) {//Backspace
        //this.router.navigate(['DemoListUI'], {});
        this.goBack();
      }
    });
    document.addEventListener('keyup', this.colorPickerFnArrP1[1]);
  }
  goBack(): void {
    this.location.back();
  }
  ngAfterViewInit() {
    // setTimeout(() => {
    // }, 3000);
    // document.onkeyup = null;

    
    console.log('%c this.router', 'color:rgb(255,75,255,1)', this.router);
    console.log('%c this.activatedRoute', 'color:rgb(255,75,255,1)', this.activatedRoute);
    //   document.addEventListener('keydown', (event) => {

    //  }

  }
  ngOndestroy(){
    document.removeEventListener('keyup', this.colorPickerFnArrP1[1]);

  }

  
}

