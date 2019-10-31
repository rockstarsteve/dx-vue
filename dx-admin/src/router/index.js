import Vue from 'vue';
import Router from 'vue-router';



// 按需加载

import hello from '@/components/hello'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: hello,
    },
  ]
});


export default router;




