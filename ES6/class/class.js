class Demo {
    
    constructor(){
        console.log('constructor');
        this.state = {
            name: 'ddd1'
        }
    }

    hanlder(){
        console.log('handler');
    }

    render(){
        console.log('render');
        console.log(this); //this指向 Demo 实例
        console.log(this.state.name);
    }
}

//Demo();不能不带new直接执行

const d = new Demo();
const {render } = d;

console.log(render);
//render(); //TypeError: Cannot read property 'state' of undefined

d.render();

function Demo1(){
    this.state = {
        name: "ddd2"
    }
}

Demo1.prototype = {
    render : function(){
        console.log(this);
    }
}

var dd = new Demo1();
dd.render();
