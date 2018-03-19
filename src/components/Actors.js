import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList= actors.map(a => (
    <div>
      <h2> {a.name}</h2>
      <p>Movies: </p>
      <ul>{a.movies.map(m => <li>{m}</li>)}</ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
