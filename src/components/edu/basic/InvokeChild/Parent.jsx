import React from 'react'
import ChildrenComponent from './Children'

import { Button, Divider } from 'antd'
class Parent extends React.Component {
  state = {
    a: 1,
  }

  invokeChildMethod = () => {
    console.log(this.cd)
    this.cd.add(2)
  }

  render() {
    return (
      <div>
        <Button type={'primary'} onClick={this.invokeChildMethod}>
          调用子组件的方法+2
        </Button>
        <Divider type={'vertical'}></Divider>
        <Button
          type={'primary'}
          onClick={() => {
            alert(this.cd.getV())
          }}
        >
          获取子组件的值
        </Button>

        <Divider type={'vertical'}></Divider>
        <Button
          type={'primary'}
          onClick={() => {
            this.cd.resetCount()
          }}
        >
          Clear
        </Button>

        <ChildrenComponent
          ref={(c) => {
            this.cd = c
          }}
        ></ChildrenComponent>
      </div>
    )
  }
}

export default Parent
