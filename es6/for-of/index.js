let arr = ['a', 'b', 'c', 'd', 'e']

for (let i of arr) {
    console.log(i);
}
// for-in 可以用来遍历数组，但不建议这么用
for (let key in arr) {
    console.log(arr[key]);
}

let obj = {
    name: 'jiushen',
    age: 18,
    sex: 'boy'
}
console.log(Object.keys(obj));
for (let key in obj) {
    console.log(obj[key]);
}
// for-of 不能用来遍历对象，因为对象不具备迭代器
// for(let key of obj) {
//     console.log(key);
// }

function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}
let bar = new Foo()
// console.log(bar);
for(let key in bar) {
    console.log(`index:${key},value:${bar[key]}`);
}