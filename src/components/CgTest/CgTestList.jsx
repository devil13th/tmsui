import React, { useState } from 'react'
import { Menu, Table, Button, Form, Row, Col, Input } from 'antd'

class CgTestList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }

  state = {
    selectedRowKeys: [1, 2, 3], // Check here to configure the default column
    loading: false,
  }

  componentDidMount = () => {
    this.setState({ loading: true })
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 2000)
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    this.setState({ selectedRowKeys })
  }

  render() {
    const { loading, selectedRowKeys } = this.state
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    const hasSelected = selectedRowKeys.length > 0

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

    const data = []
    for (let i = 0; i < 46; i++) {
      data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      })
    }

    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          size={'small'}
          loading={loading}
        />
      </div>
    )
  }
}

export default CgTestList
