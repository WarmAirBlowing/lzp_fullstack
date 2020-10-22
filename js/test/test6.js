let names = ['Steven','Tom','Allen'];

let count = names.push('Beck','Alice');
console.log(count); // 5
console.log(names); // [ 'Steven', 'Tom', 'Allen', 'Beck', 'Alice' ]

let item = names.pop();
console.log(item); // Alice
console.log(names); // [ 'Steven', 'Tom', 'Allen', 'Beck' ]

let colors = ['red','blue'];

let count2 = colors.unshift('green','yellow');
console.log(count2); // 4
console.log(colors); // [ 'green', 'yellow', 'red', 'blue' ]

let item2 = colors.shift();
console.log(item2); // green
console.log(colors); // [ 'yellow', 'red', 'blue' ]