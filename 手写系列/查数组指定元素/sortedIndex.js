// function sortedIndex(array, obj) {
//   let low = 0;
//   let high = array.length;
//   while (low < high) {
//     let mid = Math.floor((low + high) / 2);
//     if (obj > array[mid]) {
//       low = mid + 1;
//     }else {
//       high = mid;
//     }
//   }
//   return low;
// }

// console.log(sortedIndex([10, 20, 30], 25)); // 2

function cb(func, context) {
  if(context === void 0) { // void 0 => undefined
    return func
  }
  return function() {
    return func.apply(context, arguments)
  }
}
function sortedIndex(array, obj, iteratee, context) {
  iteratee = cb(iteratee, context)
  let low = 0;
  let high = array.length;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (iteratee(obj) > iteratee(array[mid])) {
      low = mid + 1;
    }else {
      high = mid;
    }
  }
  return low;
}

let stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
let result = sortedIndex(stooges, {name: 'larry', age: 50}, function(stooge) {
  return stooge.age
}); 
console.log(result); // 1


