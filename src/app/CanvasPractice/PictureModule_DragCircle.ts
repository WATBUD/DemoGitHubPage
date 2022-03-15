
export class PictureEditor {
    pictureEditor = 0;
    albums: any = [];
    imageSize = 1;
    onEditing = false;
    imageDataURL: any = undefined;
    isDragging = false;
    startX = 0;
    startY = 0;
    finalX = 0;
    lastCaptureCoordinates=[0,0];
    selectAlbumsIndex = 0;
    footageEvent:any=[];
    constructor() {
        console.log("%c PictureEditor:", "color: red");
        document.addEventListener("mouseup", (event) => {
            this.captureFootageMouseup(event);
        });
    }
    changeImageSize(event: any) {
        console.log("%c changeImageSize:", "color: red", event);
        console.log("%c this.imageDataURL:", "color: blue", this.imageDataURL);
        const element_Image = <HTMLImageElement>document.getElementById("Element_Image");
        element_Image.style.transform ="scale("+this.imageSize+","+ this.imageSize+")";
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const context: any = canvas.getContext("2d");
        const mask = <HTMLImageElement>document.getElementById("mask");
        const previous_XY= [mask.offsetLeft,mask.offsetTop];
        //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
        context.save();
        context.translate(250, 250);
        context.scale(this.imageSize, this.imageSize);
        context.translate(-250, -250);
        context.drawImage(element_Image, 0, 0, 500, 500);
        context.restore();
        //context.globalCompositeOperation='destination-in';
        // context.beginPath();
        // context.strokeStyle = "rgb(255 255 255 / 100%)";
        // context.lineWidth = 1;
        // const acr_xy=[250+previous_XY[0]+875,250+previous_XY[1]+875];
        // context.arc(acr_xy[0], acr_xy[1], 125, 0, 2 * Math.PI);
        // context.clip();
        // context.stroke();
        //context.drawImage(element_Image, 0, 0, 500, 500);
        //context.restore();
    }
    inputImage(event: any) {
        console.log("%c inputImage:", "color: red", event);
        console.log("%c inputImage:", "color: red", event.target.files);
        console.log("%c this.onEditing", "color: red", this.onEditing);
        this.onEditing = true;
        //this.initialization(event.target.files[0]);
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const files_SRC= URL.createObjectURL(event.target.files[0])
        this.albums.push(files_SRC);
        this.selectAlbumsIndex=this.albums.length-1;
        // let searchIndex = this.albums.findIndex((x) => x == URL.createObjectURL(files_SRC));
        // if(searchIndex=-1){
        // this.albums.push(URL.createObjectURL(files_SRC));
        // }
        // else{
        //   retrun;
        // }
        const _TS = this;
        const element_Image = <HTMLImageElement>document.getElementById("Element_Image");
        element_Image.src = files_SRC;
        element_Image.onload = function () {
            const width = element_Image.naturalWidth;
            const height = element_Image.naturalHeight;
            // img.width=500;
            // img.height=500;
            console.log("%c inputImage:", "color: red", element_Image);
            console.dir(element_Image);
            event.srcElement.value = "";
            element_Image.style.transform ="scale(1, 1)";
            const context: any = canvas.getContext("2d");
            context.drawImage(element_Image, 0, 0, 500, 500);

            console.log("%c  this.albums:", "color: yellow",  _TS.albums);
            console.log("%c  this.selectAlbumsIndex:", "color: yellow",  _TS.selectAlbumsIndex);
            console.log("%c this.getBoundingClientRect:", "color: yellow", element_Image.getBoundingClientRect());
            // const downloadLink = document.createElement('a')
            // var exportURL=canvas.toDataURL();
            // var exportURL=URL.createObjectURL(files_SRC);
            // downloadLink.href = exportURL;
            // downloadLink.download = 'mycanvasimage.png'
            // downloadLink.click();
            // var ele = document.getElementById(event.srcElement.id);
            // console.log("%c ele:", "color: red", ele);
            // ele.reset();
            //_TS.imageDataURL = canvas.toDataURL();

        };
    }

