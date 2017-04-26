import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './App.css';
import ViewArticle from './components/articles'
import Header from './components/header'
import Login from './components/login'
import Users from './components/users'

const App =()=>{
  return(
    <div>
       <BrowserRouter>
       <div>
       <Header />
      <Route exact path="/" component={ViewArticle} />
        <Route  path="/login" component={Login} />
        <Route  path="/user" component={Users} />
      </div>
    </BrowserRouter>
  </div>
  )
}



export default App;
