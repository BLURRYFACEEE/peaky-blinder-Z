<template>
<!-- 主要内容的中间区域 -->
  <div class="mid floatLeft">
    <div class="content">
<!--   文章的标题和事件   -->
      <div class="titleAtime">
        <h2>{{content.title}}</h2>
        <div class="titleTime">{{content.titleTime}}</div>
      </div>
<!--   文章的题干   -->
      <h4 class="contentImportant">{{content.contentImport}}</h4>
<!--   文章正文   -->
      <div class="contentShow">
        <div class="realContent">
<!--     文章的段落     -->
          <div v-for="(item,index) in content.paragraph" :key="index">
            <p v-if="!item.imgCheck" :class="{lastLine:item.endCheck}">{{item.content}}<a v-if="item.endCheck"><img src="@/assets/logo.png">返回搜狐，查看更多</a></p>
            <img v-else class="img1" :src="item.content">
          </div>
          <p class="statement">声明：该文观点仅代表作者本人，搜狐号系信息发布平台，搜狐仅提供信息存储空间服务。</p>
        </div>
<!--    文章正文底部点赞和阅读量    -->
        <div class="praiseAreads">
          <div class="praise floatLeft">
            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-dianzan"></use></svg>
            <span v-if="content.praiseNum===0">首赞</span>
            <span v-else>{{content.praiseNum}}</span>
          </div>
          <div class="readNum floatRight">阅读 ({{content.readNum}})</div>
        </div>
<!--    大家都在看    -->
        <div class="foolLook">
          <div class="foolLookTitle">
            <span>大家都在看</span>
          </div>
          <div class="foolLookContent">
            <div class="foolLookContentBlock" v-for="(item,index) in content.foolLookContent" :key="index">
              <div class="foolLookContentImg">
                <img :src="item.foolLookImg">
              </div>
              <div class="foolLookContentTitle">{{item.foolLookTitle}}</div>
            </div>
          </div>
        </div>
<!--   tb滚动广告区域     -->
        <div class="ad">
          <div class="adLogo floatLeft">
            <a class="adLogoLink"></a>
          </div>
<!--    滚动框      -->
          <div class="scrollFrame floatLeft">
            <ul :class="{animationStop:ADAnimationCheck}" ref="scrollFrameUl">
<!--      三个为一行总共九个滚动(setInterval)        -->
              <li v-for="(item,index) in 3" :key="index" :class="'li'+index">
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[index*index].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[index*index].adPrices}}</div>
                </div>
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[index*index+1].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[index*index+1].adPrices}}</div>
                </div>
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[index*index+2].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[index*index+2].adPrices}}</div>
                </div>
              </li>
<!--      最后复制第一个放在末尾表示连续滚动        -->
              <li class="li0">
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[0].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[0].adPrices}}</div>
                </div>
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[1].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[1].adPrices}}</div>
                </div>
                <div class="adBlock floatLeft">
                  <div class="adImg">
                    <img :src="content.ad[2].adImgSrc">
                  </div>
                  <div class="adInfo">￥{{content.ad[2].adPrices}}</div>
                </div>
              </li>
            </ul>
          </div>
<!--    广告滚动的小黑点      -->
          <div class="scrollTriggers floatLeft">
            <ul>
              <li v-for="(item,index) in 3" :key="index" :class="{currentLi:triggersIndex===index}" @mouseover="adTriggersHover(index)"></li>
            </ul>
          </div>
<!--    广告轮播的橙框      -->
          <div class="scrollLinkBlock floatLeft">
            <ul>
              <li v-for="(item,index) in content.adRightLinkName" :key="index" :class="{currentLi:linksIndex===index}"><a href="#">{{item}}</a></li>
              <li class="nowLinkBlock"></li>
            </ul>
          </div>
        </div>
<!--    我来说两句区域    -->
        <div class="letMeTalk">
          <div class="letMeTalkDescription">
            <div class="letMeTalkTitle floatLeft">我来说两句</div>
            <div class="sunFollow floatRight"><img></div>
            <div class="involve floatRight"><span>{{content.letMeTalk.involveNum}}</span>人参与，<span>{{content.letMeTalk.commentNum}}</span>人评论</div>
          </div>
          <div class="letMeTalkInput" @click="letMeTalkInputClick">
            <textarea placeholder="来说两句吧...." :class="{textareaClick:textareaClickCheck}"></textarea>
            <div class="hidePlace" :class="{show:hideShow}">
              <span>快速登录：</span>
              <a href="#"><svg class="icon icon1" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>
              <a href="#"><svg class="icon icon2" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>
              <a href="#"><svg class="icon icon3" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>
              <a href="#"><svg class="icon icon4" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>
            </div>
            <a class="loginAsubmit" href="#">登录并发表</a>
          </div>
          <div class="userDeal">搜狐“我来说两句” 用户公约</div>
        </div>
