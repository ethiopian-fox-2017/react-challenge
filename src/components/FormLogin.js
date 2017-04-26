import React from 'react'
import {Redirect} from 'react-router-dom'

class FormLogin extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username : '',
      password : '',
      isLoggedIn : false
    }
  }

  isLogin(){
    if (localStorage.getItem('tokenan')){
      console.log('masuk');
      this.setState({isLoggedIn : true})
    }
    else {
      this.setState({isLoggedIn : false})
    }
  }

  componentDidMount(){
    this.isLogin()
  }

  login(){
    localStorage.setItem('tokenan', 'udah login')
    window.location.reload()
  }
  render(){
    console.log(this.state.isLoggedIn);
    return (
      <div>
        { this.state.isLoggedIn ? (<Redirect to={{
          pathname : '/'
        }} />)
          :
          (
            <section className="hero is-fullheight is-dark is-bold">
                  <form>
                  <div className="field">
                    <label className="label">Usename</label>
                      <p className="control">
                        <input className="input"
                        type="text"
                        placeholder="Text input"
                        onChange={(e) => this.setState({username : e.target.value})}
                        value={this.state.username}/>
                      </p>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                      <p className="control">
                        <input className="input"
                        type="text"
                        placeholder="Text input"
                        onChange={(e) => this.setState({password : e.target.value})}
                        value={this.state.password}/>
                      </p>
                  </div>
                  <div className="field is-grouped">
                    <p className="control">
                      <button className="button is-primary" onClick={this.login}>Submit</button>
                    </p>
                    <p className="control">

                    </p>
                  </div>
                  <p>{this.state.title}</p>
                  <p>{this.state.description}</p>
                  </form>
           </section>
         )

       }
      </div>
    )
  }
}

export default FormLogin
