import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import JokesPage from './components/JokesPage'
import LoginPage from './components/LoginPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin()

const App = () => (
  <MuiThemeProvider>
    <Router>
      <div>

        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <ToolbarSeparator />
            <Link to="/">
              <RaisedButton
                label="Jokes"
                primary={true}
              />
            </Link>
            <ToolbarSeparator />
            <Link to="/login">
              <RaisedButton
                label="Login"
                primary={true}
              />
            </Link>
          </ToolbarGroup>
        </Toolbar>
        <div>
          <Route exact path="/" component={JokesPage}/>
          <Route path="/login" component={LoginPage}/>
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
)

export default App
