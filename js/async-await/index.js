// function a() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('aaa');
//             resolve('ok');
//         }, 1000);
        
//     })
    
// }
// function b() {
//     console.log('bbb');
// }
// a().then(b)

function timeOut(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('你好');
            resolve()
        },ms);
    })
}
// async 声明该函数内部可能在异步情况
async function asyncPrint(value,ms) {
    await timeOut(ms) // 阻塞后面的代码
    console.log(value); // 去到微任务队列
    // await console.log('qwer');
}
asyncPrint('hello world',1000)
console.log('ok');
