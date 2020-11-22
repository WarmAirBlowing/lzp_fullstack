// 云函数入口文件
const cloud = require('wx-server-sdk')
const cheerio = require('cheerio')
let charset = require('superagent-charset') // 解决乱码
let superagent = require('superagent') // 发起请求
charset(superagent)
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let serverUrl = `https://wap.biqiuge8.com/${event.url}`
  const result = await superagent.get(serverUrl).charset('gb2312') // 取决于网页的编码方式
  const data = result.text || ''
  const $ = cheerio.load(data, {decodeEntities: false}) // 读取整份html文件

  let content = $('#chaptercontent').text()
  let contentH = $('#chaptercontent').html()
  let catalog = $('#pb_mulu').attr('href') // 目录
  let pre = $('#pb_prev').attr('href')
  let next = $('#pb_next').attr('href')
  return {
    content,
    contentH,
    catalog,
    pre,
    next
  }

}