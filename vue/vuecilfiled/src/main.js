// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './directive'
import './assets/icon/testIcon'
Vue.config.productionTip = false

// 解决 [WDS] Disconnected!
if (module.hot) {
  module.hot.accept()
}

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
