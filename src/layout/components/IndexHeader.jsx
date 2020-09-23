import React from 'react';
import { Layout, Menu } from 'antd';

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
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
class IndexHeader extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Header className="site-layout-background" style={{height:'40px', padding: 0 ,textAlign:'left'}}>
         {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.props.toggle,
            })} 
      </Header>
    )
  }
}

export default IndexHeader;