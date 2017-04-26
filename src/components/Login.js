import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import '../App.css';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogin: false
    }
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    let state = {}
    state[e.target.name] = e.target.value;
    this.setState(state)
  }

  setLocalStorage() {
    if(this.state.username !== '' && this.state.password !== ''){
      window.localStorage.setItem('user', this.state.username)
      window.location.reload()
    } else {
      alert('Username and Password must be filled!')
    }
  }

  render() {
    return (
      <div className="container"><br />
        {
          !this.state.isLogin ? //jika isLogin = false, tampilkan login page
            <div>
              <div className="field">
                <label className="label">Username</label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="please input your username"
                    name="username"
                    onChange={this.handleChange}/>
                </p>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <p className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="please input your password"
                    name="password"
                    onChange={this.handleChange}/>
                </p>
              </div>
              <button className="button is-success" onClick={ () => this.setLocalStorage() }>LOGIN</button>
            </div>

          : <Redirect to={{pathname: '/'}}/> //jika isLogin = true, redirect ke halaman Index.js
        }
      </div>
    )
  }
}

export default Login;
