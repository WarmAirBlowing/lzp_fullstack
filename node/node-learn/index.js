// console.log('hello world');

// console.log(new Date());

// console.log(Math);

// console.log(requestAnimationFrame); // 浏览器运行的下一帧，因为不在浏览器环境，所以没用

// console.log(setImmediate); // node 新增的定时器

// console.log(__filename); // 当前所运行的脚本所在的位置

// console.log(__dirname); // 当前所运行的脚本所在的目录位置

// 进程对象
// console.log(process);

// const x = 1
// const y = 2
// const z = 3
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'x 的值为 ' + x + ' 且已经检查了几次？'
// )
// console.count(
//   'y 的值为 ' + y + ' 且已经检查了几次？'
// )

const oranges = ['橙子', '橙子']
const apples = ['苹果']
oranges.forEach(fruit => {
  console.count(fruit)
})
apples.forEach(fruit => {
  console.count(fruit)
})
