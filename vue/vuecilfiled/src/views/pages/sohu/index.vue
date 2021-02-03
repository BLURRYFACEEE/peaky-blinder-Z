<template>
  <div id="sohu">
    <div class="mainBase">
<!--   顶边栏   -->
      <article-top-bar></article-top-bar>
<!--      <div class="topBar">-->
<!--        <div class="topBarArea">-->
<!--        <div class="webTitle floatLeft"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-mojiezuo"></use></svg></div>-->
<!--        <ul>-->
<!--          <li class="floatLeft" v-for="item in topBarLink" :key="item"><a>{{item}}</a></li>-->
<!--          <li class="floatLeft moreArea" ref="topBarMoreArea" @mouseover="moreAreaHover">-->
<!--            <span class="more floatLeft">更多</span>-->
<!--            <div class="moreHideContent" :class="{show:moreHideContentCheck}" @mouseleave="moreHiddenAreaLeave">-->
<!--              <ul>-->
<!--                <li class="left topBarMoreHideLi" v-for="item in topBarMoreHide" :key="item"><a href="#">{{item}}</a></li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div class="moreIcon floatLeft"><svg class="iconArrow" aria-hidden="true"><use xlink:href="#icon-arrow-down"></use></svg></div>-->
<!--          </li>-->
<!--          <div class="loginArea floatLeft"><li><div class="loginIcon floatLeft"><svg class="iconArrow" aria-hidden="true"><use xlink:href="#icon-mojiezuo"></use></svg></div><a>登录</a></li></div>-->
<!--        </ul>-->
<!--        </div>-->
<!--      </div>-->
<!--   主要内容区域   -->
      <div class="contentArea">
        <article-left :author="author" :commentment="commentment"></article-left>
<!--    左侧区域（作者信息和分享方式）    -->
<!--        <div class="left floatLeft">-->
<!--          <div class="authorArea">-->
<!--            <div class="authorDetail">-->
<!--              <div class="authorAvatar">-->
<!--                <img src="@/assets/logo.png">-->
<!--              </div>-->
<!--              <div class="authorName">中国新闻网</div>-->
<!--              <div class="authorScore"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shengri"></use></svg><svg class="icon" aria-hidden="true"><use xlink:href="#icon-shengri"></use></svg></div>-->
<!--              <div class="authorData">-->
<!--                <div class="articleNum authorDataDisplay">-->
<!--                  <div><span>103万</span></div>-->
<!--                  <div class="authorDataTitle"><span>文章</span></div>-->
<!--                </div>-->
<!--                <div class="articleRead authorDataDisplay">-->
<!--                  <div><span>626亿</span></div>-->
<!--                  <div class="authorDataTitle"><span>总阅读</span></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div class="authorLink"><span>查看TA的文章></span></div>-->
<!--          </div>-->
<!--          <div class="commentAshare" :class="{fix:fixShow}">-->
<!--            <div class="comment">-->
<!--              <div class="commentTitle"><span>评论</span></div>-->
<!--              <div class="commentIcon">-->
<!--                <svg class="icon" aria-hidden="true"><use xlink:href="#icon-wenzhen"></use></svg>-->
<!--              </div>-->
<!--              <div class="commentNum"><span>0</span></div>-->
<!--            </div>-->
<!--            <div class="share">-->
<!--              <div class="shareTitle"><span>分享</span></div>-->
<!--              <div class="shareLink shareLink1">-->
<!--                <div class="shareLink1Wrap">-->
<!--                  <div class="connectTriangle"></div>-->
<!--                </div>-->
<!--                <div class="shareImg shareImg1">-->
<!--                  <svg class="icon" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg>-->
<!--                </div>-->
<!--                <span class="shareSmallTitle">微信分享</span>-->
<!--                <div class="leftShareLinkHidden">-->
<!--                  <div class="twoDimensionCode"><img :src="imgSrc"></div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="shareLink shareLink2">-->
<!--                <div class="shareImg shareImg2"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-xinlang"></use></svg></div>-->
<!--                <span class="shareSmallTitle">新浪微博</span>-->
<!--              </div>-->
<!--              <div class="shareLink shareLink3">-->
<!--                <div class="shareImg shareImg3"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-qzone"></use></svg></div>-->
<!--                <span class="shareSmallTitle">QQ空间</span>-->
<!--              </div>-->
<!--              <div class="shareLink shareLink4">-->
<!--                <div class="shareImg shareImg4"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-lianjie"></use></svg></div>-->
<!--                <span class="shareSmallTitle">复制链接</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--    中间文章主要部分（文章内容图片、大家都在看、淘宝广告向下轮播、登录发表、推荐阅读）    -->
        <article-mid :content="content"></article-mid>
