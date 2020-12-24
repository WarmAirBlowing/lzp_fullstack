// document.getElementById('app').innerHTML = 'hello webpack'
// document.getElementById('app').addEventListener('click' ,() => {{
//   document.getElementById('app').innerHTML = 'hello babel'
// }})

import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   el: "#app",
//   template: '<App/>',
//   components: {
//     App
//   }
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')