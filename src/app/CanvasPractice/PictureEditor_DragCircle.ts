import { Component, OnInit } from '@angular/core';
import { PictureEditor } from './PictureModule_DragCircle'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-PictureEditor',
  templateUrl: './PictureEditor_DragCircle.html',
  styleUrls: ['./PictureEditor_DragCircle.css']
})
export class PictureEditorComponent implements OnInit {
  selectPageIndex = 0;
  customRouteList = [];
  pictureEditor=new PictureEditor();
  //private titleService: Title=new Title();
  constructor(private sanitizer:DomSanitizer) {
    console.log('%c Enter DemoListUIComponent constructor', 'color:rgb(255,0,0,1)');
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit() {

  }
  ngAfterViewInit(): void {

  }

  


}
