块级
- 独占一行
- 能设置宽高
(BFC): 块级格式上下文

行内
- 水平方向都在一行显示
- 垂直方向：以当前行的 base-line 对齐
- 非置换元素不能设置宽高
- 行内置换元素是能设置宽高的

img -> 行内 -> 设置宽高

置换元素
- img
- input
- canvas
- iframe
- script