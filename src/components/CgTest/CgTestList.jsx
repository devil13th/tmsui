import React from 'react'
import { Menu, Table, Button, Form, Row, Col, Input } from 'antd'

class CgTestList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }
  state = {
    tableSelectedRowKeys: [1, 2, 3], // Check here to configure the default column
    // 表格loading
    tableLoading: false,
    // 表格数据
    data: [],
  }

  componentDidMount = () => {
    this.setState({ tableLoading: true })

    const data = []
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      })
    }

    this.setState({ data })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        tableLoading: false,
      })
    }, 2000)
  }

  onSelectChange = (tableSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', tableSelectedRowKeys)
    this.setState({ tableSelectedRowKeys })
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
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ]

    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={this.state.data}
          size={'small'}
          loading={this.state.tableLoading}
        />
      </div>
    )
  }
}

export default CgTestList
