import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteRecord } from '@/interfaces/route'
import router from '@/router'

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref<RouteRecord[]>([]) // Đây là `ref`

  function hasPermission(roles: string[], route: RouteRecord) {
    if (!route.meta || !route.meta.roles) {
      return true
    }
    const routeRoles = route.meta.roles
    return roles.some((role) => routeRoles.includes(role))
  }

  function getAvailableRoutes(roles: string[]) {
    const allRoutes = router.options.routes as RouteRecord[] // Đổi tên biến để tránh nhầm lẫn
    const accessedRoutes = allRoutes.filter((route) => hasPermission(roles, route))
    routes.value = accessedRoutes // Cập nhật `routes` qua `ref`
  }

  return {
    routes,
    getAvailableRoutes,
  }
})
