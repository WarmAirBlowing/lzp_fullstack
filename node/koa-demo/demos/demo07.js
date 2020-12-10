const Koa = require('Koa')
const app = new Koa()
const route = require('koa-route')

const main = (ctx, next) => {
  ctx.body = 'hello'
}
app.use(route.get('/abc', main))

app.listen(3000)