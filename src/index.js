import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/WelcomeApp';
import Login from './components/LoginApp';

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </div>
  </Router>
),document.getElementById('root'));
