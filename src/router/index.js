import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        meta: { title: '首页' },
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        meta: { title: '关于' },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/curl',
        name: 'curl',
        meta: { title: 'curl' },
        component: () => import(/* webpackChunkName: "curl" */ '../views/CurlView.vue')
    },
    {
        path: '/editor',
        name: 'editor',
        meta: { title: 'editor' },
        component: () => import(/* webpackChunkName: "about" */ '../views/EditorView.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        meta: { title: 'drag' },
        component: () => import(/* webpackChunkName: "drag" */ '../views/DragView.vue')
    },
    {
        path: '/redirect',
        component: () => import(/* webpackChunkName: "redirect" */ '../views/Redirect.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }), // 每次跳转，滚动条回到最上方
    routes
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});

router.afterEach((_to, _from) => {
    NProgress.done();
});

export default router;
