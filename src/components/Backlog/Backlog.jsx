import React from 'react'
import style from './Backlog.module.css'
import {
  ArrowRightOutlined,
  NotificationOutlined,
  PlusOutlined,
  BellOutlined,
  BookOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Menu, Spin, Table, Divider } from 'antd'
class Backlog extends React.Component {
  state = {
    loading: true,
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

    return (
      <div>
        <Spin spinning={this.state.loading} tip="Loading...">
          <div className={style.header}>
            <div style={{ display: 'flex' }}>
              <ArrowRightOutlined
                style={{
                  flex: '0 0 32px',
                  lineHeight: '32px',
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
                  flex: '0 0 32px',
                  lineHeight: '32px',
                }}
              >
                <Dropdown overlay={menuList} placement="bottomLeft">
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
              expandedRowRender: (record) => (
                <p style={{ margin: 0 }}>{record.description}</p>
              ),
              rowExpandable: (record) => record.name !== 'Not Expandable',
            }}
            dataSource={this.state.data}
          />
        </Spin>
      </div>
    )
  }
}

export default Backlog
