import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies);
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((m, i) => (
        <div key={i}>
          <h3>{m.title}</h3>
          <p>Time: {m.time}</p>
          <p>Genres</p>
          <ul>{m.genres.map((g, i) => <li key={i}>{g}</li>)}</ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
