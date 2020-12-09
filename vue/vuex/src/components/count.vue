<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <h1>{{msg}}</h1>
    <p>
      <!-- <button @click="$store.commit('add', 10)">add</button> -->
      <button @click="addAction(10)">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      msg: ''
    }
  },
  // computed: {
  //   newCount () {
  //    return this.$store.state.count * 2
  //   }
  // }
 
  // computed: mapState({
  //   newCount: state => state.count * 2
  // }),
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },

  // methods: mapMutations(['add', 'reduce'])
  methods: {
    test() {},
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>