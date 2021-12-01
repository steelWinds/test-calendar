import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';

const publicPath = process.env.BASE_URL === '/dist/' ? '/' : process.env.BASE_URL;
const routes = [
    {
        path: '/',
        alias: '/home',
        component: Home
    }
];

const router = createRouter({
    history: createWebHistory(publicPath),
    routes: routes
});

export default router;
