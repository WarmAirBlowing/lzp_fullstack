// console.log('script start');

// setTimeout(function() {
//   console.log('setTimeout');
// }, 0);

// Promise.resolve().then(function() {
//   console.log('promise1');
// }).then(function() {
//   console.log('promise2');
// });

// console.log('script end');

// *******************************************

// console.log('script start');

// setTimeout(function() {
//   console.log('timeout1');
// }, 10);

// new Promise(resolve => {
//     console.log('promise1');
//     resolve();
//     setTimeout(() => console.log('timeout2'), 10);
// }).then(function() {
//     console.log('then1')
// })

// console.log('script end');

// *******************************************

console.log('global')

for (var i = 1;i <= 5;i ++) {
  setTimeout(function() {
    console.log(i)
  },i*1000)
  console.log(i)
}

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
 }).then(function () {
  console.log('then1')
})

setTimeout(function () {
  console.log('timeout2')
  new Promise(function (resolve) {
    console.log('timeout2_promise')
    resolve()
  }).then(function () {
    console.log('timeout2_then')
  })
}, 1000)


