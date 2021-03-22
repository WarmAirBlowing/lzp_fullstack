let http = require('http')
let fs = require('fs')
let url = require('url')
let path = require('path')

http.createServer((req, res) => {
  // 获取响应路径
  let pathName = url.parse(req.url).pathname
  // 默认加载路径
  if(pathName == '/') {
    // 默认加载的首页
    pathName = "index.html"
  }

  // 获取文件的后缀名
  let extName = path.extname(pathName)

  // 过滤 /favicon.ico 的请求
  if(pathName != '/favicon.ico') {
    fs.readFile('./' + pathName, (err, data) => {
      if(err) {
        // 如果不存在这个文件
        console.log('404 Not Found!');
        fs.readFile('./webService/404.html', (errorNotFound, dataNotFound) => {
          if(errorNotFound) {
            console.log(errorNotFound);
          } else {
            res.writeHead(200, {
              "Content-Type" : "text/html; charset='utf-8'"
            })
            // 读取写入文件
            res.write(dataNotFound)
            // 结束响应
            res.end()
          }
        })
        return
      } else {
        // 获取文件类型
        let ext = getExt(extName)
        // 返回这个文件
        // 设置请求头
        res.writeHead(200, {
          "Content-Type": ext + "; charset='utf-8'"
        })
        // 读取写入文件
        res.write(data)
        // 结束响应
        res.end()
      }
    })
  }
}).listen(8080)

// 获取后缀名
getExt = (extName) => {
  switch(extName) {
    case '.html': return 'text/html';
    case '.css': return 'text/css';
    case '.js': return 'text/js';
    default: return 'text/html';
  }
}
