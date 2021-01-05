import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TestA from '@/components/test/ComponentA'
import IndexLayout from '@/layout/components/IndexLayout'
import Login from '@/components/login/Login'
function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <IndexLayout></IndexLayout>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
