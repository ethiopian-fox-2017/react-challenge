import React, { Component } from 'react';

class SearchApp extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.term}
          onChange={event => this.inputChange(event.target.value)}
        />
      </div>
    );
  }

  inputChange(term){
    this.setState({term})
    this.props.onSearchMovie(term)
  }
}

export default SearchApp;
