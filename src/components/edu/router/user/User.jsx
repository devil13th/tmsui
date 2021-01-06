import React from 'react'
import UserDetail from './UserDetail'
import { Switch, Route, NavLink } from 'react-router-dom'

class User extends React.Component {
  state = {
    data: [
      { id: 1, name: 'zhangsan', age: 5, bir: '2020-01-01' },
      { id: 2, name: 'lisi', age: 6, bir: '2020-01-02' },
      { id: 3, name: 'wangwu', age: 7, bir: '2020-01-02' },
      { id: 4, name: 'zhaoliu', age: 8, bir: '2020-01-03' },
      { id: 5, name: 'sunqi', age: 9, bir: '2020-01-05' },
    ],
  }
  render() {
    return (
      <div>
        <h2>User</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 auto' }}>
            {this.state.data.map((item) => {
              return (
                <div key={item.id}>
                  <NavLink
                    activeClassName="navLk"
                    to={`/edu/router/user/userDetail/${item.id}`}
                  >
                    {item.name}
                  </NavLink>
                </div>
              )
            })}
          </div>
          <div style={{ flex: '1 1 auto' }}>
            <Switch>
              <Route
                path="/edu/router/user/userDetail/:id"
                component={UserDetail}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
export default User
