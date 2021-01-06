// vue 2.0 是如何实现响应式的
// 数据改变了，视图就会更新

let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype);

// 重写数组方法
['push', 'shift', 'unshift'].forEach(method => {
  // 函数劫持，重写函数
  proto[method] = function() {
    updateView()
    oldArrayPrototype[method].call(this, ...arguments)
  }
})
function observer(target) { // 观察者
  if (typeof target !== 'object' && target !==null) {
    return target
  }
  if (Array.isArray(target)) {
    // Object.setPrototypeOf(target, proto)
    target.__proto__ = proto
  }
  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}
function defineReactive(target, key, value) {
  if(typeof value === 'object' && value !==null ) {
    observer(value)
  }
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        updateView()
        value = newVal
      }
    }
  })
}

function updateView() {
  console.log('更新视图');
}
// Object.defineProperty


let data = {
  name: 'wn',
  age: {
    n: 18
  }
}
observer(data)
// console.log(data.name);
// data.name = 'cg'
// console.log(data.name);

console.log(data.age.n);
data.age.n = 20
console.log(data.age.n);