<!--        <div class="mid floatLeft">-->
<!--          <div class="content">-->
<!--            <div class="titleAtime">-->
<!--              <h2>香港特区政府推出新冠疫苗一站式资讯平台</h2>-->
<!--              <div class="titleTime">2021-01-29 17:21</div>-->
<!--            </div>-->
<!--            <h4 class="contentImportant">(抗击新冠肺炎)香港特区政府推出新冠疫苗一站式资讯平台</h4>-->
<!--            <div class="contentShow">-->
<!--              <div class="realContent">-->
<!--                <p class="content1">中新社香港1月29日电 (记者 曾平)香港特区政府29日推出“2019冠状病毒病疫苗接种计划”网站(www.covidvaccine.gov.hk)，一站式向市民发放新冠疫苗的官方和最新资讯。待新冠疫苗接种计划正式展开后，网站亦会提供疫苗接种计划的详情，并会连结计划的网上预约系统，方便市民在网上预约接种疫苗的时间和地点。</p>-->
<!--                <img class="img1" src="https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg">-->
<!--                <p>资料图：1月28日晚上，香港特区政府在北角指明“受限区域”，即锦屏街东发大厦A、B、C和D座内的人士须留在其处所并按特区政府安排接受强制检测。图为居民登记返回处所。 中新社记者 李志华 摄 </p>-->
<!--                <p>特区政府发言人说，市民早日接种安全和有效的新冠疫苗，是防控疫情非常重要的一环，亦是市民恢复较正常生活和香港经济活动得以恢复的关键。接种疫苗不仅可以保护自己，亦可以保护其他人，并且可以减轻医疗系统的负担。</p>-->
<!--                <p>据介绍，专题网站以文字、资讯图表和多媒体形式，就特区政府采购的新冠疫苗以及疫苗接种计划发放准确和第一手的资讯，并澄清不实信息，让市民对有关事宜有正确的认识。</p>-->
<!--                <p>网站目前的主要内容包括“最新消息”“常见问题”“教育及媒体资源”“‘医健通’及查询疫苗接种纪录”以及“医护专业栏目”。当中，“最新消息”包括哪一种疫苗已按规例获认可在香港紧急使用，以及独立的顾问专家委员会就疫苗的专业建议和意见；“常见问题”包括接种新冠疫苗的好处、可供选择的新冠疫苗、使用新冠疫苗的建议、不同组别或情况是否应该接种新冠疫苗等。</p>-->
<!--                <p>发言人表示，新冠疫苗是新事物，相信通过多认识、多了解，市民能更明白接种疫苗的好处和重要性，释除对接种的疑虑。</p>-->
<!--                <p>香港医疗人员总工会主席潘佩璆接受中新社记者采访时表示，2月开始应有新冠疫苗抵港，特区政府此时推出新冠疫苗一站式资讯平台非常及时。各种不同技术新冠疫苗的长处、短处及相关证据，应赴何处接种何款疫苗，某款疫苗不适合哪类人群接种等讯息都是市民的关注点，资讯平台应通过易懂的方式让市民知道这些讯息。</p>-->
<!--                <p class="lastLine">他指出，目前欧美出现疫苗供应短缺，特区政府要确保疫苗第一针和第二针的供货。待开始实施接种计划时，:cla关键是要让市民能够方便地接种。(完)<a><img src="@/assets/logo.png">返回搜狐，查看更多</a></p>-->
<!--                <p class="statement">声明：该文观点仅代表作者本人，搜狐号系信息发布平台，搜狐仅提供信息存储空间服务。</p>-->
<!--              </div>-->
<!--              <div class="praiseAreads">-->
<!--                <div class="praise floatLeft"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-dianzan"></use></svg><span>首赞</span></div>-->
<!--                <div class="readNum floatRight">阅读 (6022)</div>-->
<!--              </div>-->
<!--              <div class="foolLook">-->
<!--                <div class="foolLookTitle">-->
<!--                  <span>大家都在看</span>-->
<!--                </div>-->
<!--                <div class="foolLookContent">-->
<!--                  <div class="foolLookContentBlock" v-for="(item,index) in foolLookContent" :key="index">-->
<!--                    <div class="foolLookContentImg"><img :src="item.foolLookImg"></div>-->
<!--                    <div class="foolLookContentTitle">{{item.foolLookTitle}}</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="ad">-->
<!--                <div class="adLogo floatLeft"><a class="adLogoLink"></a></div>-->
<!--                <div class="scrollFrame floatLeft">-->
<!--                  <ul :class="{animationStop:animationCheck}" ref="scrollFrameUl">-->
<!--                    <li v-for="(item,index) in 3" :key="index" :class="'li'+index">-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[index*index]}}</div>-->
<!--                      </div>-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[index*index+1]}}</div>-->
<!--                      </div>-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[index*index+2]}}</div>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                    <li class="li0">-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[0]}}</div>-->
<!--                      </div>-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[1]}}</div>-->
<!--                      </div>-->
<!--                      <div class="adBlock floatLeft">-->
<!--                        <div class="adImg"><img :src="imgSrc"></div>-->
<!--                        <div class="adInfo">￥{{adPrices[2]}}</div>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--                <div class="scrollTriggers floatLeft">-->
<!--                  <ul>-->
<!--                    <li v-for="(item,index) in 3" :key="index" :class="{currentLi:triggersIndex===index}" @mouseover="adTriggersHover(index)"></li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--                <div class="scrollLinkBlock floatLeft">-->
<!--                  <ul ref="">-->
<!--                    <li v-for="(item,index) in adLinkName" :key="index" :class="{currentLi:linksIndex===index}"><a href="#">{{item}}</a></li>-->
<!--                    <li class="nowLinkBlock"></li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="letMeTalk">-->
<!--                <div class="letMeTalkDescription">-->
<!--                  <div class="letMeTalkTitle floatLeft">我来说两句</div>-->
<!--                  <div class="sunFollow floatRight"><img></div>-->
<!--                  <div class="involve floatRight"><span>0</span>人参与，<span>0</span>人评论</div>-->
<!--                </div>-->
<!--                <div class="letMeTalkInput" @click="letMeTalkInputClick">-->
<!--                  <textarea placeholder="来说两句吧...." :class="{textareaClick:textareaClickCheck}"></textarea>-->
<!--                  <div class="hidePlace" :class="{show:hideShow}">-->
<!--                    <span>快速登录：</span>-->
<!--                    <a href="#"><svg class="icon icon1" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>-->
<!--                    <a href="#"><svg class="icon icon2" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>-->
<!--                    <a href="#"><svg class="icon icon3" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>-->
<!--                    <a href="#"><svg class="icon icon4" aria-hidden="true"><use xlink:href="#icon-weixin"></use></svg></a>-->
<!--                  </div>-->
<!--                  <a class="loginAsubmit" href="#">登录并发表</a>-->
<!--                </div>-->
<!--                <div class="userDeal">搜狐“我来说两句” 用户公约</div>-->
<!--              </div>-->
<!--              <div class="badRead">-->
<!--                <div class="badReadTitle">推荐阅读</div>-->
<!--                <div class="badReadContent">-->
<!--                  <ul>-->
<!--                    <li class="badReadRow">-->
<!--                      <div class="articleImg floatLeft"><img :src="imgSrc"></div>-->
<!--                      <div class="articleTitle floatLeft">猪身上“最脏”的器官，里面含有大量寄生虫，却有人把它当美食</div>-->
<!--                      <div class="articleDetail floatLeft">-->
<!--                        <div class="articleAvatar floatLeft"><img src="@/assets/logo.png"></div>-->
<!--                        <div class="articleAuthor floatLeft">老康看社会</div>-->
<!--                        <div class="articleTime floatLeft">01-27 21:21</div>-->
<!--                        <div class="articleComment floatRight">5<svg class="icon" aria-hidden="true"><use xlink:href="#icon-xiaoxi"></use></svg></div>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--    右边大家都在搜、广告区    -->
        <article-right></article-right>
