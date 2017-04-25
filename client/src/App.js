import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import './App.css';
import ViewArticle from './components/viewarticle'
import Header from './components/header'
import Login from './components/login'

const App =()=>{
  return(
    <div>
       <BrowserRouter>
       <div>
       <Header />
      <Route exact path="/" component={ViewArticle} />
      <Route  path="/login" component={Login} />
      </div>
    </BrowserRouter>
  </div>
  )
}



export default App;
