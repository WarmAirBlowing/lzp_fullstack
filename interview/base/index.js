// let key1 = 1
// let key2 = 1
// console.log(key1 === key2);

// let key3 = Symbol(1)
// let key4 = Symbol(1)
// console.log(key3 === key4); // false

// console.log(typeof(null)); // object

// let obj = {
//     name: 'wn'
// }

// const a = [] // #001
// const b = a
// b.push(1) // b = [1]
// console.log(a); //[1]

// function test(person) {
//     person.age = 26
//     person = { // #002
//         name: 'yyy',
//         age: 30
//     }
//     return person
// }
// const p1 = { // #oo1
//     name: 'xxx', 
//     age: 25
// }
// const p2 = test(p1)
// console.log(p1); // { name: 'xxx', age: 26 }
// console.log(p2); // { name: 'yyy', age: 30 }
// 分析：
// 1. 函数传参是传递对象指针的副本
// 2. p1 和 person 具有相同的指针,person 被修改,p1 也会被修改
// 3. person 拥有了一个新的地址

// console.log(typeof(1)); // number
// console.log(typeof('1')); // string
// console.log(typeof(undefined)); // undefined
// console.log(typeof(null)); // object
// console.log(typeof(true)); // boolean
// console.log(typeof({})); // 无法判断是啥，强行判断为object

// console.log([] instanceof Array); // true
// console.log([] instanceof Object); // true
// console.log('hello' instanceof String); // 无法判断是啥，强行判断为false 

// 让 instanceof 也能判断原始类型
class PrimitivesString {
    static [Symbol.hasInstance](x) { // Symbol.hasInstance 让我们自定义 instanceof 行为
        return typeof x === 'string'
    }
}
console.log('hello' instanceof PrimitivesString);