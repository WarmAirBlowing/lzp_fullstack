// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allMovies: [
      {
        title: "院线热映",
        url: "/v2/movie/in_theaters",
        movies: []
      },
      {
        title: "新片榜",
        url: "/v2/movie/new_movies",
        movies: []
      },
      {
        title: "口碑榜",
        url: "/v2/movie/weekly",
        movies: []
      },
      {
        title: "北美票房榜",
        url: "/v2/movie/us_box",
        movies: []
      },
      {
        title: "Top250",
        url: "/v2/movie/top250",
        movies: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity((city) => {
      this.loadData(1,{ city: city, apikey: '0df993c66c0c636e29ecbb5344252a4a'})
      this.loadData(2,{ apikey: '0df993c66c0c636e29ecbb5344252a4a'})
      this.loadData(3,{ apikey: '0df993c66c0c636e29ecbb5344252a4a'})
      this.loadData(4,{ apikey: '0df993c66c0c636e29ecbb5344252a4a'})
    })
  },

  loadData(idx,params) {
    let obj = this.data.allMovies[idx]
    let url = wx.db.url(obj.url)  // app.js里定义了这个全局方法
    wx.request({
      url: url,
      data: params,
      header: {'content-type': 'json'}, // 设置请求头
      success: (res) => {
        console.log(res);
        let movies = res.data.subjects
        obj.movies = []
        for(let i = 0; i < movies.length; i++) { // 打理一下每条数据
          let element = movies[i]
          let movie = element.subject || element
          // 格式化星星
          this.updateMovie(movie)
          obj.movies.push(movie)
        }
        this.setData(this.data) // ???
      }
    })
  },
   // 格式化星星的方法
  updateMovie(movie) {
    // 如果没有评分
    if(!movie.rating.stars) {
      return
    }
    movie.numberStars = parseInt(movie.rating.stars)
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
            // console.log(res);
            // 拿豆瓣的api地址做接口请求
            // 将获取到的城市名传给豆瓣api
            // 拿到当前城市热映电影数据
            let city = res.data.result.addressComponent.city
            succeed && succeed(city)
          },
          fail: (err) => {
            console.log(err);
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