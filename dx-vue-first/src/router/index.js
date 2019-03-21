import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyApp from '@/mypage/MyApp'
import MyPageList from '@/mypage/MyPageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/MyApp',
      name: 'MyApp',
      component: MyApp
    },
    {
      path: '/MyPageList',
      name: 'MyPageList',
      component: MyPageList
    }
  ]
})
