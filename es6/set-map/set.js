// let arr = [1,2,3,2,4,1]

// let newArr = [...new Set(arr)]

// console.log(newArr); // [ 1, 2, 3, 4 ]

// function test(color) {
//     switch (color) {
//         case 'red':
//             return ['apple', 'strawberry']
//         case 'yellow':
//             return ['banana', 'pear']
//         case 'green':
//             return ['watermelon']
//     }
// }
// console.log(test('red')); 

// const fruitColor = {
//     red: ['apple','strawberry'],
//     yellow: ['banana', 'pear'],
//     green: ['watermelon']
// }
// function test(color) {
//     return fruitColor[color] || []
// }
// test('yellow')

const fruitColor = new Map()
.set('red',['apple','strawberry'])
.set('yellow',['banana', 'pear'])