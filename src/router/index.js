import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dang-nhap',
            name: 'dang-nhap',
            component: () => import("@/views/auth/DangNhap.vue"),
        },
    ]
});

export default router