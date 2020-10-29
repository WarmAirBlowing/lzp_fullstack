const Koa = require('koa') // 引入koa
const fs = require('fs') // 引入fs
const app = new Koa()

// ctx 上下文
const main = ctx => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream('./template.html')
}

app.use(main)

app.listen(3000,() => {
    console.log('3000端口已启用');
})