/**
 * 新用户类型
 */
import React from 'react'
import { List, InputItem, Button } from 'antd-mobile'
import { UserCardType } from '../../selector'

export interface PropsType {
  value: UserCardType
  onChange: (value: UserCardType) => void
  onAdd: () => void
}

const InputUserModal: React.FC<PropsType> = props => {
  const { value, onChange, onAdd } = props

  // 如果当前没有传入数值，不显示该组件
  if (value === null) {
    return null
  }

  const { name, email, website } = value

  /**
   * 处理value改变
   */
  const handleChange = (type: string, val: any) => {
    onChange({
      ...value,
      [type]: val,
    })
  }

  return (
    <List renderHeader={() => 'add new user'}>
      <InputItem
        placeholder="name"
        value={name}
        onChange={(newName: string) => { handleChange('name', newName) }}
      >name</InputItem>
      <InputItem
        placeholder="email"
        value={email}
        onChange={(newEmail: string) => { handleChange('email', newEmail) }}
      >email</InputItem>
      <InputItem
        placeholder="website"
        value={website}
        onChange={(newWebsite: string) => { handleChange('website', newWebsite) }}
      >website</InputItem>
      <Button type="primary" onClick={() => onAdd && onAdd() }>submit</Button>
    </List>
  )
}

export default InputUserModal
