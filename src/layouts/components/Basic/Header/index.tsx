/**
 * 普通布局
 */

import React from 'react'
import { connect } from 'dva'
import { router } from 'umi'
import { Dispatch } from 'redux'
import { IConnectState } from '@/models/connect.d'
import { CurrentUserType } from '@/models/global'
import { Layout, Avatar, Menu, Dropdown, Modal, Icon } from 'antd';

import styles from './index.less'

const { confirm } = Modal;
const { Header } = Layout;

interface PropsType {
  currentUser: CurrentUserType
  dispatch: Dispatch
}

// 用户头像类型
const UserTypeList: [string, string][] = [
  ['tourist', '#ffbf00'], // 游客权限
  ['admin', '#f56a00'], // admin权限
  ['user', '#7265e6'], // user权限
]

const mapStateToProps = (state: IConnectState) => {
  const currentUser = (state.global.currentUser) as CurrentUserType

  return { currentUser }
}

const HeaderComponent: React.FC<PropsType> = props => {
  const {
    dispatch,
    currentUser,
  } = props

  // 依次循环权限项，判断当前登录用户是否拥有该权限，如果都没有就赋予游客权限
  const [userName, userAvatarColor] = UserTypeList.find(
    ([auth]) => currentUser.authority.includes(auth),
  ) || UserTypeList[0]

  // 处理退出，二次确认框确认
  const handleLogout = () => {
    confirm({
      title: '你确定要退出吗?',
      onOk() {
        // 发出退出事件
        dispatch({ type: 'global/logout' })
        // 路由回退
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


export default connect(mapStateToProps)(HeaderComponent)
