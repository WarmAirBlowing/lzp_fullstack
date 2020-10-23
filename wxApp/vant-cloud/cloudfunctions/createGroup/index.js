// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lzplzp-3gf2vwfc74245559' // 环境ID

cloud.init()
const db = cloud.database({ env })  // 指明云函数生效的环境

// 云函数入口函数
// async ES7语法，让函数变成异步函数，不会抢占资源
exports.main = async (event, context) => {
  const userInfo = event.userInfo // event不仅包含前端传递的参数，还会自动携带用户的信息
  return await db.collection('group').add({ // 连接数据库，并往数据库里增加数据
    data: {
      name: event.groupName, // 群组名
      createBy: userInfo.openId, // openID是每个用户的唯一值
      createTime: new Date(), // 创建时间
      deleted: false, // 
      update: new Date(), // 修改时间
    }
  })
  .then( res => { // res 代表前面函数的执行结果,就是存成功的数据
    return db.collection('user-group').add({
      data: {
        groupId: res._id,
        userId: userInfo.openId,
        invalid: false
      }
    })
  })
}