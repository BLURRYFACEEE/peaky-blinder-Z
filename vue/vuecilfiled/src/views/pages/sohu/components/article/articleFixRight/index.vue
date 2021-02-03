<template>
<!-- fix定位的三个框框 返回首页、用户反馈、回到顶部（以中间区域为相对定位） -->
  <div class="fixArea">
    <ul>
      <li class="backIndex">
        <router-link to="#">返回首页</router-link>
      </li>
      <li class="userFeedback">
        <router-link to="#">用户反馈</router-link>
      </li>
      <li class="backToTop" v-to-top-item="backToTopType">
        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-huojian"></use></svg>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      backToTopType: 'opacity'
    }
  }
}
</script>

<style scoped>
  .sohu {}
  .icon {
    width: 2em;
    height: 2em;
    fill: currentColor;
    vertical-align: -.125em;
  }
  .iconArrow {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -.125em;
  }
  .floatLeft {
    float: left;
  }
  .floatRight {
    float: right;
  }
  .fix {
    position: fixed;
    top: 50px;
    width: 140px;
  }
  #sohu .show {
    display: block;
    opacity: 1;
    z-index: auto;
  }
  .mainBase .fixArea {
    width: 60px;
    position: fixed;
    left: 50%;
    bottom: 170px;
    margin-left: 620px;
  }
  .mainBase .fixArea ul {
    text-align: center;
  }
  .mainBase .fixArea ul {
    text-align: center;
  }
  .mainBase .fixArea ul .backIndex a{
    color: #000;
    background-color: #ffdf00;
  }
  .mainBase .fixArea ul .userFeedback a{
    color: #fff;
  }
  .mainBase .fixArea ul .backToTop{
    font-size: 16px;
    padding: 12px;
    /*opacity: 0;*/
  }
  .mainBase .fixArea ul li {
    background-color: #797979;
    margin-top: 2px;
    font-size: 12px;
    opacity: 0.8;
  }
  .mainBase .fixArea ul li a{
    display: inline-block;
    padding: 14px;
  }
  .mainBase .fixArea ul li:hover{
    opacity: 1;
  }
</style>
