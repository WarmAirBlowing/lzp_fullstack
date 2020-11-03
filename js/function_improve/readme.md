# JS 函数进阶

## 1、函数的定义

1. 自定义函数（命名函数）

```js
function fn() {};
```

2. 函数表达式（匿名函数）

```js
var fun = function() {};
```

3. 利用 new Function('参数1'，'参数2'，函数体)；

```js
var f = new Function('a', 'b', 'console.log(a + b)');
f(1, 2);
```

4. 所有函数都是 Function 的实例(对象)

```js
console.dir(f); // ƒ anonymous(a,b )
```

5. 函数也属于对象

```js
console.log(f instanceof Object); // true
```

## 2、函数的调用方式

1. 普通函数

```js
function fn() {
    console.log('人生的巅峰');
}
fn();   // fn.call()
```

2. 对象的方法

```js
var o = {
    sayHi: function() {
       console.log('人生的巅峰');
	}
}
o.sayHi();
```

3. 构造函数

```js
function Star() {};
ew Star();
```

4. 绑定事件函数

```js
btn.onclick = function() {};   // 点击了按钮就可以调用这个函数
```

5. 定时器函数

```js
setInterval(function() {}, 1000);  // 这个函数是定时器自动1秒钟调用一次
```

6. 立即执行函数

```js
(function() {
    console.log('人生的巅峰');
})();
// 立即执行函数是自动调用
```

## 3、改变函数this指向的方法

### 函数内this的指向

这些 this 的指向，是当我们调用函数的时候确定的。 调用方式的不同决定了this 的指向不同
一般指向我们的调用者.

![](E:\Notes\笔记中的图片\函数内this的指向.png)

JavaScript 为我们专门提供了一些函数方法来帮我们更优雅的处理函数内部 this 的指向问题，常用的有 bind()、call()、apply() 三种方法。

### 3.1、call

call() 方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

```js
fun.call(thisArg, arg1, arg2, ...)
```

- thisArg：在 fun 函数运行时指定的 this 值

- arg1，arg2：传递的其他参数
-  返回值就是函数的返回值，因为它就是调用函数
-  因此当我们想改变 this 指向，同时想调用这个函数的时候，可以使用 call，比如继承

例子：

```js
<script>
        // 1. call()
        var o = {
            name: 'andy'
        }

        function fn(a, b) {
            console.log(this); // 此时指向对象 o
            console.log(a + b); // 3

        };
        fn.call(o, 1, 2);
        // call 第一个可以调用函数 第二个可以改变函数内的this 指向
        // call 的主要作用可以实现继承
        function Father(uname, age, sex) {
            this.uname = uname;
            this.age = age;
            this.sex = sex;
        }

        function Son(uname, age, sex) {
            Father.call(this, uname, age, sex);
        }
        var son = new Son('刘德华', 18, '男');
        console.log(son);
</script>
```



### 3.2、apply

apply() 方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的 this 指向。

```js
fun.apply(thisArg, [argsArray])
```

- thisArg：在fun函数运行时指定的 this 值
-  argsArray：传递的值，必须包含在数组里面
-  返回值就是函数的返回值，因为它就是调用函数
-  因此 apply 主要跟数组有关系，比如使用 Math.max() 求数组的最大值

例子：

```js
<script>
        // 2. apply()  应用 运用的意思
        var o = {
            name: 'andy'
        };

        function fn(arr) {
            console.log(this); // 此时指向对象 o
            console.log(arr); // 'pink'

        };
        fn.apply(o, ['pink']);
        // 1. 也是调用函数 第二个可以改变函数内部的this指向
        // 2. 但是他的参数必须是数组(伪数组)
        // 3. apply 的主要应用 比如说我们可以利用 apply 借助于数学内置对象求数组最大值 
        // Math.max();
        var arr = [1, 66, 3, 99, 4];
        var arr1 = ['red', 'pink'];
        // var max = Math.max.apply(null, arr);
        var max = Math.max.apply(Math, arr);
        var min = Math.min.apply(Math, arr);
        console.log(max, min); // 99 1
</script>
```



### 3.3、bind

bind() 方法**不会**调用函数。但是能改变函数内部this 指向

