import Vue from 'vue'
import Router from 'vue-router'
import login from './login'
import mains from './mains'
import Index from '@/views/index/index'

Vue.use(Router)

const RouterModel = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    ...login,
    ...mains
  ]
});

RouterModel.beforeEach((to, from, next) => {
  console.log("-----")
  if (to.path == "/") {
    console.log("ok,走你")
    next()
  }
  next()
})


export default RouterModel;
