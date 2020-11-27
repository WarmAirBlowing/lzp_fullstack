<template>
  <div class="user-info">
      <ul>
          <li v-for="(item,index) in news" :key="index">{{item.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 2,
            price: 100,
            news: [
                    { title: '"空降"不到一周 韩俊任吉林代省长 曾是刘鹤"副手"' },
                    { title: '上门女婿成村霸，敲诈勒索故意纵火还打伤司法人员' },
                    { title: 'X光显示肚子内有异物 港媒:黄之锋被关医院单人囚室' },
                    { title: '特朗普突然出手，举行了史上最短一次记者会！' }
                ],
        }
    },
    computed: {
        value() {
            return this.num ** 4
        }
    },
    created () {
        
    }
}
</script>

<style>

</style>