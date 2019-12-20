/**
 * 结合loading自动显示隐藏Toast
 */
import React from 'react'
import { Toast } from 'antd-mobile'

export interface OwnProps {
  type: string
  loading: boolean | undefined
}

const LoadingToast: React.FC<OwnProps> = props => {
  const { type, loading } = props

  React.useEffect(() => {
    /**
     * 根据loading状态显示Toast
     * 只在true显示
     * false | undefined 均隐藏
     */
    if (loading === true) {
      Toast.loading(type, 0)
    } else {
      Toast.hide()
    }

    // 卸载时隐藏Toast
    return () => {
      Toast.hide()
    }
  }, [loading])

  // 组件不渲染任何实体内容
  return null
}

export default LoadingToast
