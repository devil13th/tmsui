import React from 'react'
import PubSubApi from 'pubsub-js'
class Sub extends React.Component {
  state = {msg:'',data:'' }

  mySubscriber =  (msg, data) =>  {
    console.log( "msg",msg );
    console.log( "data",data );
    this.setState({msg,data})
  };
  componentDidMount(){
    console.log("mount");
    // 订阅消息
    var token = PubSubApi.subscribe('a.b.c', this.mySubscriber);
  }

  componentWillUnmount(){
    PubSub.unsubscribe( this.mySubscriber);
  }
  render() {
    
    return (
      <div style={{border:"1px solid red",padding:"5px"}}>
       <h5>订阅消息组件</h5>
       订阅的KEY：{this.state.msg}<br/>
       接收的内容：{this.state.data}
      </div>
    )
  }
}

export default Sub
