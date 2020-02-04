import React from 'react'
import Router from 'umi/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd'

import styles from './index.less'

interface PropsType {
  className: string
  form: any
}

class NormalLoginForm extends React.PureComponent<PropsType> {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
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
        {/* 开发暂时使用的导向按钮 */}
        <Button type="primary" onClick={() => { Router.push('/user') }}>
          user管理
        </Button>
        <Button type="primary" onClick={() => { Router.push('/admin') }}>
          admin管理
        </Button>
      </Form>
    );
  }
}

export default Form.create({ name: 'normal_login' })(NormalLoginForm)
