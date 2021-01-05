import React from 'react'
import { Layout, Menu } from 'antd'
import { Lifecycle } from 'react-router'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TestA from '@/components/test/ComponentA'
import Edu from '@/components/edu/basic/Edu'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import IndexMenuContainer from '@/layout/containers/IndexMenuContainer'
import IndexHeaderContainer from '@/layout/containers/IndexHeaderContainer'

import CgTestList from '@/components/CgTest/CgTestList'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Users() {
  return <h2>Users</h2>
}

class IndexLayout extends React.Component {
  state = {
    focused: true,
  }

  xx(nexState, replace) {
    console.log(nexState, replace)
    alert(1)
  }

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <IndexMenuContainer></IndexMenuContainer>
        <Layout className="site-layout">
          <IndexHeaderContainer></IndexHeaderContainer>
          <Content
            className="site-layout-background"
            style={{
              margin: '8px 8px',
              padding: 8,
            }}
          >
            <Switch>
              <Route path="/testA">
                <TestA a="xxx"></TestA>
              </Route>

              <Route path="/CgTest/CgTestList">
                <CgTestList />
              </Route>

              <Route path="/edu/basic">
                <Edu></Edu>
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default IndexLayout
