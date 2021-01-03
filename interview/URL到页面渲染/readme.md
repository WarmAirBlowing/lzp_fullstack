# 浏览器接收到 html 文件
1. 词法分析 =》 标记 =》node节点 =》 Dom树

# 浏览器接收到 css 文件
步骤同上 =》 CSSOM 树
递归CSSOM树确定具体的元素到底是什么样式

# 渲染树
Dom树 + CSSOM树 = render树

渲染树只包含需要显示的节点

# 回流
根据render树绘制页面布局

# 为什么操作DOM 性能很差
1. 本身浏览器存在渲染引擎和JS执行引擎
当操作DOM时渲染引擎和JS执行引擎会共同工作，也就是多线程并发工作，这就造成了性能的开销过大
2. 操作DOM结构还会带来重绘和回流的情况

# 什么情况下会阻塞渲染
htm, css
<script src=""></script>

# 重绘和回流
回流：节点的几何信息发生变化
重绘：节点更改不影响布局的信息
回流一定会重绘，重绘不一定会回流

会导致性能问题的操作：
1. 改变window大小
2. 改变字体大小
3. display: none

# 减少重绘和回流
1. 用 visibility 代替 display: none
2. 不要把节点的属性值放在一个循环里面当成循环的变量
for (let i = 0; i < 1000; i++) {
  console.log(document.querySelector('.test').style.offsetTop)
}
3. 尽量不要用table布局