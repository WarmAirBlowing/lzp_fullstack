// 类包装
// 原始值是不能有属性和方法的，属性和方法是对象独有的

// var num = 123
// num.abc = 'aaa'
// console.log(num); // 123

// var num = new Number(123)
// num.abc = 'aaa'
// console.log(num); // [Number: 123] { abc: 'aaa' }
// console.log(num * 2); // 246

var str = 'abcd'
console.log(str.length);
var num = 4
num.len = 3
// new Number(4).len = 3
// delete num.len
console.log(num.len); // new Number(4).len

// 以上这种隐式的过程叫做包装类

var arr = [1,2,3,4,5]
arr.length = 2
console.log(arr); // [ 1, 2 ]

var str = 'abcd'
str.length = 2
console.log(str); // abcd
// 相当于做了以下操作
// new String('abcd').length = 2
// delete str.length
// 所以说 手动添加的 length 是无效的
console.log(str.length); // new String('abcd').length

// 面试题
var str = 'abc'
str += 1 // 'abc1'
var test = typeof(str) // test = 'string'
if(test.length == 6) {
    test.sign = 'typeOf的返回结果可能是String' // new String('typeOf的返回结果可能是String').sign  delete test.sign
}
console.log(test.sign); // new String('typeOf的返回结果可能是String').sign
