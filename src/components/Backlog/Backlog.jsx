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
  MoreOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  RightOutlined,
  DownOutlined,
  EditOutlined,
  ClockCircleOutlined,
  InboxOutlined,
  CommentOutlined,
  ExportOutlined,
  ImportOutlined,
} from '@ant-design/icons'
import {
  Input,
  Button,
  Dropdown,
  Menu,
  Spin,
  Table,
  Divider,
  Drawer,
  Tabs,
  Tag,
  Row,
  Col,
  Rate,
  Tooltip,
  Pagination,
  Upload,
} from 'antd'
const { Search } = Input
const { TabPane } = Tabs
const { Dragger } = Upload
class Backlog extends React.Component {
  state = {
    loading: true,
    barVisible: false,
    viewType: 'DETAIL', // LIST , DETAIL
    columns: [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        fixed: 'left',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        render: (tag) => <Tag color="#87d068">{tag.toUpperCase()}</Tag>,
      },
      {
        title: 'Limit Date',
        dataIndex: 'limitDate',
        key: 'limitDate',
        width: 100,
      },

      { title: 'Priority', dataIndex: 'priority', key: 'priority', width: 50 },
      { title: 'Days', dataIndex: 'days', key: 'days', width: 50 },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 100,
        render: () => <a>Delete</a>,
      },
    ],
    data: [
      {
        key: 1,
        title: 'LL 外部账号数据权限控制',
        type: 'BACKLOG',
        limitDate: '2020-01-01',
        priority: 2,
        days: 5,
        address: 'New York No. 1 Lake Park',
        description:
          'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: 2,
        title: '在线考试，考题分发问题',
        type: 'TODO',
        limitDate: '2020-01-01',
        priority: 3,
        days: 4,
        address: 'London No. 1 Lake Park',
        description:
          'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 3,
        title:
          'Supplier Dashbaord不显示 Supplier Dashbaord不显示 Supplier Dashbaord不显示',
        type: 'NOTE',
        limitDate: '2020-01-01',
        priority: 4,
        days: 3,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
      },
      {
        key: 4,
        title: 'Painting ftp丢失文件及数据',
        type: 'BACKLOG',
        limitDate: '2020-01-01',
        priority: 5,
        days: 2,
        address: 'Sidney No. 1 Lake Park',
        description:
          'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
    ],
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  showBar = () => {
    this.setState({ barVisible: true })
  }
  onClose = () => {
    this.setState({ barVisible: false })
  }
  changeViewType = (type) => {
    this.setState({ viewType: type })
  }
  render() {
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      },
    }

    const moreFunList = (
      <Menu>
        <Menu.Item onClick={this.showBar}>
          <SettingOutlined /> Setting
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.changeViewType('DETAIL')
          }}
        >
          <UnorderedListOutlined />
          Detail View
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.changeViewType('LIST')
          }}
        >
          <OrderedListOutlined />
          List View
        </Menu.Item>
        <Menu.Item>
          <BookOutlined />
          Note
        </Menu.Item>
        <Menu.Item>
          <ExportOutlined />
          Export
        </Menu.Item>
        <Menu.Item>
          <ImportOutlined />
          Import
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
    )

    function expandRender(record) {
      return (
        <div style={{ border: '1px solid red', padding: '8px' }}>
          {record.description}
        </div>
      )
    }

    const listView = (
      <Table
        size="small"
        columns={this.state.columns}
        expandable={{
          expandedRowRender: expandRender,
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={this.state.data}
      />
    )

    const detailView = (
      <Row>
        <Col span="8">
          <ul className={style.ul_list}>
            {this.state.data.map((item) => {
              return (
                <div key={item.key}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1 1 auto' }}>
                      <Tag color="#87d068">{item.type.toUpperCase()}</Tag>
                      {item.limitDate}
                    </div>
                    <div style={{ flex: '0 0 30px' }}>
                      <Dropdown overlay={moreFunList} placement="bottomLeft">
                        <Button
                          type="link"
                          style={{ marginRight: '4px', color: '#aaa' }}
                          icon={<MoreOutlined />}
                        />
                      </Dropdown>
                    </div>
                  </div>

                  <b>{item.title}</b>
                  <br />
                  <Rate
                    defaultValue={4}
                    style={{ fontSize: 14 }}
                    disabled={true}
                  />
                  <Divider />
                </div>
              )
            })}
          </ul>
          <Pagination size="small" total={50} />
        </Col>
        <Col span="16">
          <div style={{ padding: '4px 16px' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1 1 auto' }}>
                <b style={{ fontSize: '18px' }}>LL 外部账号数据权限控制</b>
              </div>
              <div
                style={{
                  flex: '0 0 100px',
                  textAlign: 'right',
                  padding: '0px ',
                }}
              >
                <Tooltip title="Comments">
                  <Button icon={<CommentOutlined />} type="link" />
                </Tooltip>
                <Tooltip title="Edit">
                  <Button icon={<EditOutlined />} type="link" />
                </Tooltip>
                <Tooltip title="Edit">
                  <Button icon={<ClockCircleOutlined />} type="link" />
                </Tooltip>
              </div>
            </div>
            <Divider />
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '1 1 auto' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <RightOutlined style={{ fontWeight: 900 }} />
                </span>
                Basic Information
                <br />
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <DownOutlined style={{ fontWeight: 1200 }} />
                </span>
                Description
                <br />
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <DownOutlined style={{ fontWeight: 900 }} />
                </span>
                Attachments
                <br />
                <Dragger {...props}>
                  <p style={{ marginBottom: 8, fontSize: '48px' }}>
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Click or drag file to this area to upload
                  </p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from
                    uploading company data or other band files
                  </p>
                </Dragger>
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <DownOutlined style={{ fontWeight: 900 }} />
                </span>
                Comment
                <br />
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <DownOutlined style={{ fontWeight: 900 }} />
                </span>
                Custom Properties
              </div>
              <div style={{ flex: '0 0 150px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: 4,
                    fontSize: 8,
                    background: '#eee',
                    height: 17,
                    width: 17,
                    lineHeight: '8px',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginRight: '4px',
                  }}
                >
                  <DownOutlined style={{ fontWeight: 900 }} />
                </span>
                <b>Date</b>
                <div style={{ padding: '8px 22px' }}>
                  Create Date : <br />
                  2020-01-01 <br /> <br />
                  Modify Date : <br />
                  2020-01-01 <br /> <br />
                  Limite Date : <br />
                  2020-01-01
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )

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
                  flex: '0 0 500px',
                  lineHeight: '32px',
                  textAlign: 'right',
                }}
              >
                <Search
                  placeholder="input search text"
                  style={{ width: 200, marginRight: '4px' }}
                />

                <Dropdown overlay={moreFunList} placement="bottomLeft">
                  <Button
                    type="link"
                    style={{ marginRight: '4px', color: '#aaa' }}
                    icon={<MoreOutlined />}
                  />
                </Dropdown>
                <Button type="primary" icon={<PlusOutlined />}>
                  Create
                </Button>
              </div>
            </div>
          </div>
          <Divider></Divider>

          {this.state.viewType === 'LIST' ? listView : detailView}

          <Drawer
            placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.barVisible}
            placement="left"
            width={500}
          >
            <Tabs defaultActiveKey="1">
              <TabPane
                tab={
                  <span>
                    <SearchOutlined />
                    Search Condition
                  </span>
                }
                key="1"
              >
                Content of Tab Pane 1
              </TabPane>

              <TabPane
                tab={
                  <span>
                    <SettingOutlined />
                    Setting
                  </span>
                }
                key="3"
              >
                默认预警工作日
              </TabPane>
            </Tabs>
          </Drawer>
        </Spin>
      </div>
    )
  }
}

export default Backlog
