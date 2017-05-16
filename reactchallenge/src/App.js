import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Home, Login} from './components'

class App extends Component {
  constructor() {
    super()
  }
  render(){
    return (
      <Router>
        <div>
          <nav className="nav has-shadow">
          <div className="container">
            <div className="nav-right">
              <a className="nav-item">
                <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
              </a>
              <Link to="/Home" className="nav-item is-tab is-hidden-mobile ">Home</Link>
              <Link to="/Login" className="nav-item is-tab is-hidden-mobile">Login</Link>
            </div>
          </div>
          </nav>
          <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Login" component={Login}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
