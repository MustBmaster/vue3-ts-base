import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { RouteRecord } from '@/interfaces/route'
import router from '@/router'

export const usePermissionStore = defineStore('permission', () => {
  const routes = reactive<RouteRecord[]>([])
  function hasPermission(roles: string[], route: RouteRecord) {
    if (!route.meta || !route.meta.roles) {
      return true
    }
    const routeRoles = route.meta.roles
    return roles.some((role) => routeRoles.includes(role))
  }
  function getAvailableRoutes(roles: string[]) {
    const routes = router.options.routes as RouteRecord[]
    const accessedRoutes = routes.filter((route) => hasPermission(roles, route))
    routes.splice(0, routes.length, ...accessedRoutes)
    console.log(routes)
  }
  return {
    routes,
    getAvailableRoutes,
  }
})