```
fun.bind(thisArg, arg1, arg2, ...)
```

- thisArg：在 fun 函数运行时指定的 this 值
-  arg1，arg2：传递的其他参数
- 返回由指定的 this 值和初始化参数改造的原函数拷贝
-  因此当我们只是想改变 this 指向，并且不想调用这个函数的时候，可以使用 bind



### 3.4、call  apply  bind总结

- 相同点:  
  都可以改变函数内部的this指向.

- 区别点:  
  1. call 和 apply  会调用函数, 并且改变函数内部this指向.
  2. call 和 apply 传递的参数不一样, call 传递参数 aru1, aru2..形式  apply 必须数组形式[arg]
  3. bind  不会调用函数, 可以改变函数内部this指向.
- 主要应用场景:  
  1. call 经常做继承. 
  2. apply 经常跟数组有关系.  比如借助于数学对象实现数组最大值最小值
  3. bind  不调用函数,但是还想改变this指向. 比如改变定时器内部的this指向. 



## 4、严格模式

### 4.1、什么是严格模式

JavaScript 除了提供正常模式外，还提供了严格模式（strict mode）。ES5 的严格模式是采用具有限制性 JavaScript 变体的一种方式，即在严格的条件下运行 JS 代码。
严格模式在 IE10 以上版本的浏览器中才会被支持，旧版本浏览器中会被忽略。
严格模式对正常的 JavaScript 语义做了一些更改： 

1. 消除了 Javascript 语法的一些不合理、不严谨之处，减少了一些怪异行为。
2. 消除代码运行的一些不安全之处，保证代码运行的安全。
3. 提高编译器效率，增加运行速度。
4. 禁用了在 ECMAScript 的未来版本中可能会定义的一些语法，为未来新版本的 Javascript 做好铺垫。比如一些保留字如：class, enum, export, extends, import, super 不能做变量名

### 4.2、开启严格模式

为整个脚本文件开启严格模式，需要在所有语句之前放一个特定语句“use strict”;（或‘use strict’;）

```js
<script>
　　"use strict";
　　console.log("这是严格模式。");
</script>
```

有的 script 基本是严格模式，有的 script 脚本是正常模式，这样不利于文件合并，所以可以将整个脚本文件放在一个立即执行的匿名函数之中。这样独立创建一个作用域而不影响其他 script 脚本文件。

```js
<script>
        (function() {
            'use strict';
    		 var num = 10;
　　　　      function fn() {}
        })();
</script>
```

要给某个函数开启严格模式，需要把“use strict”;  (或 'use strict'; ) 声明放在函数体所有语句之前。

```js
<script>
        // 此时只是给fn函数开启严格模式
        function fn() {
            'use strict';
            // 下面的代码按照严格模式执行
        }

        function fun() {
            // 里面的还是按照普通模式执行
        }
</script>
```

### 4.3、严格模式的变化

#### 1、变量规定

- 在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，变量都必须先用var 命令声明，然后再使用。
- 严禁删除已经声明变量。例如，delete x; 语法是错误的。

#### 2、严格模式下 this 指向问题

- 以前在全局作用域函数中的 this 指向 window 对象。
- **严格模式下全局作用域中函数中的 this 是 undefined。**
- 以前构造函数时不加 new也可以 调用,当普通函数，this 指向全局对象
- 严格模式下,如果 构造函数不加new调用, this 指向的是undefined 如果给他赋值则 会报错
- new 实例化的构造函数指向创建的对象实例。
- 定时器 this 还是指向 window 。
- 事件、对象还是指向调用者。

#### 3、函数变化

- 函数不能有重名的参数。
- 函数必须声明在顶层.新版本的 JavaScript 会引入“块级作用域”（ ES6 中已引入）。为了与新版本接轨，不允许在非函数的代码块内声明函数。 

## 5、高阶函数

高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。

```js
<script>
function fn(callback){
  callback&&callback();
}
fn(function(){alert('hi')}
</script>
```

此时fn 就是一个高阶函数
函数也是一种数据类型，同样可以作为参数，传递给另外一个参数使用。 最典型的就是作为回调函数。同理函数也可以作为返回值传递回来

