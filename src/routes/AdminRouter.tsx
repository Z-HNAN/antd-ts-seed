import React, { ReactElement } from 'react'

import BasicAuthorityRouter from './BasicAuthorityRouter'

interface AdminRouterProps {
  children: ReactElement
}

const AdminRouter: React.FC <AdminRouterProps> = props => (
  <BasicAuthorityRouter auth="admin">
    {props.children}
  </BasicAuthorityRouter>
)

export default AdminRouter
