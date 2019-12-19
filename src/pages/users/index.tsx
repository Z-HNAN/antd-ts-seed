import React from 'react'
import { connect } from 'dva'
import { Dispatch, AnyAction } from 'redux'
import { IConnectState } from '@/models/connect.d'
import {
  Toast,
  Button,
  WhiteSpace,
  Modal,
} from 'antd-mobile'
import { userCardSelector, UserCardType } from './selector'

import NameCard from '@/components/Card'
import InputUserModal from './components/InputUserModal'

interface PropsType {
  dispatch: Dispatch<AnyAction>
  list: UserCardType[]
  loading: boolean
}


const Users: React.FC<PropsType> = props => {
  const { dispatch, list, loading } = props

  // 处理删除用户
  const handleDelete = (id: number) => {
    dispatch({ type: 'users/remove', payload: { id } })
  }

  // 新增用户state
  const [newUser, setNewUser] = React.useState<UserCardType | null>(null)

  // 处理打开新增用户界面
  const handleOpenAdd = () => {
    setNewUser({ id: 0, name: '', website: '', email: '' })
  }

  // 处理新增用户
  const handleAdd = () => {
    // 发出新增action
    if (newUser !== null) {
      dispatch({ type: 'users/create', payload: { values: newUser } })
    }
    // 关闭modal
    setNewUser(null)
  }

  // 拉取用户loading相关
  React.useEffect(() => {
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
          <React.Fragment key={user.id}>
            <WhiteSpace />
            <NameCard key={user.name} {...user} onDelete={() => { handleDelete(user.id) }} />
          </React.Fragment>
        ))
      }
      <WhiteSpace />
      <Button type="ghost" onClick={handleOpenAdd}>add user</Button>
      <Modal
        popup
        visible={Boolean(newUser)}
        onClose={() => { setNewUser(null) }}
        animationType="slide-up"
      >
        <InputUserModal
          value={newUser as UserCardType}
          onChange={(value: UserCardType) => { setNewUser(value); }}
          onAdd={handleAdd}
        />
      </Modal>
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
