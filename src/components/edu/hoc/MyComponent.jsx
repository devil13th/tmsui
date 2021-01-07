import React from 'react'
import loadingWrapper from './loading'
class MyComponent extends React.Component {
  state = {}

  render() {
    return <div>Hello Hoc! {this.props.name}</div>
  }
}

export default loadingWrapper(MyComponent)
