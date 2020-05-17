import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'

import Home from '@/views/Home/Home'
import Categories from '@/views/Category/Categories'
import Car from '@/views/Car/Car'
import Profile from '@/views/Profile/Profile'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/category', component: Categories },
        { path: '/car', component: Car },
        { path: '/profile', component: Profile }
    ]
})

export default router