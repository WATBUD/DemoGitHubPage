var Node_NeDB = require('./Node_NeDB'); 
var _this; 
class AppDB {
    constructor() {
        _this = this; 
        _this.Node_NeDB =Node_NeDB.DB.getInstance(); 
        _this.AllDBtempData={
            getSyncProgram:[],
            getDevice:[],
            getCustomData:[],
            getMacro:[],
            getAPModeEffect:[],
            getBuilt_ineffect:[],
            getPluginDevice:{"Keyboard":[],"Mouse":[],"Headset":[]},
        };
        _this.getSyncProgram().then((data) => {
            _this.AllDBtempData.getSyncProgram=data[0].AllData;
        });
        // _this.getAllDevice().then((data) => {
        //     _this.AllDBtempData.getDevice=data;
        // });
        _this.getCustomData().then((data) => {
            _this.AllDBtempData.getCustomData=data[0].AllData;
        });
        _this.getMacro().then((data) => {
            _this.AllDBtempData.getMacro=data[0].AllData;
        });
        _this.getAPModeEffect().then((data) => {
            _this.AllDBtempData.getAPModeEffect=data[0].AllData;
        });
        _this.getBuilt_ineffect().then((data) => {
            _this.AllDBtempData.getBuilt_ineffect=data[0].AllData;
        });
       

    }
      




    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log("new AppDB Class");
            this.instance = new AppDB();
            return this.instance;
        }
    }
    //----------------------------AppSetting----------------------------//

    getAppSetting(){
        return new Promise(function (resolve, reject) {
            return _this.AppSettingDB.getAppSetting().then(function(data){
                resolve(data);
            });
        });
    }; 

    saveAppSetting(obj){
        return new Promise(function (resolve, reject) {
            return _this.AppSettingDB.saveAppSetting(obj).then(function(data){
                resolve(data);
            });
        });
    }; 
    
    updateAppSetting(id,obj){
        return new Promise(function (resolve, reject) {
            return _this.AppSettingDB.updateAppSetting(id,obj).then(function(data) {
                resolve(data);
            });
        });
    };


    //----------------------------Device----------------------------//

    // getDevice(callback){
    //     _this.DeviceDB.getDevice(function(data){
    //         callback(data)
    //     });
    // }; 

    getSupportDevice() {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getSupportDevice().then(function(data) {
                resolve(data);
            });
        });
    }

    getDefultProfile(vid, pid) {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getDefultProfile(vid, pid).then(function(data) {
                resolve(data);
            });
        });
    }

    getDevice(sn) {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getDevice(sn).then(function(data) {
                resolve(data);
            });
        });
    }

    AddDevice(obj, callback){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.AddDevice(obj).then(function(data) {
                resolve(data);
            });
        });
    }; 

    getAllDevice(){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getAllDevice().then(function(data) {
                resolve(data);
            });
        });
    }; 

    updateDevice(_id, obj){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.updateDevice(_id, obj).then(function(data) {
                resolve(data);
            });
        });
    }; 

    //----------------------------Macro----------------------------//

    getMacro(){
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.queryCmd('MacroDB',{},function(docs){  
                resolve(docs);      
            });  
        });
    }; 
    
    updateMacro(devData){
        var checkdata = _this.AllDBtempData.getMacro;
        if(checkdata.length>0){
            checkdata[0].Db_data = devData.Db_data;
        }
        else{
            checkdata.push(devData);
        }
        var compareData = {
            "_id": "S21tw2mhN6A65macro",
        }
        var setdata={"AllData" :checkdata} 
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('MacroDB',compareData,setdata,function(docs){  
                resolve(docs);     
            });  
        });

    };
    //----------------------------CustomData----------------------------//
    getCustomData(){
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.queryCmd('CustomDataDB',{},function(docs){  
                resolve(docs);     
            });  
        });
    }; 
    updateCustomData(devData,obj){
        var checkdata = _this.AllDBtempData.getCustomData;
        var target = checkdata.find((x) => x.SN == devData.SN);
        if (target != undefined) {
            target.Db_data = devData.Db_data;
        }
        else {
            checkdata.push(devData);
        }
        var compareData = {
            "_id": "S21tw2mhN6A65aVZnS",
        }
        var setdata={"AllData" :checkdata} 
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('CustomDataDB',compareData,setdata,function(docs){  
                resolve(docs);     
            });  
        });
    };
    //----------------------------SyncProgram----------------------------//
    getSyncProgram(){
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.queryCmd('SyncProgramDB',{},function(docs){  
                resolve(docs);     
            });  
        });
    }; 
    updateSyncProgram(devData){
        var checkdata = _this.AllDBtempData.getSyncProgram;
        if(checkdata.length>0){
            checkdata[0].Db_data = devData.Db_data;
        }
        else{
            checkdata.push(devData);
        }
        var compareData = {
            "_id": "S21tw2mhN6A65aVZnS",
        }
        var setdata={"AllData" :checkdata} 
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('SyncProgramDB',compareData,setdata,function(docs){  
                resolve(docs);     
            });  
        });
    };
    //----------------------------SyncEffect----------------------------//
    getSyncEffect(){
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.queryCmd('SyncEffectDB',{},function(docs){  
                resolve(docs);     
            });  
        });
    }; 
    insertSyncEffect(obj, callback){
        _this.Node_NeDB.insertCmd('SyncEffectDB',obj,function(mds){
            callback(mds);
        });
    }; 

    DeleteSyncEffect(index) {
        var obj = {id:index};
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.deleteCmd('SyncEffectDB',obj,function(docs){  
                resolve(docs);     
            });  
        });
    };

    updateSyncEffect(index,obj){
        var data = {id:index};
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('SyncEffectDB',data,obj,function(docs){  
                resolve(docs);     
            });  
        });
    };   
    //----------------------------APModeEffectDB----------------------------//
    getAPModeEffect() {
        return new Promise(function (resolve, reject) {
            return _this.Node_NeDB.queryCmd('APModeEffectDB', {}, function (docs) {
                resolve(docs);
            });
        });
    }; 
    updateAPModeEffect(devData) {
        var checkdata = _this.AllDBtempData.getAPModeEffect;
        var target = checkdata.find((x) => x.SN == devData.SN);
        if (target != undefined) {
            target.Db_data = devData.Db_data;
        }
        else {
            checkdata.push(devData);
        }
        var compareData = {
            "_id": "S21tw2mhN6A65aVZnS",
        }
        var setdata={"AllData" :checkdata} 
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('APModeEffectDB',compareData,setdata,function(docs){  
                resolve(docs);     
            });  
        });

    };  
     //----------------------------Built_ineffectDB----------------------------//
    getBuilt_ineffect(){
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.queryCmd('Built_ineffectDB',{},function(docs){  
                resolve(docs);      
            });  
        });
    }; 

    updateBuilt_ineffectDB(devData){
        var checkdata = _this.AllDBtempData.getBuilt_ineffect;
        var target = checkdata.find((x) => x.SN == devData.SN);
        if (target != undefined) {
            target.Db_data = devData.Db_data;
        }
        else {
            checkdata.push(devData);
        }
        var compareData = {
            "_id": "S21tw2mhN6A65aVZnS",
        }
        var setdata={"AllData" :checkdata} 
        return new Promise(function (resolve, reject) {
            return  _this.Node_NeDB.updateCmd('Built_ineffectDB',compareData,setdata,function(docs){  
                resolve(docs);     
            });  
        });
    };  
    
}

module.exports = AppDB;