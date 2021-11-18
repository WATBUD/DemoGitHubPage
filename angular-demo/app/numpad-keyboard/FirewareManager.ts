

export class FirewareManager {
    chooseDeviceIndex=0;
    FwServerData=[];
    forceUpgradeData=[];
    forceUpgradeIndex=0;
    UIStatus="";
    update_UI_Status=false;
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
     * 1.CHECK_DOWNLOAD
     * 2.Downloading
     * 3.ConfirmInstall
     * 4.Installing
     * 5.FailMessage
     * 6.SuccessMessage
     */
    contentUIStatus="";
    setUpdateUIStatus(TypeOption){
        if(TypeOption==""){
            this.setupdate_UI_Status(false);
        }
        else{
            this.setupdate_UI_Status(true);
        }
        if(this.checkHasUpdate()=="NO"){
            //this.getAppService.hasUpdateTip=false;
        }
        this.contentUIStatus=TypeOption;
        console.log('this.setContentUI',this.contentUIStatus)

    }
    setupdate_UI_Status(value){
        this.update_UI_Status=value;
        console.log('this.update_UI_Status',this.update_UI_Status)
    }
}
