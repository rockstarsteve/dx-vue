import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TServiceHall from '@/components/TServiceHall'
import TManagement from '@/components/TManagement'
import TUser from '@/components/TUser'
import TPersonnel from '@/components/TPersonnel'
import TAlarm from '@/components/TAlarm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/components/TServiceHall',
      name: 'TServiceHall',
      component: TServiceHall
    }, {
      path: '/components/TManagement',
      name: 'TManagement',
      component: TManagement
    },
    {
      path: '/components/TUser',
      name: 'TUser',
      component: TUser
    },{
      path: '/components/TPersonnel',
      name: 'TPersonnel',
      component: TPersonnel
    },{
      path: '/components/TAlarm',
      name: 'TAlarm',
      component: TAlarm
    }
  ]
})
