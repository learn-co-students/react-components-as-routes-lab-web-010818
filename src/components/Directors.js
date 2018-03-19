import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map(d => (
    <div>
      <h2>Name: {d.name}</h2>
      <p>Movies: </p>
      <ul>{d.movies.map(d=> <li>{d}</li>)}</ul>
    </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
