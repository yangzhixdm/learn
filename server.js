const Koa = require('koa');
const Router  = require('koa-router');
const static = require('koa-static');   //静态资源服务插件
const path = require('path')           //路径管理
const bodyParser = require('koa-bodyparser')  //请求体，返回体解析类似json，text，图片等
const app = new Koa();
const router = require('./routers/router.js');
const views =  require('koa-views');

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

app.use(bodyParser())    //使用解析上下文插件

// 配置静态资源
const staticPath = '/static';

app.use(static(
    path.join( __dirname, staticPath)
));

// 公共数据，每个路由里面都要该数据
app.use(async (ctx,next)=>{
    ctx.state = {
        userName:'张三'
    }
    // 继续向下匹配路由
    await next(); 
});

app.use(router.routes());

app.listen(3000);