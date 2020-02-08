import React from 'react'
import { Table, Divider, Popconfirm } from 'antd'
import { page1UserType } from '../selector'

interface UserTableProps {
  users: page1UserType[]
  loading: boolean
  // 编辑用户
  onEdit: (id: number) => void
  // 删除用户
  onRemove: (id: number) => void
}

const UserTable: React.FC<UserTableProps> = props => {
  const {
    users,
    loading,
    onEdit,
    onRemove,
  } = props

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'website',
      dataIndex: 'website',
      key: 'website',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '操作',
      key: 'action',
      render: (text: page1UserType, record: page1UserType) => (
        <span>
          <Popconfirm
            title={`确定删除${record.name}`}
            onConfirm={() => { onRemove(record.id) }}
            okText="确认"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
          <Divider type="vertical" />
          <a onClick={() => { onEdit(record.id) }}>修改</a>
        </span>
      ),
    },
  ]

  return (
    <Table columns={columns} rowKey="id" dataSource={users} loading={loading} />
  )
}

export default UserTable
