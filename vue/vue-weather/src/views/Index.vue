<template>
  <div class="container">
    <div class="nav">
      <div class="time">{{ localTime }}</div>
      <div class="city">切换城市</div>
    </div>
    <div class="city-info">
      <p class="city">{{ localCity }}</p>
      <p class="weather">{{ mapData.weather }}</p>
      <h2 class="temperature">
        <em>{{ mapData.temperature }}</em
        >℃
      </h2>
      <div class="detail">
        <span>风力：{{ mapData.windPower }}</span> |
        <span>风向：{{ mapData.windDirection }}</span> |
        <span>空气湿度：{{ mapData.humidity }}%</span>
      </div>
    </div>
    <div class="future" v-if="futureMapData.length > 0">
      <div class="group">
        明天：
        <span class="tm">白天：{{ futureMapData[0].dayTemp }}
          {{ futureMapData[0].dayWeather }} {{ futureMapData[0].dayWindDir }}
          {{ futureMapData[0].dayWindPower }}</span>
        <span class="tm">
          夜间：{{ futureMapData[0].nightTemp }}
          {{ futureMapData[0].nightWeather }}
          {{ futureMapData[0].nightWindDir }}
          {{ futureMapData[0].nightWindPower }}
        </span>
      </div>
      <div class="group">
        后天：
        <span class="tm">白天：{{ futureMapData[1].dayTemp }}
          {{ futureMapData[1].dayWeather }} {{ futureMapData[1].dayWindDir }}
          {{ futureMapData[1].dayWindPower }}
        </span>
        <span class="tm">
          夜间：{{ futureMapData[1].nightTemp }}
          {{ futureMapData[1].nightWeather }}
          {{ futureMapData[1].nightWindDir }}
          {{ futureMapData[1].nightWindPower }}
        </span>
      </div>
    </div>
    <div class="echart-container" ref="echartContainer"></div>
    <div class="map-container" ref="mapContainer"></div>
  </div>
</template>
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=de1948bd2348af7b13ebdae361463d05"></script>

<script>
export default {
  data() {
    return {
      localTime: "",
      localCity: "",
      mapData: {},
      futureMapData: {},
      seriesData: [],
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },
  mounted() {
    this.initMap().then((resCity) => {
      this.getCurrentCityData(resCity);
    });
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      // 获取当前城市
      return new Promise((resolve, reject) => {
        const self = this;
        // vue 中获取dom结构的操作 this.$refs.xxx
        const map = new AMap.Map(self.$refs.mapContainer, {
          resizeEnable: true,
        });
        AMap.plugin("AMap.CitySearch", function () {
          const citySearch = new AMap.CitySearch();
          citySearch.getLocalCity((status, result) => {
            if (status === "complete" && result.info === "OK") {
              // console.log(status, result)
              self.localCity = result.city;
              resolve(self.localCity);
            }
          });
        });
      });
    },
    getCurrentCityData(city) {
      // 查询天气
      const self = this;
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function () {
        //创建天气查询实例
        const weather = new AMap.Weather();
        //执行实时天气信息查询
        weather.getLive(city, function (err, data) {
          // console.log(err, data)
          self.mapData = data;
        });
        //执行实时天气信息查询
        weather.getForecast(city, function (err, data) {
          console.log(err, data);
          self.futureMapData = data.forecasts;
          self.futureMapData.map((item) => {
            self.seriesData.push(item.dayTemp);
          });
          self.initEchart();
        });
      });
    },
    initEchart() {
      let dom = this.$refs.echartContainer;
      let myChart = echarts.init(dom);
      let app = {},
        option = null;
      option = {
        xAxis: {
          type: "category",
          data: ["今天", "明天", "后天", "三天后"],
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          show: false,
          type: "value",
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal += params[i].value + "°C";
            }
            return relVal;
          },
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less">
.container {
  min-height: 100vh;
  background-color: #000;
  opacity: 0.7;
  color: #fff;
  .nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .city-info {
    text-align: center;
    .temperature {
      font-size: 26px;
      em {
        font-size: 34px;
        font-style: normal;
      }
    }
  }
  .map-container {
    width: 100%;
    height: 300px;
  }
  .future {
    margin-top: 30px;
    padding: 0 10px;
    .group {
      height: 44px;
      line-height: 44px;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.3);
      color: rgba(16, 16, 16, 1);
      font-size: 16px;
      margin-bottom: 10px;
      padding: 0 10px;
      .tm {
        color: #fff;
      }
    }
  }
  .echart-container {
    width: 100%;
    height: 50vh;
  }
}
</style>
