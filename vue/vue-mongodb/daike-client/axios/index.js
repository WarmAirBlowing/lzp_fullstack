import apiLogin from './interface/login'

const install = Vue => {
  // 对象拦截
  Object.defineProperties(Vue.prototype, {
    $http: {
      get() {
        return Object.assign(
          {},
          apiLogin
        )
      }
    }
  })
}

export default install