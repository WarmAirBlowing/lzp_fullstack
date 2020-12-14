const Router = require('koa-router')
const controller = require('../controller/c-signup')
const router = new Router()

router.get('/signup', async (ctx, next) => {
  await ctx.render('signup', {
    session: ctx.session
  })
})

// 点击注册按钮的响应事件
router.post('/signup', controller.postSignup)

module.exports = router