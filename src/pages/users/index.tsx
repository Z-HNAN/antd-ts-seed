import React from 'react'
import { connect } from 'dva'
import { Dispatch, AnyAction } from 'redux'
import { IConnectState } from '@/models/connect.d'
import { Toast } from 'antd-mobile'
import { userCardSelector, UserCardType } from './selector'
import NameCard from '@/components/Card'

interface PropsType {
  dispatch: Dispatch<AnyAction>
  list: UserCardType[]
  loading: boolean
}


const Users: React.FC<PropsType> = props => {
  const { dispatch, list, loading } = props
  console.log(list);
  
  const handleDelete = (id: number) => {
    dispatch({ type: 'users/remove', payload: { id } })
  }

  // 拉取用户loading相关
  React.useEffect(() => {
    console.log(loading);
      Toast.hide()
    if (loading === true) {
      Toast.loading('loading...', 1)
    } else {
      Toast.hide()
    }
    return () => { Toast.hide() }
  }, [loading])

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
  const { loading } = state
  return {
    loading: (loading.effects['users/fetch']) as boolean,
    list: userCardSelector(state),
  }
}

export default connect(mapStateToProps)(Users)
