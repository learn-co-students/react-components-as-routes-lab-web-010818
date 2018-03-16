import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const acts = actors.map(actor => <div><h1>{actor.name}</h1><ul>{actor.movies.map(mov => <li>{mov}</li>)}</ul></div>)

  return (
    <div>
      <h1>Actors Page</h1>
      { acts }
    </div>
  );
};

export default Actors;
