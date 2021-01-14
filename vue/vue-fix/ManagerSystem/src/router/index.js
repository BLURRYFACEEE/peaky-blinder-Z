import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import SonCloth from '@/cloth'

/* Router Modules */
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *  detail see  https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin','editor']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 * */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'documentation', icon: 'documentation', affix: true }
      }
    ]
  },
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'guide', icon: 'guide', noCache: true }
      }
    ]
  },
  {
    path: '/mr_Z',
    component: Layout,
    redirect: '/mr_Z/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'MR.Z',
      icon: 'people',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'zsgSSD1',
        component: () => import('@/views/mr_Z/zsgSSD1'),
        name: 'zsgSSD1',
        meta: {
          title: '工作台',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'resourceHappen',
        component: () => import('@/views/mr_Z/resourceHappen'),
        name: 'resourceHappen',
        meta: {
          title: '资源运行情况',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'workPageManager',
        component: () => import('@/views/mr_Z/workPageManager'),
        name: 'workPageManager',
        meta: {
          title: '工单管理',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'resourceManager',
        component: SonCloth,
        // redirect: '/mr_Z/resourceManager/',
        alwaysShow: true, // will always show the root menu
        meta: {
          title: '资源管理',
          icon: 'people',
          roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
          {
            path: '',
            component: () => import('@/views/mr_Z/resourceManager'),
            name: 'resourceManager',
            meta: {
              title: '资源管理',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          },
          {
            path: 'workSystemFix',
            component: () => import('@/views/mr_Z/resourceManager/workSystemFix'),
            name: 'workSystemFix',
            meta: {
              title: '业务系统维护',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          }
        ]
      },
      {
        path: '/systemManager',
        component: SonCloth,
        // redirect: '/mr_Z/index',
        alwaysShow: true, // will always show the root menu
        meta: {
          title: '系统管理',
          icon: 'people',
          roles: ['admin', 'editor'] // you can set roles in root nav
        },
        children: [
          {
            path: 'userManager',
            component: () => import('@/views/mr_Z/systemManager/userManager'),
            name: 'userManager',
            meta: {
              title: '用户管理',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          },
          {
            path: 'roleManager',
            component: () => import('@/views/mr_Z/systemManager/roleManager'),
            name: 'roleManager',
            meta: {
              title: '角色管理',
              roles: ['admin'] // or you can only set roles in sub nav
            }
          }
        ]
      },
      {
        path: 'userManager',
        component: () => import('@/views/mr_Z/systemManager/userManager'),
        name: 'userManager',
        meta: {
          title: 'userManager',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'roleManager',
        component: () => import('@/views/mr_Z/systemManager/roleManager'),
        name: 'roleManager',
        meta: {
          title: 'roleManager',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/zsgNBD',
    component: Layout,
    redirect: '/zsgNBD/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/zsgNBD/index'),
        name: 'ZsgNBD',
        meta: { title: 'zsgNBD', icon: 'zsgNBD', noCache: true }
      }
    ]
  },
  // {
  //   path: '/zsgSSD1',
  //   component: Layout,
  //   // redirect: '/zsgSSD1/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/zsgSSD1/index'),
  //       name: 'zsgSSD1',
  //       meta: { title: 'zsgSSD1', icon: 'zsgSSD1', noCache: true }
  //     }
  //   ]
  // },
  {
    path: '/zsgCCD1',
    component: Layout,
    redirect: '/zsgCCD1/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/zsgCCD1/index'),
        name: 'zsgCCD1',
        meta: { title: 'zsgCCD1', icon: 'zsgCCD1', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
*/
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'pagePermission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'directivePermission'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/permission/role'),
        name: 'RolePermission',
        meta: {
          title: 'rolePermission',
          roles: ['admin']
        }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/svg-icons/index'),
        name: 'Icons',
        meta: { title: 'icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  chartsRouter,
  nestedRouter,
  tableRouter,

  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'example',
      icon: 'example'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/example/create'),
        name: 'CreateArticle',
        meta: { title: 'createArticle', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'editArticle', noCache: true },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/example/list'),
        name: 'ArticleList',
        meta: { title: 'articleList', icon: 'list' }
      }
    ]
  },

  {
    path: '/tab',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/tab/index'),
        name: 'Tab',
        meta: { title: 'tab', icon: 'tab' }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'ErrorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/errorPage/401'),
        name: 'Page401',
        meta: { title: 'page401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/errorPage/404'),
        name: 'Page404',
        meta: { title: 'page404', noCache: true }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'log',
        component: () => import('@/views/errorLog/index'),
        name: 'ErrorLog',
        meta: { title: 'errorLog', icon: 'bug' }
      }
    ]
  },

  {
    path: '/excel',
    component: Layout,
    redirect: '/excel/export-excel',
    name: 'Excel',
    meta: {
      title: 'excel',
      icon: 'excel'
    },
    children: [
      {
        path: 'export-excel',
        component: () => import('@/views/excel/exportExcel'),
        name: 'ExportExcel',
        meta: { title: 'exportExcel' }
      },
      {
        path: 'export-selected-excel',
        component: () => import('@/views/excel/selectExcel'),
        name: 'SelectExcel',
        meta: { title: 'selectExcel' }
      },
      {
        path: 'export-merge-header',
        component: () => import('@/views/excel/mergeHeader'),
        name: 'MergeHeader',
        meta: { title: 'mergeHeader' }
      },
      {
        path: 'upload-excel',
        component: () => import('@/views/excel/uploadExcel'),
        name: 'UploadExcel',
        meta: { title: 'uploadExcel' }
      }
    ]
  },

  {
    path: '/zip',
    component: Layout,
    redirect: '/zip/download',
    alwaysShow: true,
    meta: { title: 'zip', icon: 'zip' },
    children: [
      {
        path: 'download',
        component: () => import('@/views/zip/index'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },

  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'pdf', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    redirect: 'noredirect',
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'clipboardDemo', icon: 'clipboard' }
      }
    ]
  },

  {
    path: '/i18n',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/i18n-demo/index'),
        name: 'I18n',
        meta: { title: 'i18n', icon: 'international' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'externalLink', icon: 'link' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
