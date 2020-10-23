let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]);
console.log(colors); // [ 'red', 'green', 'blue' ]
console.log(colors2); // [ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]

let names = ['Steven','Tom','Allen','Beck','Alice'];
let names2 = names.slice(1); // [ 'Tom', 'Allen', 'Beck', 'Alice' ]
let names3 = names.slice(1,4); //[ 'Tom', 'Allen', 'Beck' ]
console.log(names2);
console.log(names3);

let animals = ['cat','dog','pig','monkey'];
let removed = animals.splice(0,1); // 删除第一项
console.log(animals); // [ 'dog', 'pig', 'monkey' ]
console.log(removed); // [ 'cat' ],只有一个元素的数组

removed = animals.splice(1,0,'duck','tiger');
console.log(animals); // [ 'dog', 'duck', 'tiger', 'pig', 'monkey' ]
console.log(removed); // [],空数组

removed = animals.splice(1,1,'lion','rabbit');
console.log(animals); // [ 'dog', 'lion', 'rabbit', 'tiger', 'pig', 'monkey' ]
console.log(removed); // [ 'duck' ],只有一个元素的数组
