<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{localTime}}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{localCity}}</p>
      <p class="weather">{{localWeather}}</p>
      <h2 class="temperature"><em>{{localTemperature}}</em>℃</h2>
      <div class="detail">
        <span>风力：{{localWindPower}}</span> | <span>风向：{{localWindDirection}}</span> | <span>空气湿度：{{localHumidity}}%</span>
      </div>
    </div>
    <div id="map"></div>
  </div>
</template>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=de1948bd2348af7b13ebdae361463d05"></script>

<script>
export default {
  data () {
    return {
      localTime: '',
      localCity: '',
      localWeather: '111',
      localTemperature: '',
      localWindDirection: '',
      localWindPower: '',
      localHumidity: ''
    }
  },
  created () {
    setInterval(() => {
      this.localTime = this.getLocalTime()
    }, 1000)
    this.initMap().then((resCity) => {
      this.getCurrentCityData(resCity)
    })
  },
  methods: {
    getLocalTime () {
      return new Date().toLocaleTimeString()
    },
    initMap () { // 获取当前城市
      return new Promise((resolve, reject) => {
        const self = this
        const map = new AMap.Map('map')
        map.plugin('AMap.CitySearch', function () {
        const citySearch = new AMap.CitySearch()
          citySearch.getLocalCity((status, result) => {
            // console.log(status, result)
            self.localCity = result.city
            resolve(self.localCity)
          })
        })
      })
    },
    getCurrentCityData (city) { // 查询天气
      const self = this
      //加载天气查询插件
      AMap.plugin('AMap.Weather', function() {
        //创建天气查询实例
        const weather = new AMap.Weather()
        //执行实时天气信息查询
        weather.getLive(city, function(err, data) {
          // console.log(err, data)
          self.localWeather = data.weather
          self.localTemperature = data.temperature
          self.localWindDirection = data.windDirection
          self.localWindPower = data.windPower
          self.localHumidity = data.humidity
        })
      })
    }
  }
}
</script>

<style lang="less">
.container{
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
}
.city-info{
  .temperature{
    font-size: 26px;
    em{
      font-size: 34px;
      font-style: normal;
    }
  }
}
#map {
  width: 300px;
  height: 180px;
}
</style>
