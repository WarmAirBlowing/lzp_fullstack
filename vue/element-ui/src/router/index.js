import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import UserInfo from '@/views/userInfo'
import Form from '@/views/form'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: 'userInfo',
                    name: 'UserInfo',
                    component: UserInfo
                },
                {
                    path: 'form',
                    name: 'Form',
                    component: Form
                }
            ]
        }
    ]
})