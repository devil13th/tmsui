import React from 'react'
import { Input } from 'antd'
class Children extends React.Component {
  state = {
    v: 1,
  }

  add = (x) => {
    this.setState({ v: this.state.v + x })
  }

  resetCount = () => {
    this.setState({ v: 0 })
  }

  setV = (e) => {
    this.setState({ v: parseInt(e.target.value) })
  }

  getV = () => {
    return this.state.v
  }

  render() {
    return (
      <div style={{ padding: 8 }}>
        <Input
          onChange={this.setV}
          value={this.state.v}
          style={{ width: 100 }}
        ></Input>
      </div>
    )
  }
}

export default Children
