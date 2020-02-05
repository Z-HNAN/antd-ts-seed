/**
 * 我的
 */

import React from 'react'
import Router from 'umi/router';

const Me: React.FC<{}> = () => {
  const handleClick = () => {
    Router.push('/your')
  }

  return (
    <div>
      <h1>Admin-Page1</h1>
      <div style={{ height: '150vh', width: '20px', border: '1px solid red'}} />
    </div>
  )
}

export default Me
