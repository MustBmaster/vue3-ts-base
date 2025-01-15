import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecord } from '@/interfaces/route'
import Layout from '@/layouts/index.vue'

const routes: RouteRecord[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
    // children: [
    //   {
    //     path: 'login',
    //     component: import('@/views/Login.vue'),
    //     meta: { title: 'Login' },
    //   },
    // ],
  },
  {
    path: '/login',
    name: 'login',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login' },
  },
  {
    path: '/login22',
    name: 'login2222',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login22', roles: ['admin', 'editor'] },
  },
  {
    path: '/login223',
    name: 'login23',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login22', roles: ['editor'] },
  },
  {
    path: '/login224',
    name: 'login22224',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login22', roles: ['admin'] },
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes, // Casting to RouteRecordRaw[]
})

export default router
