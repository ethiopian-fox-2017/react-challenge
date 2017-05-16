import React from 'react';
import { connect } from 'react-redux';
import {
  Redirect
} from 'react-router-dom'
import logo from '../logo.svg';
import '../App.css';

import TodoList from './Todo';

const MainPage = (props) => {
  console.log(props.login.loginStatus);
  return (
    props.login.loginStatus === true ? (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList />
      </div>
    ) : (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  )
}

const mapStateToProps = state => ({
  login: state.loginStatus,
});

export default connect(mapStateToProps, null) (MainPage);
