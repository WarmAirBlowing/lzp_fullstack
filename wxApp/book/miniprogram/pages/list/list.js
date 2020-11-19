// miniprogram/pages/list/list.js
const db = wx.cloud.database();
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookItem: {}
  },
  getBook() {
    wx.showLoading({
      title: '正在加载',
    })
    db.collection('book').where({
      _openid: app.globalData.openid
    }).get().then(res => {
      // console.log(res);
      wx.hideLoading()
      let data = res.data
      this.setData({
        bookItem: data
      })
    })
  },
  navTo(e) {
    // console.log(e);
    let url = e.currentTarget.dataset.url
    let name = e.currentTarget.dataset.bookName
    let imgUrl = e.currentTarget.dataset.imgurl
    wx.navigateTo({
      url: `../bookContent/bookContent?url=${url}&name=${name}&imgUrl=${imgUrl}`,
    })
  },
  delete(e) {
    // console.log(e);
    let name = e.currentTarget.dataset.bookName
    db.collection('book').where({
      _openid: app.globalData.openid,
      bookName: name
    }).get().then(res => {
      console.log(res);
      let data = res.data
      const id = data[0]._id
      db.collection('book').doc(id).remove({
        success: function(res) {
          wx.showToast({
            title: '删除成功',
          })
          this.getBook()
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    this.getBook()
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