import React from 'react'

import { Card, WhiteSpace, Button } from 'antd-mobile'


export interface IProps {
  name: string
  email: string
  website: string
  onDelete?: () => void
}

export const NameCard: React.FC<IProps> = props => {
  const { name, email, website, onDelete } = props

  return (
    <div>
      <WhiteSpace size="lg" />
      <Card full>
        <Card.Header
          title={name}
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<Button type= "warning" inline size="small" onClick={() => onDelete && onDelete()}>delete</Button>}
        />
        <Card.Body>
          <div>website: {website}</div>
          <p>email: {email}</p>
        </Card.Body>
      </Card>
    </div>
  )
}
