import React from 'react'
import { Layout, Menu } from 'antd'
import { Breadcrumb, Dropdown, Button, Badge, Tooltip } from 'antd'
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
  BellOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout
class IndexHeader extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <Badge count={5}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.tmall.com/"
            >
              My Tasks
            </a>
          </Badge>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            My Information
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            Logout
          </a>
        </Menu.Item>
      </Menu>
    )

    return (
      <Header
        className="site-layout-background"
        style={{ height: '40px', padding: 0, textAlign: 'left' }}
      >
        <div className="header-layout">
          <div className="header-toggle">
            {React.createElement(
              this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.props.toggle,
              }
            )}
          </div>
          <div className="header-nav">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="header-bar">
            <Dropdown overlay={menu}>
              <Button type="text" size={'small'}>
                ZhangSan
              </Button>
            </Dropdown>

            <Button type="text">
              <Tooltip title="My Task">
                <Badge count={5}>
                  <BellOutlined style={{ fontSize: 16 }} />
                </Badge>
              </Tooltip>
            </Button>

            <Button type="text">
              <Tooltip title="Setting">
                <SettingOutlined style={{ fontSize: 16 }} />
              </Tooltip>
            </Button>
          </div>
        </div>
      </Header>
    )
  }
}

export default IndexHeader
