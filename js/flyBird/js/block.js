// 面向函数编程
function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randomNum(0 , 150)
    this.gapHeight = baseObj.randomNum(100 , 160)
    this.upHeight = 312 - this.downHeight - this.gapHeight

    // 生成管道
    this.createDiv = function(url,height,positionType,left,top) {
        let newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return newDiv
    }

    this.createBlock = function() {
        let upDiv1 = this.createDiv('url(img/up_mod.png',this.upHeight + 'px') //一个管道由两张图片拼接在一起
        let upDiv2 = this.createDiv('url(img/up_pipe.png)','60px')  //第二节管道固定不变
        this.upDivWrap = this.createDiv(null,null,'absolute','450px')
        this.upDivWrap.appendChild(upDiv1)
        this.upDivWrap.appendChild(upDiv2)

        let downDiv1 = this.createDiv('url(img/down_pipe.png)', '60px') //一个管道由两张图片拼接在一起
        let downDiv2 = this.createDiv('url(img/down_mod.png)',this.downHeight + 'px')  //第二节管道固定不变
        this.downDivWrap = this.createDiv(null,null,'absolute','450px',363 - this.downHeight + 'px')
        this.downDivWrap.appendChild(downDiv1)
        this.downDivWrap.appendChild(downDiv2)
        
        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap)
    }

    this.moveBlock = function() {
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
    }
}