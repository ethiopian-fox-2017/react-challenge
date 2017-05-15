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
      if (localStorage.getItem('email')) {
        this.setState({
          isLogin:true
      });
      }
    }
    render() {
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
                    <Link to='/user'>
                        <div className='button'>
                            user
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
