import React from 'react'
import Pub from './Pub'
import Sub from './Sub'
import {Divider} from 'antd'
class PubSub extends React.Component {


  render() {
    
    return (
      <div>
        不相干的两个组件之间通信 - 发布订阅模式
        <Pub></Pub>
        <Divider></Divider>
        <Sub></Sub>
      </div>
    )
  }
}

export default PubSub
