import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom'
import TestA from '@/components/test/ComponentA'
import IndexLayout from '@/layout/components/IndexLayout'
function App () {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          React App - {process.env.REACT_APP_NAME}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div>
        <HashRouter>
          <Switch>
            <Route path="/">
              <IndexLayout></IndexLayout>
            </Route>
          </Switch>
        </HashRouter>
      </div>

    </div>
  );
}

export default App;
