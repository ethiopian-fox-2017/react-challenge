import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

class Details extends Component {
  constructor() {
    super()
    this.state = {
      detail: {
        episode_id: '',
        title: '',
        director: '',
        release_date: '',
        planets: [],
        characters: []
      },
      isLogin: false
    }
  }

  checkLoginState(){
    if(window.localStorage.user){
      this.setState({isLogin: true})
    } else {
      this.setState({isLogin: false})
    }
  }

  componentWillMount() {
    this.checkLoginState();
  }

  componentDidMount() {
    let episode = this.props.match.params.id
    let movieID = ''
    if(episode == 4){
      movieID = 1
    } else if(episode == 5){
      movieID = 2
    } else if(episode == 6){
      movieID = 3
    } else if(episode == 1){
      movieID = 4
    } else if(episode == 2){
      movieID = 5
    } else if(episode == 3){
      movieID = 6
    } else if(episode == 7){
      movieID = 7
    }

    fetch(`http://swapi.co/api/films/${movieID}/`)
    .then(response => response.json())
    .then(
      (data) => {
        console.log(data);
        this.setState({detail: {
          episode_id: data.episode_id,
          title: data.title,
          director: data.director,
          release_date: data.release_date,
          planets: data.planets,
          characters: data.characters
        }})
      }
    )
  }

  render() {
    return (
      <div className="container"><br />
      { this.state.detail.title === '' && <center><p className="container title is-2"><br /><br /><br />NOW LOADING...</p></center>}
        {
          this.state.isLogin ?
            <div key={this.state.detail.episode_id}>

              <p>Episode: {this.state.detail.episode_id}</p>
              <p>Title: {this.state.detail.title}</p>
              <p>Director: {this.state.detail.director}</p>
              <p>Release date: {this.state.detail.release_date}</p>
              <br />
              List Of Planets:
              { this.state.detail.planets.map(planet => {
                  return (
                    <div>
                      <a href={planet} target="_blank">{planet}</a>
                      <br />
                    </div>
                  )
                })
              }
              <br />
              List Of Characters:
              { this.state.detail.characters.map(characters => {
                  return (
                    <div>
                      <a href={characters} target="_blank">{characters}</a>
                      <br />
                    </div>
                  )
                })
              }
            </div>
          : <Redirect to={{pathname: '/login'}}/>
        }
      </div>
    )
  }
}

export default Details;
