/**
 * 安全检查页面
 */

import React, { ReactElement } from 'react'
import { Redirect } from 'umi';

interface PropsType {
  children: ReactElement
}

const SecurityLayout: React.FC<PropsType> = props => {
  const { children } = props

  const isLogin = true

  if (!isLogin) {
    return <Redirect to="login"></Redirect>;
  }

  return children
}

export default SecurityLayout
