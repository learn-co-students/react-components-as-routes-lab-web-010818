import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => director(d))}
    </div>
  );
}

const director = d => {
  return (
    <div>
      <h4>{d.name}</h4>
      <ul>
        {d.movies.map(m => (<li>{m}</li>))}
      </ul>
    </div>
  )
}

export default Directors
