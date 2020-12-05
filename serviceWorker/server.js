const Koa = require('koa');
const path = require('path');
const static = require('koa-static');   //静态资源服务插件
const app = new Koa();

app.use(static(
    path.join( __dirname, '/')
));


app.listen(3000);