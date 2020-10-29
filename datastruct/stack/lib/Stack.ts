export default class Stack {  // 向外输出
    // 声明属性 类似于 java c# 
    // items 按一定的方法去操作
    private items: any[]; // 存储结构
    constructor() {
        // 初始化
        this.items = []
    }
    push(item:any) {
        this.items.push(item)
    }
    pop() {
        return this.items.pop()
    }
    // 返回栈顶元素
    peek() {
        return this.items[this.items.length-1]
    }
    isEmpty() {
        return this.items.length == 0
    }
    clear() {
        this.items = []
    }
    size():number {
        return this.items.length
    }
    toString() {
        return this.items.toString()
    }
}  