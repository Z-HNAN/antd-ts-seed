import React, { ReactElement } from 'react'
import { Link } from 'umi'
import { Result, Button } from 'antd'

interface PropsType {
  children: ReactElement
}

const AdminRouter: React.FC<PropsType> = props => {
  const { children } = props

  // 检测是否有Admin权限
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

  return true ? children : noMatch
}

export default AdminRouter
