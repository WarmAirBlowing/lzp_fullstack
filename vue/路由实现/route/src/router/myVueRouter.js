let Vue = null
class HistoryRoute {
  constructor() {
    this.current = null
  }
}
class VueRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'
    this.routes = options.routes || []
    this.routesMap = this.createMap(this.routes)

    this.history = new HistoryRoute() // 装当前路由的状态
    this.init()
  }
  // 初始化
  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location = '/'
      window.addEventListener('load', () => {
        this.history.current = location.hash.slice(1)
      })
      window.addEventListener('hashchange', () => {
        this.history.current = location.hash.slice(1)
      })
    } else {
      location.pathname ? '' : location.pathname = '/'
      window.addEventListener('load', () => {
        this.history.current = location.pathname
      })
      window.addEventListener('popstate', () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((pre, current) => {
      pre[current.path] = current.component // { '/home': Home }
      return pre
    }, {})
  }
}
VueRouter.install = function (v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件
        this._root = this
        this._router = this.$options.router
        Vue.util.defineReactive(this, 'xxx', this._router.history)
      } else { //如果是子组件
        this._root = this.$parent && this.$parent._root
      }
      Object.defineProperty(this, '$router', {
        get() {
          return this._root._router
        }
      })
      Object.defineProperty(this, '$route', {
        get() {
          return this._root._router.history.current
        }
      }) 

      
    }
  })
  Vue.component('router-link', {
    props: {
      to: String
    },
    render(h) {
      let mode = this._self._root._router.mode
      let to = mode === 'hash' ? '#' + this.to : this.to
      return h('a', {attrs: {href: to}}, this.$slots.default)
    }
  }),
    Vue.component('router-view', {
      render(h) {
       let current = this._self._root._router.history.current
       let routeMap = this._self._root._router.routesMap
       return h(routeMap[current])
      }
    })
}

export default VueRouter


// class Vue {
//   constructor() {
//     // 用来保存所有被use的组件
//     _installedPlugins: ''
//   }
// }
// Vue.use = function(plugin) {
//   // 用来判断组件有没有被使用
//   const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
//   if(installedPlugins.indexOf(plugin) > -1) {
//     return this // this 表示 Vue 这个类
//   }
//   // toArray 是官方自己定义的一个方法 实现的效果是把类数组转换成数组
//   const args = toArray(arguments, 1) // arguments 取到 plugin 的所有参数
//   args.unshift(this) // 将Vue对象拼接到数组头部
//   if(typeof plugin.install === 'function') {
//     //如果组件是对象，且提供install方法，调用install方法将参数数组传入，改变`this`指针为该组件
//     plugin.install.apply(plugin, args)
//   }else if(typeof plugin === 'function') {
//     //如果传入组件是函数，这直接调用，但是此时的`this`指针只想为`null` 
//     plugin.apply(null, plugin, args)
//   }
//   //在保存注册组件的数组中添加
//   installedPlugins.push(plugin)
//   return this
// }