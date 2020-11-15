http：超文本传输协议

输入url -> 看到页面

GET www.baidu.com HTTP/1.1
user-agent: XXX IE/chrome

上面这个格式 放到 传输层(TCP,http基于TCP,另外一个叫 UDP)去

拿到响应

HTTP/1.1 200 ok
content-type: text/html
key: value