```js
<script>
function fn(){
    return function() {}
}
 fn();
</script>
```


**回调函数经常使用，非常重要！！！**

## 6、闭包

### 6.1、什么是闭包

闭包（closure）指有权访问另一个函数作用域中变量的函数。

简单理解就是 ，一个作用域可以访问另外一个函数内部的局部变量。

```js
<script>
 function fn1(){    // fn1 就是闭包函数
　　　　var num = 10;
　　　　function fn2(){
　　　　　　console.log(num); // 10
　　　　}
       fn2()
　}
  fn1();
</script>
```

在 chrome 中调试闭包

1. 打开浏览器，按 F12 键启动 chrome 调试工具。
2. 设置断点。
3. 找到 Scope 选项（Scope 作用域的意思）。
4. 当我们重新刷新页面，会进入断点调试，Scope 里面会有两个参数（global 全局作用域、local 局部作用域）。

5. 当执行到 fn2() 时，Scope 里面会多一个 Closure 参数 ，这就表明产生了闭包。

### 6.2、闭包的作用

延伸变量的作用范围。

### 6.3、闭包的应用



## 7、递归

### 7.1、什么是递归

如果一个函数在内部可以调用其本身，那么这个函数就是递归函数。

简单理解:函数内部自己调用自己, 这个函数就是递归函数

递归函数的作用和循环效果一样

由于递归很容易发生“栈溢出”错误（stack overflow），所以必须要加退出条件 return。

### 7.2、几个小应用

#### 1.求 1 * 2 * 3 ... * n 的阶乘

```js
<script>
        // 普通循环求阶乘
        function foo(n) {
            let s = 1
            for(let i = 0; i < n; i++) {
                s  = s * (i + 1)
            }
            return s;
        }
        console.log(foo(5)); // 120
        // 利用递归函数求1~n的阶乘 1 * 2 * 3 * 4 * ..n
        function fn(n) {
            if (n == 1) {
                return 1;
            }
            return n * fn(n - 1);
        }
        console.log(fn(3)); // 6
        console.log(fn(4)); // 24
        // 详细思路 假如用户输入的是3
        //return  3 * fn(2)
        //return  3 * (2 * fn(1))
        //return  3 * (2 * 1)
        //return  3 * (2)
        //return  6
    </script>
```

#### 2.求斐波那契数列

```js
<script>
        // 利用递归函数求斐波那契数列(兔子序列)  1、1、2、3、5、8、13、21...
        // 用户输入一个数字 n 就可以求出 这个数字对应的兔子序列值
        // 我们只需要知道用户输入的n 的前面两项(n-1 n-2)就可以计算出n 对应的序列值
        function fb(n) {
            if (n === 1 || n === 2) {
                return 1;
            }
            return fb(n - 1) + fb(n - 2);
        }
        console.log(fb(3));
        console.log(fb(6));
    </script>
```

#### 3、遍历数据

```js
 <script>
        var data = [
            {
                id: 1,
                name: '家电',
                goods: [{
                    id: 11,
                    gname: '冰箱',
                    goods: [{
                        id: 111,
                        gname: '海尔'
                    }, {
                        id: 112,
                        gname: '美的'
                    },]
                }, {
                    id: 12,
                    gname: '洗衣机'
                }]
            }, 
            {
                id: 2,
                name: '服饰'
            }];
        // 我们想要做输入id号,就可以返回的数据对象
        // 1. 利用 forEach 去遍历里面的每一个对象
        function getID(json, id) {
            var o = {};
            json.forEach(function (item) {
                // console.log(item); // 2个数组元素
                if (item.id == id) {
                    // console.log(item);
                    o = item;
                    // 2. 我们想要得里层的数据 11 12 可以利用递归函数
                    // 里面应该有goods这个数组并且数组的长度不为 0 
                } else if (item.goods && item.goods.length > 0) {
                    o = getID(item.goods, id);
                }

            });
            return o;
        }
        console.log(getID(data, 1));
        console.log(getID(data, 2));
        console.log(getID(data, 11));
        console.log(getID(data, 12));
        console.log(getID(data, 111));
```



