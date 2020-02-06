import React from 'react'
import Router from 'umi/router'
import { FormComponentProps } from 'antd/es/form'
import { Form, Icon, Input, Button } from 'antd'

import styles from './index.less'

export interface LoginParamsType {
  username: string
  password: string
}

interface PropsType {
  className: string
  form: FormComponentProps['form']
  onSubmit: (values: LoginParamsType) => void
}

class NormalLoginForm extends React.PureComponent<PropsType> {
  handleSubmit = (e: React.FormEvent) => {
    // 阻止默认事件
    e.preventDefault()

    const { form, onSubmit } = this.props

    // 表单无误进行提交
    form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values
        onSubmit({ username, password })
      }
    });
  };

  render() {
    const {
      className: classNameProps,
      form,
    } = this.props

    const className = `${styles.loginForm} ${classNameProps}`

    const { getFieldDecorator } = form
    return (
      <Form onSubmit={this.handleSubmit} className={className}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginButton}>
            登录
          </Button>
        </Form.Item>
        {/* --------开发暂时使用的导向按钮-------- */}
        <Button type="primary" onClick={() => { Router.push('/user') }}>
          user管理
        </Button>
        <Button type="primary" onClick={() => { Router.push('/admin') }}>
          admin管理
        </Button>
        {/* --------开发暂时使用的导向按钮-------- */}
      </Form>
    );
  }
}

export default Form.create<PropsType>()(NormalLoginForm)
