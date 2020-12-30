let obj = {}
Object.defineProperty(obj, 'num', {
  // value: 1,
  // writable: false,
  enumerable: true,
  configurable: false,
  // 下面两个是存取描述符
  // getter
  get: undefined, // 给 num 这个属性提供 getter 方法
  // setter
  set: function (val) {
    
  } 
})
// obj.num = 1
// for (let key in obj) {
//   console.log(key);
// }
// delete obj.num

console.log(obj);