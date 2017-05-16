import React from 'react';
import axios from 'axios';

import Content from './Content';
import logo from './logo.svg';
import '../App.css';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    let self = this
    axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=74`,{
      headers : { 'user-key' : '152f834e5245440d066a9b65f148add7'}})
    .then(res => {
      console.log(res.data.collections);
      self.setState({
        data : res.data.collections
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <div className="columns is-multiline is-mobile">
          {this.state.data.map((data) => {
            return (
              <Content key={data.collection.collection_id} result={data.collection}/>
            )
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home
