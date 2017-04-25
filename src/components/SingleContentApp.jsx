import React from 'react';

const SingleContentApp = (props) => {
  if (!props.movie) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <img src={props.movie.Poster} alt={props.movie.Title}/>
  )
}

export default SingleContentApp;
