# 事件机制
事件触发有三个阶段：
1. window往事件触发处传播 --- 捕获
2. 触发注册的事件
3. 从触发处往window传播

# 阻止事件传播的方法
event.stopPropagation() // 阻止事件进一步传播
event.stopImmediatePropagation() // 阻止事件进一步传播同时可以阻止同类型事件执行