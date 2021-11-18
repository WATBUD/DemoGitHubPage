'use strict';
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DB = (function () 
{   
    var _this; 
    function DB() {
      	_this = this;
        _this.db = {};   
        
    }   
    //DB.getInstance=0;
    DB.getInstance= function () {
        if (this.instance) {
            return this.instance;
        } else {
            console.log("new Node_NeDB Class");
            this.instance = new DB();
            return this.instance;
        }
    }

    


    
    DB.prototype.queryCmd = function (filePath,query_partemter, callback) {
        callback(
            [{"AllData":[],"_id":"S21tw2mhN6A65macro"}]);
    };

    DB.prototype.insertCmd = function (tbname, m, callback) {
        var opts = { retries: 5, retryWait: 100 }
            if (er)

            var db = _this.getDB(tbname); var newIndex = 0;
            _this.getMax(tbname, function (err, maxValue) {
                if (maxValue == undefined) {
                    newIndex = 1;
                } else {
                    newIndex = maxValue + 1;
                }
                if (m["value"] == null)
                    m["value"] = newIndex;
                db.insert(m, function (err, docs) {
                    db.persistence.compactDatafile();
                        callback(err, docs);
                    
                });
            });

    };

    DB.prototype.updateCmd = function (filePath, targetId , specifyfield, callback) {
        var db = _this.getDB(filePath);
        var opts = { retries: 5, retryWait: 100 }
            console.error('DB.prototype.updateCmd-lock',filePath, error, isLocked);
            if (error) {
                console.error('DB.prototype.updateCmd_error',filePath,opts,er);
                // throw er;
            }
            db.update(targetId, { $set: specifyfield }, { upsert: true, multi: true }, function (err, numReplaced) {
                console.error('DB.prototype.updateCmd_lockFile.unlock',err);
                db.persistence.compactDatafile();
                    callback(err);
            });

    };

    DB.prototype.updateDataCmd = function (tbname, om, nm, callback) {
        var db = _this.getDB(tbname);
        var opts = { retries: 5, retryWait: 100 }
            if (er){
                console.error('DB.prototype.updateDataCmd_ER',tbname,opts,er);
            }
            db.update(om, { $push: nm }, { multi: true }, function (err, numReplaced) {
                db.persistence.compactDatafile();
                console.error('DB.prototype.updateDataCmd_ER',tbname,opts,err);
                    callback(err);
                
            });
    };

    DB.prototype.deleteCmd = function (tbname, m, callback) {
        var db = _this.getDB(tbname);
        var opts = { retries: 5, retryWait: 100 }
            if (er){
                console.error('DB.prototype.deleteCmd',tbname,opts,er);
            }
            db.remove(m, { multi: true }, function (err, numRemoved) {
                db.persistence.compactDatafile();
                    callback(err);
                
            });
    };

    DB.prototype.ensureIndex = function (tbname, _fieldName, callback) {
        var db = _this.getDB(tbname);
        db.ensureIndex({ fieldName: _fieldName, unique: true, sparse: true }, function (err) {
            callback(err);
        });
    }

    DB.prototype.getDB = function (tbname) {
        try{
            if (_this.db[tbname]) {
                _this.db[tbname].loadDatabase();
                return _this.db[tbname]
            } else {
                // var dbPath = path.resolve(__dirname, '../../data/' + tbname + ".db");
                // dbPath = env.appDBRoot + tbname + ".db";//APPDATA DB
                // var thisDb = new DBstore({ filename: dbPath, corruptAlertThreshold: 1 });
                // thisDb.loadDatabase();
                // _this.db[tbname] = thisDb;
                return '';
            }
        }
        catch (e) {
            console.error('DB.prototype.getDB',e,tbname);
        }
    }



   DB.prototype.db = undefined; 

   return DB;
})();

exports.DB = DB;