const opn = require('opn');
const chalk = require('chalk');

const Koa = require('koa')   //koa2中间件依赖
const app = new Koa()       //js的继承
const Router = require('koa-router')  //路由依赖的中间间
const static = require('koa-static')   //静态资源服务插件
const path = require('path')           //路径管理
const bodyParser = require('koa-bodyparser')  //请求体，返回体解析类似json，text，图片等

// app.use( async ( ctx ) => {
//     ctx.body = 'hello world'
// })                           //koa2中间件，使用路由的(使用路由后，这里就不会在编辑代码了)

app.use(bodyParser())    //使用解析上下文插件

// 配置静态资源
const staticPath = './static'
app.use(static(
    path.join( __dirname, staticPath)
))

app.listen(3000)            //服务启动端口

console.log(chalk.green('start success' ));
console.log(chalk.green('host: localhost:3000' ));

opn('http://localhost:3000').then(() => {

});