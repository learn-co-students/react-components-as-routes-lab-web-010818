import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let results = directors.map(director => {
    return(
      <div>
      <h2 key={director.name}>Name: {director.name}</h2>
      <p>Movies: </p>
      <ul>{director.movies.map(movie => {
        return (
          <li key={movie}>{movie}</li>
        )
      })}
      </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {/*{code here}*/}
      {results}
    </div>
  );
}

export default Directors
