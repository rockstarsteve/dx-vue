import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyApp from '@/mypage/MyApp'
import MyPageList from '@/mypage/MyPageList'
import MyApp2 from '@/mypage/MyApp2'
import MyApp3 from '@/mypage/MyApp3'
import TestCon from '@/mypage/TestCon'

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
    },
    {
      path: '/MyApp2',
      name: 'MyApp2',
      component: MyApp2
    },
    {
      path: '/MyApp3',
      name: 'MyApp3',
      component: MyApp3
    },
    {
      path: '/TestCon',
      name: 'TestCon',
      component: TestCon
    }
  ]
})
