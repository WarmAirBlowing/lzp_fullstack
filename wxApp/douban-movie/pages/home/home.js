// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity()
  },

  getCity(succeed) {
    // 先拿到城市名称
    // 先拿到当前所在地的经纬度
    wx.getLocation({
      success: (res) => {
        // console.log(res);
        // 将经纬度转换成具体的城市
        wx.request({ // 发起接口请求
          url: 'https://api.map.baidu.com/reverse_geocoding/v3?qq-pf-to=pcqq.group',
          data: {
            ak: 'HqDCUGV5pX9pE4FR2bHWc9iocjUIKve8',
            output: 'json',
            coordtype: 'wgs84',
            location: `${res.latitude},${res.longitude}`
          },
          success: (res) => {
            console.log(res);
            // 拿豆瓣的api地址做接口请求
            // 将获取到的城市名传给豆瓣api
            // 拿到当前城市热映电影数据
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})