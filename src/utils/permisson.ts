import router from '@/router'
import NProgress from 'nprogress'
import getPageTitle from './getPageTitle'
import { getToken, setToken } from './auth'

// NProgress.configure({ showSpinner: false })
const whiteList: string[] = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  // set page title
  document.title = getPageTitle(to.meta.title as string)
  const hasToken = getToken()
  // if (hasToken) {
  //   if (to.path === '/login') {
  //     // if is logged in, redirect to the home page
  //     next({ path: '/' })

  //   } else {
  //     // determine whether the user has obtained his permission roles through getInfo
  //     const hasRoles = store.getters.roles && store.getters.roles.length > 0
  //     if (hasRoles) {
  //       next()
  //     } else {
  //       try {
  //         // get user info
  //         // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
  //         const { roles } = await store.dispatch('user/getInfo')
  //         // generate accessible routes map based on roles
  //         const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
  //         // dynamically add accessible routes
  //         router.addRoutes(accessRoutes)
  //         // hack method to ensure that addRoutes is complete
  //         // set the replace: true, so the navigation will not leave a history record
  //         next({ ...to, replace: true })
  //       } catch (error) {
  //         // remove token and go to login page to re-login
  //         await store.dispatch('user/resetToken')
  //         Message.error(error || 'Has Error')
  //         next(`/login?redirect=${to.path}`)
  //       }
  //     }
  //   }
  // } else {
  //   /* has no token*/
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     // in the free login whitelist, go directly
  //     next()
  //   } else {
  //     // other pages that do not have permission to access are redirected to the login page.
  //     next(`/login?redirect=${to.path}`)
  //     NProgress.done()
  //   }
  // }
  next()
})
router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
