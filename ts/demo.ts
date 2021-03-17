let isDone: boolean = false

let decLiteral: number = 8

let num: number = 8.99

let str: string = "bob";
str = 'Steven'

let sentence: string = `Hello, my name is ${str}`

// console.log(sentence);

// 数组
let arr: number[] = [1,2,3]
let list: Array<number> = [1,2,3]

// 元祖
// 元组表示的是一个已知元素 数量 和 类型 的 数组，各元素的类型不必相同。
let x: [string, number, string, boolean] = ['hello', 10, 'typescript', true];
// console.log(Object.prototype.toString.call(x));       // [object Array]

// 枚举
// enum 类型是对 Javascript 标准数据类型的一个补充。使用枚举类型可以为一组数值赋予友好的名字。
// enum Color {
//   Red,
//   Green,
//   Blue
// }
// let c: Color = Color.Red
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
// console.log(c); // 2
// console.log(Color[2]); // Green

// any
// 有时候，我们不希望类型检查器对某些值进行检查而是直接让它们通过编译阶段的检查，这个时候可以使用 any 类型来标记这些变量。这些变量有可能来自用户输入或第三方代码库。
let notSure: any = 4;
// notSure.ifItExists();   // okay, ifItExists might exist at runtime
// notSure.toFixed();     // okay, toFixed exists (but the compiler doesn't check)

// void
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void {
  console.log('hhh');
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = null
let u: undefined = undefined;
let n: null = null;


function move(distanceMeters: number = 0){
  console.log(`Animnal moved ${distanceMeters}m.`)
}
move()