<!--        <div class="right floatLeft">-->
<!--          <div class="foolSearch">-->
<!--            <input placeholder="大家都在搜：毛晓彤陈翔录音" />-->
<!--            <div class="searchArea">-->
<!--              <svg class="icon" aria-hidden="true">-->
<!--                <use xlink:href="#icon-xiaoxi"></use>-->
<!--              </svg>-->
<!--            </div>-->
<!--          </div>-->
<!--        <div class="rightAD">-->
<!--          <ul>-->
<!--            <li>-->
<!--              <img :src="vueImgSrc" v-img-src-default="imgWrongSrc">-->
<!--              <p class="adDescrip">家具装修装潢</p>-->
<!--            </li>-->
<!--            <li>-->
<!--              <img :src="vueImgSrc" v-img-src-default="imgWrongSrc">-->
<!--              <p class="adDescrip">家具装修装潢</p>-->
<!--            </li>-->
<!--            <li>-->
<!--              <img :src="imgSrc">-->
<!--              <p class="adDescrip">家具装修装潢</p>-->
<!--            </li>-->
<!--            <li>-->
<!--              <img :src="imgSrc">-->
<!--              <p class="adDescrip">家具装修装潢</p>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--        </div>-->
      </div>
<!--   神奇的固定定位栏   -->
      <article-fix-right></article-fix-right>
