import Vue from 'vue'
import Router from 'vue-router'


import Simple from '@/components/router/Simple'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple',
      component: Simple,
      alias: '/asdfasfsaf'
    },
    {
      path: '/test',
      name: 'simple',
      component: Simple,
    }]
})


Vue.use(Router)
