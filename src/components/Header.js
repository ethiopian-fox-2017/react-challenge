import React from 'react'
import logo from '../logo.svg';
import '../App.css';


class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Star Wars Universe</h2>
        </div>
      </div>
    )
  }
}

export default Header;
