import Vue from 'vue'
import Router from 'vue-router'



import Demo03 from '@/components/monitor/Demo03'

export default new Router({
    routes: [{
        path: '/test',
        name: 'demo03',
        component: Demo03,
    }]
})



Vue.use(Router)
