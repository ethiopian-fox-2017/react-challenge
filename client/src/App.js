import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'
import SearchMovie from './components/SearchMovie'
import LoginPage from './components/LoginPage'
import About from './components/About'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies : []
    }
    this.addMovie = this.addMovie.bind(this)
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
    console.log('Ini will mount 1');
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

                <Route exact path="/" render={() => <Movie dataMovie={ this.state.movies }/> }/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={LoginPage}/>
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