    saveClipCanvasImage() {
        const canvas = <HTMLCanvasElement>document.getElementById("ImageFiles_canvas");
        const _TS = this;
        const element_Image = <HTMLImageElement>document.getElementById("Element_Image");
        const mask = <HTMLImageElement>document.getElementById("mask");
        const previous_XY= [mask.offsetLeft,mask.offsetTop];
        console.log("%c previous_XY:", "color: blue", previous_XY);
        //context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);


        //---Circle--//
        console.log("%c _TS.selectAlbumsIndex:", "color: blue", _TS.selectAlbumsIndex);
        const load_img = new Image();
        load_img.src = canvas.toDataURL();
        load_img.onload = function () {
            const context: any = canvas.getContext("2d");
            context.save();
            //context.drawImage(load_img,0,0, 500, 500);
            context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            context.beginPath();
            context.strokeStyle = "rgb(255 255 255 / 100%)";
            context.lineWidth = 1;
            const acr_xy=[250+previous_XY[0]+875,250+previous_XY[1]+875];
            context.arc(acr_xy[0], acr_xy[1], 125, 0, 2 * Math.PI);
            context.stroke();
            context.clip();
            context.drawImage(load_img,0,0, 500, 500);
            context.restore();

            //context.drawImage(load_img,acr_xy[0]-125,acr_xy[1]-125,250,250,0,0,500,500);
            //const oldUrl = canvas.toDataURL();
            const originImage = new Image();
            originImage.src = canvas.toDataURL();
            originImage.onload = function () {
                context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
                context.drawImage(originImage,acr_xy[0]-125,acr_xy[1]-125,250,250,0,0,500,500);
                //const album_img = <HTMLImageElement>document.getElementById("img_" + _TS.selectAlbumsIndex);
                //album_img.src = canvas.toDataURL();
                _TS.albums[_TS.selectAlbumsIndex]=canvas.toDataURL();
            }            //context.restore();

            //console.log("%c _TS.selectAlbumsIndex:", "color: blue", _TS.selectAlbumsIndex);
            context.restore();
            
            _TS.imageDataURL = undefined;
            _TS.imageSize = 1;
            element_Image.style.transform ="scale(1, 1)";
            element_Image.style.marginLeft=0+'px';
            element_Image.style.marginTop= 0+'px';
            _TS.onEditing=false;
        }

    }

    getOffset(el:any) {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
    }

    captureFootageMousedown(event: MouseEvent) {
        const page_XY= [event.pageX,event.pageY];
        console.log("%c captureFootageMousedown:", "color: red", page_XY);
        // if (this.isDragging) {
        //   return;
        // }
        this.isDragging=true;
        this.startX = page_XY[0];
        this.startY = page_XY[1];
        event.preventDefault();
        event.stopPropagation();
        // update the starting drag position (== the current mouse position)
        //console.log("%c this:", "color: red", this);
    }

    captureFootageMouseup(event: MouseEvent) {
        console.log("%c captureFootageMouseup:", "color: red", event);
        this.isDragging=false;
    }
    canvasTranslate(X:any,Y:any) {

    }
    captureFootageMousemove(event: MouseEvent) {
        if (!this.isDragging) {
           return;
        }
        event.preventDefault();
        event.stopPropagation();
        const element_mask:any = document.getElementById("mask");
        console.log("%c mask.getBoundingClientRect():", "color: red", element_mask.getBoundingClientRect());
        // console.log("%c mask.offsetLeft():", "color: red", mask.offsetLeft);
        // console.log("%c mask.offsetTop():", "color: red", mask.offsetTop);
        //console.log("%c event.offsetX:", "color: red", event.offsetX);
        //console.log("%c event.offsetY:", "color: red", event.offsetY);
        // console.log("%c event:", "color: red", event);
        const previous_XY= [element_mask.offsetLeft,element_mask.offsetTop];
        const gap_XY= [ event.pageX - this.startX,event.pageY - this.startY];

        console.log("%c previous_XY:", "color: red", previous_XY);
        console.log("%c gap_XY:", "color: red", gap_XY);

        const  result= [previous_XY[0]+gap_XY[0]/10,previous_XY[1]+gap_XY[1]/10];

        const maxBound=[-1000,-750]
        if(result[0]>=maxBound[0]&&result[0]<=maxBound[1]){
            element_mask.style.marginLeft=(result[0])+'px';
        }
        if(result[1]>=maxBound[0]&&result[1]<=maxBound[1]){
            element_mask.style.marginTop= (result[1])+'px';
        }
        console.log("%c this.result:", "color: blue",result);
        //console.log("%c captureFootageMousemove:", "color: red", event);
    }
}
