import Vue from 'vue';
import Router from 'vue-router';


// 按需加载

import {home, showlist, erro404, main,login} from '@/view'


Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: main,
      children: [
        {
          path: "",
          component: home
        },
        {
          path: "/showlist",
          component: showlist

        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '*',
      component: erro404,
    }
  ]
});


export default router;




