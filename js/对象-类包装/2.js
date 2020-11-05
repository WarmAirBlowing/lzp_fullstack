function myPerson(name,age) {
    var that = {}
    that.name = name
    that.age = age
    return that
}
var person1 = myPerson('wn',18)
console.log(person1);

function Car(color) {
    this.color = color
    this.name = 'BMW'
    return {} // 引用类型的返回值会影响构造函数
}

var car = new Car('red')
console.log(car);