import React from 'react'
import { Layout, Menu } from 'antd'

import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DesktopOutlined,
  PieChartOutlined,
  ControlOutlined,
  UnorderedListOutlined,
  FileOutlined,
  TeamOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Sider } = Layout
const { SubMenu } = Menu

class IndexMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  toggle = () => {
    this.props.toggle()
  }

  componentDidMount() {
    // alert(this.props.collapsed)
  }
  render() {
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          // console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type)
          this.props.setState({ collapsed })
        }}
        collapsedWidth={80}
        collapsed={this.props.collapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
      >
        <div className="logo"></div>
        <Menu defaultSelectedKeys={['1']} mode="inline">
          <SubMenu key="edu" icon={<ControlOutlined />} title="React Edu">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/edu/basic">React Edu</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<ControlOutlined />} title="System Manager">
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="/about">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<TeamOutlined />}>
              <Link to="/users">角色管理</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              <Link to="/CgTest/CgTestList">CgTest列表</Link>
            </Menu.Item>
            <SubMenu key="sub1-1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
          </SubMenu>

          <Menu.Item key="9" icon={<SettingOutlined />}>
            [{this.props.state.headerName}]
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default IndexMenu
