

export class FirewareManager {
    chooseDeviceIndex=0;
    FwServerData=[];
    forceUpgradeData=[];
    forceUpgradeIndex=0;
    updatingStatus="";
    updatingPercentage=0;
    firmwareHasANewUpdate=true;

    /*
    * getNowTargetData
    */
    getTarget(){
       if(this.FwServerData.length>0)
       return this.FwServerData[this.chooseDeviceIndex];
    }

    /*
    * getforceTarget
    */
    getforceTarget(){
        return this.forceUpgradeData[this.forceUpgradeIndex];
     }

    /*
    * reset Var
    */
    reset(){
        this.chooseDeviceIndex=0;
        this.FwServerData=[];
    }

    /*
    * checkHasUpdate
    */
    checkHasUpdate(){
        for (let index = 0; index < this.FwServerData.length; index++) {
            if(!this.FwServerData[index].tryToUpdate){     
                return "YES"
            } 
        }
        return "NO"
    }
    startUpdateFirmwareData() {
        if (this.firmwareHasANewUpdate) {
            this.updatingPercentage = 0;
            this.updatingStatus = 'updating';
            this.firmwareHasANewUpdate = false;
            var aaa = setInterval(() => {

                if (this.updatingPercentage < 100) {
                    this.updatingPercentage += 1;
                }
                else {
                    clearInterval(aaa);
                    this.updatingStatus = 'updateCompleted';
                }
            }, 50)
        }
    }



    /**
    *compare version
    * @param version number:A version
    * @param targetVersion number:B version
    * @param exponent number:exponent 
    * return result:
    * 0: is equal to
    * 1: is more than
    * -1: is less than
    */
    versionCompare(version, targetVersion, exponent) {
        var getVersionNumber, length;
        exponent = exponent || 2;
        if (!version || !targetVersion) {
            console.log('Need two versions to compare!',version,targetVersion);
            throw new Error('Need two versions to compare!');
        }
        if (version === targetVersion) {
            return 0;
        }
        length = Math.max(version.split('.').length, targetVersion.split('.').length);
        let self = this;
        getVersionNumber = (function (length, exponent) {
            return function (version) {
                return self.versionToNumber(version, length, exponent);
            };
        })(length, exponent);
        version = getVersionNumber(version);
        targetVersion = getVersionNumber(targetVersion);
        return version > targetVersion ? 1 : (version < targetVersion ? -1 : 0);
    }

    /*
    * format version
    */
    versionToNumber(version, length, exponent) {
        let arr;
        if (arguments.length < 3) {
            return 0;
        }
        arr = version.split('.');
        version = 0;
        arr.forEach(function (value, index, array) {
            version += value * Math.pow(10, length * exponent - 1);
            length--;
        });
        return version;
    }
    /**
    * Type option
    * 1.CHECK_DOWNLOAD/Downloading/updating/updateCompleted/FailMessage/updateCompleted
    * 
    */
    contentUIStatus="";
    setUpdateUIStatus(TypeOption){
        if(TypeOption==""){
            this.setUpdatingStatus(false);
        }
        else{
            this.setUpdatingStatus(true);
        }
        if(this.checkHasUpdate()=="NO"){
            //this.getAppService.hasUpdateTip=false;
        }
        this.contentUIStatus=TypeOption;
        console.log('this.setContentUI',this.contentUIStatus)

    }
    setUpdatingStatus(value){
        this.updatingStatus=value;
        console.log('this.updatingStatus',this.updatingStatus)
    }
}
