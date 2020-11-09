function a() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('aaa');
            resolve('ok1')
        }, 1000);
    })
}
function b() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('bbb');
            resolve('ok2')
        }, 1500);
    })
}
function c() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('ccc');
            resolve('ok3')
        }, 2000);
    })
}
function d() {
    console.log('ddd');
}

Promise.all([a(),b(),c()]).then(d)