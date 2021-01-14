import React from 'react'
import style from './Backlog.module.css'
import {
  ArrowRightOutlined,
  NotificationOutlined,
  PlusOutlined,
  BellOutlined,
  SearchOutlined,
  BookOutlined,
  AudioOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import {Input, Button, Dropdown, Menu, Spin, Table, Divider ,Drawer , Tabs} from 'antd'
const { Search } = Input;
const { TabPane } = Tabs;
class Backlog extends React.Component {
  state = {
    loading: true,
    visible:false,
    columns: [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
    ],
    data: [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description:
          'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description:
          'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
      },
      {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description:
          'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
    ],
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  showSearch=()=>{
    this.setState({visible:true})
  }
  onClose  = () => {
    this.setState({visible:false})
  }
  render() {
    const menuList = (
      <Menu>
        <Menu.Item>
          <NotificationOutlined /> Todo
        </Menu.Item>
        <Menu.Item>
          <BellOutlined />
          Backlog
        </Menu.Item>
        <Menu.Item>
          <BookOutlined />
          Note
        </Menu.Item>
      </Menu>
    )

    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 16,
          color: '#1890ff',
        }}
      />
    );

    function expandRender(record){
      return (
        <div style={{border:'1px solid red',padding:'8px'}}>
          {record.description}
        </div>
      )
    }

    return (
      <div>
        <Spin spinning={this.state.loading} tip="Loading...">
          <div className={style.header}>
            <div style={{ display: 'flex' }}>
              <ArrowRightOutlined
                style={{
                  flex: '0 0 32px',
                  lineHeight: '34px',
                  color: '#008dff',
                }}
              />
              <h1
                style={{
                  flex: '1 1 auto',
                  lineHeight: '28px',
                  color: '#008dff',
                }}
              >
                Backlog
              </h1>
              <div
                style={{
                  flex: '0 0 400px',
                  lineHeight: '32px',
                  textAlign:'right'
                }}
              >
                <Search placeholder="input search text" style={{ width: 200,marginRight:'4px' }} />
                <Button type="link" onClick={this.showSearch}>Advance</Button>
                <Dropdown overlay={menuList} placement="bottomLeft" >
                  <Button type="primary" icon={<PlusOutlined />} />
                </Dropdown>
              </div>
            </div>
          </div>
          <Divider></Divider>
          <Table
            size="small"
            columns={this.state.columns}
            expandable={{
              expandedRowRender: expandRender,
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={this.state.data}
          />





        <Drawer
         
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          placement="left"
          width={500}
        >
         <Tabs defaultActiveKey="1">
          <TabPane tab={
            <span>
              <SearchOutlined />
              Search Condition
            </span>
            }  key="1">
            Content of Tab Pane 1
          </TabPane>
          
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab={
            <span>
              <SettingOutlined />
              Setting
            </span>
            } 
            key="3"
          >
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        </Drawer>


        </Spin>
      </div>
    )
  }
}

export default Backlog
