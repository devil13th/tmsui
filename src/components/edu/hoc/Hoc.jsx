import React from 'react'
import MyComponent from './MyComponent'
class Hoc extends React.Component {
  state = { loading: false }

  loading = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    return (
      <div>
        <input type="button" onClick={this.loading} value="Loading 1s" />

        <MyComponent
          name="devil13th"
          loading={this.state.loading}
        ></MyComponent>
      </div>
    )
  }
}

export default Hoc
