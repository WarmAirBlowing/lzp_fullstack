const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    console.log(req.url);
    console.log(url.parse(req.url));
    let userinfo = url.parse(req.url, true).query;

    console.log(`姓名：${userinfo.name}--年龄:${userinfo.age}`);
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.write("<h2>hello中国</h2>")
  res.end()
}).listen(3000, () => {
  console.log('服务启动成功！!!');
})