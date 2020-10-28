// component/ratingStar/ratingStar.js
// 这份JS里的全局变量
const  STAR_ON = "/assets/img/rating_star_small_on.png";
const  STAR_OFF = "/assets/img/rating_star_small_off.png";
const  STAR_HALF = "/assets/img/rating_star_small_half.png";
Component({
  /**
   * 组件的属性列表
   */
  // 接收父组件的数据
  properties: {
    score: {
      type: Number,
      observer: function(newVal,oldVal,path) {  // 观察者，监听
        let stars = [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF]
        if(newVal > 0) {
          newVal = newVal / 10
          let floor = Math.floor(newVal)
          if(floor != newVal) { // 说明有小数了
            stars[floor] = STAR_HALF // 把那个位置的图片设置为半颗星星
          }
          for(let i = 0; i < floor; i++) {
            stars[i] = STAR_ON
          }
        }
        this.setData({
          stars // 名字一样可以省略
        })
      }
    },
    iconSize: {
      type: String,
      value: '26rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    stars: [STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF,STAR_OFF]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
