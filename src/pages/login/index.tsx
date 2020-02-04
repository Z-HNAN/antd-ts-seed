/**
 * 我的
 */

import React from 'react'
import Router from 'umi/router';

import styles from './index.less'

import Form from './components/Form'

const Me: React.FC<{}> = () => {

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  // const handleClick = () => {
  //   Router.push('/your')
  // }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            {/* <img alt="logo" className={styles.logo} /> */}
            <span className={styles.title}>登录</span>
          </div>
          <div className={styles.desc}>description</div>
        </div>
        <Form className={styles.from}/>
      </div>
    </div>
  )
}

export default Me
