<template>
  <div class="wrap">
    BBBBBBBBB
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted () {
    Bus.$on('sendA',(e) => {
      console.log(e)
    })
  }
}
</script>

<style>

</style>