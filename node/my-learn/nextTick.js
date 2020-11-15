// 4 2 5 1 3
// 确保在下一个事件循环迭代中代码已被执行，则使用 nextTick()
setTimeout(() => {
    console.log(1);
}, 0);
new Promise((resolve) => {
    console.log(4);
    resolve('ok')
}).then(() => {
    console.log(5);
})
process.nextTick(() => {
    console.log(2);
})
setTimeout(() => {
    console.log(3);
}, 0);
