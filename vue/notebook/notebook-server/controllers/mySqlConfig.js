const mysql = require('mysql')
const config = require('./defaultConfig')

// 连接线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT
})

let allServices = {
  query: function(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject(err)
        } else {
          // sql： 要执行的sql语句 values：要插入的值
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 用户登录
let userLogin = function(username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`
  return allServices.query(_sql)
}

// 查找用户
let findUser = function(username) {
  let _sql = `select * from users where username="${username}"`;
  return allServices.query(_sql)
}

// 注册用户
let insertUser = function(value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?`
  return allServices.query(_sql, value)
}

// 根据分类查找对应的文章列表
let findNoteListByType = function(noteType) {
  let _sql = `select * from note where note_type="${noteType}"`
  return allServices.query(_sql)
}

// 根据ID查找文章内容
let findNoteDetailById = function(itemId) {
  let _sql = `select * from note where id="${itemId}"`
  return allServices.query(_sql)
}

// 发布笔记
// note_content: this.content,
// head_img: this.preImg,
// title: this.title,
// note_type: this.selectCon,
// userId: curUserId,
// nickname: nickname
let insertNote = function(value) {
  let _sql = `insert into note set note_content=?,head_img=?,title=?,note_type=?,useId=?,nickname=?,c_time=?;`
  return allServices.query(_sql, value)
}

module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  insertNote
}