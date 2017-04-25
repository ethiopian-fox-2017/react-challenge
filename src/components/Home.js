import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'


import '../App.css';
import logo from './logo.svg';
import Card from './Card';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      tracks: [],
      isLogin: false
    }
    this.getTracks = this.getTracks.bind(this)
    this.checkLoginState = this.checkLoginState.bind(this)

  }

  checkLoginState() {
    if(window.localStorage.user) {
      this.setState({isLogin: true})
    } else {
      this.setState({isLogin: false})
    }
  }

  getTracks() {
    // console.log('test');
    let self = this
    axios.get('https://api.spotify.com/v1/artists/3yY2gUcIsjMr8hjo51PoJ8/top-tracks?country=SE')
         .then(function(res) {
           console.log(res.data.tracks);
            self.setState({
              tracks: res.data.tracks
            })
         })
  }

  componentWillMount() {
    this.checkLoginState();
  }

  componentDidMount() {
    // console.log('masuk did m');
    this.getTracks()

  }

  render() {
    // console.log(this.state.tracks);
      return (
        <div>
          {
            this.state.isLogin ?
            <div className="App container">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>The Smiths Top TRACKS</h2>
              </div>
              <br />
              <div className="columns is-mobile is-multiline">
                {(this.state.tracks.length > 0) ?

                  this.state.tracks.map((track) => (
                      <Card key={track.id} track={track}/>
                  )) :
                  <h1 className="title">Please Wait...</h1>

                }
              </div>
            </div>
            :
            <Redirect to={{pathname: '/login'}} />

          }
        </div>


      )
    }

  }


export default Home
