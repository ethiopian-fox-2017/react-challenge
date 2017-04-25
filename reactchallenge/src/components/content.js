import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    fetch(`https://developers.zomato.com/api/v2.1/dailymenu?res_id=16507624`)
    headers : ({ user_key : '152f834e5245440d066a9b65f148add7'})
    .then(response => response.json())
    .then(response => {
    const datas = this.state.data.concat(response)
    this.setState({ data : datas })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src="http://bulma.io/images/placeholders/96x96.png" alt="Image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
