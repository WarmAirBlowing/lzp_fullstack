let nums = new Array(1,2)
console.log(nums);

console.log(Array.from("Steven"));

const a1 = [1,2,3,4];
const a2 = Array.from(a1);
console.log(a1)
console.log(a2)
console.log(a1 === a2)

console.log(Array.of(1,2,3,4));
console.log(Array.of(undefined));

// const options = [1,,,,5];
// for(const option of options){
// 	console.log(option);
// }

const options = [,,,,,];
console.log(options.length);

let colors = ["red","blue","green"];
console.log(colors[0]);
colors[2] = "black";
console.log(colors[2]);
console.log(colors.length);
colors[3] = "yellow";
console.log(colors.length); 
colors.length = 1;
console.log(colors);