let arr = [1, [2, [3, 4]]]

function faltten(arr) {
  let newArr = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] instanceof Array) {
      newArr = newArr.concat(faltten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(faltten(arr)); // [1, 2, 3, 4]

// reduce 第二个参数用于保存第一个回调函数返回的值
function faltten(arr) {
  return arr.reduce(function(prev,next) {
    return prev.concat(Array.isArray(next) ? faltten(next) : next)
  }, [])
}


// ... 解构取值时会优先去掉中括号，所以在取 [2, [3, 4]] 时中括号也会被去掉，所以最后结果为 [ 1, 2, [ 3, 4 ] ]
console.log([].concat(...arr)); // [ 1, 2, [ 3, 4 ] ]

function faltten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

