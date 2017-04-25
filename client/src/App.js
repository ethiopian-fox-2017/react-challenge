import React from 'react';
// import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './components/Movie'
import SearchMovie from './components/SearchMovie'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies : []
    }
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
        <SearchMovie/>
        <Movie dataMovie={ this.state.movies }/>

      </div>
    );
  }
}





export default App;
