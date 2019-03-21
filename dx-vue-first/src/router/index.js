import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyApp from '@/mypage/MyApp'
import MyApp2 from '@/mypage/MyApp2'

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
    }

  ]
})
