Car.prototype.name = 'BMW'
Car.prototype.length = 4900
Car.prototype.height = 1400    

function Car(color,owner) {
    this.color = color
    this.owner = owner
    // this.name = 'BMW'
    // this.length = 4900
    // this.height = 1400
}
var car = new Car('red','tingting')
var car1 = new Car('green','sishi')

console.log(car.name);
console.log(car1);