// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'lzplzp-3gf2vwfc74245559' // 环境ID

cloud.init()
const db = cloud.database({ env })  // 指明云函数生效的环境

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext().OPENID
  // 查找 user-group 这个库里面是否具有该 openId  // 查找 where() .get()

  // 按照这个 openId 把 user-group 里对应的数据取出

  // 去 group 这个库里面查找所有的 _id 和 groupId 相同的数据
}