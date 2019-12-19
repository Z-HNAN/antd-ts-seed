/**
 * 我的
 */

import React from 'react'
import { Button } from 'antd-mobile'
import Router from 'umi/router';

const Me: React.FC<{}> = () => {
  const handleClick = () => {
    Router.push('/your')
  }

  return (
    <div>
      <h1>我的</h1>
      <Button type="primary" onClick={handleClick}>去非Tabbar页面</Button>
    </div>
  )
}

export default Me
