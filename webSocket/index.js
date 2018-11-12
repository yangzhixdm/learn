const Koa = require('koa');
const Router  = require('koa-router');

const websockify = require('koa-websocket');
const static = require('koa-static');   //静态资源服务插件
const path = require('path')           //路径管理
const bodyParser = require('koa-bodyparser')  //请求体，返回体解析类似json，text，图片等

const app = websockify(new Koa());
///const app = new Koa();

const router = new Router();

app.use(bodyParser())    //使用解析上下文插件

// 配置静态资源
const staticPath = '/'
app.use(static(
    path.join( __dirname, staticPath)
));

app.ws.use(function (ctx, next) {
    return next(ctx);
});

router.get('/', function (ctx) {
    console.log(ctx.websocket);
    ctx.websocket.on('message', function (message) {
        // 返回给前端的数据
        ctx.websocket.send(message + "1");
    });
});

app.ws.use(router.routes());
app.listen(3000);