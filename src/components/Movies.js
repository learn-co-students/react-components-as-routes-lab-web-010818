import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(movie => (
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>{movie.genres.map(g=> <li>{g}</li>)}</ul>
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  );
};

export default Movies;
