import Vue from 'vue'
import Swiper from 'Swiper'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import demo01 from '@/components/swiper/demo01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo01',
      name: 'demo01',
      component: demo01
    }
  ]
})
