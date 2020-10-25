let values = [1, 2, 3, 4, 5]; 
function toSum(prev,cur,index,array) {
    return prev + cur;
}
let sum = values.reduce(toSum);
console.log(sum); // 15

let sum2 = values.reduceRight(toSum);
console.log(sum2); // 15