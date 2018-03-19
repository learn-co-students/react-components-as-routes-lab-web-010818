import React from 'react';
import { actors } from '../data';

const Actors = () => {
let results = actors.map(actor => {
    return (
      <div>
      <h2 key={actor.name}>Name: {actor.name}</h2>
      <p>Movies:</p>
      <ul>{actor.movies.map(movie => {
        return (
          <li key={movie}>{movie}</li>
        )
      })}
      </ul>
    </div>)
  })
  return (
    <div>
      <h1>Actors Page </h1>
      {results}
    </div>
  );
};

export default Actors;
