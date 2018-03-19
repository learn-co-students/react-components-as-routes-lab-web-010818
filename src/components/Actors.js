import React from 'react';
import { actors } from '../data';

class Actors extends React.Component {
  render(){
  let actor = actors.map(actor =>
  <div>
    <h2>Name: {actor.name}</h2>
    <ul>Movies:
      {actor.movies.map(movie =>
       <li>{movie}</li>
    )}
    </ul>
  </div>)
  return (
    <div>
      <h1>Actors Page</h1>
      {actor}
    </div>
    );
  }
};

export default Actors;
