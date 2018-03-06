<template>
  <div class="hello">
    <v-header/>
    <p>Home</p>
    <p>{{count}}</p>
    <p>{{rootCount}}</p>
    <button @click="decreaseAction"></button>
  </div>
</template>

<script>
import VHeader from '@/components/Header/Header'
import { mapActions,mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    VHeader
  },
  computed: {
    ...mapState({
      count: state => state.home.count,
      rootCount: state => state.count
    })
  },
  methods: {
    ...mapActions([
      'incrementAction',
      'decreaseAction'
    ]),
    addCount () {
      this.$store.dispatch('incrementAction')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button{
    width: 20px;
    height: 20px;
    display: block;
    background: red;
    outline: none;
  }
</style>
