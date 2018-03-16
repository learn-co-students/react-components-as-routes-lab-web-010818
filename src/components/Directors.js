import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const dirs = directors.map(director => <div><h1>{director.name}</h1><ul>{director.movies.map(mov => <li>{mov}</li>)}</ul></div>)
  return (
    <div>
      <h1>Directors Page</h1>
      { dirs }
    </div>
  );
}

export default Directors
