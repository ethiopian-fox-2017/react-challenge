import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

import Header from './Header'
import Characters from './Characters'
import Planets from './Planets'
import Starships from './Starships'

const Home = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/"><Header /></Link>
        <ul>
          <Link to="/people"><RaisedButton primary={true}>People</RaisedButton ></Link>&nbsp;
          <Link to="/planets"><RaisedButton primary={true}>Planets</RaisedButton ></Link>&nbsp;
          <Link to="/starships"><RaisedButton primary={true}>Starships</RaisedButton ></Link>
        </ul>

        <Route path="/people" component={Characters}/>
        <Route path="/planets" component={Planets}/>
        <Route path="/starships" component={Starships}/>

      </div>
    </BrowserRouter>
  )
}

export default Home
