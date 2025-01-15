import type { RouteRecordRaw } from 'vue-router'

export interface RouteMeta {
  roles?: string[]
  title: string
  icon?: string
  hidden?: boolean
  alwaysShow?: boolean
}

export type RouteRecord = RouteRecordRaw & {
  meta?: RouteMeta
}
