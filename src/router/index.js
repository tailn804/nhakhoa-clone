import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name:'index',
        component: () => import("../pages/index.vue")
    },
    

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router