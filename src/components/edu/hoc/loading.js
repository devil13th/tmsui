import { render } from '@testing-library/react'
import React from 'react'
function loadingWrapper(WrappedComponent) {
  class x extends React.Component {
    render() {
      const { loading } = this.props
      /**
       * jsx中的<WrappedComponent>会被编译成React.createElement(WrappedComponent, null, "1")
       * WrappedComponent指向的是loadingWrapper函数中的WrappedComponent
       */
      return (
        <div>
          {loading ? (
            <div>loading</div>
          ) : (
            <WrappedComponent {...this.props}></WrappedComponent>
          )}
        </div>
      )
    }
  }
  return x
}

export default loadingWrapper
