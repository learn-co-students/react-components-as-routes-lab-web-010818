import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const mov = movies.map(m => <div><h1>{m.title}</h1><p>Minutes: {m.time}</p><p>Genres:</p><ul>{m.genres.map(genre => <li>{genre}</li>)}</ul></div>)

  return (
    <div>
        <h1>Movies Page</h1>
        {mov}
    </div>
  );
};

export default Movies;
