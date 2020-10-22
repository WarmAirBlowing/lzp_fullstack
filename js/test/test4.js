const zeroes = [0,0,0,0,0];

// 用5填充整个数组
zeroes.fill(5);
console.log(zeroes); // [ 5, 5, 5, 5, 5 ]
zeroes.fill(0); // 重置

// 用6填充索引大于等于3的元素
zeroes.fill(6,3);
console.log(zeroes); // [ 0, 0, 0, 6, 6 ]
zeroes.fill(0); // 重置

// 用7填充索引大于等于1且小于3的元素
zeroes.fill(7,1,3);
console.log(zeroes); // [ 0, 7, 7, 0, 0 ]
zeroes.fill(0); // 重置

let nums ;
function reset() {
    nums = [0,1,2,3,4,5,6,7,8,9];
}
reset();

// 从nums中复制索引从 0 开始的内容,插入到索引 5 开始的位置
// 在源索引或目标索引到达数组边界时停止
nums.copyWithin(5);
console.log(nums); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
reset(); // 重置

// 从nums中复制索引 5 开始的内容,插入到索引 0 开始的位置
nums.copyWithin(0,5);
console.log(nums); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
reset(); // 重置

// 从nums中复制索引 0 开始到 3 结束的内容,插入到索引 4 开始的位置
nums.copyWithin(4,0,3);
console.log(nums); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset(); // 重置