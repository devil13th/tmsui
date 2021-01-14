import React from 'react'
import Child from './Child'
import { User, Theme } from './userContext'
class Context extends React.Component {
  state = { person: { name: 'zhangsan', age: 5 }, theme: 'blue' }

  changeName = (name, age) => {
    console.log(name, age)
    this.setState({ person: { name, age } })
  }
  render() {
    const v = {
      person: this.state.person,
      changeName: this.changeName,
    }
    return (
      <div>
        Context
        <br />
        Parent Component: <br />
        <button
          onClick={() => {
            this.changeName('wangwu', 2)
          }}
        >
          name:{this.state.person.name},age:{this.state.person.age}
        </button>
        <br />
        <br />
        Child Component: <br />
        <User.Provider value={v}>
          <Theme.Provider value={this.state.theme}>
            <Child></Child>
          </Theme.Provider>
        </User.Provider>
        <User.Provider value={v}>
          <Theme.Provider value={this.state.theme}>
            <Child></Child>
          </Theme.Provider>
        </User.Provider>
      </div>
    )
  }
}

export default Context
