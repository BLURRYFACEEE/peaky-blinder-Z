<template>
  <div class="main">
    <h2>DIY!</h2>
      <div class="block1" v-to-top-item></div>
<!--    <img :src="imgSrc233" :onerror="errSrc">-->
    <img :src="imgSrc233">
    <img :src="imgSrc233" v-img-default>
    <img :src="imgSrc" v-img-src-default="src">
    <div class="infinteArea" v-infinity-scroll>
      <ul>
        <li v-for="item in scrollData" :key="item">{{item}}</li>
      </ul>
    </div>
      <button @click="delScrollData">删除</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      imgSrc233: () => require('@/assets/logo.png'),
      imgSrc: require('@/assets/logo.png'),
      testRequire: '',
      src: 'http://chuantu.xyz/t6/741/1612172749x1700338588.png',
      scrollData: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    delScrollData () {
      this.scrollData.splice(-1)
    }
  },
  computed: {
    errSrc () {
      // return 'this.src="' + this.imgSrc + '";this.onerror=null'
      return 'this.src="' + this.imgSrc + '";this.onerror=null'
    }
  }
}
</script>

<style scoped>
  .main {
    height: 6000px;
  }
  .block1 {
    width: 40px;
    height: 40px;
    background-color: #00ffb0;
    position: fixed;
    bottom: 60px;
    left: 60px;
    display: none;
  }
  .show {
    display: block;
  }
</style>
