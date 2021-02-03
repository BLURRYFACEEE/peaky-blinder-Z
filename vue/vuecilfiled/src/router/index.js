import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/diyinstruction',
      name: 'diyinstruction',
      component: () => import('@/views/diyinstruction')
    },
    {
      path: '/mixinTest',
      name: 'mixinTest',
      component: () => import('@/views/mixinTest')
    },
    {
      path: '/pages/sohu',
      name: 'sohu',
      component: () => import('@/views/pages/sohu')
    }
  ]
})
