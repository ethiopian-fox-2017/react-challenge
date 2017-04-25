import _ from 'lodash';
import React, { Component } from 'react';
import HeaderApp from './HeaderApp'
import SingleContentApp from './SingleContentApp';
import SearchApp from './SearchApp';
import ContentApp from './ContentApp';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: [],
      selectedMovie: null
    }

    this.movieSearch("Batman")

  }

  movieSearch(term){
    fetch("http://www.omdbapi.com/?s="+term)
      .then((response) => { return response.json() })
      .then((data) => {
        this.setState({
          movies: data.Search,
          selectedMovie: data.Search[0]
        })
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
      });
  }


  render(){

    let searchTerm = _.debounce(term => {this.movieSearch(term)}, 300)

    return (
      <div>
        <HeaderApp/>
        <SearchApp onSearchMovie={searchTerm}/>
        <SingleContentApp movie={this.state.selectedMovie}/>
        <ContentApp
          onSelectedMovie={selectedMovie => this.setState({selectedMovie})}
          moviesLists={this.state.movies}
        />
      </div>
    )
  }
}

export default App;
