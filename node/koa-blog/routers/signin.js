const Router = require('koa-router')
const controller = require('../controller/c-signin')
const router = new Router()

router.get('/signin', controller.postSigin)

module.exports = router