<!--      <div class="fixArea">-->
<!--        <ul>-->
<!--          <li class="backIndex">-->
<!--            <router-link to="#">返回首页</router-link>-->
<!--          </li>-->
<!--          <li class="userFeedback">-->
<!--            <router-link to="#">用户反馈</router-link>-->
<!--          </li>-->
<!--          <li class="backToTop" v-to-top-item="backToTopType">-->
<!--            <svg class="icon" aria-hidden="true"><use xlink:href="#icon-huojian"></use></svg>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import articleTopBar from './components/article/articleTopBar'
import articleLeft from './components/article/articleLeft'
import articleMid from './components/article/articleMid'
import articleRight from './components/article/articleRight'
import articleFixRight from './components/article/articleFixRight'
export default {
  name: 'index',
  components: {
    articleTopBar,
    articleLeft,
    articleMid,
    articleRight,
    articleFixRight
  },
  data () {
    return {
      // vueImgSrc: require('@/assets/logo.png'),
      // imgWrongSrc: () => require('@/assets/logo.png'),
      // imgSrc: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      // topBarLink: ['新闻', '体育', '汽车', '房产', '旅游', '教育', '时尚', '科技', '财经', '娱乐'],
      // adPrices: ['85.11', '294', '366', '486', '138', '20', '439', '15', '235'],
      // adLinkName: ['雪纺衫', '无线耳机', '华为手机', '苹果', '口红'],
      // topBarMoreHide: ['母婴', '健康', '历史', '军事', '美食', '文化', '星座', '专题', '游戏', '搞笑', '动漫', '宠物'],
      // foolLookContent: [
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   },
      //   {
      //     foolLookImg: 'https://p7.itc.cn/q_70/images03/20210129/48bd93febdd347e2a26c2617401260f4.jpeg',
      //     foolLookTitle: '55岁歌手张三病情恶化，妻子仍不离不弃，如今的他已成这个样子'
      //   }
      // ],
      // currentIndex: 0,
      // triggersIndex: 0,
      // linksIndex: 0,
      // animationCheck: false,
      // intervalID: 5,
      // backIntervalID: 5,
      // hideShow: false,
      // fixShow: false,
      // moreHideContentCheck: false,
      // textareaClickCheck: false,
      // backToTopType: 'opacity',
      author: {
        authorDetail: {
          authorAvatar: require('@/assets/logo.png'),
          authorData: {
            articleNum: '233万',
            articleRead: '626亿'
          }
        }
      },
      commentment: {
        comment: {
          commentNum: '0'
        }
      },
      content: {
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
  },
  mounted () {
    // this.adImgIndexScroll()
    // this.listenScroll()
  },
  methods: {
    // adImgScroll () {
    //   const adUl = this.$refs.scrollFrameUl
    //   adUl.style.transform = `translateY(-${this.currentIndex * 150}px)`
    // },
    // adImgIndexScroll () {
    //   this.backIntervalID = this.intervalID
    //   const adUl = this.$refs.scrollFrameUl
    //   this.intervalID = setInterval(() => {
    //     this.currentIndex++
    //     this.linksIndex++
    //     adUl.style.transition = '.5s linear'
    //     if (this.currentIndex === 4) {
    //       adUl.style.transition = 'none'
    //       this.currentIndex = 0
    //     }
    //     this.triggersIndex = this.currentIndex
    //     if (this.currentIndex === 3) this.triggersIndex = 0
    //     if (this.linksIndex === 5) this.linksIndex = 0
    //     this.adImgScroll()
    //   }, 2000)
    // },
    // adTriggersHover (index) {
    //   clearInterval(this.intervalID)
    //   this.intervalID = this.backIntervalID
    //   this.currentIndex = index
    //   this.triggersIndex = index
    //   const adUl = this.$refs.scrollFrameUl
    //   adUl.style.transform = `translateY(-${this.currentIndex * 150}px)`
    //   setTimeout(() => {
    //     this.adImgIndexScroll()
    //   }, 0)
    // },
    // listenScroll () {
    //   window.addEventListener('scroll', () => {
    //     this.fixShow = document.documentElement.scrollTop >= 280
    //   })
    // },
    // moreAreaHover () {
    //   this.moreHideContentCheck = true
    // },
    // moreHiddenAreaLeave () {
    //   this.moreHideContentCheck = false
    // },
    // letMeTalkInputClick () {
    //   this.textareaClickCheck = true
    //   this.hideShow = true
    // }
  }
/*  destroyed () {
    clearInterval(this.intervalID)
  } */
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
  /*.topBarArea {*/
  /*  width: 1200px;*/
  /*  margin: 0 auto;*/
  /*}*/
  /*.topBar {*/
  /*  position: fixed;*/
  /*  top: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  color: #fff;*/
  /*  background-color: #000;*/
  /*  padding: 3px 0;*/
  /*  z-index: 666;*/
  /*}*/
  /*.topBar::after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  clear: both;*/
  /*}*/
  /*.topBar ul {*/
  /*  line-height: 34px;*/
  /*}*/
  /*.topBar ul li {*/
  /*  font-size: 16px;*/
  /*  padding: 0 21px;*/
  /*}*/
  /*.topBar ul li:hover {*/
  /*  background-color: #555555;*/
  /*}*/
  /*.topBar ul a{*/
  /*  cursor: pointer;*/
  /*}*/
  /*.topBar ul .moreArea {*/
  /*  position: relative;*/
  /*  cursor: pointer;*/
  /*}*/
  /*.topBar ul .moreArea svg {*/
  /*  transition: all .3s cubic-bezier(.77,0,.18,1);*/
  /*}*/
  /*.topBar ul .moreArea .moreHideContent {*/
  /*  display: none;*/
  /*  opacity: 0;*/
  /*  position: absolute;*/
  /*  top: 37px;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%);*/
  /*  width: 210px;*/
  /*  height: 100px;*/
  /*  padding: 10px 15px;*/
  /*  background-color: #fff;*/
  /*  font-size: 12px;*/
  /*  color: #000;*/
  /*  box-shadow: 0 0 5px 5px rgba(0,0,0,.2);*/
  /*  transition: all .3s cubic-bezier(.77,0,.18,1);*/
  /*}*/
  /*.topBar .topBarMoreHideLi {*/
  /*  display: inline-block;*/
  /*  padding: 0 10px;*/
  /*}*/
  /*.topBar .topBarMoreHideLi:hover {*/
  /*  background-color: #cdcdcd;*/
  /*}*/
  /*.topBar ul::after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  clear: both;*/
  /*}*/
  /*.topBar .webTitle {*/
  /*  padding-right: 80px;*/
  /*}*/
  /*.topBar .webTitle:hover {*/
  /*  color: #ff9900;*/
  /*}*/
  /*.topBar  .loginArea {*/
  /*  margin-left: 60px;*/
  /*}*/
  /*.topBar .loginArea li {*/
  /*  padding: 0 60px;*/
  /*}*/

  .contentArea {
    width: 1200px;
    margin: 90px auto;
  }
  /*.mainBase .fixArea {*/
  /*  width: 60px;*/
  /*  position: fixed;*/
  /*  left: 50%;*/
  /*  bottom: 170px;*/
  /*  margin-left: 620px;*/
  /*}*/
  /*.mainBase .fixArea ul {*/
  /*  text-align: center;*/
  /*}*/
  /*.mainBase .fixArea ul {*/
  /*  text-align: center;*/
  /*}*/
  /*.mainBase .fixArea ul .backIndex a{*/
  /*  color: #000;*/
  /*  background-color: #ffdf00;*/
  /*}*/
  /*.mainBase .fixArea ul .userFeedback a{*/
  /*  color: #fff;*/
  /*}*/
  /*.mainBase .fixArea ul .backToTop{*/
  /*  font-size: 16px;*/
  /*  padding: 12px;*/
  /*  !*opacity: 0;*!*/
  /*}*/
  /*.mainBase .fixArea ul li {*/
  /*  background-color: #797979;*/
  /*  margin-top: 2px;*/
  /*  font-size: 12px;*/
  /*  opacity: 0.8;*/
  /*}*/
  /*.mainBase .fixArea ul li a{*/
  /*  display: inline-block;*/
  /*  padding: 14px;*/
  /*}*/
  /*.mainBase .fixArea ul li:hover{*/
  /*  opacity: 1;*/
  /*}*/
  /*.contentArea::after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  clear: both;*/
  /*}*/
  /*.contentArea .left .authorArea {*/
  /*  position: relative;*/
  /*  width: 140px;*/
  /*  height: 210px;*/
  /*  outline: 1px solid #e6e6e6;*/
  /*  text-align: center;*/
  /*}*/
  /*.contentArea .left .authorArea .authorDetail{*/
  /*  position: absolute;*/
  /*  top: -30px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*}*/
  /*.contentArea .left .authorAvatar{*/
  /*  position: relative;*/
  /*  width: 70px;*/
  /*  height: 70px;*/
  /*  display: inline-block;*/
  /*  border-radius: 50%;*/
  /*  overflow: hidden;*/
  /*  border: 1px solid #e6e6e6;*/
  /*  padding-bottom: 10px;*/
  /*}*/
  /*.contentArea .left .authorAvatar img{*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*  bottom: 0;*/
  /*  margin: auto;*/
  /*  width: 80px;*/
  /*  height: 80px;*/
  /*  transform: translateX(-50%);*/
  /*}*/
  /*.contentArea .left .authorName {*/
  /*  padding-bottom: 5px;*/
  /*}*/
  /*.contentArea .left .authorScore{*/
  /*  padding-bottom: 10px;*/
  /*}*/
  /*.contentArea .left .authorScore .icon{*/
  /*  width: 1.5em;*/
  /*  height: 1.5em;*/
  /*}*/
  /*.contentArea .left .authorData {*/
  /*  font-size: 16px;*/
  /*}*/
  /*.contentArea .left .authorData .articleNum {*/
  /*  border-right: 1px solid #e6e6e6;*/
  /*}*/
  /*.contentArea .authorDataDisplay {*/
  /*  display: inline-block;*/
  /*  padding: 0 10px;*/
  /*}*/
  /*.contentArea .authorDataTitle {*/
  /*  font-size: 12px;*/
  /*  color: #656565;*/
  /*}*/
  /*.contentArea .authorArea .authorLink {*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  background-color: #fcfcfc;*/
  /*  font-size: 12px;*/
  /*  padding: 5px 20px;*/
  /*  color: #656565;*/
  /*}*/
  /*.contentArea .left .authorArea {*/
  /*  margin-bottom: 34px;*/
  /*}*/
  /*.contentArea .left .comment {*/
  /*  text-align: center;*/
  /*  border-top: 1px solid #e6e6e6;*/
  /*  margin-bottom: 32px;*/
  /*}*/
  /*.contentArea .left .comment .commentTitle {*/
  /*  position: relative;*/
  /*  top: -11px;*/
  /*  display: inline-block;*/
  /*  width: 50px;*/
  /*  background-color: #fff;*/
  /*  font-size: 14px;*/
  /*  margin-bottom: -5px;*/
  /*}*/
  /*.contentArea .left .comment .commentIcon {*/
  /*  margin-top: -5px;*/
  /*}*/
  /*.contentArea .left .comment .commentIcon svg {*/
  /*  height: 2.4em;*/
  /*  width: 2.4em;*/
  /*}*/
  /*.contentArea .left .comment .commentNum {*/
  /*  font-size: 20px;*/
  /*  color: #d00000;*/
  /*}*/
  /*.contentArea .left .share {*/
  /*  border-top: 1px solid #e6e6e6;*/
  /*  text-align: center;*/
  /*  font-size: 14px;*/
  /*  padding: 0 28px;*/
  /*}*/
  /*.contentArea .left .share .shareTitle{*/
  /*  position: relative;*/
  /*  top: -11px;*/
  /*  display: inline-block;*/
  /*  width: 50px;*/
  /*  background-color: #fff;*/
  /*  font-size: 14px;*/
  /*  margin-bottom: -5px;*/
  /*}*/
  /*.contentArea .left .share .shareLink {*/
  /*  height: 20px;*/
  /*  line-height: 20px;*/
  /*  margin-bottom: 20px;*/
  /*  opacity: 0.8;*/
  /*}*/
  /*.contentArea .left .share .shareLink:hover {*/
  /*  cursor: pointer;*/
  /*  opacity: 1;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 {*/
  /*  position: relative;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .shareLink1Wrap{*/
  /*  position: absolute;*/
  /*  top: -5px;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  bottom: 0;*/
  /*  overflow: hidden;*/
  /*}*/
  /*.contentArea .left .share .shareLink1:hover .leftShareLinkHidden{*/
  /*  display: block;*/
  /*}*/
  /*.contentArea .left .share .shareLink1:hover .connectTriangle{*/
  /*  display: block;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .leftShareLinkHidden {*/
  /*  display: none;*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%);*/
  /*  top: -120px;*/
  /*  box-shadow: 0 0 5px #9c9c9c;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .connectTriangle{*/
  /*  display: none;*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%) rotate(-45deg);*/
  /*  border-left: 10px solid transparent;*/
  /*  border-top: 10px solid transparent;*/
  /*  top: -5px;*/
  /*  box-shadow: 0 0 5px #9c9c9c;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .leftShareLinkHidden svg{*/
  /*  color: #fff;*/
  /*  width: 1em;*/
  /*  height: 1em;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .leftShareLinkHidden .twoDimensionCode{*/
  /*  padding: 5px;*/
  /*}*/
  /*.contentArea .left .share .shareLink1 .leftShareLinkHidden .twoDimensionCode img{*/
  /*  width: 100px;*/
  /*  height: 100px;*/
  /*}*/
  /*.contentArea .left .share .shareImg {*/
  /*  width: 20px;*/
  /*  height: 20px;*/
  /*  display: inline-block;*/
  /*  float: left;*/
  /*}*/
  /*.contentArea .left .share .shareImg svg {*/
  /*  color: #fff;*/
  /*}*/
  /*.contentArea .left .share .shareImg .icon{*/
  /*  height: 1em;*/
  /*  width: 1em;*/
  /*}*/
  /*.contentArea .left .share .shareImg1 {*/
  /*  background-color: #95db29;*/
  /*}*/
  /*.contentArea .left .share .shareImg2 {*/
  /*  background-color: #ff4b4b;*/
  /*}*/
  /*.contentArea .left .share .shareImg3 {*/
  /*  background-color: #ffb300;*/
  /*}*/
  /*.contentArea .left .share .shareImg4 {*/
  /*  background-color: grey;*/
  /*}*/
  /*.contentArea .left .share .shareSmallTitle {*/
  /*  font-size: 12px;*/
  /*  vertical-align: top;*/
  /*  color: #313131;*/
  /*}*/
  /*.contentArea .mid .content {*/
  /*  display: inline-block;*/
  /*  width: 640px;*/
  /*  margin: -12px 30px;*/
  /*}*/
  /*.contentArea .mid .content .titleAtime h2{*/
  /*  font-size: 28px;*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .titleAtime .titleTime{*/
  /*  font-size: 13px;*/
  /*  color: #9c9c9c;*/
  /*  margin-bottom: 26px;*/
  /*}*/
  /*.contentArea .mid .content .contentImportant {*/
  /*  margin-bottom: 30px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow {*/
  /*  font-weight: 400;*/
  /*}*/
  /*.contentArea .mid .content .contentShow p{*/
  /*  line-height: 32px;*/
  /*  margin-bottom: 30px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .lastLine img{*/
  /*  display: inline-block;*/
  /*  height: 1em;*/
  /*  width: 1em;*/
  /*  vertical-align: middle;*/
  /*  margin: 0 5px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .lastLine a{*/
  /*  color: #118fc1;*/
  /*  cursor: pointer;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .lastLine a:hover{*/
  /*  color: #76d9ff;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .content1 {*/
  /*  display: inline-block;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .img1 {*/
  /*  width: 100%;*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .statement {*/
  /*  margin-top: -10px;*/
  /*  font-size: 12px;*/
  /*  color: #9c9c9c;*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .praise {*/
  /*  height: 30px;*/
  /*  line-height: 30px;*/
  /*  font-size: 12px;*/
  /*  border: 1px solid #d4d4d4;*/
  /*  border-radius: 30px;*/
  /*  padding: 3px 18px;*/
  /*  cursor: pointer;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .readNum {*/
  /*  color: #494949;*/
  /*  font-size: 12px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .praise span{*/
  /*  vertical-align: top;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .praiseAreads {*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .praiseAreads::after {*/
  /*     content: '';*/
  /*     display: block;*/
  /*     clear: both;*/
  /*   }*/
  /*.contentArea .mid .content .contentShow .foolLook {*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook:after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  clear: both;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookTitle{*/
  /*  height: 30px;*/
  /*  line-height: 30px;*/
  /*  margin-bottom: 10px;*/
  /*  font-size: 18px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookTitle span{*/
  /*  padding-left: 15px;*/
  /*  border-left: 4px solid greenyellow;*/
  /*  margin-bottom: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookContentImg{*/
  /*  overflow: hidden;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook img{*/
  /*  height: 120px;*/
  /*  width: 200px;*/
  /*  transition: all 1s linear;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook img:hover{*/
  /*  transform: scale(1.1);*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookContentBlock{*/
  /*  float: left;*/
  /*  width: 200px;*/
  /*  margin-right: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookContentBlock:nth-child(3n){*/
  /*  margin-right: 0;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .foolLook .foolLookContentTitle{*/
  /*  display: -webkit-box;*/
  /*  -webkit-line-clamp: 2;*/
  /*  -webkit-box-orient:vertical;*/
  /*  text-overflow: ellipsis;*/
  /*  overflow:hidden;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad {*/
  /*  border: 1px solid red;*/
  /*  height: 150px;*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .adLogo {*/
  /*  display: inline-block;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .adLogoLink {*/
  /*  height: 150px;*/
  /*  display: inline-block;*/
  /*  width: 50px;*/
  /*  background: url("https://img.alicdn.com/tps/TB1kBaWPpXXXXb8XFXXXXXXXXXX-50-149.png");*/
  /*  background-size: contain;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame {*/
  /*  width: 500px;*/
  /*  height: 100%;*/
  /*  overflow: hidden;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame ul {*/
  /*  width: 500px;*/
  /*  height: 100%;*/
  /*  transition: .5s linear;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame li{*/
  /*  height: 150px;*/
  /*  width: 100%;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .li0{*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .adBlock{*/
  /*  height: 150px;*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .adBlock:nth-child(3n){*/
  /*  margin-right: 0;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .adImg{*/
  /*  height: 125px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .adImg img{*/
  /*  height: 100%;*/
  /*  width: 160px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollFrame .adInfo{*/
  /*  font-size: 16px;*/
  /*  padding: 3px;*/
  /*  color: #ff4401;*/
  /*  font-weight: 600;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollTriggers {*/
  /*  position: relative;*/
  /*  height: 100%;*/
  /*  margin: 0 5px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollTriggers ul{*/
  /*  height: 100%;*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  justify-content: space-around;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollTriggers li{*/
  /*  width: 8px;*/
  /*  height: 8px;*/
  /*  background-color: #c1c1c1;*/
  /*  border-radius: 50%;*/
  /*}*/
  /*#sohu .contentArea .mid .content .contentShow .ad  .currentLi {*/
  /*  background-color: #ff4401;*/
  /*  color: #fff;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollLinkBlock {*/
  /*  position: relative;*/
  /*  height: 100%;*/
  /*  width: 70px;*/
  /*  text-align: center;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollLinkBlock ul{*/
  /*  height: 100%;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollLinkBlock li{*/
  /*  height: 20%;*/
  /*  color: #fff;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .ad .scrollLinkBlock li a{*/
  /*  color: #a1a1a1;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadTitle{*/
  /*  padding-left: 15px;*/
  /*  border-left: 4px solid greenyellow;*/
  /*  margin-bottom: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleImg img{*/
  /*  width: 170px;*/
  /*  height: 120px;*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow li{*/
  /*  width: 450px;*/
  /*  font-size: 18px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail {*/
  /*  margin-top: 20px;*/
  /*  width: 70%;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleTitle{*/
  /*  width: 450px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleAvatar{*/
  /*  position: relative;*/
  /*  width: 20px;*/
  /*  height: 20px;*/
  /*  border-radius: 50%;*/
  /*  border: 1px solid #797979;*/
  /*  overflow: hidden;*/
  /*  margin-right: 10px;*/
  /*  line-height: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail img{*/
  /*  position: absolute;*/
  /*  top: 50%;*/
  /*  bottom: 0;*/
  /*  left: 50%;*/
  /*  transform: translateX(-50%) translateY(-50%);*/
  /*  right: 0;*/
  /*  width: 25px;*/
  /*  height: 25px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleAuthor{*/
  /*  font-size: 13px;*/
  /*  color: #5c5c5c;*/
  /*  vertical-align: top;*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleTime {*/
  /*  font-size: 13px;*/
  /*  color: #5c5c5c;*/
  /*  vertical-align: top;*/
  /*  margin-right: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleComment{*/
  /*  vertical-align: top;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .badRead .badReadRow .articleDetail .articleComment svg{*/
  /*  width: 1em;*/
  /*  height: 1em;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk {*/
  /*  margin-bottom: 20px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .letMeTalkDescription::after{*/
  /*  display: block;*/
  /*  content: '';*/
  /*  clear: both;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .letMeTalkTitle{*/
  /*  padding-left: 15px;*/
  /*  border-left: 4px solid greenyellow;*/
  /*  margin-bottom: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .involve span{*/
  /*  font-size: 20px;*/
  /*  color: #ff7272;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput {*/
  /*  position: relative;*/
  /*  margin-bottom: 10px;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput textarea{*/
  /*  width: 100%;*/
  /*  height: 36px;*/
  /*  transition: all 0.5s linear;*/
  /*  padding-top: 8px;*/
  /*  box-sizing: border-box;*/
  /*}*/
  /*#sohu .contentArea .mid .content .contentShow .letMeTalk .textareaClick{*/
  /*  height: 100px;*/
  /*  border-color: #e20101;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk .letMeTalkInput .loginAsubmit{*/
  /*  position: absolute;*/
  /*  right: -1px;*/
  /*  bottom: 1px;*/
  /*  display: inline-block;*/
  /*  width: 80px;*/
  /*  height: 36px;*/
  /*  background-color: #e20101;*/
  /*  color: #fff;*/
  /*  line-height: 36px;*/
  /*  font-size: 14px;*/
  /*  text-align: center;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .userDeal {*/
  /*  font-size: 12px;*/
  /*  color: #9c9c9c;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace {*/
  /*  width: 80%;*/
  /*  bottom: 0;*/
  /*  position: absolute;*/
  /*  height: 36px;*/
  /*  line-height: 36px;*/
  /*  padding-left: 8px;*/
  /*  box-sizing: border-box;*/
  /*  opacity: 0;*/
  /*  transition: all 1s linear;*/
  /*  z-index: -1;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace span{*/
  /*  vertical-align: top;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace svg{*/
  /*  vertical-align: middle;*/
  /*  width: 1.8em;*/
  /*  height: 1.8em;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon1{*/
  /*  color: #bbbb00;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon2{*/
  /*  color: #7cbb14;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon3{*/
  /*  color: #0b68bf;*/
  /*}*/
  /*.contentArea .mid .content .contentShow .letMeTalk  .hidePlace .icon4{*/
  /*  color: #b40707;*/
  /*}*/
  /*.contentArea .right {*/
  /*  width: 320px;*/
  /*  padding: 0 10px;*/
  /*  margin: 0 0 0 20px;*/
  /*}*/
  /*.contentArea .right .foolSearch {*/
  /*  position: relative;*/
  /*  margin-bottom: 40px;*/
  /*}*/
  /*.contentArea .right .foolSearch .searchArea{*/
  /*  position: absolute;*/
  /*  top: 0;*/
  /*  right: -2px;*/
  /*  height: 100%;*/
  /*  width: 60px;*/
  /*  background-color: #e8e802;*/
  /*  text-align: center;*/
  /*  line-height: 36px;*/
  /*}*/
  /*.contentArea .right .foolSearch svg{*/
  /*  width: 1.8em;*/
  /*  height: 1.8em;*/
  /*  vertical-align: middle;*/
  /*}*/
  /*.contentArea .right .foolSearch input{*/
  /*  width: 100%;*/
  /*  height: 36px;*/
  /*}*/
  /*.contentArea .right .rightAD {*/
  /*  margin-bottom: 40px;*/
  /*}*/
  /*.contentArea .right .rightAD ul::after {*/
  /*  display: block;*/
  /*  content: '';*/
  /*  clear: both;*/
  /*}*/
  /*.contentArea .right .rightAD li {*/
  /*  float: left;*/
  /*  width: 48%;*/
  /*  margin-right: 6px;*/
  /*}*/
  /*.contentArea .right .rightAD li:nth-last-child(1) {*/
  /*  margin-right: 0;*/
  /*}*/
  /*.contentArea .right .rightAD img{*/
  /*  width: 156px;*/
  /*  height: 100px;*/
  /*}*/
  /*.contentArea .right .rightAD .adDescrip{*/
  /*  text-align: center;*/
  /*  padding: 2px;*/
  /*}*/
</style>
