const Koa = require('koa');
const app = new Koa()

const cors = require('koa2-cors'); // 解决跨域问题插件
const bodyParser = require('koa-bodyparser'); // 帮助koa解析参数
const mongoose = require('mongoose') // 做mongodb的连接
const config = require('./config')

// 建立mongodb的连接
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
  if(err) {
    console.error('failed');
  }else {
    console.log('connecting database successfully');
  }
})

app.use(cors());
app.use(bodyParser());

const user_router = require('./routes/api/user_router')

app.use(user_router.routes())

app.listen(3000)