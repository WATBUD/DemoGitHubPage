

import { Injectable } from '@angular/core';

@Injectable()

export class ProgressBar {
    percent_TSVar=0;
    constructor() {

    }
    addProgressBarEvent(){
        document.addEventListener('keydown', (event) => {
            console.log(event);
            // if(this.percent_TSVar+1>100){
            //     this.percent_TSVar=0;
            // }

            if (event.key == "ArrowUp") {
               if(this.percent_TSVar+1>100){
                this.percent_TSVar=0;

               }
               else{
                this.percent_TSVar+=1;
               }
       
                this.setRoundProgress_js(this.percent_TSVar);


            }

            if (event.key == "ArrowDown") {
                this.percent_TSVar-=1;
                this.setRoundProgress_js(this.percent_TSVar);
            }
        });



    }
    setRoundProgress_js(percent) {
        var TargetTs=this;

        //var percent = 0;
        //反正CSS3中的border-radius属性IE8是不支持了，所以这里就用新方法吧getElementsByClassName()走起
        //percent=TargetTs.percent_TSVar;
        console.log('setRoundProgress_js',percent);
        // Element.prototype.css= function (property, value) {

        //     if (value) {
        //         var index = property.indexOf('-');
        //         if (index != -1) {
        //             var char = property.charAt(index + 1).toUpperCase();
        //             property.replace(/(-*){1}/, char);
        //         }
        //         this.style[property] = value;
        //     } else {
        //         return window.getComputedStyle(this).getPropertyValue(property);
        //     }
        // }

        // Element.prototype.css3 = function (property, value) {
        //     if (value) {
        //         property = capitalize(property.toLowerCase());
        //         this.style['webkit' + property] = value;
        //         this.style['Moz' + property] = value;
        //         this.style['ms' + property] = value;
        //         this.style['O' + property] = value;
        //         this.style[property.toLowerCase()] = value;
        //     } else {
        //         return window.getComputedStyle(this).getPropertyValue(
        //             ('webkit' + property) || ('Moz' + property) || ('ms' + property) || ('O' + property) || property);
        //     }

        //     //首字母大写
        //     function capitalize(word) {
        //         return word.charAt(0).toUpperCase() + word.slice(1);
        //     }
        // }


        
        setRoundProgress(percent);
        


        //window.onload = 

        function setRoundProgress(percent) {
            console.log('setRoundProgress',percent);

            var circleBar = <any>document.getElementsByClassName('circle-bar')[0];


            //percent      = parseInt(circleBar.getElementsByClassName('percent')[0].firstChild.nodeValue);
            var color = circleBar.css('background-color',null);
            var left_circle = <any>circleBar.getElementsByClassName('circle-bar-left')[0];
            var right_circle = <any>circleBar.getElementsByClassName('circle-bar-right')[0];

            if (percent == 0) {
                //percent=percent>100?0:percent;
                //percent = 0;
                right_circle.css3('transform', 'rotate(0deg)');//右侧不旋转
                left_circle.css3('transform', 'rotate(0deg)');
                right_circle.css('background-color', '#eee');//背景色设置为进度条的颜色
                left_circle.css('background-color', '#eee');//背景色设置为进度条的颜色
                


            }
            circleBar.getElementsByClassName('percent')[0].firstChild.nodeValue = percent + "%";

            if (percent <= 50) {
                var rotate = 'rotate(' + (percent * 3.6) + 'deg)';
                right_circle.css3('transform', rotate);
            } else {
                var rotate = 'rotate(' + ((percent - 50) * 3.6) + 'deg)';
                right_circle.css('background-color', color);//背景色设置为进度条的颜色
                right_circle.css3('transform', 'rotate(0deg)');//右侧不旋转
                left_circle.css3('transform', rotate);//左侧旋转
            }
            

        }

        
        




    }

     


}

