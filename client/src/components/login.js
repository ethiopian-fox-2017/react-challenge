import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import {
  Link
} from 'react-router-dom'


class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
      email:'',
      password:'',
      hasSubmited:false
    };
  };

submit(e){
  console.log('masuk submit email');
  e.preventDefault()
  localStorage.setItem('email',this.state.email);
  this.setState({
    hasSubmited:true
  });
}
  render(){
    if (this.state.hasSubmited) {
      return(<Redirect to={{
          pathname:'/'
        }}/>)
    }
    return(
     <div>
       <div style={{marginLeft:'200px',marginRight:'200px',marginTop:'50px'}}>
            <form>
              <div className="field">
                <label className="label">Email</label>
                <p className="control">
                  <input className="input" name='email' type="text" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({
                      email: e.target.value
                    })}/>
                </p>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <p className="control">
                    <input className="input" type="password" name='password' placeholder="Password" value={this.state.password} onChange={(e)=>this.setState({
                        password: e.target.value
                      })}/>
                  </p>
                </div>
                <button className="button is-primary" style={{marginRight:'20px'}} onClick={(e)=>this.submit(e)}>submit</button>
                <Link to='/'>
                  <button className="button is-primary">cancel</button>
                </Link>
            </form>
       </div>
     </div>

    )
  }
}

export default Login;
