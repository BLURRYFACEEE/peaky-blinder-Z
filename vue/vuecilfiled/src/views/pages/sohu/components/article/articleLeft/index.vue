<template>
<!-- 文章主要区域的左边区域 -->
  <div class="left floatLeft">
<!--  作者区域  -->
    <div class="authorArea">
      <div class="authorDetail">
        <div class="authorAvatar">
          <img :src="author.authorDetail.authorAvatar">
        </div>
        <div class="authorName">中国新闻网</div>
        <div class="authorScore">
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-shengri"></use></svg>
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-shengri"></use></svg>
        </div>
        <div class="authorData">
          <div class="articleNum authorDataDisplay">
            <div><span>{{author.authorDetail.authorData.articleNum}}</span></div>
            <div class="authorDataTitle"><span>文章</span></div>
          </div>
          <div class="articleRead authorDataDisplay">
            <div><span>{{author.authorDetail.authorData.articleRead}}</span></div>
            <div class="authorDataTitle"><span>总阅读</span></div>
          </div>
        </div>
      </div>
      <div class="authorLink"><span>查看TA的文章></span></div>
    </div>
<!--  文章评论数量以及分享区域  -->
    <div class="commentAshare" :class="{fix:fixShow}">
      <div class="comment">
        <div class="commentTitle"><span>评论</span></div>
        <div class="commentIcon">
          <svg class="icon" aria-hidden="true"><use xlink:href="#icon-wenzhen"></use></svg>
        </div>
        <div class="commentNum"><span>{{commentment.comment.commentNum}}</span></div>
      </div>
      <div class="share">
        <div class="shareTitle"><span>分享</span></div>
        <div class="shareLink shareLink1">
