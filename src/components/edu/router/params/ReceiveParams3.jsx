import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from 'antd'
class ReceiveParams3 extends React.Component {
  state = {
    data: [
      { id: 1, name: 'zhangsan', age: 5, bir: '2020-01-01' },
      { id: 2, name: 'lisi', age: 6, bir: '2020-01-02' },
      { id: 3, name: 'wangwu', age: 7, bir: '2020-01-02' },
      { id: 4, name: 'zhaoliu', age: 8, bir: '2020-01-03' },
      { id: 5, name: 'sunqi', age: 9, bir: '2020-01-05' },
    ],
  }

  render() {
    console.log("参数",this.props.location.state)
    const id = this.props.location.state.id
    const item = this.state.data.find(
      (d) => d.id === parseInt(id)
    )
    return (
      <div>
        <Card
          title={item.name}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          ID:{item.id}
          <br />
          NAME:{item.name}
          <br />
          AGE:{item.age}
          <br />
          BIRTHDAY:{item.bir}
          <br />
        </Card>
      </div>
    )
  }
}
export default ReceiveParams3
