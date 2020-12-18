// 控制层
const User_col = require('../models/user')
const Password_col = require('../models/password');
const passport = require('../utils/passport');
const { v1: uuidv1 } = require('uuid')
const config = require('../../config')
// 登录
const login = async (ctx) => {
  console.log(ctx.request.body);
  let req = ctx.request.body
  // 连接数据库，去数据库里查找是否存在该条数据
  // 查找用户
  // 获取用户的userId
  const user = await User_col.findOne({
    account: req.username
  })
  if (!user) {
    ctx.status = 200
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return
  }
  // 能找到这个账号
  const userId = user.userId

  // 查密码
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  // 如果在密码表里面找到了账号相同的 id 
  // 判断该 id 对应的密码和前端传过来的密码是否匹配
  // 解密 返回布尔值
  const match = await passport.validate(req.password, req.hash)
  // 往 ctx 添加一个属性
  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return;
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}
// 注册
const register = async (ctx) => {
  let req = ctx.request.body
  const user = await User_col.findOne({
    account: req.username
  })
  ctx.status = 200
  console.log(user);
  if (user) {
    ctx.body = {
      code: 0,
      msg: '账号已存在'
    }
  } else {
    // 插入新用户
    const userId = uuidv1()
    const newUser = await User_col.create({
      account: req.username,
      userId
    })
    if (newUser) {
      // 密码的植入
      const hash = await passport.encrypt(req.password, config.saltTimes)
      const result = await Password_col.create({
        userId,
        hash
      })
      if (result) {
        ctx.body = {
          code: 1,
          msg: '注册成功',
          data: {
            userId: newUser.userId,
            account: newUser.userId
          }
        }
      }
    }
  }
}
module.exports = {
  login,
  register
}