class F {
    constructor(...args) {
        console.log('F constructor');
    }


    render() {
        console.log(this);
        console.log('render');
    }
}

class S extends F {

    constructor(...args) {
        super(...args);
    }

    say() {
        console.log('say');
    }

    render(){
        super.render();//传递子类的this == super.render.call(this)
        console.log("S render");
    }
}


const s = new S();

s.say();
s.render();
console.dir(s.__proto__);

//其实就是实现了子类实例的继承，并且会自动调用constructor，且带了一个super的引用