import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'
import SearchMovie from './components/SearchMovie'
import LoginPage from './components/LoginPage'
import About from './components/About'
import NoMatch from './components/NoMatch'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies : [],
      isLogin : false
    }
    this.addMovie = this.addMovie.bind(this)
    this.statusLogin = false
  }

  addMovie(newMovie) {
    console.log("------- sd",newMovie);
    // this.setState({
    //   movies : this.state.movies.concat(newMovie)
    // })
    fetch(`http://www.omdbapi.com/?t=${newMovie}`)
      .then(res => res.json())
      .then(response => {
        this.setState({ movies: this.state.movies.concat(response) })
      })
      .catch(err => console.log(err))
  }

  componentWillMount() {
    this.cekLoginUser()
  }

  componentDidMount() {
    console.log('ini did mount 3');

    fetch('http://www.omdbapi.com/?t=fast')
      .then(res => res.json())
      .then(response => {
        // console.log('hu');
        const fetchedMovies = this.state.movies.concat(response)
        this.setState({ movies: fetchedMovies })
      })
      .catch(err => console.log(err))
      // console.log(this.state.movie);
  }

  cekLoginUser() {
    if (window.localStorage.getItem('username')) {
      this.setState({isLogin : true})
    } else {
      this.setState({isLogin : false})
    }
  }



  render() {
    console.log('Render 2 kali', this.state.movies);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="navigasi">
          <div className="list-nav">
            <Router>
              <div className="nav">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/login">Login</Link></li>
                </ul>
                <hr/>
                <Switch>
                  <Route exact path="/" render={() => <Movie dataMovie={ this.state.movies } statusLogin={ this.state.isLogin }/> }/>
                  <Route path="/about" component={About}/>
                  <Route path="/login" component={LoginPage}/>
                  <Route component={NoMatch}/>
                </Switch>
              </div>
            </Router>
          </div>
        </div>
        <div className="search">
          <SearchMovie newDataMovie={this.addMovie}/>
        </div>
      </div>
    );
  }
}


export default App;
