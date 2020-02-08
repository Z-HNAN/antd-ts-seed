import React, { ReactElement } from 'react'

import BasicAuthorityRouter from './BasicAuthorityRouter'

interface AdminRouterProps {
  children: ReactElement
}

const AdminRouter: React.FC <AdminRouterProps> = props => {
  return (
    <BasicAuthorityRouter auth="admin">
      {props.children}
    </BasicAuthorityRouter>
  )
}

export default AdminRouter
