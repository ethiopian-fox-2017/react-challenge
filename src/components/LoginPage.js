import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
  state = {
    isLoggedIn: false,
    username: '',
    password: ''
  }

  changeForm(e) {
    let state = {}
    state[e.name] = e.value
    this.setState(state)
  }

  onLogin() {
    const { username, password } = this.state
    if (username === 'admin' && password === '1234') {
      this.setState({ isLoggedIn: true })
      // history.push('/')
    }
  }

  render() {
    // const { from } = this.props.location.state || { from: { pathname: '/' } }
    // const { redirectToReferrer } = this.state
    //
    // if (redirectToReferrer) {
    //
    // }

    return (
      <div>
      { this.state.isLoggedIn ?
        (
          <Redirect to={{
            pathname: '/',
            state: { isLoggedIn: true }
          }}/>

        ) : (
          <div className="Login">
            <div>
              <TextField
                hintText="Username"
                floatingLabelText="Username"
                name="username"
                onChange={ (e) => this.changeForm(e.target) }
              />
            </div>
            <div>
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password"
                name="password"
                onChange={ (e) => this.changeForm(e.target) }
              />
            </div>
            <RaisedButton label="Login" onClick={ this.onLogin.bind(this) } />
          </div>
        )}
      </div>
    )
  }
}

export default LoginPage
