let debug = require('../../package.json')
let UpdateUrl = ""
let fs = require('fs')
if (debug.BuildCode && fs.existsSync(process.env.APPDATA + "\\GSPYTESTServer.TEST"))
    UpdateUrl = 'https://sfo2.digitaloceanspaces.com/gloriouscore-test/Glorious_Core/Test/Version.json'
else {
    UpdateUrl = 'https://gloriouscore.nyc3.digitaloceanspaces.com/Glorious_Core/Version.json'
    // UpdateUrl = 'https://sfo2.digitaloceanspaces.com/gloriouscore-test/Glorious_Core/Version.json'
}
function getUpdateUrl() {
    return UpdateUrl
}
exports.getUpdateUrl = getUpdateUrl;