const {
    SyncHook
} = require('tapable');

require('./a')

class Compiler extends SyncHook {

}



const compiler = new Compiler();

compiler.tap('hh',function () {
    console.log('tap hh')
});

compiler.tap('hh',function () {
    console.log('tap 2')
});

compiler.call('hh');