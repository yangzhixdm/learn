/**
 * test-loader
 */

var loaderUtils = require('loader-utils')

module.exports = function (source) {
    console.log(source)
    console.log(1);
    var options = loaderUtils.getOptions(this)
    console.log(options);
    return source;
}