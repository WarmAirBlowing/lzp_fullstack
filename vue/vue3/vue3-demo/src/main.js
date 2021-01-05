import { createApp } from 'vue'
import App from './App.vue'
import 'todomvc-app-css/index.css'

createApp(App).mount('#app')


// 2.0写法
// import Vue from 'vue'
// import App from './App.vue'
// new Vue({
//   render: h => h(App)
// }).$mount('#app')
