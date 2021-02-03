import Vue from 'vue'
import './infinityScroll'
import {defaultSrc, imgSrcDefault, exileScroll, scrollDeal} from '../utils'
Vue.directive('toTopItem', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    // 监听页面滚动距离
    scrollDeal(el, binding.value)
  },
  unbind: function (el) {
    exileScroll(el)
  }
})
// 注册一个全局自定义指令 `v-focus`
Vue.directive('imgDefault', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    defaultSrc(el)
  }
})
// 注册一个全局自定义指令 `v-imgSrcDefault`
Vue.directive('imgSrcDefault', {
  /**
   * 当被插入时，获取binding中的value，无论他是卡住还是404，都会用await等待，默认先显示默认图片，await等待成功或失败的数据set进去即可
   * @param el
   * @param binding
   * @returns {Promise<void>}
   */
  inserted: async function (el, binding) {
    // 聚焦元素
    imgSrcDefault(el, binding)
  }
})
