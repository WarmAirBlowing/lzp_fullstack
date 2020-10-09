// 拿到要操作的dom结构
// 在这个dom上滑动鼠标能控制滑块的位置
// 能控制这个dom的高度发生变化
// 根据该dom高度的值来调整视频播放的速度


let speed = document.querySelector('.speed');
let bar = document.querySelector('.speed-bar');
let video = document.querySelector('.flex');

speed.addEventListener('mousemove',function( e ){
    //控制滑块位置
    // console.log(e);
    let y = e.pageY - speed.offsetTop;   // pageY是获取当前鼠标所在位置的y坐标， offsetTop是获取某个dom结构到浏览器顶部的距离
    let percent = y / speed.offsetHeight;    // offsetHeight是获取某个dom结构自身的高度
    let min = 0.4;
    let max = 4;
    let height = Math.round(percent * 100) + '%';
    let playbackRate = percent * (max - min) + min;

    bar.style.height = height;
    video.playbackRate = playbackRate;
    bar.textContent = playbackRate.toFixed(2) + 'x';    //保留两位小数
});
