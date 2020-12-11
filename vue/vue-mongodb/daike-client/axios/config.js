export default {
  method: 'post',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: {},
  timeout: 10000, // 请求时间限制
  withCredentials: false, // 携带凭证
  response: 'json',
}