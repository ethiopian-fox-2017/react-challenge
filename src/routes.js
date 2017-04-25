import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/WelcomeApp';
import Login from './components/LoginApp';

export default (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
    </div>
);
