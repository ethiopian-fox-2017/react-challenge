import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: '',
    }
    this.loginProses = this.loginProses.bind(this)
    this.proseLoginUser = this.proseLoginUser.bind(this)

  }

  render() {
    return (
      <div>
        <h1>Login Page</h1>

          <input onChange={this.loginProses} name="username" type="text" placeholder="Useraname" />
          <input onChange={this.loginProses} name="password" type="password" placeholder="Password" />
          <button onClick={this.proseLoginUser}>Submit</button>

      </div>
    )
  }

  loginProses(e) {
    let newUser = {}

    newUser[e.target.name] = e.target.value
    this.setState(newUser)
    // console.log(this.state.password, "---------");
  }

  proseLoginUser(e) {
    e.preventDefault()
    window.localStorage.setItem('username', this.state.username)
    console.log("ini cari localStorage", window.localStorage.getItem('username'));
    // alert("Welcome ", window.localStorage.getItem('username'))
     window.location.href = 'http://localhost:3000/';
  }

}

export default LoginPage
