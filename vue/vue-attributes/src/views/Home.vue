<template>
  <div class="Home">
    <p>num: {{num}}</p>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { addLog, app } from './Home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  // updated () {
  //   console.log('数据发生变化')
  // },
  created () {
    console.log('我是原生的created')
  },
  mixins: [addLog], // 代码混入
  extends: app, // 扩展
  methods: {
    add () {
      this.num++
      console.log(this.num ** 2)
    }
  }
}
</script>

<style>

</style>
