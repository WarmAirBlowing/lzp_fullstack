// 在规定的事件内只触发一次

function throttle(fn,delay) {
    let prev = Date.now() // 上一次点击
    return function() {
        let now = Date.now() // 这一次点击
        if(now - prev >= delay) {
            fn.apply(context,arguments)
            prev = Date.now()
        }
    }
}