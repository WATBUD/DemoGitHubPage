/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardStyle:M_SoundVolume Class
 * Processing M_SoundVolume
-----------------------------------------------------------------------------------------*/
export class M_SoundVolume {
    nowTargetIndex = 0;
    bindTarget = {
        filename: "default",
        filepath: "",
        percent: 0,
        processid: 12812,
    }
    showListflag = false;
    audioSouceList = [
    ]
    lightData = this.default_lightData();

    constructor() {
        for (let index = 0; index < 8; index++) {
            this.audioSouceList.push(this.default_Data());
            //const element = this.audioSouceList[index];
        }

    }
    default_Data() {
        var T = {
            filename: "Chrome",
            filepath: "",
            percent: 0,
            processid: 12812,
        }
        return T;
    }

    /**
  * process default_LightData
  * * @param defaultcolor array:defaultcolor
  */
    default_lightData(defaultcolor = [255, 172, 42, 1]) {
        var T = {
            speed: 50,
            brightness: 50,
            clearStatus: false,
            colorHex: '#0000',
            colorPickerValue: defaultcolor,
            breathing: false,
            brightness_Enable: false,
            rate_Enable: false,
            color_Enable: false,
        }
        return T;
    }

    getSetValueData() {
        var obj = {
            lightData: this.lightData,
            bindTarget: this.bindTarget,
        }
        return obj;
    }


    setAudioSouceList(data){
        // var audioSessionObj=[

        // ];
        // for (let index = 0; index < data; index++) {

        //     const element = data[index];
        //     audioSessionObj.push({
        //         filename:element.filename,
        //         percent:element.percent,
        //     });
        // }
        this.audioSouceList=data;
    }


    /**
        * process getBindTarget
       */
    getBindTarget() {
        let targetData = this.audioSouceList.find((x) => x.filename == this.bindTarget.filename);
        if (targetData == undefined) {
            //console.log('%c getTargetFileName=lostcode', 'color:rgb(255,75,255,1)');
            return this.default_Data();
        }
        return targetData;
    }
    setBindTarget(obj) {
        this.bindTarget.filename = obj.filename;
        this.bindTarget.percent = obj.percent;
    }
    /**
     * process lightData_Background Event
    */
    lightData_Background() {
        var value = this.bindTarget.percent;
        return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' + value + '%,#313131 ' + value + '%, #313131 100%)';
    }

    /**
     * process getTargetFileName
    */
    getTargetFileName() {
        let targetData = this.audioSouceList.find((x) => x.filename == this.bindTarget.filename);

        if (targetData == undefined) {
            //console.log('%c getTargetFileName=lostcode', 'color:rgb(255,75,255,1)');
            return "No Source";
        }
        return targetData.filename;
    }

}
