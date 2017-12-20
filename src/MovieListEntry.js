import React from 'react';

var MovieListEntry = (props) => {
  console.log(props)
  return (
    <li className="list-group-item" onClick={(e) => props.onClick(props.movie)} style={{backgroundColor: props.bgColor}}>{props.movie.title}</li>
  );
}


export default MovieListEntry;