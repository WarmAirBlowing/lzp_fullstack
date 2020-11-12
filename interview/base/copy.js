// 什么是浅拷贝？如何实现一个浅拷贝？什么是深拷贝？如何实现一个深拷贝

let a = {
    age: 1
}
// let b = a // 浅拷贝
let b = JSON.parse(JSON.stringify(a)) // 深拷贝
a.age = 2
// console.log(b.age); 

let c = {
    age: 1,
    jobs: {
        first: 'coding'
    }
}
let d = {...c} // ...c 表示将 c 中的所有键值对
c.age = 2
c.jobs.first = 'waiter'
console.log(d.age); // 1 深
console.log(d.jobs.first); // waiter 浅

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c

let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);