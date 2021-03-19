// 泛型
// 有的时候我们为了保持类型的一致性，这个时候就需要使用泛型了。泛型保证了类型的非确定性和一致性

// 在函数中的使用，我们为了保证函数返回值类型和输入变量类型一致，我们可以使用泛型。
function identify<T>(arg: T): T {
  return arg
}
identify<number>(12)

// 可以加以利用在函数中使用泛型数组
function myFun<T>(params: T[]): number{
  return params.length;
}
// myFun<number>([12, '222']); //报错
// myFun([12, '222']);  //不报错

function myFun2<T>(params: Array<T>): number {
  return params.length;
}
// myFun2<number>([12, '222']);   //报错
// myFun2([12, '222']);   //不报错

// 多个泛型的定义 函数中其实，我们可以定义多个类型
function join<T, P, H>(first: T, second: P, third: H): H{
  return third
}
// console.log(join<string, number, boolean>("hello", 12, true)); // true

//泛型接口, 接口中为了保证类型的一致性，我们也可以使用泛型
//方法一：声明接口为泛型类型的
// interface GenericIdentityFn<T>{
//   (arg: T): T;
// }

// function indentify<T>(params: T): T {
//   return params;
// }
//使用的时候必须加上 <number> 限定具体类型
// let test: GenericIdentityFn<number> = indentify;

//方法二：将泛型函数作为接口里面的一个匿名函数
interface GenericIdentityFn{
  <T>(arg: T): T;
}

function indentify<T>(params: T): T {
  return params;
}

let test: GenericIdentityFn = indentify;


// 泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
class Select<T>{
  constructor(p rivate arr: T[]){}
  getItem(index: number): T{
      return this.arr[index];
  }
}

let s = new Select(['hello', 'world']);
console.log(s.getItem(0));
