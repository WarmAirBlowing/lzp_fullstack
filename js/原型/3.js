Person.prototype.lastName = 'Liu'
function Person(name) {
    this.name = name
}

var person = new Person('zhipeng')
// console.log(person.lastName);

// person.lastName = 'Wang' // 没有改动原型属性，只是在自己的对象中增加属性
// Person.prototype.lastName = 'Wang'
// console.log(person.lastName);
// console.log(person);

// delete person.name // 无法删除
// delete Person.prototype.lastName

// function Bus() {

// }
// Car.prototype = {
//     constructor: Bus
// }
function Car() {
    
}
var car = new Car()
console.log(car.constructor); // function Car() {}

// constructor 指向的是Car(),目的是让Car() 构造出来的对象想要找到它自己的来历时能找到
// 可以人为修改它的指向