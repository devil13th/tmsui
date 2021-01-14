import React from 'react'
import { User, Theme } from './userContext'
class Child extends React.Component {
  state = {}
  static contextType = Theme
  render() {
    console.log('context', this.context)
    return (
      <div>
        <User.Consumer>
          {(value) => {
            return (
              <button
                onClick={() => {
                  value.changeName(
                    'lisi' + Math.floor(Math.random() * 10),
                    Math.floor(Math.random() * 10)
                  )
                }}
              >
                {value.person.name},{value.person.age}
              </button>
            )
          }}
        </User.Consumer>
      </div>
    )
  }
}

export default Child
