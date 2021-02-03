<template>
<!-- 顶边栏 -->
  <div class="topBar">
    <div class="topBarArea">
<!--   网页图标   -->
      <div class="webTitle floatLeft">
        <svg class="icon" aria-hidden="true"><use xlink:href="#icon-mojiezuo"></use></svg>
      </div>
      <ul>
<!--    顶边栏标签    -->
        <li class="floatLeft" v-for="item in topBarLink" :key="item"><a>{{item}}</a></li>
<!--   顶边栏更多     -->
        <li class="floatLeft moreArea" ref="topBarMoreArea">
          <span class="more floatLeft">更多</span>
<!--    顶边栏更多隐藏区域      -->
          <div class="moreHideContent" :class="{show:topBarMoreHideContentCheck}">
            <ul>
              <li class="left topBarMoreHideLi" v-for="item in topBarMoreHide" :key="item"><a href="#">{{item}}</a></li>
            </ul>
          </div>
          <div class="moreIcon floatLeft">
            <svg class="iconArrow" aria-hidden="true"><use xlink:href="#icon-arrow-down"></use></svg>
          </div>
        </li>
<!--    顶边栏登录区域    -->
        <div class="loginArea floatLeft">
          <li><div class="loginIcon floatLeft">
            <svg class="iconArrow" aria-hidden="true"><use xlink:href="#icon-mojiezuo"></use></svg>
          </div>
            <a>登录</a>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      topBarLink: ['新闻', '体育', '汽车', '房产', '旅游', '教育', '时尚', '科技', '财经', '娱乐'],
      topBarMoreHide: ['母婴', '健康', '历史', '军事', '美食', '文化', '星座', '专题', '游戏', '搞笑', '动漫', '宠物'],
      topBarMoreHideContentCheck: false
    }
  },
  methods: {
    // moreAreaHover () {
    //   this.topBarMoreHideContentCheck = true
    // },
    // moreHiddenAreaLeave () {
    //   this.topBarMoreHideContentCheck = false
    // }
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
  .topBarArea {
    width: 1200px;
    margin: 0 auto;
  }
  .topBar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    background-color: #000;
    /*padding: 3px 0;*/
    z-index: 666;
  }
  .topBar::after {
    content: '';
    display: block;
    clear: both;
  }
  .topBar ul {
    line-height: 34px;
  }
  .topBar ul li {
    font-size: 16px;
    padding: 3px 21px;
  }
  .topBar ul li:hover {
    background-color: #555555;
  }
  .topBar ul a{
    cursor: pointer;
  }
  .topBar ul .moreArea {
    position: relative;
    cursor: pointer;
  }
  .topBar ul .moreArea:hover .moreHideContent {
    display: block;
    opacity: 1;
  }
  .topBar ul .moreArea:hover svg {
    transform: rotate(-180deg);
  }
  .topBar ul .moreArea svg {
    transition: all .3s cubic-bezier(.77,0,.18,1);
  }
  .topBar ul .moreArea .moreHideContent {
    display: none;
    opacity: 0;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 210px;
    height: 100px;
    padding: 10px 15px;
    background-color: #fff;
    font-size: 12px;
    color: #000;
    box-shadow: 0 0 5px 5px rgba(0,0,0,.2);
    transition: all .3s cubic-bezier(.77,0,.18,1);
  }
  .topBar .topBarMoreHideLi {
    display: inline-block;
    padding: 0 10px;
  }
  .topBar .topBarMoreHideLi:hover {
    background-color: #cdcdcd;
  }
  .topBar ul::after {
    content: '';
    display: block;
    clear: both;
  }
  .topBar .webTitle {
    padding-right: 80px;
  }
  .topBar .webTitle:hover {
    color: #ff9900;
  }
  .topBar  .loginArea {
    margin-left: 60px;
  }
  .topBar .loginArea li {
    padding: 3px 60px;
  }
</style>
