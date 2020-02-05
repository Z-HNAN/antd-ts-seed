/**
 * 普通布局
 */

import React, { ReactElement } from 'react'
import { Layout } from 'antd';

import { Header as HeaderComponent } from './components/Basic'

import styles from './BasicLayout.less'

const { Content, Sider } = Layout;

interface PropsType {
  menu: ReactElement
  content: ReactElement
}

const BasicLayout: React.FC<PropsType> = props => {
  const {
    menu: MenuComponent,
    content,
  } = props

  return (
    <Layout>
      <Layout>
        <HeaderComponent />
      </Layout>
      <Layout>
        <Sider width={200}>
          {MenuComponent}
        </Sider>
        <Layout className={styles.body}>
          <Content className={styles.content}>
            {content}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}


export default BasicLayout
