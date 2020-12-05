var fs = require('fs');
var thunkify = require('thunkify');
var readFile = thunkify(fs.readFile);

var gen = function *() {
    var r1 = yield readFile('./1.html');
    console.log(r1.toString());

    var r2 = yield readFile('./2.html');
    console.log(r2.toString());

    console.log(3);
}

// var g = gen();

// var r1 = g.next();
// console.log(r1);
// r1.value(function(err, data){
//     if(err) throw err;
//     var r2 = g.next(data);
//     r2.value(function(err, data){
//         if(err) throw  err;
//         g.next(data);
//     });
// });


function run(fn){
    var g = fn();

    function next(err, data){
        if(err) throw  err;
        var result = g.next(data);
        if(result.done) return;
        result.value(next);
    }

    next();
}

console.log('1');
run(gen);

console.log('2');