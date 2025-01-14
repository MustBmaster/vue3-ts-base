// store/permission.ts
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import router from '@/router' // Adjust the path based on your project structure

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: [] as RouteRecordRaw[], // All accessible routes
    dynamicRoutes: [] as RouteRecordRaw[], // Routes that require permission
  }),
  actions: {
    setRoutes(routes: RouteRecordRaw[]) {
      this.routes = routes
      this.dynamicRoutes = routes.filter((route) => route.meta?.roles) // Example filter
    },
    generateRoutes(roles: string[]) {
      const accessedRoutes = router.options.routes.filter((route) => {
        if (route.meta && route.meta.roles) {
          return roles.some((role) => route.meta.roles.includes(role))
        }
        return true
      })
      this.setRoutes(accessedRoutes)
    },
  },
})
