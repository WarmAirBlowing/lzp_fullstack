// 在一定时间内，如果持续请求，就一直不执行，在规定的时间内没有第二次操作，才执行
function debounce(fn, delay) {
    let timer = null;

    return function () {
        let context = this
        let arg = arguments;
        clearTimeout(timer);
        // timer = setTimeout(() => {
        //     fn(arg)
        // }, delay);
        timer = setTimeout(function (){
            fn.apply(context,arg) // 不用箭头函数的话this作用域会被更改，所以要绑定this作用域
        }, delay);
    }
}