<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-wrapper">
        <router-link to="/">商品</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/comment">评论</router-link>
      </div>
      <div class="tab-wrapper">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 通过路由传参，只要配了路由的页面都能够接收到 -->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import { getSeller } from '@/api/index'
import qs from 'query-string'
export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  components: {
    Header
  },
  created() {
    getSeller().then((seller) => {
      console.log(seller);
      this.seller = Object.assign({}, this.seller, seller) // 合并对象
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './common/stylus/variable.styl';
.tab
  width: 100%;
  display: flex;
  height: 36px;
  line-height: 36px;
  &-wrapper
    flex 1
    text-align: center;
    a
      width: 100%;
      display: inline-block;
      color: #666;
      text-decoration: none;
    .router-link-exact-active
      color $color-red
      border-bottom: 2px solid $color-red;
      
</style>
