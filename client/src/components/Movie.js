import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.logOutUser = this.logOutUser.bind(this)
  }



  render() {
    console.log("======--", this.props.statusLogin);
    return (
      <div className="intro row">
        {
          this.props.statusLogin ?
          <div className="movie-wrap col-md-4">
            { this.props.dataMovie.map(movie => {
                return (
                  <div key={movie.imdbID}>
                    <h3>{ movie.Title }</h3>
                    <p>Rate : { movie.Year }</p>
                    <p>Release : { movie.Released }</p>
                    <p>Genre : { movie.Genre }</p>
                    <p>Awards : { movie.Awards }</p>
                    <p>Actors : { movie.Actors }</p>
                    <p>Thank You</p>
                  </div>
                )
            })}
          </div>
          : <Redirect to={{pathname: '/login'}} />
        }

      </div>
    )
  }

  logOutUser() {
    localStorage.clear()
    window.location.reload()
    window.location.href = 'http://localhost:3000/login'
  }
}

export default Movie
