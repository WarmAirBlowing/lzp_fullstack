// 格式化日期
let getformatDate = function() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  return `${year}年${month}月${day}`
}

module.exports = {
  getformatDate
}