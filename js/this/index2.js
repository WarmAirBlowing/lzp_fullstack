// var a = {
//     user: '蜗牛',
//     fn: function(q,w) {
//         console.log(this.user);
//         console.log(q + w);
//     }
// }
// var b = a.fn
// b.call(a,2,3)

// var a = {
//     user: '蜗牛',
//     fn: function(q,w) {
//         console.log(this.user);
//         console.log(q + w);
//     }
// }
// var b = a.fn
// b.apply(a,[12,34])

var a = {
    user: '蜗牛',
    fn: function(q,w) {
        console.log(this.user);
        console.log(q + w);
    }
}
var b = a.fn
var c = b.bind(a,2,8) // 就近原则
c(12,23)