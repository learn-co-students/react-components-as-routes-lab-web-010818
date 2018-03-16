import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => actor(a))}
    </div>
  );
};

const actor = a => {
  return (
    <div>
      <h4>{a.name}</h4>
      <ul>
        {a.movies.map(m => (<li>{m}</li>))}
      </ul>
    </div>
  )
}

export default Actors;
