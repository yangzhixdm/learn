const Koa = require('koa');
const Router  = require('koa-router');
const WebSocket = require('ws');

const static = require('koa-static');   //静态资源服务插件
const path = require('path')           //路径管理
const bodyParser = require('koa-bodyparser')  //请求体，返回体解析类似json，text，图片等

const app = new Koa();
const router = new Router();

app.use(bodyParser())    //使用解析上下文插件

// 配置静态资源
const staticPath = '/'
app.use(static(
    path.join( __dirname, staticPath)
));

app.use(function (ctx, next) {
    return next(ctx);
});


// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const wss = new WebSocketServer({
    port: 4000  //websocket监控端口
});

wss.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);

    ws.send(`ECHO:333`, (err) => {
        if (err) {
            console.log(`[SERVER] error: ${err}`);
        }
    });

    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);

        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});

app.use(router.routes());
app.listen(3000);   //页面监控端口

