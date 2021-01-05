import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import ChildComponent from '@/components/edu/basic/ChildComponent/Parent'
import InvokeChild from '@/components/edu/basic/InvokeChild/Parent'
import style from './css.module.css'
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
class Edu extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <div className={style.title_layout}>
          <FileOutlined style={{ color: '#1890ff', flex: '0 0 30px' }} />
          <h3 style={{ flex: '0 0 100px' }} className={style.title_content}>
            React Edu
          </h3>
          <div style={{ textAlign: 'right', flex: '1 1 auto' }}>
            React Education
          </div>
        </div>
        <Divider></Divider>

        <Link to="/edu/basic/ChildComponent">嵌套子组件</Link>
        <Divider type={'vertical'}></Divider>
        <Link to="/edu/basic/InvokeChild">调用子组件方法</Link>
        <Divider></Divider>
        <Switch>
          <Route path="/edu/basic/ChildComponent">
            <ChildComponent></ChildComponent>
          </Route>
          <Route path="/edu/basic/InvokeChild">
            <InvokeChild></InvokeChild>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default Edu
