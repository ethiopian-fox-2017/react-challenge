import React from 'react';

class Login extends React.Component{
  render(){
    return(
      <div className="section">
        <div className="column is-11 is-offset-1">
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="email" placeholder="Email"/>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-success">
                  Login
                </button>
              </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
