import React from 'react'
import {
  message,
  Menu,
  Table,
  Button,
  Form,
  Row,
  Col,
  Input,
  Divider,
  Dropdown,
  Modal,
} from 'antd'
import {
  UpOutlined,
  DownOutlined,
  SearchOutlined,
  DownloadOutlined,
  UploadOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons'

import CgTestForm from '@/components/CgTest/CgTestForm'

import tran from '@/utils/transfer'
class CgTestList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    tableSelectedRowKeys: [], // Check here to configure the default column
    // 表格loading
    tableLoading: false,
    // 表格数据
    data: [],
    // 分页
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
      pageSizeOptions: [1, 5, 10, 15, 20, 50, 100],
      showSizeChanger: true,
      showQuickJumper: true,
      size: 'default',
    },
    searchToggle: false,
    // 排序
    sorter: {
      field: '',
      order: '',
    },
    // 主键字段
    key: 'userId',
    // 每列宽度 (24/colSpan的值为每行多少列)
    colSpan: 8,

    // 新增、编辑页是否显示
    formVisible: false,

    // 被编辑数据的id
    editId: '',
  }

  formRef = React.createRef()

  // 查询
  search = () => {
    this.queryList(true)
  }

  componentDidMount = function () {
    this.queryList()
  }
  // 顶部搜索内容的收起和展开
  toggleSearch = () => {
    this.setState({ searchToggle: !this.state.searchToggle })
  }

  // 查询列表
  queryList = (clearPage) => {
    const _this = this

    if (clearPage) {
      // 清除分页
      this.setState(
        {
          pagination: {
            ..._this.state.pagination,
            current: 1,
          },
        },
        this.basicQuery
      )
    } else {
      this.basicQuery()
    }
  }
  // 基础查询
  basicQuery = () => {
    const v = this.formRef.current.getFieldsValue()
    console.log('queryCondition', v)
    const _this = this
    const queryCondition = {
      //userAge: 5,
      //...this.state.pagination,
      pageNum: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize,
      total: this.state.pagination.total,
      sortField: this.state.sorter.field,
      sortOrder: this.state.sorter.order.replace('end', ''),
      ...v,
    }
    this.setState({ tableLoading: true })
    fetch(`/api/cgTest/findCgTestPage?${tran.objToUrl(queryCondition)}`, {
      method: 'get',
      headers: {},
    })
      .then(function (obj) {
        return obj.json()
      })
      .then(function (r) {
        if (r.code === '0') {
          _this.setState({
            data: r.result.list,
            tableLoading: false,
            pagination: {
              ..._this.state.pagination,
              current: r.result.pageNum,
              pageSize: r.result.pageSize,
              total: r.result.total,
            },
          })
        } else {
          message.error(r.msg)
        }
      })
      .catch(function (e) {
        message.error('ERROR')
      })
      .finally(function () {
        _this.setState({ tableLoading: false })
      })
  }

  // 创建新数据
  create = () => {
    this.openForm()
  }

  openForm = () => {
    this.setState({
      formVisible: true,
    })
  }

  closeForm = () => {
    this.setState({ formVisible: false })
  }

  onSelectChange = (tableSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', tableSelectedRowKeys)
    this.setState({ tableSelectedRowKeys })
  }

  // 分页/排序 事件处理
  handleTableChange = (pagination, filters, sorter) => {
    const st = {
      pagination,
    }
    if (sorter.field && sorter.order) {
      st.sorter = {
        field: sorter.field,
        order: sorter.order,
      }
    } else {
      st.sorter = {
        field: '',
        order: '',
      }
    }
    this.setState(st, this.queryList)
  }

  render() {
    const { loading, tableSelectedRowKeys } = this.state
    const rowSelection = {
      tableSelectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = tableSelectedRowKeys.length > 0

    const columns = [
      {
        title: 'userId',
        key: 'userId',
        dataIndex: 'userId',
        sorter: true,
      },
      {
        title: 'userName',
        key: 'userName',
        dataIndex: 'userName',
        sorter: true,
      },
      {
        title: 'userAge',
        key: 'userAge',
        dataIndex: 'userAge',
        sorter: true,
      },
      {
        title: 'userBirthday',
        key: 'userBirthday',
        dataIndex: 'userBirthday',
        sorter: true,
      },
    ]

    const operateMenu = (
      <Menu>
        <Menu.Item key="1" icon={<EditOutlined />}>
          Edit
        </Menu.Item>
        <Menu.Item key="2" icon={<DeleteOutlined />}>
          Delete
        </Menu.Item>
        <Menu.Item key="3" icon={<DownloadOutlined />}>
          Import
        </Menu.Item>
        <Menu.Item key="4" icon={<UploadOutlined />}>
          Export
        </Menu.Item>
      </Menu>
    )

    const searchMenu = (
      <Menu>
        <Menu.Item key="2" icon={<DeleteOutlined />}>
          Reset
        </Menu.Item>
      </Menu>
    )

    const searchItemDisplay = this.state.searchToggle ? 'block' : 'none'

    return (
      <div className="pageContent">
        <Form
          ref={this.formRef}
          name="advanced_search"
          className="ant-advanced-search-form tmsui_form"
        >
          <Row gutter={24}>
            <Col span={this.state.colSpan}>
              <Form.Item name="UserId" label="userId">
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col span={this.state.colSpan}>
              <Form.Item name="UserName" label="userName">
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col
              span={this.state.colSpan}
              style={{ display: searchItemDisplay }}
            >
              <Form.Item name="userAge" label="userAge">
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col
              span={this.state.colSpan}
              style={{ display: searchItemDisplay }}
            >
              <Form.Item name="userBirthday" label="userBirthday">
                <Input placeholder="placeholder" />
              </Form.Item>
            </Col>
            <Col
              span={this.state.colSpan}
              style={{ display: searchItemDisplay }}
            ></Col>

            <Col span={this.state.colSpan}>
              <Form.Item label="">
                <Button type="primary" onClick={this.search}>
                  Search
                </Button>
                <Button>Reset</Button>
                <Button
                  key="1"
                  type="link"
                  icon={
                    this.state.searchToggle ? <UpOutlined /> : <DownOutlined />
                  }
                  onClick={this.toggleSearch}
                >
                  Advance
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        <Row gutter={24} style={{ marginBottom: '8px' }}>
          <Col span={6}></Col>
          <Col span={18} style={{ textAlign: 'right' }}>
            <Dropdown.Button
              type="primary"
              overlay={operateMenu}
              onClick={this.create}
            >
              Create
            </Dropdown.Button>
          </Col>
        </Row>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          size="small"
          rowKey={(record) => record.userId}
          loading={this.state.tableLoading}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
        />

        <Modal
          title="Basic Modal"
          visible={this.state.formVisible}
          onCancel={this.closeForm}
          footer={null}
        >
          <CgTestForm id={this.state.editId}></CgTestForm>
        </Modal>
      </div>
    )
  }
}

export default CgTestList
