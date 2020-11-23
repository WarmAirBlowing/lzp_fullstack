// class Foo {
//     constructor() {

//     }
//     static bar() {
//         this.baz()
//     }
//     static baz() {
//         console.log('hello');
//     }
//     // baz() {
//     //     console.log('world');
//     // }
// }
// let foo = new Foo()

// foo.bar() // 报错

class Shape {
    constructor(width,height) {
        this._width = width
        this._height = height
        // this.area = width * height
    }
    get area() {
        return this._width * this._height
    }
}
const square = new Shape(10,10) 
console.log(square._width);
console.log(square.area);