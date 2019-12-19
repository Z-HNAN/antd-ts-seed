import React from 'react'
import { connect } from 'dva'
import { Dispatch, AnyAction } from 'redux'
import { IUser } from '@/models/users'
import { IConnectState } from '@/models/connect.d'

import NameCard from '@/components/Card'

interface PropsType {
  dispatch: Dispatch<AnyAction>
  list: IUser[]
  loading: boolean
}


const Users: React.FC<PropsType> = props => {
  const { dispatch, list, loading } = props

  const handleDelete = (id: string) => {
    dispatch({ type: 'users/remove', payload: { id } })
  }

  return (
    <div>
      <h1>user list</h1>
      {
        list.map(user => (
          <NameCard key={user.name} {...user} onDelete={() => { handleDelete(user.id) }} />
        ))
      }
    </div>
  )
}

const mapStateToProps = (state: IConnectState) => {
  const { users, loading } = state
  return {
    loading: (loading.effects['users/fetch']) as boolean,
    list: users.list,
  }
}

export default connect(mapStateToProps)(Users)
