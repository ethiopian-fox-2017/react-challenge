import React from 'react';

const ContentApp = ({moviesLists, onSelectedMovie} ) => {
  return (
    <ul>
      {moviesLists.map((movies) => {
        return (
          <li onClick={() => onSelectedMovie(movies)} key={movies.imdbID}>{movies.Title}</li>
        )
      })}
    </ul>
  )
}

export default ContentApp;
