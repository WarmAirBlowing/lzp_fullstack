// 密码的加密、解密函数
const bcypt = require('bcrypt')
const { saltTimes } = require('../../config')
const password = require('../models/password')
// 加密
const encrypt = async (password, saltTimes) => {
  const hash = await bcypt.hash(password, saltTimes)
  return hash
}
// 解密比较
const validate = async (password, hash) => {
  const math = await bcypt.compare(password, hash)
  return math
}

module.exports = {
  encrypt,
  validate
}