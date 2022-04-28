import { createRouter, createWebHistory } from "vue-router";
import Login from '../components/Login';

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/HomeView.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;