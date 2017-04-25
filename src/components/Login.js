import React from 'react'
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom'



class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }


  loginCheck() {
    if (window.localStorage.getItem('user')) {
      this.setState({isLoggedIn: true})
    } else {
      this.setState({isLoggedIn: false})
    }
  }

  componentDidMount() {
    this.loginCheck()
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  login() {
    window.localStorage.setItem('user', 'loggedIn')
    window.location.reload()
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ?
          ( <Redirect to={{pathname: '/'}} /> )
          :

          <form>
            <TextField
            floatingLabelText="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            /><br />
            <TextField
            floatingLabelText="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            /><br /><br />
            <button type="submit" onClick={this.login}>Submit</button>
          </form>
      }
      </div>
    )
  }
}



export default Login
