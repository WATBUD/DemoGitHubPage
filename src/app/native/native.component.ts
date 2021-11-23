import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
//import { ActivatedRoute } from '@angular/route';
// var fs = require('fs');
// var files = fs.readdirSync('/Excel');
import { Location } from '@angular/common';
@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.css']
})
export class NativeComponent implements OnInit {
  customURLList = [
    {
      URL: './DemoUI/Excel/Convert Excel File To JSON.html',
      Name: 'Convert Excel File To JSON',
    },
    {
      URL: './DemoUI/Input/KeyDownArrayGenerator.html',
      Name: 'KeyDownArrayGenerator',
    },
    {
      URL: './DemoUI/Input/GeneratorArrayText.html',
      Name: 'GeneratorArrayText',
    },
    {
      URL: './DemoUI/ScrollBarDemo/GetScrollEvent.html',
      Name: 'GetScrollEvent',
    },
    {
      URL: './DemoUI/Input/CompositionEvents.html',
      Name: 'CompositionEvents',
    },
    {
      URL: './DemoUI/Animate/Shooting Star.html',
      Name: 'Shooting Star',
    },
    {
      URL: './DemoUI/Animate/CircleRorateLoading.html',
      Name: 'CircleRorateLoading',
    },
    {
      URL: './DemoUI/Animate/LoadingAnimation1.html',
      Name: 'LoadingAnimation1',
    },
    {
      URL: './DemoUI/Animate/LoadingAnimation2.html',
      Name: 'LoadingAnimation2',
    },
    {
      URL: './DemoUI/Animate/Progress_Bar_Rectangle.html',
      Name: 'Progress_Bar_Rectangle',
    },
    {
      URL: './DemoUI/SpecialEffects/ButtonRippleEffect.html',
      Name: 'ButtonRippleEffect',
    },
    {
      URL: './DemoUI/Algorithm/GeneratorSlopeEquation.html',
      Name: 'GeneratorSlopeEquation',
    },
    {
      URL: './DemoUI/DynamicallyGenerated/CreateScrollBarListDemo.html',
      Name: 'CreateScrollBarListDemo',
    },
    {
      URL: './DemoUI/Animate/RainBackgroundEffect.html',
      Name: 'RainBackgroundEffect',
    },
    {
      URL: './DemoUI/Animate/ShadowCircleAnimation.html',
      Name: 'ShadowCircleAnimation',
    },
    {
      URL: './DemoUI/Animate/BorderFillAnimation.html',
      Name: 'BorderFillAnimation',
    },
    {
      URL: './DemoUI/HomemadeTools/KeyPressInterval.html',
      Name: 'KeyPressInterval',
    },
    {
      URL: './DemoUI/DynamicallyGenerated/GenerateButton.html',
      Name: 'GenerateButton',
    },
    {
      URL: './DemoUI/Animate/PolygonAnimation.html',
      Name: 'PolygonAnimation',
    },


  ];



  eventRegister = [];
  name = 'Set iframe source';
  sub;
  //url: string = "https://angular.io/api/router/RouterLink";
  //url: string = "./Excel/Progressbar_Full_ Rectangle";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private location: Location) {
    this.sub = this.route.queryParams.subscribe(params => {

      //this.page = +params['page'] || 0;
      console.log('%c params[page]', 'background: blue; color: red', params['page'])

      try {
        var target = this.customURLList.find((x) => x.Name == params['page']);
        if (target != undefined) {
          this.setURLContext(target.URL);
        }
      } catch (error) {

      }

    });
    this.eventRegister[1] = ((event) => {
      //document.addEventListener('keyup', (event) => {
      console.log("KeyShortcut_event.keyCode", event.keyCode);
    });
  }
  //this.router.navigate
  setURLContext(URLstring = "") {
    console.log('%c setURLContext', 'background: blue; color: red', URLstring)
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(URLstring);

  }

  ngOnInit() {
    // console.log('%c sanitizer','background: blue; color: red',this.sanitizer)
    // this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.customURLList[1].URL);

  }
  ngAfterViewInit() {
    var realWindow = window.parent || window;
    //document.addEventListener('keyup', this.eventRegister[1]);
    function frameKeyUp(e) {
      console.log('%c frameKeyUp', 'background: blue; color: red', e);

      alert(e.keyCode);
    }

    var iframe2 = document.getElementById('embedIframe') as HTMLIFrameElement;
    //  console.log('%c iframe2', 'background: blue; color: red', iframe2,iframe2.body,iframe2.document);

    //  console.log('%c iframe2', 'background: blue; color: red', iframe2.contentWindow);
    //iframe2.contentWindow.designMode = "on";
    iframe2.contentWindow.addEventListener('keyup', frameKeyUp, true);


  }
  goBack(): void {
    this.location.back();
  }

}
