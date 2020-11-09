// let a = 1
// let b = 2
// let c = 3

// let [a,b,c] = [1,2,3]
// console.log(a); // 1

// let [ , ,c] = [1,2,3]
// console.log(c); // 3

// let [a,b, ...c] = [1,2,3,4,5,6,7]
// console.log(a); // 1
// console.log(c); // [ 3, 4, 5, 6, 7 ]

// let [a,b, ...c] = [1]
// console.log(c); // []

// let [a] = 1
// console.log(a); //报错，不可以这样写 TypeError: 1 is not iterable

// set
// let arr = [1,2,2,4,6,5,5,3,3,4]
// let newArr = new Set(arr)
// console.log(newArr); //Set(6) { 1, 2, 4, 6, 5, 3 }

// let [x,y,z] = {a: 'a',b: 'b',c: 'c'}
// console.log(x); // 报错

// let [x,y,z] = new Set(['a','b','c'])
// console.log(x); // a

// let [foo = true] = [false]
// console.log(foo); // false

// let [x,y = 'b'] = ['a',undefined] 
// console.log(y); // b

// let [x,y = 'b'] = ['a',null] 
// console.log(y); // null

// let {x,y,z} = {x: 'aaa',y: 'bbb'}
// console.log(x); // aaa

// let {y,x} = {x: 'aaa',y: 'bbb'}
// console.log(x); // aaa 对象解构按照key值对应

// let { log, sin, cos, abs } = Math // JS中的Math对象
// console.log(abs(-2)); // 2

// const {log} = console
// log(123); // 123

// let { foo: baz } = { foo: 'aaa',bar: 'bbb'}
// console.log(foo); // ReferenceError: foo is not defined
// console.log(baz); // aaa

// let obj = {
//     p: ['hello',{y: 'world'}]
// }
// let { p: [x,{y}]} = obj
// console.log(x+y); // helloworld

const [a,b,c,d,e] = 'hello'
console.log(b); // e

