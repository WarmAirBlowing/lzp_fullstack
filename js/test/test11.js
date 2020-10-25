const ages = [32,15,19,12,18,26,11]

// 是否有18+
const adultPresent = ages.some(age => age >= 18)
console.log(adultPresent); // true

// 是否所有人都18+
const allOldEnough = ages.every(age => age >= 18)
console.log(allOldEnough); // false

// 大于18的人
const oldEnough = ages.filter(age => age >= 18)
console.log(oldEnough); // [ 32, 19, 18, 26 ]

// 让每个年龄翻倍
const doubleAges = ages.map(age => age*2)
console.log(doubleAges); // [64, 30, 38, 24,36, 52, 22]

// 遍历所有年龄
ages.forEach(age => console.log(age)) 
// 32
// 15
// 19
// 12
// 18
// 26
// 11