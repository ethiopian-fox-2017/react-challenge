import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
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
        <p className="App-intro">
        </p>
        <div className="columns is-multiline is-mobile">
        {this.state.data.map((data1, index) => {
          return (

            <Card data={data1}></Card>

          )
        })}
        </div>
      </div>
    );
  }
}


  const Card = (props) => {
      return (
        <div className="column is-3">
          <div className="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <img src={props.data.collection.image_url} alt="Image"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={props.data.collection.url} alt="Image"/>
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{props.data.collection.title} </p>
                  <p className="subtitle is-6">{props.data.collection.res_count}</p>
                </div>
              </div>

              <div className="content">
              {props.data.collection.description}. <a>@bulmaio</a>.
                <a>#css</a> <a>#responsive</a>
                <br/>
                <small>11:09 PM - 1 Jan 2016</small>
              </div>
            </div>
          </div>
        </div>
      )
  }

export default App;
