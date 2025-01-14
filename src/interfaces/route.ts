/**
 * RouteMeta
 * Contains metadata for route configuration.
 *
 * @property roles: string[]             - Defines which roles can access the route.
 * @property title: string               - The title displayed in the sidebar and breadcrumb.
 * @property icon: string                - The icon shown in the sidebar (can be an SVG or element icon).
 * @property noCache: boolean            - If true, the page will not be cached (default is false).
 * @property affix: boolean              - If true, the tag will be affixed in the tags-view.
 * @property breadcrumb: boolean         - If false, the item will be hidden in breadcrumb (default is true).
 * @property activeMenu: string          - Specifies the path to highlight in the sidebar.
 */
export interface RouteMeta {
  roles?: string[]
  title?: string
  icon?: string
  noCache?: boolean
  affix?: boolean
  breadcrumb?: boolean
  activeMenu?: string
}
/**
 * RouteRecord
 * Defines the structure of a route record used in Vue Router.
 *
 * @property path: string                - The path of the route.
 * @property name: string                - The name used by <keep-alive> (must be set).
 * @property component: any              - The component to render for this route.
 * @property redirect: string | null     - Redirect path, or noRedirect if set to null.
 * @property children: RouteRecord[]     - Nested child routes.
 * @property meta: RouteMeta             - Meta information about the route.
 * @property hidden: boolean             - If true, the route will not appear in the sidebar (default is false).
 * @property alwaysShow: boolean         - If true, the root menu will always be shown.
 */
export interface RouteRecord {
  path: string
  name?: string
  component?: any
  redirect?: string | null
  children?: RouteRecord[]
  meta?: RouteMeta
  hidden?: boolean
  alwaysShow?: boolean
}
