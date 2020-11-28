<template>
  <div class="wrap">
    AAAAAAAAAAAA
    <button @click="sendA">click</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  methods: {
    data () {
      return {
        item: '我是组件A里面的数据'
      }
    },
    sendA () {
      Bus.$emit('sendA',this.item)
    }
  }
}
</script>

<style>

</style>