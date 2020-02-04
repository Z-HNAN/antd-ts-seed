/**
 * 普通布局
 */

import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

// import styles from './UserLayout.less'

// 需要路由跳转的页面

const BasicLayout: React.FC<any> = props => {
  const { children } = props

  // 处理router跳转
  function handleMenuClick(param: ClickParam) {
    const { key } = param
    // 替换路由
    router.replace(`/user/${key}`)
  }

  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['page1']}
          style={{ height: '100%', borderRight: 0 }}
          onClick={handleMenuClick}
        >
          <Menu.Item key="page1">
            <span>
              <Icon type="user" />
              page1
            </span>
          </Menu.Item>
          <Menu.Item key="page2">
            <span>
              <Icon type="user" />
              page2
            </span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                sub菜单
            </span>
            }
          >
            <Menu.Item key="page3">page3</Menu.Item>
            <Menu.Item key="page4">page4</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}


export default withRouter(BasicLayout)
