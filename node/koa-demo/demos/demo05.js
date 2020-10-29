const Koa = require('koa') // 引入koa
// const fs = require('fs') // 引入fs
const app = new Koa()

// ctx 上下文
const main = ctx => {
    console.log(ctx.request.url);
    if(ctx.request.url != '/') {
        ctx.response.type = 'html'
        ctx.response.body = '<a href="/">Index page</a>'
    }else {
        ctx.response.body = 'Hello World'
    }
    
}

app.use(main)

app.listen(3000,() => {
    console.log('3000端口已启用');
})