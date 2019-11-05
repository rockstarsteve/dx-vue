import Vue from 'vue';
import Router from 'vue-router';



// 按需加载

import {home,showlist,erro404} from '@/view'



Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/showlist',
      component: showlist,
    },
    {
      path: '*',
      component: erro404,
    },
  ]
});


export default router;




