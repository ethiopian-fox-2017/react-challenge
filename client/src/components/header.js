import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
class Header extends Component {
  constructor() {
  super();
  this.state = {
    isLogin:false
  };
};
    logout(e) {
      e.preventDefault()
      localStorage.clear();
      this.setState({
        isLogin:false
    });
    }
    componentDidMount(){
      console.log('');
      if (localStorage.getItem('email')) {
        this.setState({
          isLogin:true
      });
      }
    }
    render() {
      console.log(this.state.isLogin);
        return (
            <div>

                <div style={{
                    backgroundColor: 'black',
                    height: '60px'
                }}>
                    <Link to='/'>
                        <div className='button'>
                            home
                        </div>
                    </Link>
                    {this.state.isLogin ? (
                      <div className='button' onClick={(e)=>this.logout(e)}>
                          logout
                      </div>
                    ) : (
                      <Link to='/login'>
                      <div className='button'>
                          login
                      </div>
                      </Link>
                    )}


                </div>
            </div>

        )
    }
}

export default Header;
