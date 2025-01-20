import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecord } from '@/interfaces/route'
import Layout from '@/layouts/index.vue'

const routes: RouteRecord[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/login',
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
    meta: { title: 'Login22', roles: ['admin', 'editor'], icon: 'location' },
  },
  {
    path: '/error',
    name: 'error',
    meta: { title: 'Login22', hidden: true },
    children: [
      {
        path: '404',
        name: '404',
        component: import('@/views/404.vue'),
        meta: { title: 'Login Child 1', roles: ['admin'] },
      },
      {
        path: 'child2',
        name: 'loginChild2',
        component: import('@/views/Login.vue'),
        meta: { title: 'Login Child 2', roles: ['admin'] },
      },
    ],
  },
  {
    path: '/login224',
    name: 'login22224',
    component: import('@/views/Login.vue'),
    meta: { title: 'Login22', roles: ['admin'], isTabPage: true },
    children: [
      {
        path: '/child1',
        name: 'loginChild1',
        component: import('@/views/Login.vue'),
        meta: { title: 'Login Child 1', roles: ['admin'] },
      },
      {
        path: 'child2',
        name: 'loginChild2',
        component: import('@/views/Login.vue'),
        meta: { title: 'Login Child 2', roles: ['admin'] },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: { title: 'Submenu' },
    children: [
      {
        path: 'team',
        name: 'aboutTeam',
        component: import('@/views/page1.vue'),
        meta: { title: 'Our Team', roles: ['admin', 'editor'] },
      },
      {
        path: 'history',
        name: 'aboutHistory',
        component: import('@/views/page2.vue'),
        meta: { title: 'Our History', roles: ['admin'] },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
