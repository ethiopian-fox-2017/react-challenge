import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Index from './components/Index';
import Details from './components/Details';
import Login from './components/Login';
import Notfound from './components/Notfound';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLogin: false
    }
  }

  checkLoginState(){
    if(window.localStorage.user){
      this.setState({isLogin: true})
    } else {
      this.setState({isLogin: false})
    }
  }

  componentWillMount() {
    this.checkLoginState();
  }

  logout() {
    localStorage.clear()
    window.location.reload()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="nav has-shadow">
            <div className="nav-left">
              <a className="nav-item">
                <img src="http://vignette2.wikia.nocookie.net/logopedia/images/5/5b/Star-Wars-Logo_Silver.png/revision/latest?cb=20151106011636" alt="logo" />
              </a>
            </div>

            <div className="nav-right nav-menu">
                <Link to="/" className="nav-item">Home</Link>
                {
                  !this.state.isLogin ? //jika isLogin = false, tampilkan button Login di NavBar
                    <Link to="/login" className="nav-item">Login</Link>
                  : <a className="nav-item" onClick={this.logout}>Logout</a> //jika isLogin = true, tampilkan button
                                                                             //Logout di NavBar
                }
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/details/:id" component={Details}/>
            <Route path="/login" component={Login}/>
            <Route component={Notfound}/>
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
