// let array = [1, 2, 3, 2, 0, 5]
// console.log(Math.max(...array));
// console.log(Math.min(...array));

// console.log(Math.max(true, '2', null)); // 2
// console.log(Math.min(1, '0', {})); // NaN

// console.log(Math.max() < Math.min()); // true

// 原始方法
let array2 = [1, 2, 3, 2, 0, 5, 8, -1]
function maxNum(arr) {
  let max= arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
console.log(maxNum(array2)); 

function max(prev, next) {
  return Math.max(prev, next)
}
console.log(array2.reduce(max));

// 排序
array2.sort(function(a, b) {
  return b - a;
})

// eval
let max = eval("Math.max(" + array2 + ")")

// apply
Math.max.call(null, array2)
