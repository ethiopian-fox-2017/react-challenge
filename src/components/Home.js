import React, { Component } from 'react';

import '../App.css';
import ListItem from './ListItem';
import SearchAPI from './SearchAPI';


class Home extends Component {

  constructor(){
      super();
      this.state = {
        data: []
      }
      this.addOneData = this.addOneData.bind(this);
  }

  addOneData(type, item){
    console.log(item);
    fetch(`http://swapi.co/api/${type}/${item}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({data: this.state.data.concat(data)});
    })
    .catch(err => console.error(err))

  }

  componentDidMount(){
    fetch('http://swapi.co/api/starships/')
    .then(response => response.json())
    .then(data => {
      console.log(data.results);
      this.setState({data: data.results});
    })
    .catch(err => console.error(err))
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <SearchAPI addData={this.addOneData} />
        <ListItem  items={this.state.data} />
      </div>
    );
  }
}

export default Home;
