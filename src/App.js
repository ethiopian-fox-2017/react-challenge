import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {Home,Login,NoMatch} from './components'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin:false
    }
    this.checkLoginState = this.checkLoginState.bind(this)
  }

  checkLoginState() {
    if(window.localStorage.user) {
      this.setState({isLogin: true})
    } else {
      this.setState({isLogin: false})
    }
  }

  logOut() {
    window.localStorage.clear()
    window.location.reload()
  }

  componentWillMount() {
    this.checkLoginState();
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav has-shadow">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item">
                  <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
                </a>
                <Link to="/" className="nav-item is-tab is-hidden-mobile">Home</Link>

              </div>
              {
                this.state.isLogin ?
                <div className="nav-right nav-menu">
                  <a className="nav-item is-tab" onClick={this.logOut}>Log out</a>
                </div>
                :
                <div className="nav-right nav-menu">
                  <Link to="/login" className="nav-item is-tab is-hidden-mobile">Login</Link>
                </div>
              }

            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch}/>
          </Switch>

        </div>
      </Router>
    );
  }
}



export default App;
