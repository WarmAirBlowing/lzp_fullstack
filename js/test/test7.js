let nums = [1,2,3,4,5];
let a = nums.reverse();
console.log(a);
console.log(nums); //[ 5, 4, 3, 2, 1 ]

//升序排序
function compare(a,b) {
    return a-b;
}
//降序排序
function compare2(a,b) {
    return b-a;
}
let arr = [3,6,8,4,10,1];
arr.sort(compare);
console.log(arr); // [ 1, 3, 4, 6, 8, 10 ]

arr.sort(compare2);
console.log(arr); // [ 10, 8, 6, 4, 3, 1 ]