import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'wiki',
            component: () => import("@/pages/HomePage.vue"),
        },
        {
            path: '/classic',
            name: 'classic',
            component: () => import("@/pages/ClassicWikiPage.vue"),
        },
        {
            path: '/article',
            name: 'article',
            component: () => import("@/pages/ArticlePage.vue"),
        },
        {
            path: '/page',
            name: 'page',
            component: () => import("@/pages/PageClass.vue"),
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: () => import("@/pages/TasksPage.vue"),
        }
    ],
    scrollBehavior(){
        return{top: 0};
    }
});

export default router