class Queue {
    constructor() {
        this.queue = []
    }
    push(item) {
        this.queue.push(item)
    }
    shift() {
        return this.queue.shift()
    }
    // 返回队列头
    peek() {
        return this.length ? this.queue[0] : null
    }


}
let q = new Queue()
console.log(q.peek()); 
