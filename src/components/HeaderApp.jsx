import React from 'react';
import {
  Link
} from 'react-router-dom'

const HeaderApp = () => {
  return (
    <div>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/home">Home</Link></li>
    </ul>
    </div>
  );
}

export default HeaderApp;
