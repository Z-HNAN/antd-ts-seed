/**
 * 我的
 */

import React from 'react'
import { Divider, Button } from 'antd'
import { Dispatch, connect } from 'dva'
import {
  page1UserType,
  usersSelector,
} from './selector'
import { IConnectState } from '@/models/connect'

import UserTable from './components/UserTable'
import UserInfoModal, { EMPTY_USERINFO_PARAMS } from './components/UserInfoModal'
import { UserInfoFormParams } from './components/UserInfoForm'

import styles from './index.less'

interface Page1Props {
  users: page1UserType[]
  editId: number | null
  dispatch: Dispatch
}

const mapStateToProps = (state: IConnectState) => {
  return {
    users: usersSelector(state),
    editId: state.users.edit.id,
  }
}

const Page1: React.FC<Page1Props> = props => {
  const {
    dispatch,
    users,
    editId,
  } = props

  // userInfo的modal
  const [modalVisible, setModalVisible] = React.useState(false)

  const handleRemove = (id: number) => {
    dispatch({ type: 'users/remove', payload: { id } })
  }

  const handleCreate = () => {
    // 打开modal
    setModalVisible(true)
  }

  const handleEdit = (id: number) => {
    // 信息回填
    const currentUser = users.find(user => user.id === id) || EMPTY_USERINFO_PARAMS
    dispatch({ type: 'users/changeEdit', payload: { user: currentUser } })
    // 打开modal
    setModalVisible(true)
  }

  const handleUpdate = (values: UserInfoFormParams) => {
    // 关闭modal
    setModalVisible(false)
    // 清除表单，结构Empty值，存留上次的值导致表单不刷新
    dispatch({ type: 'users/changeEdit', payload: { user: { ...EMPTY_USERINFO_PARAMS } } })

    // 判断ID的状态去create或update
    if (editId === null) {
      dispatch({ type: 'users/create', payload: { ...values, id: editId } })
    } else {
      dispatch({ type: 'users/update', payload: { ...values, id: editId } })
    }
  }

  const handleCancel = () => {
    setModalVisible(false)
    // 信息回填为空数据
    dispatch({ type: 'users/changeEdit', payload: { user: EMPTY_USERINFO_PARAMS } })
  }

  return (
    <div>
      <div className={styles.header}>
        <h1>User-Page1</h1>
        <Button type="primary" onClick={handleCreate}>添加用户</Button>
      </div>
      <Divider />
      <UserTable
        users={users}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
      <UserInfoModal
        visible={modalVisible}
        onConfirm={handleUpdate}
        onCancel={handleCancel}
      />
    </div>
  )
}

export default connect(mapStateToProps)(Page1)
