import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'


import a from '@/components/a'
import b from '@/components/b'
import c from '@/components/c'
import d from '@/components/d'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      name: 'a',
      path: '/a',
      component: a
    },
    {
      name: 'b',
      path: '/b',
      component: b
    },
    {
      name: 'c',
      path: '/c',
      component: c
    },
    {
      name: 'd',
      path: '/d',
      component: d
    }
  ]
})
