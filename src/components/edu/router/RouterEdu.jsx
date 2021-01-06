import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Divider } from 'antd'
import { NavLink } from 'react-router-dom'
import style from './css.module.css'
import About from './about/About'
import Home from './home/Home'
import User from './user/User'
import SendParams from './params/SendParams'
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
class RouterEdu extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div className={style.title_layout}>
          <FileOutlined style={{ color: '#1890ff', flex: '0 0 30px' }} />
          <h3 style={{ flex: '0 0 200px' }} className={style.title_content}>
            Router Education
          </h3>
          <div style={{ textAlign: 'right', flex: '1 1 auto' }}>
            Router Education
          </div>
        </div>
        <Divider></Divider>
        <div className="router_nav">
          <NavLink activeClassName="navLk" to="/edu/router/home">
            Home
          </NavLink>
          <Divider type={'vertical'}></Divider>
          <NavLink activeClassName="navLk" to="/edu/router/about">
            About
          </NavLink>
          <Divider type={'vertical'}></Divider>
          <NavLink activeClassName="navLk" to="/edu/router/user">
            User
          </NavLink>
          <Divider type={'vertical'}></Divider>
          <NavLink activeClassName="navLk" to="/edu/router/params">
            传参方式
          </NavLink>
        </div>
        <Divider></Divider>
        <Switch>
          <Route path="/edu/router/home" component={Home}></Route>
          <Route path="/edu/router/about" component={About}></Route>
          <Route path="/edu/router/user" component={User}></Route>
          <Route path="/edu/router/params" component={SendParams}></Route>
        </Switch>
      </div>
    )
  }
}

export default RouterEdu
