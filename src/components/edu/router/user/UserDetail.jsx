import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Card } from 'antd'
class UserDetail extends React.Component {
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
    console.log(this.props)

    const item = this.state.data.filter(
      (d) => d.id === parseInt(this.props.match.params.id)
    )
    console.log(item)
    return (
      <div>
        <Card
          title={item[0].name}
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          ID:{item[0].id}
          <br />
          NAME:{item[0].name}
          <br />
          AGE:{item[0].age}
          <br />
          BIRTHDAY:{item[0].bir}
          <br />
        </Card>
      </div>
    )
  }
}
export default UserDetail
