import React from 'react'
import { message, Menu, Table, Button, Form, Row, Col, Input } from 'antd'
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
      pageSize: 3,
      total: 0,
      pageSizeOptions: [5, 10, 15, 20, 50, 100],
      showSizeChanger: true,
      size: 'small',
    },
    // 排序
    sorter: {
      field: '',
      order: '',
    },
    // 主键字段
    key: 'userId',
  }

  componentDidMount = function () {
    this.queryList()
  }
  // 查询列表
  queryList = () => {
    const _this = this

    const queryCondition = {
      //userAge: 5,
      //...this.state.pagination,
      pageNum: this.state.pagination.current,
      pageSize: this.state.pagination.pageSize,
      total: this.state.pagination.total,
      sortField: this.state.sorter.field,
      sortOrder: this.state.sorter.order.replace('end', ''),
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
              showQuickJumper: true,
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

    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          size={'small'}
          rowKey={(record) => record.userId}
          loading={this.state.tableLoading}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
        />
      </div>
    )
  }
}

export default CgTestList
