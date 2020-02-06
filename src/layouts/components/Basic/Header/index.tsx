/**
 * 普通布局
 */

import React, { ReactElement } from 'react'
import { withRouter, router } from 'umi'
import { Layout, Avatar, Menu, Dropdown, Modal, Icon } from 'antd';

import styles from './index.less'

const { confirm } = Modal;
const { Header } = Layout;

interface PropsType {
  children: ReactElement
}

// 用户头像类型
const UserTypeList: [string, string][] = [
  ['admin', '#f56a00'],
  ['user', '#7265e6'],
  ['tourist', '#ffbf00'],
]

const HeaderComponent: React.FC<PropsType> = props => {
  const [userName, userAvatarColor] = UserTypeList[0]

  // 处理退出，二次确认框确认
  const handleLogout = () => {
    confirm({
      title: '你确定要退出吗?',
      onOk() {
        router.push('/login')
      },
    })
  }

  const userNameMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleLogout}>
          退出登录
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      Header
      <div className={styles.user}>
        <Avatar className={styles.userAvatar} style={{ backgroundColor: userAvatarColor, verticalAlign: 'middle' }} size="large">
          {userName}
        </Avatar>
        <Dropdown className={styles.userName} overlay={userNameMenu}>
          <a className="ant-dropdown-link" href="#">
            赵大锤 <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}


export default withRouter(HeaderComponent)
