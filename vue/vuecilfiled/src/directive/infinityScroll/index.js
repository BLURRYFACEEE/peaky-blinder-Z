// 注册一个无限滚动区域指令 `v-infinityScroll`
import Vue from 'vue'
import {infinityScroll} from './infiniteScroll'

Vue.directive('infinityScroll', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el, binding) {
    // 聚焦元素
    infinityScroll(el, binding)
  },
  componentUpdated: function (el, binding) {
    // 聚焦元素
    infinityScroll(el, binding)
  }
})
