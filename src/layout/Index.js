import React from 'react';


class Index extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name :'张三',
      age : 5
    }

    // 如果不使用箭头函数，则需要绑定this
    // this.increase = this.increase.bind(this);
  }

  // 如果不使用箭头函数，则需要在构造函数中绑定this
  increase = () => {
    this.setState({
      age : this.state.age + 1
    })  
  }

  render(){

    const str = "Hello React";
    return (
      <div>
        <h1>{str}</h1>

       [环境变量: {process.env.NODE_ENV} | {process.env.REACT_APP_PARAM}]

        

      </div>
    )
  }
}


export default Index;
