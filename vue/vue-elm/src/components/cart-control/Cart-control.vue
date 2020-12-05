<template>
  <div class="cart-control">
    <transition name="move">
      <div class="cart-decrease" v-show="foodItem.count > 0">
        <span class="inner icon-remove_circle_outline" @click.stop="decreaseCart"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="foodItem.count > 0">{{foodItem.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop="addCart"></div>
  </div>
</template>

<script>
export default {
  props: {
    foodItem: {
      type: Object
    }
  },
  methods: {
    addCart() {
      if(!this.foodItem.count) {
        // 这样写是没用的
        // this.foodItem.count = 1
        // 应该这样写
        // 双向数据流，父组件也能拿到这个属性
        this.$set(this.foodItem,'count', 1)
      }else {
        this.foodItem.count++
      }
      // this.$emit('add',) 
    },
    decreaseCart() {
      if(this.foodItem.count) {
        this.foodItem.count--
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-control
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    opacity 1
    transform translate3d(0, 0, 0)
    .inner
      display inline-block
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
      transition all .4s linear
      transform rotate(0)
    &.move-enter-active, &.move-leave-active
      transition all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity 0
      transform translate3d(24px, 0, 0)
      .inner
        transform rotate(180deg)
  .cart-count
    display inline-block
    padding-top 6px
    line-height 24px
    text-align center
    font-size 10px
    color rgb(147, 153, 159)
    vertical-align top
  .cart-add
    display inline-block
    padding 6px
    line-height 24px
    font-size 24px
    color rgb(0, 160, 220)
</style>