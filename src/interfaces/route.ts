import type { RouteRecordRaw } from 'vue-router'

export interface RouteMeta {
  roles?: string[]
  title: string
  icon?: string
  hidden?: boolean
  isTabPage?: boolean
}

export type RouteRecord = RouteRecordRaw & {
  meta?: RouteMeta
  children?: RouteRecord[]
}
