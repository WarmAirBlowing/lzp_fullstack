const req = require('express/lib/request')
const http = require('http')
const fs = require('fs')

// 搭建一个web服务
var server = http.createServer(function(req,res) {
    if(res.url !== './favicon.ico') {
        res.writeHead(200,{"Content-type": "text/html"})
        const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html','utf-8')
        myreadstream.pipe(res)
    }
})

var io = require('socket.io')(server)

io.on('connection',function(socket) { // 声明一个io的使用
    console.info('一个socket连接成功了');
    socket.on('link_to_server', (msg) => {
        console.log(`我收到一个问题 ${msg}`);
        // 响应客户端
        // socket.emit('link_to_client','of course')
        io.emit('link_to_client',msg)
    })
})
server.listen(8888,() => {
    console.log('server is running...');
})