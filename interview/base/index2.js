// 1 == '1' // true
// 1. 两者类型是否相同，相同的话就比大小
// 2. 类型不同，那么就进行类型转换
// 3. 会先判断是否在对比null和undefined,是的话就返回true
// 4. 判断两者是否是string和number，是的话就将string转为number
// 5. 判断其中一方是否为boolean,是的话就把boolean转为number
// 6. 判断其中一方是否为object,且另一方为string,number,Symbol,是的话就把object转为原始类型再进行判断


console.log('1' == true); //true
console.log('1' == 1); // true

console.log('1' == {name: 'ok'}); // false

console.log([] == []); // false 两个引用类型是判断指针是否相同
console.log([] == ![]); // true
// 转换过程如下：
// [] == ![]
// [] == !true
// [] == false
// [] == 0
// '' == 0
// 0 == 0
