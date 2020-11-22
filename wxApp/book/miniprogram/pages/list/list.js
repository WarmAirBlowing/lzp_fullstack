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
      let data = res.data || []
      this.setData({
        bookItem: data
      })
    }).catch(err => {
      wx.hideLoading()
      wx.showToast({
        icon: 'none',
        title: '网络异常，稍后重试'
      }, 3000)
    })
  },
  navTo(e) {
    // console.log(e);
    let url = e.currentTarget.dataset.url || ''
    let name = e.currentTarget.dataset.bookName || ''
    let imgUrl = e.currentTarget.dataset.imgurl || ''
    if (url) {
      wx.navigateTo({
        url: `../bookContent/bookContent?url=${url}&name=${name}&imgUrl=${imgUrl}`,
      })
    } else {
      wx.showToast({
        title: '数据不存在',
      }, 3000)
    }

  },
  delete(e) {
    let that = this;
    let name = e.currentTarget.dataset.name || '';
    wx.showModal({
      title: '提示',
      content: `确定要删除${name}吗？`,
      success: function (res) {
        if (res.confirm) {
          console.log('点击确定了');
          db.collection('book').where({
            _openid: app.globalData.openid,
            bookName: name
          }).get().then(res => {
            // console.log(res)
            const data = res.data || [];
            if (data.length > 0) {
              db.collection('book').doc(data[0]._id).remove().then(res => {
                console.log(res);
                if (res.stats.removed > 0) {
                  wx.showToast({
                    icon: 'success',
                    title: '删除成功',
                    success: (res) => {
                      console.log(res);
                      that.getBook();
                    }
                  }, 3000);
                }
              }).catch(err => {
                wx.showToast({
                  icon: 'none',
                  title: '删除失败',
                  success: function (res) {
                  }
                }, 3000)
              })
            }
          }).catch(err => {
          })
        } else if (res.cancel) {
          console.log('点击取消了');
          return false;
        }
      }
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