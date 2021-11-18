export class BoxSelectionArea {
    EventCanBoxSelect: any = false
    mouseOn: any = false
    startX: any = 0
    startY: any = 0
    searchTargetName: any = '' //RGBColorBlockStyle
    selectContainer //parent Dom RGBKeyBoardUI
    offsetValue = [80, 80]
    constructor(targetName = '') {
        this.searchTargetName = targetName
        //var T2 = document.getElementById(parent).getBoundingClientRect();
    }
    selectedEls: any = []
    mousedown(e: MouseEvent) {
        //console.log("註冊.e1", this.EventCanBoxSelect,e.which,e.buttons);
        if (e.buttons !== 1 || e.which !== 1 || !this.EventCanBoxSelect) return
        this.mouseOn = true
        console.log('BoxSelectionArea成功註冊_dir.mousedown', e, this.searchTargetName)
        //console.dir(this.selectContainer,);

        this.startX = e.clientX - this.selectContainer.offsetLeft - this.offsetValue[0]
        //-this.selectContainer.scrollLeft;
        this.startY = e.clientY - this.selectContainer.offsetTop
        //-this.selectContainer.scrollTop;
        //this.showCustomTestDataWindows(obj);
        if (!document.getElementById('selectDiv')) {
            var selDiv = document.createElement('div')
            selDiv.style.cssText =
                'position:absolute;width:0;height:0;\
                   margin:0;padding:0;border:1px dashed #blue;\
                   background-color:#aaa;z-index:1000;opacity:0.6;display:none;    pointer-events: none;'
            selDiv.id = 'selectDiv'
            selDiv.style.left = this.startX + 'px'
            selDiv.style.top = this.startY + 'px'
            this.selectContainer.appendChild(selDiv)
        }

        this.mousemove(e)
    }

    mousemove(e: MouseEvent) {
        //var MainFrame = document.getElementById("MainFrame");
        if (!this.mouseOn) return
        console.log('BoxSelectionArea.mousemove', this.searchTargetName)
        var _x = e.clientX - this.selectContainer.offsetLeft - this.offsetValue[0]
        //+this.selectContainer.scrollLeft;
        var _y = e.clientY - this.selectContainer.offsetTop
        //+ this.selectContainer.scroll;

        // 获取非行间样式
        function getStyle(element, attr) {
            if (element.currentStyle) {
                return element.currentStyle[attr]
            } else {
                return getComputedStyle(element, null)[attr]
            }
        }
        // var target = getStyle(this.selectContainer, "transform");    //matrix(0.7, 0, 0, 0.7, 0, 0)
        // var oneposition = target.indexOf("(");
        // var twoposition = target.indexOf(",");
        // var Text = target.substring(oneposition + 1, twoposition);
        // console.log("内联 非行间样式", this.selectContainer.style.transform, Text);  //translate(500px)
        // console.log("BoxSelectionArea.mousemove", _x, _y, this.startX, this.startY);

        var selDiv = document.getElementById('selectDiv')

        selDiv.style.display = 'block'
        selDiv.style.left = Math.min(_x, this.startX) + 'px'
        /// parseFloat(Text)) + 'px';
        selDiv.style.top = Math.min(_y, this.startY) + 'px'
        /// parseFloat(Text)) + 'px';
        selDiv.style.width = Math.abs(_x - this.startX) + 'px'
        selDiv.style.height = Math.abs(_y - this.startY) + 'px'
    }
    mouseup(e: MouseEvent) {
        //console.log('BoxSelectionArea.mouseup', this.mouseOn)
        var selDiv = document.getElementById('selectDiv') //Custom Create Dom Id
        if (!this.mouseOn) {
            if (selDiv) {
                selDiv.style.display = 'none'
            }
            return 'Fail'
        }
        if (parseFloat(selDiv.style.width) <= 0) {
        }
        //console.log("selDiv_selDiv_mouseup", selDiv ,selDiv.offsetLeft,selDiv.offsetTop,selDiv.offsetWidth,selDiv.offsetHeight);
        //console.dir(selDiv) ;
        
        //var fileDivs = document.getElementsByClassName(this.searchTargetName)//Assign Search  Target
        var fileDivs:any =[];
        fileDivs=document.getElementsByClassName(this.searchTargetName) as HTMLCollectionOf<Element>;
        this.selectedEls = new Array() //refresh
        var fLeft = selDiv.offsetLeft
        //-this.selectContainer.offsetLeft;-(fileDivs[0].parentElement.offsetLeft
        var fTop = selDiv.offsetTop
        //-this.selectContainer.offsetTop;
        var fWidth = selDiv.offsetWidth
        var fHeight = selDiv.offsetHeight

        for (var i = 0; i < fileDivs.length; i++) {
            //console.log("selectedEls.fileDivs_parentElement",fileDivs[i].parentElement.offsetLeft,this.selectContainer.offsetLeft);

            var targetRightX = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft + fileDivs[0].parentElement.parentElement.offsetLeft;
            var targetDownY = fileDivs[i].offsetHeight + fileDivs[i].offsetTop + fileDivs[0].parentElement.parentElement.offsetTop;
            var targetLeftX = fileDivs[i].offsetLeft + fileDivs[0].parentElement.parentElement.offsetLeft;
            var targetUpY = fileDivs[i].offsetTop + fileDivs[0].parentElement.parentElement.offsetTop;
            var frameRangeRightX = fLeft + fWidth
            var frameRangeDownY = fTop + fHeight

            if (targetRightX > fLeft && targetDownY > fTop && targetLeftX < frameRangeRightX &&targetUpY < frameRangeDownY) {
                //selectedEls.push(fileDivs[i]);
                this.selectedEls.push(i)
            }
        }
        //console.log("selectedEls.push_result",this.selectedEls);

        selDiv.style.display = 'none'
        this.mouseOn = false
        return 'Finish'
    }
    setSelectContainer(Domname) {
        this.selectContainer = document.getElementById(Domname) as HTMLElement
        console.log('BoxSelectionArea', this.selectContainer)
    }
    checkArrayisAllTrue(AllBlockColor) {
        console.log('checkArrayisAllTrue_inputdata', AllBlockColor)
        console.dir(AllBlockColor)
        for (var i = 0; i < this.selectedEls.length; i++) {
            //selectedEls.push(fileDivs[i]);
            if (AllBlockColor[this.selectedEls[i]].border == false) {
                console.log('checkArrayisAllTruefalse', 'index', this.selectedEls[i])
                return false
            }
        }

        //console.log("checkArrayisAllTruefalse","true");
        return true // 當全部 checked才能回傳 true
    }

    checkArrayisAllTrueP7(AllBlockColor) {
        console.log('checkArrayisAllTrueCustom_inputdata', AllBlockColor)
        for (var i = 0; i < this.selectedEls.length; i++) {
            if (AllBlockColor[this.selectedEls[i]] == false) {
                return false
            }
        }
        return true // 當全部 checked才能回傳 true
    }
}
