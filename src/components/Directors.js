import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map(director => {
    const movies = director.movies.map(movie => {
      return <li key={movie}>{movie}</li>
    })
    return(
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies: </p>
        <ul>
          {movies}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