<!--          <div class="shareLink1Wrap">-->
<!--            <div class="connectTriangle"></div>-->
<!--            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-sanjiaodown"></use></svg>-->
<!--          </div>-->
          <div class="shareImg shareImg1">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg>
          </div>
          <span class="shareSmallTitle">微信分享</span>
          <div class="leftShareLinkHidden">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-sanjiaodown"></use></svg>
            <div class="twoDimensionCode">
              <img :src="imgSrc">
            </div>
          </div>
        </div>
        <div class="shareLink shareLink2">
          <div class="shareImg shareImg2">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinlang"></use></svg>
          </div>
          <span class="shareSmallTitle">新浪微博</span>
        </div>
        <div class="shareLink shareLink3">
          <div class="shareImg shareImg3">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-qzone"></use></svg>
          </div>
          <span class="shareSmallTitle">QQ空间</span>
        </div>
        <div class="shareLink shareLink4">
          <div class="shareImg shareImg4">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-lianjie"></use></svg>
          </div>
          <span class="shareSmallTitle">复制链接</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    author: {
      type: Object,
      default: () => {
        return {
          authorDetail: {
            authorAvatar: require('@/assets/logo.png'),
            authorData: {
              articleNum: '103万',
              articleRead: '626亿'
            }
          }
        }
      }
    },
    commentment: {
      type: Object,
      default: () => {
        return {
          comment: {
            commentNum: '0'
          }
        }
      }
    }
  },
  mounted () {
    this.listenScroll()
  },
  data () {
    return {
      fixShow: false,
      imgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      authorArea: {
        authorDetail: {
          authorAvatar: require('@/assets/logo.png'),
          authorData: {
            articleNum: '103万',
            articleRead: '626亿'
          }
        }
      },
      comment: {
        commentNum: '0'
      }
    }
  },
  methods: {
    listenScroll () {
      window.addEventListener('scroll', () => {
        this.fixShow = document.documentElement.scrollTop >= 280
      })
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
  .contentArea::after {
    content: '';
    display: block;
    clear: both;
  }
  .contentArea .left .authorArea {
    position: relative;
    width: 140px;
    height: 210px;
    outline: 1px solid #e6e6e6;
    text-align: center;
  }
  .contentArea .left .authorArea .authorDetail{
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
  }
  .contentArea .left .authorAvatar{
    position: relative;
    width: 70px;
    height: 70px;
    display: inline-block;
    padding-bottom: 10px;
  }
  /* 优化原头像写法 */
  .contentArea .left .authorAvatar img{
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 70px;
    height: 70px;
    transform: translateX(-50%);
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
  .contentArea .left .authorName {
    padding-bottom: 5px;
  }
  .contentArea .left .authorScore{
    padding-bottom: 10px;
  }
  .contentArea .left .authorScore .icon{
    width: 1.5em;
    height: 1.5em;
  }
  .contentArea .left .authorData {
    font-size: 16px;
  }
  .contentArea .left .authorData .articleNum {
    border-right: 1px solid #e6e6e6;
  }
  .contentArea .left .authorDataDisplay {
    display: inline-block;
    padding: 0 10px;
  }
  .contentArea .left .authorDataTitle {
    font-size: 12px;
    color: #656565;
  }
  .contentArea .left .authorArea .authorLink {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fcfcfc;
    font-size: 12px;
    padding: 5px 20px;
    color: #656565;
  }
  .contentArea .left .authorArea {
    margin-bottom: 34px;
  }
  .contentArea .left .comment {
    text-align: center;
    border-top: 1px solid #e6e6e6;
    margin-bottom: 32px;
  }
  .contentArea .left .comment .commentTitle {
    position: relative;
    top: -11px;
    display: inline-block;
    width: 50px;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: -5px;
  }
  .contentArea .left .comment .commentIcon {
    margin-top: -5px;
  }
  .contentArea .left .comment .commentIcon svg {
    height: 2.4em;
    width: 2.4em;
  }
  .contentArea .left .comment .commentNum {
    font-size: 20px;
    color: #d00000;
  }
  .contentArea .left .share {
    border-top: 1px solid #e6e6e6;
    text-align: center;
    font-size: 14px;
    padding: 0 28px;
  }
  .contentArea .left .share .shareTitle{
    position: relative;
    top: -11px;
    display: inline-block;
    width: 50px;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: -5px;
  }
  .contentArea .left .share .shareLink {
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
    opacity: 0.8;
  }
  .contentArea .left .share .shareLink:hover {
    cursor: pointer;
    opacity: 1;
  }
  .contentArea .left .share .shareLink1 {
    position: relative;
  }
  .contentArea .left .share .shareLink1 .shareLink1Wrap{
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .contentArea .left .share .shareLink1:hover .leftShareLinkHidden{
    display: block;
  }
  .contentArea .left .share .shareLink1:hover .connectTriangle{
    display: block;
  }
  .contentArea .left .share .shareLink1 .leftShareLinkHidden {
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -120px;
    box-shadow: 0 0 5px #9c9c9c;
  }
  .contentArea .left .share .shareLink1 .connectTriangle{
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    border-left: 10px solid transparent;
    border-top: 10px solid transparent;
    top: -5px;
    box-shadow: 0 0 5px #9c9c9c;
  }
  .contentArea .left .share .shareLink1 .leftShareLinkHidden svg{
    color: #fff;
    width: 1em;
    height: 1em;
    position: absolute;
    top: 110px;
    left: 50px;
    filter: drop-shadow(0 7px 4px #686868);
  }
  .contentArea .left .share .shareLink1 .leftShareLinkHidden .twoDimensionCode{
    padding: 5px;
  }
  .contentArea .left .share .shareLink1 .leftShareLinkHidden .twoDimensionCode img{
    width: 100px;
    height: 100px;
  }
  .contentArea .left .share .shareImg {
    width: 20px;
    height: 20px;
    display: inline-block;
    float: left;
  }
  .contentArea .left .share .shareImg svg {
    color: #fff;
  }
  .contentArea .left .share .shareImg .icon{
    height: 1em;
    width: 1em;
  }
  .contentArea .left .share .shareImg1 {
    background-color: #95db29;
  }
  .contentArea .left .share .shareImg2 {
    background-color: #ff4b4b;
  }
  .contentArea .left .share .shareImg3 {
    background-color: #ffb300;
  }
  .contentArea .left .share .shareImg4 {
    background-color: grey;
  }
  .contentArea .left .share .shareSmallTitle {
    font-size: 12px;
    vertical-align: top;
    color: #313131;
  }
</style>
