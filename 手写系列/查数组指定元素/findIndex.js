// function isBigEnough(element) {
//   return element >= 15
// }

// console.log([12, 1, 5, 8, 123, 44].findIndex(isBigEnough));

// 实现
// context 用于绑定 this 作用域
function findIndex(array, predicate, context) {
  for (let i = 0; i < array.length; i++) {
    if(predicate.call(context, array[i], i, array)) return i
  }
  return -1
}

console.log(findIndex([1, 2, 3, 4], function(item, index, array){
  if(item == 3) return true
}));