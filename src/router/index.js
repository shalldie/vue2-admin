import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style

import HomeView from '../views/HomeView.vue';
import NavigationTypePlugin from './navigation-type-plugin';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: '首页',
            name: 'home'
        },
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
            name: 'about'
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/curl',
        name: 'curl',
        meta: { title: 'curl', name: 'curl' },
        component: () => import(/* webpackChunkName: "curl" */ '../views/CurlView.vue')
    },
    {
        path: '/editor',
        name: 'editor',
        meta: { title: 'editor', name: 'editor' },
        component: () => import(/* webpackChunkName: "about" */ '../views/EditorView.vue')
    },
    {
        path: '/rich-editor',
        name: 'rich-editor',
        meta: { title: 'rich-editor', name: 'rich-editor' },
        component: () => import(/* webpackChunkName: "rich-editor" */ '../views/RichEditorView.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        meta: { title: 'drag', name: 'drag' },
        component: () => import(/* webpackChunkName: "drag" */ '../views/DragView.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        meta: { title: 'chat', name: 'chat' },
        component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView.vue')
    },
    {
        path: '/list',
        name: 'list',
        meta: { title: 'list', name: 'list' },
        component: () => import(/* webpackChunkName: "list" */ '../views/list/ListView.vue')
    },
    {
        path: '/list/detail/:id',
        name: 'list-detail',
        meta: { title: 'list-detail', name: 'list-detail' },
        component: () => import(/* webpackChunkName: "list-item" */ '../views/list/ListDetailView.vue')
    },
    {
        path: '/step',
        name: 'step',
        meta: { title: 'step 页面', name: 'step' },
        component: () => import(/* webpackChunkName: "list-item" */ '../views/StepView.vue')
    },
    {
        path: '/redirect',
        component: () => import(/* webpackChunkName: "redirect" */ '../views/Redirect.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
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

NavigationTypePlugin(router);

export default router;
