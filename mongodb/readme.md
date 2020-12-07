存储服务

www web 服务 3000
mongodb 27017
mysql 3306

全栈
: 8080 vue 前端
webpack webpack-dev-server
vue-router

:3000 后端 node + go
:27017 数据库服务
MVC

1. 启动mogodb 进程
  mongod --dbpath "d:/data/db"
  NoSQL   /test/a.bson
  非关系型数据库
  mongo 数据库交互命令行

## mongo 的交互语句
- show dbs;
- use tutorial;
- mysql 要去建表
  mongodb 直接用
  前端非常友好
  给个 json 它就存了 没有太严格的关系
  定义 字段可有可无，没有那么严格
  特别适合物联网时代及碎片化信息的收集
- db.users.insert({})
- mysql table -> mongodb collection
- find()
  $and
  ObjectId("")
- update()
- 索引
  面试回答技巧：
  mysql 关系型数据库、mongodb NoSQL 都有学习，对JS特别友好，JSON存就可以，
  还对索引进行过学习
  nums 20000 条 json
  nums: 500

- 电商应用
  node mongodb
  安装数据库驱动 npm i mongoose

- 数据怎么进入数据库
  - 先连接
    mongodb url   once('open')
  - 对数据库建模
    userSchema 字段名 + 类型
    mongoose.model('User', userSchema)
    new User.save()
  