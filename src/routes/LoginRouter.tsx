/**
 * 安全检查页面
 */
import React, { ReactElement } from 'react'
import { connect } from 'dva'
import { IConnectState } from '@/models/connect.d'
import { isNil } from 'lodash'
import { Redirect } from 'umi';

interface PropsType {
  children: ReactElement
  isLogin: boolean
}

const mapStateToProps = (state: IConnectState) => {
  const { currentUser } = state.global

  // 当前登录用户不为空，则登录
  const isLogin = !isNil(currentUser)

  return { isLogin }
}

const SecurityLayout: React.FC<PropsType> = props => {
  const {
    children,
    isLogin,
  } = props

  if (!isLogin) {
    return <Redirect to="/login"></Redirect>;
  }

  return children
}

export default connect(mapStateToProps)(SecurityLayout)
