import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/pages/MainPage"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: MainPage,
    },
    {
        path: '/portfile',
        component: () => import('./pages/Portfile')
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})