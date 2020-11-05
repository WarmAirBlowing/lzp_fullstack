var num = 123
// var num = new Number(123)
num.toString() // '123'

// Number.prototype.__proto__ = Object.prototype
console.log(Object.prototype);

// 方法重写
Object.prototype.toString = function() {

}
Person.prototype.toString = function() {
    return 'hehe'
}
function Person() {

}
var person = new Person()
console.log(person.toString());