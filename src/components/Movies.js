import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let results = movies.map(movie => {
    return (
      <div>
        <h2 key={movie.title}>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>
          {movie.genres.map(genre => {
            return (
              <li key={genre}>{genre}</li>
            )
          })}
        </ul>
      </div>
    )
  })
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {results}
    </div>
  );
};

export default Movies;
