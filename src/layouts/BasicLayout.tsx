/**
 * 普通布局
 */

import React from 'react'
import withRouter from 'umi/withRouter'
import MenuBar, { tabBarData } from './MenuBar'

import styles from './BasicLayout.less'

// 需要路由跳转的页面
const BarRoutes = tabBarData.map(({ link }) => link)

const BasicLayout: React.FC<any> = props => {
  const { children, location } = props


  // 不在tabBar中的
  if (BarRoutes.indexOf(location.pathname) < 0) {
    return <div className={styles.root}>{children}</div>;
  }

  return (
    <div className={styles.root}>
      <MenuBar pathname={location.pathname}>{children}</MenuBar>
    </div>
  );
}


export default withRouter(BasicLayout)
