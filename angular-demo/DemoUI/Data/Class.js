
class CurrentColor{
    Hex=0;//色碼
    Hue = 0;//0~360
    Saturation = 0;//飽和度 0~1
    Value = 0;//明度 0~1
    Red = 0;
    Green = 0;
    Blue = 0;
    SBgColor="";
    VBgColor="";
    CCClass=new zzz();
}
class zzz{
    Blue = 0;
    constructor(){
        this.fntest();

    }
    fntest() {
        this.Blue=6666666;
        this.blue=6;
    }
}

var CC=new CurrentColor(); 
var arr=Object.keys( CC);
var jsstr=JSON.stringify(CC);
var jsparse=JSON.stringify(CC);
console.log(arr);
console.log(jsstr);
console.log(JSON.parse(jsstr));


// var arr=Object.keys(T1);
// for (let index = 0; index < arr.length; index++) {
//     T2[arr[index]]=T1[arr[index]];  
// }



//console.log(new CurrentColor());