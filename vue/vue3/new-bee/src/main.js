import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible' // 根据屏幕大小自动设置根字体
import Vant from 'vant';
import 'vant/lib/index.css';
import './common/style/base.less'

const app = createApp(App)
// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if(url && url.startsWith('http')) {
      return url
    } else {
      url = `http://47.99.134.126:28019${url}`
      return url
    }
  }
}

app.use(store).use(router).use(Vant).mount('#app')