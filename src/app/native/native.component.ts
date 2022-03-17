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
      URL: './Native HTML/Excel/Convert Excel File To JSON.html',
      Name: 'Convert Excel File To JSON',
    },
    {
      URL: './Native HTML/Input/KeyDownArrayGenerator.html',
      Name: 'KeyDownArrayGenerator',
    },
    {
      URL: './Native HTML/Input/GeneratorArrayText.html',
      Name: 'GeneratorArrayText',
    },
    {
      URL: './Native HTML/ScrollBarDemo/GetScrollEvent.html',
      Name: 'GetScrollEvent',
    },
    {
      URL: './Native HTML/Input/CompositionEvents.html',
      Name: 'CompositionEvents',
    },
    {
      URL: './Native HTML/Animate/Shooting Star.html',
      Name: 'Shooting Star',
    },
    {
      URL: './Native HTML/Animate/CircleRorateLoading.html',
      Name: 'CircleRorateLoading',
    },
    {
      URL: './Native HTML/Animate/LoadingAnimation1.html',
      Name: 'LoadingAnimation1',
    },
    {
      URL: './Native HTML/Animate/LoadingAnimation2.html',
      Name: 'LoadingAnimation2',
    },
    {
      URL: './Native HTML/Animate/Progress_Bar_Rectangle.html',
      Name: 'Progress_Bar_Rectangle',
    },
    {
      URL: './Native HTML/Animate/ButtonRippleEffect.html',
      Name: 'ButtonRippleEffect',
    },
    {
      URL: './Native HTML/Algorithm/GeneratorSlopeEquation.html',
      Name: 'GeneratorSlopeEquation',
    },
    {
      URL: './Native HTML/DynamicallyGenerated/CreateScrollBarListDemo.html',
      Name: 'CreateScrollBarListDemo',
    },
    {
      URL: './Native HTML/Animate/RainBackgroundEffect.html',
      Name: 'RainBackgroundEffect',
    },
    {
      URL: './Native HTML/Animate/ShadowCircleAnimation.html',
      Name: 'ShadowCircleAnimation',
    },
    {
      URL: './Native HTML/Animate/BorderFillAnimation.html',
      Name: 'BorderFillAnimation',
    },
    {
      URL: './Native HTML/Input/KeyPressInterval.html',
      Name: 'KeyPressInterval',
    },
    {
      URL: './Native HTML/DynamicallyGenerated/GenerateButton.html',
      Name: 'GenerateButton',
    },
    {
      URL: './Native HTML/Animate/PolygonAnimation.html',
      Name: 'PolygonAnimation',
    },
    {
      URL: './Native HTML/CSSDemo/CSS_ArrowSymbol.html',
      Name: 'CSS_ArrowSymbol',
    },
    {
      URL: './Native HTML/Mouse/ReflectionEventParameter.html',
      Name: 'ReflectionEventParameter',
    },
    {
      URL: './Native HTML/CSSDemo/CSSReplaceClass.html',
      Name: 'CSSReplaceClass',
    },
    {
      URL: './Native HTML/Basic/JS_GetTime.html',
      Name: 'JS_GetTime',
    },
    {
      URL: './Native HTML/ArraySort/BubbleSort.html',
      Name: 'BubbleSort',
    },
    {
      URL: './Native HTML/Animate/3DRotationControl.html',
      Name: '3DRotationControl',
    },

    {
      URL: './Native HTML/CSSDemo/CenterAlignment.html',
      Name: 'CenterAlignment',
    }, 
    {
      URL: './Native HTML/CSSDemo/CustomizeBorderLength.html',
      Name: 'CustomizeBorderLength',
    },
    {
      URL: './Native HTML/ScrollBarDemo/animateScroll.html',
      Name: 'animateScroll',
    },

    {
      URL: './Native HTML/Input/Input_Range_Customized.html',
      Name: 'Input_Range_Customized',
    },
    {
      URL: './Native HTML/Input/Input_Type_File.html',
      Name: 'Input_Type_File',
    },
    {
      URL: './Native HTML/PracticeExample/LeetCode 1. Two Sum.html',
      Name: 'LeetCode 1. Two Sum',
    },
    {
      URL: './Native HTML/PracticeExample/WebBluetooth.html',
      Name: 'WebBluetooth',
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
    // document.getElementById('NavArea').scrollIntoView(
    //   {
    //     behavior: 'smooth', block: 'start', inline: 'nearest'
    //   }
    // );
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
