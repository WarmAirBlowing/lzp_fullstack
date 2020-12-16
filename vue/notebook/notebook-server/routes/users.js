const router = require('koa-router')()
const userService = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')

router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// 注册
router.post('/userRegister', async (ctx, next) => {
  let _username = ctx.request.body.username
  let _userpwd = ctx.request.body.userpwd
  let _nickname = ctx.request.body.nickname

  if (!_username || !_userpwd || !_nickname) {
    ctx.body = {
      code: '80001',
      mess: '用户名密码和昵称不能为空！'
    }
  }
  await userService.findUser(_username).then(async (res) => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: '80003',
        mess: '用户已存在！'
      }
    } else {
      await userService.insertUser([_username, _userpwd, _nickname]).then(res => {
        console.log(res);
        let r = ''
        if (res.affectRows != 0) {
          r = 'ok'
          ctx.body = {
            code: '80000',
            data: r,
            mess: '注册成功'
          }
        } else {
          r = 'error',
            ctx.body = {
              code: '80004',
              data: r,
              mess: '注册失败'
            }
        }
      })
    }
  })
})

// 登录
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  // 把参数拿到数据库里查询
  await userService.userLogin(_username, _userpwd).then(res => {
    console.log(res);
    let r = '';
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '80000',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '账号或密码错误'
      }
    }
  }).catch(err => {
    ctx.body = {
      code: '80002',
      data: err
    }
  })
})

// 根据分类查找对应的文章列表
router.post('/findNoteListByType', async (ctx, next) => {
  let _noteType = ctx.request.body.note_type
  await userService.findNoteListByType(_noteType).then(res => {
    // console.log(res);
    let r = ''
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res,
        mess: '查找成功'
      }
    }else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
})

// 根据ID查找文章内容
router.post('/findNoteDetailById', async (ctx, next) => {
  let _itemId = ctx.request.body.itemId
  await userService.findNoteDetailById(_itemId).then(res => {
    let r = ''
    if(res.length) {
      r = 'ok'
      ctx.body = {
        code: '80000',
        data: res[0],
        mess: '查找成功'
      }
    }else {
      r = 'error'
      ctx.body = {
        code: '80004',
        data: r,
        mess: '查找失败'
      }
    }
  })
}) 

// 插入笔记
router.post('/insertNote', async (ctx, next) => {
  let _note_content = ctx.request.body.note_content
  let _head_img = ctx.request.body.head_img
  let _title = ctx.request.body.title
  let _note_type = ctx.request.body.note_type
  let _userId = ctx.request.body.userId
  let _nickname = ctx.request.body.nickname
  let _cTime = utils.getformatDate()

  await userService.insertNote([_note_content, _head_img, _title, _note_type, _userId, _nickname, _cTime]).then(res => {
    // console.log(res);
    if(res.affectRows != 0) {
      ctx.body = {
        code: '80000',
        data: res,
        mess: '发布成功！'
      }
    }else {
      ctx.body = {
        code: '80004',
        data: 'error',
        mess: '发布失败'
      }
    }
  })
})

module.exports = router
