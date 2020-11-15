// console.log('start require');
// require('./lib.js')
// console.log('end require');

let lib = require('./lib.js')
// console.log(lib);

lib.name = '蜗牛'

console.log(lib);

// exports 导出的应用跟 index.js 里面的lib是同一个引用