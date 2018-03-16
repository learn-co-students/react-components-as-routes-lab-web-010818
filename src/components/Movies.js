import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(m => movie(m))}
    </div>
  );
};

const movie = m => {
  return (
    <div>
      <h4>{m.title}</h4>
      <p>Time: {m.time}</p>
      <ul>
        {m.genres.map(g => (<li>{g}</li>))}
      </ul>
    </div>
  )
}

export default Movies;