<!--    推荐阅读区域    -->
        <div class="badRead">
          <div class="badReadTitle">推荐阅读</div>
          <div class="badReadContent">
            <ul>
              <li class="badReadRow">
                <div class="articleImg floatLeft"><img :src="imgSrc"></div>
                <div class="articleTitle floatLeft">{{content.badRead.articleTitle}}</div>
                <div class="articleDetail floatLeft">
                  <div class="articleAvatar floatLeft"><img :src="content.badRead.articleAvatar"></div>
                  <div class="articleAuthor floatLeft">{{content.badRead.articleAuthor}}</div>
                  <div class="articleTime floatLeft">{{content.badRead.articleTime}}</div>
                  <div class="articleComment floatRight">{{content.badRead.articleComment}}
                    <svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiaoxi"></use></svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          title: '(抗击新冠肺炎)香港特区政府推出新冠疫苗一站式资讯平台',
          titleTime: '2021-01-29 17:21',
          contentImport: '香港特区政府推出新冠疫苗一站式资讯平台',
          paragraph: [
            {
              content: '中新社香港1月29日电 (记者 曾平)香港特区政府29日推出“2019冠状病毒病疫苗接种计划”网站(www.covidvaccine.gov.hk)，一站式向市民发放新冠疫苗的官方和最新资讯。待新冠疫苗接种计划正式展开后，网站亦会提供疫苗接种计划的详情，并会连结计划的网上预约系统，方便市民在网上预约接种疫苗的时间和地点。',
              imgCheck: false
            },
            {
              content: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              imgCheck: true
            },
            {
              content: '资料图：1月28日晚上，香港特区政府在北角指明“受限区域”，即锦屏街东发大厦A、B、C和D座内的人士须留在其处所并按特区政府安排接受强制检测。图为居民登记返回处所。 中新社记者 李志华 摄 ',
              imgCheck: false
            },
            {
              content: '特区政府发言人说，市民早日接种安全和有效的新冠疫苗，是防控疫情非常重要的一环，亦是市民恢复较正常生活和香港经济活动得以恢复的关键。接种疫苗不仅可以保护自己，亦可以保护其他人，并且可以减轻医疗系统的负担。',
              imgCheck: false
            },
            {
              content: '网站目前的主要内容包括“最新消息”“常见问题”“教育及媒体资源”“‘医健通’及查询疫苗接种纪录”以及“医护专业栏目”。当中，“最新消息”包括哪一种疫苗已按规例获认可在香港紧急使用，以及独立的顾问专家委员会就疫苗的专业建议和意见；“常见问题”包括接种新冠疫苗的好处、可供选择的新冠疫苗、使用新冠疫苗的建议、不同组别或情况是否应该接种新冠疫苗等。',
              imgCheck: false
            },
            {
              content: '发言人表示，新冠疫苗是新事物，相信通过多认识、多了解，市民能更明白接种疫苗的好处和重要性，释除对接种的疑虑。\', \'香港医疗人员总工会主席潘佩璆接受中新社记者采访时表示，2月开始应有新冠疫苗抵港，特区政府此时推出新冠疫苗一站式资讯平台非常及时。各种不同技术新冠疫苗的长处、短处及相关证据，应赴何处接种何款疫苗，某款疫苗不适合哪类人群接种等讯息都是市民的关注点，资讯平台应通过易懂的方式让市民知道这些讯息。',
              imgCheck: false
            },
            {
              content: '他指出，目前欧美出现疫苗供应短缺，特区政府要确保疫苗第一针和第二针的供货。待开始实施接种计划时，关键是要让市民能够方便地接种。(完)',
              imgCheck: false,
              endCheck: true
            }
          ],
          praiseNum: 0,
          readNum: 6822,
          foolLookContent: [
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            },
            {
              foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
            }
          ],
          ad: [
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '85.11'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '294'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '366'
            }, {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '486'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '138'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '20'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '439'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '15'
            },
            {
              adImgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
              adPrices: '235'
            }

          ],
          adRightLinkName: ['雪纺衫', '无线耳机', '华为手机', '苹果', '口红'],
          letMeTalk: {
            involveNum: 0,
            commentNum: 0
          },
          badRead: {
            badReadTitle: '推荐阅读',
            articleTitle: '猪身上“最脏”的器官，里面含有大量寄生虫，却有人把它当美食',
            articleAvatar: require('@/assets/logo.png'),
            articleAuthor: '老康看社会',
            articleTime: '01-27 21:21',
            articleComment: 5
          }
        }
      }
    }
  },
  data () {
    return {
      ADAnimationCheck: false,
      textareaClickCheck: false,
      hideShow: false,
      imgShow: false,
      imgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      adPrices: ['85.11', '294', '366', '486', '138', '20', '439', '15', '235'],
      currentIndex: 0,
      linksIndex: 0,
      triggersIndex: 0,
      adLinkName: ['雪纺衫', '无线耳机', '华为手机', '苹果', '口红'],
      foolLookContent: [
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        },
        {
          foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
          foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
        }
      ],
      adUl: null
    }
  },
  mounted () {
    this.adImgIndexScroll()
    this.getADUl()
  },
  methods: {
    getADUl () {
      this.adUl = this.$refs.scrollFrameUl
    },
    letMeTalkInputClick () {
      this.textareaClickCheck = true
      this.hideShow = true
    },
    adImgScroll () {
      // const adUl = this.$refs.scrollFrameUl
      this.adUl.style.transform = `translateY(-${this.currentIndex * 150}px)`
    },
    adImgIndexScroll () {
      this.backIntervalID = this.intervalID
      // const adUl = this.$refs.scrollFrameUl
      this.intervalID = setInterval(() => {
        this.currentIndex++
        this.linksIndex++
        this.adUl.style.transition = '.5s linear'
        if (this.currentIndex === 4) {
          this.adUl.style.transition = 'none'
          this.currentIndex = 0
        }
        this.triggersIndex = this.currentIndex
        if (this.currentIndex === 3) this.triggersIndex = 0
        if (this.linksIndex === 5) this.linksIndex = 0
        this.adImgScroll()
      }, 2000)
    },
    adTriggersHover (index) {
      clearInterval(this.intervalID)
      this.intervalID = this.backIntervalID
      this.currentIndex = index
      this.triggersIndex = index
      // const adUl = this.$refs.scrollFrameUl
      this.adUl.style.transform = `translateY(-${this.currentIndex * 150}px)`
      setTimeout(() => {
        this.adImgIndexScroll()
      }, 0)
    }
  },
  destroyed () {
    clearInterval(this.intervalID)
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
  .contentArea .mid .content {
    display: inline-block;
    width: 640px;
    margin: -12px 30px;
  }
  .contentArea .mid .content .titleAtime h2{
    font-size: 28px;
    margin-bottom: 20px;
  }
  .contentArea .mid .content .titleAtime .titleTime{
    font-size: 13px;
    color: #9c9c9c;
    margin-bottom: 26px;
  }
  .contentArea .mid .content .contentImportant {
    margin-bottom: 30px;
  }
  .contentArea .mid .content .contentShow {
    font-weight: 400;
  }
  .contentArea .mid .content .contentShow p{
    line-height: 32px;
    margin-bottom: 30px;
  }
  .contentArea .mid .content .contentShow .lastLine img{
    display: inline-block;
    height: 1em;
    width: 1em;
    vertical-align: middle;
    margin: 0 5px;
  }
  .contentArea .mid .content .contentShow .lastLine a{
    color: #118fc1;
    cursor: pointer;
  }
  .contentArea .mid .content .contentShow .lastLine a:hover{
    color: #76d9ff;
  }
  .contentArea .mid .content .contentShow .content1 {
    display: inline-block;
  }
  .contentArea .mid .content .contentShow .img1 {
    width: 100%;
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .statement {
    margin-top: -10px;
    font-size: 12px;
    color: #9c9c9c;
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .praise {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    border: 1px solid #d4d4d4;
    border-radius: 30px;
    padding: 3px 18px;
    cursor: pointer;
  }
  .contentArea .mid .content .contentShow .readNum {
    color: #494949;
    font-size: 12px;
  }
  .contentArea .mid .content .contentShow .praise span{
    vertical-align: top;
  }
  .contentArea .mid .content .contentShow .praiseAreads {
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .praiseAreads::after {
    content: '';
    display: block;
    clear: both;
  }
  .contentArea .mid .content .contentShow .foolLook {
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .foolLook:after {
    content: '';
    display: block;
    clear: both;
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookTitle{
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookTitle span{
    padding-left: 15px;
    border-left: 4px solid greenyellow;
    margin-bottom: 10px;
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookContentImg{
    overflow: hidden;
  }
  .contentArea .mid .content .contentShow .foolLook img{
    height: 120px;
    width: 200px;
    transition: all 1s linear;
  }
  .contentArea .mid .content .contentShow .foolLook img:hover{
    transform: scale(1.1);
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookContentBlock{
    float: left;
    width: 200px;
    margin-right: 20px;
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookContentBlock:nth-child(3n){
    margin-right: 0;
  }
  .contentArea .mid .content .contentShow .foolLook .foolLookContentTitle{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical;
    text-overflow: ellipsis;
    overflow:hidden;
  }
  .contentArea .mid .content .contentShow .ad {
    border: 1px solid red;
    height: 150px;
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .ad .adLogo {
    display: inline-block;
  }
  .contentArea .mid .content .contentShow .ad .adLogoLink {
    height: 150px;
    display: inline-block;
    width: 50px;
    background: url("https://img.alicdn.com/tps/TB1kBaWPpXXXXb8XFXXXXXXXXXX-50-149.png");
    background-size: contain;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame {
    width: 500px;
    height: 100%;
    overflow: hidden;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame ul {
    width: 500px;
    height: 100%;
    transition: .5s linear;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame li{
    height: 150px;
    width: 100%;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .li0{
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .adBlock{
    height: 150px;
    margin-right: 10px;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .adBlock:nth-child(3n){
    margin-right: 0;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .adImg{
    height: 125px;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .adImg img{
    height: 100%;
    width: 160px;
  }
  .contentArea .mid .content .contentShow .ad .scrollFrame .adInfo{
    font-size: 16px;
    padding: 3px;
    color: #ff4401;
    font-weight: 600;
  }
  .contentArea .mid .content .contentShow .ad .scrollTriggers {
    position: relative;
    height: 100%;
    margin: 0 5px;
  }
  .contentArea .mid .content .contentShow .ad .scrollTriggers ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .contentArea .mid .content .contentShow .ad .scrollTriggers li{
    width: 8px;
    height: 8px;
    background-color: #c1c1c1;
    border-radius: 50%;
  }
  #sohu .contentArea .mid .content .contentShow .ad  .currentLi {
    background-color: #ff4401;
    color: #fff;
  }
  .contentArea .mid .content .contentShow .ad .scrollLinkBlock {
    position: relative;
    height: 100%;
    width: 70px;
    text-align: center;
  }
  .contentArea .mid .content .contentShow .ad .scrollLinkBlock ul{
    height: 100%;
  }
  .contentArea .mid .content .contentShow .ad .scrollLinkBlock li{
    height: 20%;
    color: #fff;
  }
  .contentArea .mid .content .contentShow .ad .scrollLinkBlock li a{
    color: #a1a1a1;
  }
  .contentArea .mid .content .contentShow .badRead .badReadTitle{
    padding-left: 15px;
    border-left: 4px solid greenyellow;
    margin-bottom: 10px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleImg img{
    width: 170px;
    height: 120px;
    margin-right: 10px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow li{
    width: 450px;
    font-size: 18px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail {
    margin-top: 20px;
    width: 70%;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleTitle{
    width: 450px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleAvatar{
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #797979;
    overflow: hidden;
    margin-right: 10px;
    line-height: 20px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail img{
    position: absolute;
    top: 50%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    right: 0;
    width: 25px;
    height: 25px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleAuthor{
    font-size: 13px;
    color: #5c5c5c;
    vertical-align: top;
    margin-right: 10px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleTime {
    font-size: 13px;
    color: #5c5c5c;
    vertical-align: top;
    margin-right: 10px;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleComment{
    vertical-align: top;
  }
  .contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleComment svg{
    width: 1em;
    height: 1em;
  }
  .contentArea .mid .content .contentShow .letMeTalk {
    margin-bottom: 20px;
  }
  .contentArea .mid .content .contentShow .letMeTalk .letMeTalkDescription::after{
    display: block;
    content: '';
    clear: both;
  }
  .contentArea .mid .content .contentShow .letMeTalk .letMeTalkTitle{
    padding-left: 15px;
    border-left: 4px solid greenyellow;
    margin-bottom: 10px;
  }
  .contentArea .mid .content .contentShow .letMeTalk .involve span{
    font-size: 20px;
    color: #ff7272;
  }
  .contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput {
    position: relative;
    margin-bottom: 10px;
  }
  .contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput textarea{
    width: 100%;
    height: 36px;
    transition: all 0.5s linear;
    padding-top: 8px;
    box-sizing: border-box;
  }
  #sohu .contentArea .mid .content .contentShow .letMeTalk .textareaClick{
    height: 100px;
    border-color: #e20101;
  }
  .contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput .loginAsubmit{
    position: absolute;
    right: -1px;
    bottom: 1px;
    display: inline-block;
    width: 80px;
    height: 36px;
    background-color: #e20101;
    color: #fff;
    line-height: 36px;
    font-size: 14px;
    text-align: center;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .userDeal {
    font-size: 12px;
    color: #9c9c9c;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace {
    width: 80%;
    bottom: 0;
    position: absolute;
    height: 36px;
    line-height: 36px;
    padding-left: 8px;
    box-sizing: border-box;
    opacity: 0;
    transition: all 1s linear;
    z-index: -1;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace span{
    vertical-align: top;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace svg{
    vertical-align: middle;
    width: 1.8em;
    height: 1.8em;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon1{
    color: #bbbb00;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon2{
    color: #7cbb14;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon3{
    color: #0b68bf;
  }
  .contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon4{
    color: #b40707;
  }
</style>
