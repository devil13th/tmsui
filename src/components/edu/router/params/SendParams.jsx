import React from 'react'
import ReceiveParams1 from './ReceiveParams1'
import ReceiveParams2 from './ReceiveParams2'
import ReceiveParams3 from './ReceiveParams3'
import { Switch, Route, NavLink ,Link } from 'react-router-dom'
import {Divider} from 'antd'
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
        <h2>传参方式</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 auto' }}>
          
                  <NavLink
                    activeClassName="navLk"
                    to={`/edu/router/params/receiveParams1/1`}
                  >
                    Params方式
                  </NavLink>

                  <Divider></Divider>
                  <NavLink
                    activeClassName="navLk"
                    to={`/edu/router/params/receiveParams2?id=2`}
                  >
                    Search方式
                  </NavLink>
                  <Divider></Divider>

                  <Link to={{pathname:'/edu/router/params/receiveParams3',state:{id:3,title:'hello world'}}}>State方式</Link>

               
          </div>
          <div style={{ flex: '1 1 auto' }}>
            <Switch>
              <Route
                path="/edu/router/params/receiveParams1/:id"
                component={ReceiveParams1}
              ></Route>

<Route
                path="/edu/router/params/receiveParams2"
                component={ReceiveParams2}
              ></Route>

<Route
                path="/edu/router/params/receiveParams3"
                component={ReceiveParams3}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
export default User
