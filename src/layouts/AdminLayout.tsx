/**
 * 普通布局
 */

import React from 'react'
import withRouter from 'umi/withRouter'
import router from 'umi/router';
import { Menu, Icon } from 'antd';
import { ClickParam } from 'antd/lib/menu'

import BasicLayout from './BasicLayout'

const AdminLayout: React.FC<any> = props => {
  const { children } = props

  // 处理router跳转
  function handleMenuClick (param: ClickParam) {
    const { key } = param
    // 替换路由
    router.replace(`/admin/${key}`)
  }

  // Admin菜单
  const menu = (
    <Menu
      mode="inline"
      defaultSelectedKeys={['page1']}
      style={{ height: '100%', borderRight: '0' }}
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
      <Menu.SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="user" />sub菜单
          </span>
        }
      >
        <Menu.Item key="page3">page3</Menu.Item>
        <Menu.Item key="page4">page4</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )

  return (
    <BasicLayout
      menu={menu}
      content={children}
    />
  );
}


export default withRouter(AdminLayout)
