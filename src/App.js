import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Main from './components/Main'
import FormLogin from './components/FormLogin'

const App = () => (
  <Router>
    <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
        <div>
        <Route exact path="/" component={Main}/>
        <Route path="/login" component={FormLogin}/>
        </div>
    </div>
  </Router>
)

export default App
