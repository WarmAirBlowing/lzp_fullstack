// 当要异步地（但要尽可能快）执行某些代码时，其中一个选择是使用 Node.js 提供的 setImmediate() 函数
// 延迟 0 毫秒的 setTimeout() 回调与 setImmediate() 非常相似。 
// 执行顺序取决于各种因素，但是它们都会在事件循环的下一个迭代中运行。
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
setImmediate(() => {
    console.log(6);
})
setTimeout(() => {
    console.log(3);
}, 0);