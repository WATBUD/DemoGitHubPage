import { Component, OnInit } from '@angular/core';
import {
  ColorModule
} from '../../Module/TSImportManager';
@Component({
  selector: 'app-ScrollDemo1',
  templateUrl: './ScrollDemo1.html',
  styleUrls: ['./ScrollDemo1.css'],
})
export class ScrollDemo1Component implements OnInit {

  constructor() { }
  NumKeyBindSourceArray = [];
  
  ScrollIntoPos=0;
  ScrollLeftValue=0;
  LedColor = new ColorModule("LedColor");


  ngOnInit() {

    var SourceArray=8;
    for (let index = 0; index < 8; index++) {
      //const element = [index];
      this.NumKeyBindSourceArray.push({ 
        colorValue: this.LedColor.toCssRGB([255/(index+1),0,0,1]) ,
        BGcolorValue:this.LedColor.toCssRGB([255*(SourceArray-index+1)/SourceArray,192*(SourceArray-index+1)/SourceArray,203*(SourceArray-index+1)/SourceArray,1])
      }
    );
    }
    console.log('%c this.NumKeyBindSourceArray','color:rgb(255,75,255,1)',this.NumKeyBindSourceArray);

  }
  ngAfterViewInit() {
  }

  ScrollIntoStart() {
    var NumKeyBindSourceArea = document.getElementById('NumKeyBindSourceArea');
    var coordinate=0;
    var part=NumKeyBindSourceArea.scrollWidth/this.NumKeyBindSourceArray.length;
    var maxScrollLeft=NumKeyBindSourceArea.scrollWidth-NumKeyBindSourceArea.clientWidth;
    if(NumKeyBindSourceArea.scrollLeft>=part){
      coordinate=(NumKeyBindSourceArea.scrollLeft-part);
    }
    else{
      coordinate=maxScrollLeft;
      //return;
    }
    NumKeyBindSourceArea.scrollTo({
      left: coordinate,
      //behavior: "smooth",
      //behavior: "auto",
    })
    //NumKeyBindSourceArea.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
    console.log('%c ScrollIntoStart','color:rgb(255,75,255,1)',NumKeyBindSourceArea,NumKeyBindSourceArea.scrollWidth,NumKeyBindSourceArea.clientWidth);


  }
  ScrollIntoEnd() {
    var NumKeyBindSourceArea = document.getElementById('NumKeyBindSourceArea');
    var coordinate=0;
    var part=NumKeyBindSourceArea.scrollWidth/this.NumKeyBindSourceArray.length;
    var maxScrollLeft=NumKeyBindSourceArea.scrollWidth-NumKeyBindSourceArea.clientWidth;

    if(NumKeyBindSourceArea.scrollLeft<maxScrollLeft){
      coordinate=NumKeyBindSourceArea.scrollLeft+part;
    }
    else{
      coordinate=0;
      //return;
    }
    NumKeyBindSourceArea.scrollTo({
      left: coordinate,
      //behavior: "smooth",
      //behavior: "auto",
    })
    console.log('%c ScrollIntoEnd','color:rgb(255,75,255,1)',NumKeyBindSourceArea,NumKeyBindSourceArea.scrollWidth);
    // NumKeyBindSourceArea.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
  }

  onScroll(event){

    this.ScrollLeftValue=event.srcElement.scrollLeft;
    console.log('%c onScroll','color:rgb(255,75,255,1)',event,event.srcElement.scrollLeft);

  }

}
