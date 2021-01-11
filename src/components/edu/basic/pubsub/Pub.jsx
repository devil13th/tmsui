import React from 'react'
import PubSubApi from 'pubsub-js'
class Pub extends React.Component {
  state = {msg:'',data:'' }

  publish = (name) => {
    // 发布消息
    PubSubApi.publish('a.b.c', 'hello world ! sync' + Math.random());
    PubSubApi.publishSync('a.b.c', 'hello world ! async'  + Math.random());
  }

  
  render() {
    
    return (
      <div style={{border:"1px solid red",padding:"5px"}}>
        <h5>发布消息组件</h5>
        <button onClick={this.publish}>发布消息</button>      
      </div>
    )
  }
}

export default Pub
