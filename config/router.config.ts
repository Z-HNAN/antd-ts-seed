import { IRoute } from 'umi-types'

/* 项目路由配置 (采用配置式路由) */
const routes: IRoute[] = [
  // 默认跳转去post页面
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/users' },
      { path: '/users', component: './users', title: '用户' },
      { path: '/me', component: './me', title: '我的' },
      { path: '/your', component: './your', title: '你的' },
      { component: '404', title: '页面走丢了...' },
    ],
  }
]

export default routes
