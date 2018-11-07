class Demo1 {
    constructor(){

    }

    render(){

    }


    toString(){

    }
}

//相当于

// function Demo1(){

// }

// Demo1.prototype = {
//     constructor(){},
//     render(){},
//     toString(){}
// }

let methodName = 'getArea';

class Square{
    constructor(length){

    }


    [methodName](){
        console.log('getArea');
    }
}

var s = new Square();
s[methodName]();