import React from 'react'

class Movie extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log(this.props);
    return (
      <div className="intro row">
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
      </div>
    )
  }
}

export default Movie
