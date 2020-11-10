# 原始类型有几种？
boolean null undefined number string symbol

# null 是对象吗？
是
000 代表的是对象，null 的二进制都是0

# 原始类型和对象类型有什么差别？
原始类型存的是值
对象类型存的是地址（指针）

# typeof能正确潘判断的类型是？
typeof 只能判断原始类型（null除外）
instanceof 只能判断引用类型

# 让 instanceof 也能判断原始类型
instanceof.js

# instanceof 原理 
instanceof.js

# 类型转换
转为布尔值
转为数字
转为字符串

# 对象转原始值
对象在转类型的时候会调用内置的[[ToPrimitive]]
 - 如果已经是原始类型，那就不用转换了
 - 调用 x.valueOf()，如果转为了基础类型，就返回值
 - 调用 x.toString()，如果转为了基础类型，就返回值
 - 如果还没有转为原始类型，就报错

 # 四则运算
    加法：运算中其中有一方为字符串，另一方为一定会转换成字符串
          如果一方不是数字或字符串，那就会把它转换成数字或字符串进行运算
    除加法外的运算，只要其中一方是数字，另一方一定会转为数字来运算