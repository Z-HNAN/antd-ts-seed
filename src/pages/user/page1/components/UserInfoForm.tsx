import React from 'react'
import { connect } from 'dva'
import { FormComponentProps } from 'antd/es/form'
import { Form, Input } from 'antd'
import { IConnectState } from '@/models/connect'


export interface UserInfoFormParams {
  id: null | number
  name: string
  email: string
  website: string
}

interface UserInfoFormProps {
  form: FormComponentProps['form']
  edit: UserInfoFormParams
}

// 表单布局
const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 20 },
  },
}

const mapStateToProps = (state: IConnectState) => {
  const { edit } = state.users
  return { edit }
}

const UserInfoForm: React.FC<UserInfoFormProps> = props => {
  const {
    form,
    edit,
  } = props
  const { getFieldDecorator } = form

  React.useEffect(() => {
    form.setFieldsValue({
      name: edit.name,
      email: edit.email,
      website: edit.website,
    })
  }, [edit])

  return (
    <Form {...formItemLayout}>
      <Form.Item label="Name">
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input placeholder="Name" />,
        )}
      </Form.Item>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          rules: [{ required: true, message: 'Please input your email!' }],
        })(
          <Input placeholder="Email" />,
        )}
      </Form.Item>
      <Form.Item label="Website">
        {getFieldDecorator('website', {
          rules: [{ required: true, message: 'Please input your website!' }],
        })(
          <Input placeholder="Website" />,
        )}
      </Form.Item>
    </Form>
  )
}

export default connect(mapStateToProps)(UserInfoForm)
