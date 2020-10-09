import React from 'react'
import { Layout, Menu } from 'antd'
import { Breadcrumb } from 'antd'
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

const { Header, Content, Footer, Sider } = Layout
class IndexHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Header
        className="site-layout-background"
        style={{ height: '40px', padding: 0, textAlign: 'left' }}
      >
        <div style={{ float: 'left' }}>
          {React.createElement(
            this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: this.props.toggle,
            }
          )}
        </div>
        <Breadcrumb style={{ float: 'left', paddingTop: '8px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
    )
  }
}

export default IndexHeader
