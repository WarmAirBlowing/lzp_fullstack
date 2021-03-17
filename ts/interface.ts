// 接口
// 使用 interface 来定义一个接口类型。TypeScript 中的接口可以理解成描述了一种数据类型。比如我们的方法要接收一个参数，这个参数必须有哪些属性或者方法，这个时候就可以使用接口定义好参数的类型。
interface params {
  search: string
  page?: number // ?是可选参数的意思
  size?: number
}
function foo(p: params): string {
  return p.search + '~'
}
// console.log(foo({search: '中国'})); // 中国~

interface Point {
  readonly x: number // 只读属性
  readonly y: number
}
let point: Point = {x: 10, y: 100}
// point.x = 100 // 报错

// 接口允许加入任意值增加了接口的灵活性。
interface params{
  search: string;
  page?: number;   //?是可选参数的意思
  size?: number;
  [propname: string]: any;   //任意多个任意值
}

function foo2(p: params): string{
  return p.search +"~";
}
console.log(foo2({search: "中国", test: '11', ee: true, jj: 444, kkk: "eee"}));

// 类可以实现某个接口：
interface ShapeConfig{
  type: string;
  color?: string;
  width?: number;
  draw(p: string): string;
}

class Circle implements ShapeConfig {
  type = 'circle';
  draw(){  //没有参数不会检查，如果类型不对或者个数不对会显示错误
      return this.type;
  }
}
let cricle = new Circle();

//接口也可以继承某一个接口：
interface ShapeConfig{
  type: string;
  color?: string;
  width?: number;
  draw(p: string): string;
}

interface Square extends ShapeConfig{
  height: string;
}