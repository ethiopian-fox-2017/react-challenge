import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect
} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

import { loginMyUser } from '../actions';

class LoginPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(e) {
    const loginState = {};
    loginState[e.target.name] = e.target.value;
    this.setState(loginState);
  }

  render() {
    if (this.props.login.loginStatus === true) {
      return (
        <Redirect to={{
          pathname: '/'
        }}/>
      )
    }
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div style={{maxWidth: 1024, margin: 'auto'}}>
          <form onSubmit={(e) => {
              e.preventDefault();
              const user = this.state;
              this.props.loginUser(user);;
            }
          }>
            <div className="form-group">
              <label htmlFor="myUsername">Username</label>
              <input type="text" className="form-control" id="myUsername" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label htmlFor="myPassword">Password</label>
              <input type="password" className="form-control" id="myPassword" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.loginStatus,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginMyUser(user))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
