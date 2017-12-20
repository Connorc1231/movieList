import React from 'react';
import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-header">
        Movie List!
      </div>
      <ul className="list-group list-group-flush">
      {props.movies.map(movie => 
        <MovieListEntry
        movie={movie}
        key={movie.title}
        onClick={props.onClick} />)
      }
      </ul>
    </div>
  );
}

export default MovieList;