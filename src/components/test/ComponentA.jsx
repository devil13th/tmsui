import React from 'react'

class ComponentA extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <div>ComponentA {this.props.a}</div>
  }
}

export default ComponentA
