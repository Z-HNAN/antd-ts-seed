import React, { ReactElement } from 'react'
import { connect } from 'dva'
import { IConnectState } from '@/models/connect.d'
import { CurrentUserType, AuthorityType } from '@/models/global'
import { Link } from 'umi'
import { Result, Button } from 'antd'

interface PropsType {
  authority: AuthorityType[]
  children: ReactElement
}

const mapStateToProps = (state: IConnectState) => {
  const currentUser = (state.global.currentUser) as CurrentUserType

  return { authority: currentUser.authority }
}

const UserRouter: React.FC<PropsType> = props => {
  const {
    authority,
    children,
  } = props

  // 无权限UI
  const noMatch = (
    <Result
      status="403"
      title="无权访问"
      subTitle="对不起，您无权访问该页面"
      extra={
        < Button type="primary" >
          <Link to="/login">登录其他账号</Link>
        </Button >
      }
    />
  )

  // 检测是否有Admin权限
  const hasAuth = authority.includes('user')
  return hasAuth ? children : noMatch
}

export default connect(mapStateToProps)(UserRouter)
