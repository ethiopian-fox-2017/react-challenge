import React,{Component} from 'react';
import {connect} from 'react-redux';
import {newUser} from '../../actions'

class FormAddUser extends Component {
  constructor(){
    super()
    this.state={
      modalIsActive:false,
      user:{
        name:'',
        email:'',
        password:'',
      }
    }
  }
 modalCon(eTarget){
   console.log(eTarget.name);
   eTarget.name === 'on' ? this.setState({modalIsActive:true}):this.setState({modalIsActive:false})
   console.log(this.state.modalIsActive);
 }
 handleChange(e){
   const newUser=this.state.user;
   newUser[e.target.name]=e.target.value;
   this.setState({user:newUser});
 }
submit(){
  this.props.addUser(this.state.user);
  this.setState({
    modalIsActive:false
  })
}
  render(){
    let modalClass='modal'
    if (this.state.modalIsActive) {
       modalClass +=' is-active'
    }
    return(
      <div>
        <a className="button is-dark" name='on' onClick={(e)=>this.modalCon(e.target)}>New User</a>

          <div className={modalClass}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">New User</p>
                <button className="delete" name='off' onClick={(e)=>this.modalCon(e.target)}></button>
              </header>
              <section className="modal-card-body">
                <div className="field">
                <label className="label">Name</label>
                <p className="control">
                  <input className="input" type="text" name='name' value={this.state.user.name} onChange={this.handleChange.bind(this)} placeholder="Name"/>
                </p>
                </div>
                <div className="field">
                <label className="label">Email</label>
                <p className="control">
                  <input className="input" type="text" name='email' value={this.state.user.email}  onChange={this.handleChange.bind(this)} placeholder="Email"/>
                </p>
                </div>
                <div className="field">
                <label className="label">Password</label>
                <p className="control">
                  <input className="input" type="password" name='password' value={this.state.user.password}  onChange={this.handleChange.bind(this)} placeholder="Password"/>
                </p>
                </div>

              </section>
              <footer className="modal-card-foot">
                <a className="button is-success" onClick={()=>this.submit()}>Submit</a>
                <a className="button" name='off' onClick={(e)=>this.modalCon(e.target)}>Cancel</a>
              </footer>
            </div>
          </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  addUser:(user)=> dispatch(newUser(user))
})

export default connect(null,mapDispatchToProps)(FormAddUser)
