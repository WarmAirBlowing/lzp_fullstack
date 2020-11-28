<template>
  <div class="hello">
    {{message}}
    <button @click="send">发送</button>
    {{fromHi}}
  </div>
</template>

<script>
export default {
  props: ['message','fromHi'],
  data () {
   return {
     msg: '我是子组件里面的数据'
   }
 },
 methods: {
   send () {
     this.$emit('sendData',this.msg)
   }
 }
}
</script>

<style>
.hello {
  color: red;
  font-size: 20px;
}
</style>