function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(console.log('aaa'));
      console.log('aaa');
      resolve('ok')
    }, 1000);
  })
}
function b() {
  setTimeout(() => {
    console.log('bbb');
  });
}
a().then(b)
