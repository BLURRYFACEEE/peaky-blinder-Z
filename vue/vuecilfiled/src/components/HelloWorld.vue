<template>
  <div class="hello">
    <div class="test">
      <h2>index!</h2>
      <router-link to="/">首页！</router-link>
      <router-link to="/diyinstruction">diyinstruction</router-link>
      <router-link to="/mixinTest">mixinTest</router-link>
      <router-link to="/pages/sohu">sohu</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
