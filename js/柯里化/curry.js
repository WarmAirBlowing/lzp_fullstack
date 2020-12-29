// function curry(fn) {
//   let args = [].slice.call(arguments, 1) // 拿到fn的参数
//   return function () {
//     let newArgs = args.concat([].slice.call(arguments))
//     return fn.apply(this, n ewArgs)
//   }
// }

// function add(a, b) {
//   return a + b
// }
// let addCurry = curry(add, 1, 2)
// console.log(addCurry());



function sub_curry(fn) {
  let args = [].slice.call(arguments, 1)
  return function () {
    let newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

function curry(fn, length) {
  length = length || fn.length; // 函数的 length 属性 表示参数个数
  let slice = Array.prototype.slice;
  return function () {
    if (arguments.length < length) {
      let combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}

let test = curry(function (a, b, c) {
  return [a, b, c]
})

console.log(test('a','b','c'));
console.log(test('a','b')('c'));