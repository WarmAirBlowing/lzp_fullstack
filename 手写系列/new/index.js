Person.prototype.say = function() {
    console.log('hhhhhhh');
}
function Person(name,age) {
    this.name = name
    this.age = age
}

// let person = new Person('小敏','18')
// console.log(person);

function myNew() {
    let obj = {}
    // 取到外部传入的构造器
    // console.log(arguments);
    let Constructor = Array.prototype.shift.call(arguments) // 让 arguments 也能拥有 shift 方法
    obj.__proto__ = Constructor.prototype
    let result = Constructor.apply(obj,arguments)
    return typeof result === 'object' ? result : obj
}

let person = myNew(Person,'小敏','11')
console.log(person);
person.say()