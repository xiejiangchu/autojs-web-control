import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '控制面板', icon: 'dashboard' }
    }]
  },
  {
    path: '/workspaces',
    component: Layout,
    redirect: '/workspaces/index',
    name: '工作空间',
    meta: { title: '设备管理', icon: 'example' },
    children: [{
      path: 'index',
      name: '工作空间',
      component: () => import('@/views/workspaces/index'),
      meta: { title: '工作空间', icon: 'table' }
    }]
  },
  {
    path: '/device',
    component: Layout,
    redirect: '/device/index',
    name: '设备管理',
    meta: { title: '设备管理', icon: 'example' },
    children: [{
      path: 'index',
      name: '设备列表',
      component: () => import('@/views/device/index'),
      meta: { title: '设备列表', icon: 'table' }
    }]
  },
  {
    path: '/script',
    component: Layout,
    redirect: '/script/list',
    name: '脚本管理',
    meta: { title: '脚本管理', icon: 'example' },
    children: [{
      path: 'list',
      name: '脚本管理',
      component: () => import('@/views/script/list'),
      meta: { title: '脚本列表', icon: 'form' }
    }]
  },
  {
    path: '/develop',
    component: Layout,
    name: '脚本管理',
    redirect: '/develop/add',
    meta: { title: '脚本管理', icon: 'example' },
    children: [{
      path: 'add',
      name: '脚本管理',
      component: () => import('@/views/script/index'),
      meta: { title: '新建脚本', icon: 'example' }
    }, {
      path: 'edit',
      name: '脚本编辑',
      hidden:true,
      component: () => import('@/views/script/index'),
      meta: { title: '脚本编辑', icon: 'example' }
    }]
  },
  {
    path: '/scheduler',
    redirect: '/scheduler/list',
    name: '计划任务',
    meta: { title: '计划任务', icon: 'nested' },
    component: Layout,
    children: [{
      path: 'add',
      name: '计划任务',
      component: () => import('@/views/scheduler/list'),
      meta: { title: '计划任务', icon: 'nested' }
    }]
  },
  {
    path: '/device_log',
    redirect: '/device_log/index',
    component: Layout,
    name: '运行日志',
    meta: { title: '运行日志', icon: 'nested' },
    children: [{
      path: 'index',
      name: '运行日志',
      component: () => import('@/components/DeviceLog/index'),
      meta: { title: '运行日志', icon: 'form' }
    }]
  }, {
    path: '*',
    redirect: '/404',
    hidden: true
  }
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
});

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
