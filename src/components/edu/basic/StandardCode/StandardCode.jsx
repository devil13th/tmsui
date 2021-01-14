import React from 'react'
import Child from './Child'
class StandardCode extends React.Component {
  state = {
    person: {
      name: 'zhangsan',
      age: 5,
      sex: '男',
      birthday: '2015-01-01',
    },
  }

  increase = () => {
    this.setState({
      person: { ...this.state.person, age: this.state.person.age + 1 },
    })
  }

  decrease = (n) => {
    this.setState({
      person: { ...this.state.person, age: this.state.person.age - n },
    })
  }

  speak = () => {
    alert('speak')
  }

  changeName = (name) => {
    this.setState({
      person: { ...this.state.person, name },
    })
  }

  render() {
    // 计算属性
    const { name, age, birthday } = this.state.person
    return (
      <div>
        <button onClick={this.increase}>+1</button>
        <button
          onClick={() => {
            this.decrease(2)
          }}
        >
          -2
        </button>

        <div>
          name:{this.state.person.name}
          <br />
          age:{age}
          <br />
          birthday:{birthday}
          <br />
        </div>

        <Child
          {...this.state.person}
          person={this.state.person}
          changeName={this.changeName}
          speak={this.speak}
        ></Child>
      </div>
    )
  }
}

export default StandardCode
