import React from 'react'
import UserContext from './userContext'
class Child extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <UserContext.Consumer>
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
        </UserContext.Consumer>
      </div>
    )
  }
}

export default Child
