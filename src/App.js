import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'


const App = () => {
  return (
    <MuiThemeProvider>
      <div>
        <Home />
        <Login />
      </div>
    </MuiThemeProvider>
  )
}



export default App;
