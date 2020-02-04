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
      <h1>User-Page1</h1>
    </div>
  )
}

export default Me
