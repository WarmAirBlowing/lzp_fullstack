const people = [
    {
        name: 'Steven',
        age: 20
    },
    {
        name: 'Alice',
        age: 18
    }
]
let item1 = people.find( (element,index,array) => element.age >=18 )
console.log(item1); // { name: 'Steven', age: 20 },返回第一个符合条件的元素
let index1 = people.findIndex( (element,index,array) => element.age >=  18 )
console.log(index1); // 0 ,返回第一个符合条件的元素的索引

let item2 = people.find( (element,index,array) => element.name === 'Tom' )
console.log(item2); // undefined,没有符合条件的元素返回 undefined
let index2 = people.findIndex( (element,index,array) => element.name === 'Tom' )
console.log(index2); // -1,没有符合条件的元素返回 -1
