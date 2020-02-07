import React from 'react'
import { FormComponentProps } from 'antd/es/form'
import { Modal, Form } from 'antd'
import UserInfoForm, { UserInfoFormParams } from './UserInfoForm'


export const EMPTY_USERINFO_PARAMS = {
  id: null,
  name: '',
  email: '',
  website: '',
}

interface UserInfoModalProps {
  // 此模态框是否可见
  visible: boolean
  form: FormComponentProps['form']
  // 确认更新
  onConfirm: (value: UserInfoFormParams) => void
  // 关闭确认框
  onCancel: () => void
}

const UserInfoModal: React.FC<UserInfoModalProps> = props => {
  const {
    visible,
    form,
    onConfirm,
    onCancel,
  } = props

  const handleUpdate = () => {
    // 表单无误进行提交
    form.validateFields((err, newValues) => {
      if (!err) {
        onConfirm(newValues as UserInfoFormParams)
      }
    })
  }

  return (
    <Modal
      title="User信息"
      visible={visible}
      onOk={handleUpdate}
      onCancel={onCancel}
      okText="确定"
      cancelText="取消"
    >
      <UserInfoForm form={form} />
    </Modal>
  )

}

export default Form.create<UserInfoModalProps>()(UserInfoModal)
