import React from 'react'
import Child from './Child'
import UserContext from './userContext'
class Context extends React.Component {
  state = { person: { name: 'zhangsan', age: 5 } }

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
        <UserContext.Provider value={v}>
          <Child></Child>
        </UserContext.Provider>
        <UserContext.Provider value={v}>
          <Child></Child>
        </UserContext.Provider>
      </div>
    )
  }
}

export default Context
