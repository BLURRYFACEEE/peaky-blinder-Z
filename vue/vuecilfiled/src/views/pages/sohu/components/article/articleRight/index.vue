<template>
<!-- 文章右边区域 -->
  <div class="right floatLeft">
<!--  大家都在搜区域  -->
    <div class="foolSearch">
      <input :placeholder="rightContent.everybodySearch" />
      <div class="searchArea">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiaoxi"></use>
        </svg>
      </div>
    </div>
<!--  右侧广告区域  -->
    <div class="rightAD">
      <ul>
        <li v-for="(item,index) in rightContent.rightAD" :key="index">
          <img :src="item.imgSrc">
          <p class="adDescrip">{{item.adDescrip}}</p>
        </li>
        <li>
          <img :src="defaultImgSrc" v-img-src-default="imgWrongSrc">
          <p class="adDescrip">家具装修装潢</p>
        </li>
        <li>
          <img :src="defaultImgSrc" v-img-src-default="imgWrongSrc">
          <p class="adDescrip">家具装修装潢</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      defaultImgSrc: require('@/assets/logo.png'),
      imgWrongSrc: () => require('@/assets/logo.png')
    }
  },
  props: {
    rightContent: {
      type: Object,
      default: () => {
        return {
          everybodySearch: '大家都在搜：毛晓彤陈翔录音',
          rightAD: [{
            imgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
            adDescrip: '家具装修装潢'
          },
          {
            imgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
            adDescrip: '家具装修装潢'
          }
          ]
        }
      }
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
  .contentArea .right {
    width: 320px;
    padding: 0 10px;
    margin: 0 0 0 20px;
  }
  .contentArea .right .foolSearch {
    position: relative;
    margin-bottom: 40px;
  }
  .contentArea .right .foolSearch .searchArea{
    position: absolute;
    top: 0;
    right: -2px;
    height: 100%;
    width: 60px;
    background-color: #e8e802;
    text-align: center;
    line-height: 36px;
  }
  .contentArea .right .foolSearch svg{
    width: 1.8em;
    height: 1.8em;
    vertical-align: middle;
  }
  .contentArea .right .foolSearch input{
    width: 100%;
    height: 36px;
  }
  .contentArea .right .rightAD {
    margin-bottom: 40px;
  }
  .contentArea .right .rightAD ul::after {
    display: block;
    content: '';
    clear: both;
  }
  .contentArea .right .rightAD li {
    float: left;
    width: 48%;
    margin-right: 6px;
  }
  .contentArea .right .rightAD li:nth-last-child(1) {
    margin-right: 0;
  }
  .contentArea .right .rightAD img{
    width: 156px;
    height: 100px;
  }
  .contentArea .right .rightAD .adDescrip{
    text-align: center;
    padding: 2px;
  }
</style>
