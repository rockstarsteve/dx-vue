import Vue from 'vue'
import Router from 'vue-router'

// 按需加载
// eslint-disable-next-line no-unused-vars
import {home, showlist, erro404, main, login, showGoods, showOrder} from '../views'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: '/showlist',
          component: showlist
        },
        {
          path: '/showGoods',
          component: showGoods
        },
        {
          path: '/showOrder',
          component: showOrder
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      component: erro404
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  // ...

  console.log(to.fullPath !== '/login')
  if (to.fullPath !== '/login') {
    if (!sessionStorage.getItem('loginUser')) {
      return next('/login')
    }
  }

  next()
})
