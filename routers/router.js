const Router  = require('koa-router');
const router = new Router();

router.get('/xx', (ctx) => {
    ctx.body = "xx";
});

router.get('/xxx', function (ctx) {
    ctx.body = 'xxx';
});

router.get('/xxxx', function (ctx) {
    ctx.body = 'xxxx';
});

router.get('/login', async (ctx) => {

    await ctx.render('login', {
        title: 'ddd',
        state: ctx.state
    });
});

//可以考虑封装convert一下返回数据
router.post('/login', (ctx) => {

    ctx.body = {
        retcode: 0,
        name: "ddd"
    };
});

module.exports = router;