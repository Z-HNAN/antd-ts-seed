/**
 * 普通布局
 */

import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router';
import { Layout, Menu, Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu'

import styles from './AdminLayout.less'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;


// 需要路由跳转的页面

const BasicLayout: React.FC<any> = props => {
  const { children } = props

  // 处理router跳转
  function handleMenuClick (param: ClickParam) {
    const { key } = param
    // 替换路由
    router.replace(`/admin/${key}`)
  }

  return (
    <Layout>
      <Sider width={200}>
        <Menu
          className={styles.menu}
          mode="inline"
          defaultSelectedKeys={['page1']}
          onClick={handleMenuClick}
        >
          <Menu.Item key="page1">
            <span>
              <Icon type="user" />page1
            </span>
          </Menu.Item>
          <Menu.Item key="page2">
            <span>
              <Icon type="user" />page2
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />sub菜单
              </span>
            }
          >
            <Menu.Item key="page3">page3</Menu.Item>
            <Menu.Item key="page4">page4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className={styles.body}>
        <Content className={styles.content}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}


export default withRouter(BasicLayout)
