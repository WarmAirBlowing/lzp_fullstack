window.onload = function() {
    imgLocation('container','box');
}

// 获取到当前有多少张图片要摆放
function imgLocation(parent,content) {
    let cparent = document.getElementById(parent);
    let ccontent = getChildElement(cparent,content);
    let imgWidth = ccontent[0].offsetWidth; 
    // 获取一行能放多少张图片
    let num = Math.floor(document.documentElement.clientWidth / imgWidth); //document.documentElement.clientWidth 获取当前浏览器视口的宽度
    cparent.style.width = `${imgWidth * num}px`;

    // 拿到第二行的第一张图片，找到第一行高度最小的图片
    let boxHeightArr = [] 
    for(let i = 0; i<ccontent.length; i++) {
        if( i < num ) { //第一行的图片
            boxHeightArr[i] = ccontent[i].offsetHeight;
        }else{
            let minHeight = Math.min.apply(null,boxHeightArr); //将Math里面的min方法借给数组去用
            let minIndex = getMinHeightLocation(boxHeightArr,minHeight);
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
        console.log(boxHeightArr[i]);
    }
}

function getChildElement(parent,content) {
    let contentArr = [];
    let allContent = parent.getElementsByTagName('*');
    // console.log(allContent);
    for(let i = 0; i < allContent.length; i++) {
        if(allContent[i].className == content) {
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
    
}

function getMinHeightLocation(boxHeightArr,minHeight) {
    for( let i = 0; i < boxHeightArr.length; i++) {
        if(boxHeightArr[i] === minHeight){
            return i;
        }
    }
}