let Vue = null
class VueRouter {

}
VueRouter.install = function(v) {
  Vue = v
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) { // 如果是根组件

      }
    }
  })
  Vue.component('router-link', {
    render(h) {
      return h('a', {}, '首页')
    }
  }),
  Vue.component('router-view', {
    render(h) {
      return h('h1', {}, '首页视图')
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