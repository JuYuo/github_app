// 引入vue模块
import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'

Vue.use(Router)

import VueResource from 'vue-resource'

import home from '../components/home.vue'

import about from '../components/about.vue'

import list from '../components/list.vue'
import dongman from '../components/dm.vue'
import wenxue from '../components/wx.vue'
import book1 from '../data/book_lishi.json'



Vue.use(VueResource)


const router = new Router({
    // 路由规则
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/about',
            component:about
        },
        {
            path:'/list/wenxue',
            component:wenxue
        },
        {
            path:'/list/dongman',
            component:dongman,
        },
        {
            path:'/list',
            component:list
        },

    ]
})

// 导出router
export default router