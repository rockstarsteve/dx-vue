import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyApp from '@/mypage/MyApp'
import MyApp2 from '@/mypage/MyApp2'
import MyApp3 from '@/mypage/MyApp3'
import TestCon from '@/mypage/TestCon'
import CommunicationParent from '@/mypage/CommunicationParent'
import CommunicationParent2 from '@/mypage/CommunicationParent2'

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
    },
    {
      path: '/CommunicationParent',
      name: 'CommunicationParent',
      component: CommunicationParent
    },
    {
      path: '/CommunicationParent2',
      name: 'CommunicationParent2',
      component: CommunicationParent2
    }
  ]
})
