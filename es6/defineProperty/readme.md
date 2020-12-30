Object.defineProperty(obj, prop, descriptor)

obj: 要被监听的哪个对象
prop: 要定义或修改的属性名称
descriptor: 将被定义或修改的属性的描述符

只能出现数据描述符 或者 存取描述符，不能同时出现两者

- 被Object.defineProperty创建出来的属性，只能通过 get,set来操作