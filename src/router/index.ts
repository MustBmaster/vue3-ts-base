import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { RouteRecord } from '@/interfaces/route'
import Layout from '@/layouts/index.vue'

const routes: RouteRecord[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    children: [
      {
        path: 'login',
        component: import('@/views/Login.vue'),
        meta: { title: 'Login' },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login' },
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes as RouteRecordRaw[], // Casting to RouteRecordRaw[]
})

export default router
