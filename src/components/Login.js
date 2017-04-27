import React from 'react';
import {Redirect} from 'react-router-dom'


class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLogin: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.checkLoginState = this.checkLoginState.bind(this)

  }

  checkLoginState() {
    if(window.localStorage.user) {
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
    // console.log(e.target);
  }

  setLocalStorage() {
    if(this.state.username != '' && this.state.password !='') {
      window.localStorage.setItem('user',this.state.username)
      window.location.reload()
    } else {
      alert('Username and password must be filled')
    }

  }

  render() {
    return (
      <div className="container">
        {
          this.state.isLogin ?
          (<Redirect to={{pathname: '/'}} />)
          :
          <div>
            <br/>
            <p className="title"> Login Dulu lah</p>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  name="username"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.username}
                />

                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">

                <button className="button is-success" onClick={() => (this.setLocalStorage())}>
                  Login
                </button>
              </p>
            </div>
          </div>
        }

      </div>
    )
  }
}

export default Login
