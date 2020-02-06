import { IRoute } from 'umi-types'

/* 项目路由配置 (采用配置式路由) */
const routes: IRoute[] = [
  // 登录页面
  {
    path: '/login',
    component: './login',
  },
  // 认证页面
  {
    path: '/',
    Routes: ['./src/routes/LoginRouter'],
    routes: [
      // 管理员
      {
        path: '/admin',
        component: '../layouts/AdminLayout',
        Routes: ['./src/routes/AdminRouter'],
        routes: [
          { path: '/admin', redirect: '/admin/page1' }, // 默认inedx为page1
          { path: '/admin/page1', component: './admin/page1', title: 'page1' },
          { path: '/admin/page2', component: './admin/page2', title: 'page2' },
          { path: '*', redirect: '/admin/page1' }, // 未匹配到重定向去page1
        ],
      },
      // 用户
      {
        path: '/user',
        component: '../layouts/UserLayout',
        Routes: ['./src/routes/UserRouter'],
        routes: [
          { path: '/user', redirect: '/user/page1' }, // 默认inedx为page1
          { path: '/user/page1', component: './user/page1', title: 'page1' },
          { path: '/user/page2', component: './user/page2', title: 'page2' },
          { path: '*', redirect: '/user/page1' }, // 未匹配到重定向去page1
        ],
      },
      // 404
      { component: '404', title: '页面走丢了...' },
    ],
  },
]

export default routes
