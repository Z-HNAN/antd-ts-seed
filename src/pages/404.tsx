/**
 * 404页面
 */


import React from 'react';
import { router } from 'umi'
import { Result, Button } from 'antd'


export default () => {
  return (
    <Result
      status="404"
      title="页面不存在"
      subTitle="您访问了一个不存在的页面，点击下方返回"
      extra={
        <Button type="primary" onClick={router.goBack}>
          返回上一个页面
        </Button >
      }
    />
  )
}
