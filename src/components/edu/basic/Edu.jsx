import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Divider } from 'antd'
import { Link } from 'react-router-dom'
import ChildComponent from '@/components/edu/basic/ChildComponent/Parent'
import InvokeChild from '@/components/edu/basic/InvokeChild/Parent'
import Hook from '@/components/edu/basic/hook/Hook'
import Context from '@/components/edu/basic/context/Context'
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
        <Divider type={'vertical'}></Divider>
        <Link to="/edu/basic/hook">Hook</Link>
        <Divider type={'vertical'}></Divider>
        <Link to="/edu/basic/context">Context</Link>
        <Divider></Divider>
        <Switch>
          <Route
            path="/edu/basic/ChildComponent"
            component={ChildComponent}
          ></Route>
          <Route path="/edu/basic/InvokeChild" component={InvokeChild}></Route>
          <Route path="/edu/basic/hook" component={Hook}></Route>
          <Route path="/edu/basic/context" component={Context}></Route>
        </Switch>
      </div>
    )
  }
}

export default Edu
