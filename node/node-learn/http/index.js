const http = require('http')
/*
    req   获取客户端传过来的信息
    res  给浏览器响应信息
*/
const server = http.createServer((req, res) => {
  console.log(req.url);
  // console.log(res);
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.write("<h2>hello中国</h2>")
  res.end()
})
server.listen(3000)