/*
 * change version string to number
 * 转换数字型版本号字符串为数值
 */
function versionToNumber (version, length, exponent) {
    var arr;
    if (arguments.length < 3) {
        return 0;
    }
    arr = version.split('.');
    console.log('versionToNumber',arr); //
    version = 0;
    arr.forEach(function(value, index, array) {
        var result=value * Math.pow(10, length * exponent - 1);
        console.log('versionToNumberresult',result); //

        version += result;
        length--;
    });
    return version;
}

/*
 * compare version
 * 比较版本号
 * 仅适用数字型的版本号
 * 0: 相等
 * 1: 大于
 * -1: 小于
 */
function versionCompare (version, targetVersion, exponent) {
    var getVersionNumber, length;
    exponent = exponent || 2;
    if (!version || !targetVersion) {
        throw new Error('Need two versions to compare!');
    }
    if (version === targetVersion) {
        return 0;
    }
    length = Math.max(version.split('.').length, targetVersion.split('.').length);
    getVersionNumber = (function (length, exponent){
        return function (version) {
            return versionToNumber(version, length, exponent);
        };
    })(length, exponent);
    version = getVersionNumber(version);
    targetVersion = getVersionNumber(targetVersion);
    return version > targetVersion ? 1 : (version < targetVersion ? -1 : 0);
}

// console.log(versionCompare('2.3', '2.3.0.4', 2)); // -1
// console.log(versionCompare('2.3.0', '2.3.0.0', 2)); // 0
// console.log(versionCompare('2.3.1', '2.3.0.4', 2)); // 1
// console.log(versionCompare('2.3', '2.3.0.4', 2)); // -1
// console.log(versionCompare('2.3.0', '2.3', 2)); // 0