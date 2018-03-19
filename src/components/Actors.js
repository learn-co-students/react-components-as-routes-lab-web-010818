import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDivs = actors.map((actor) => {
    return (
      <div>
        <h1>{actor.name}</h1>
        {actor.movies.map((movie) => <ul>{movie}</ul>)}
      </div>
    )
  })
  return (
    <div>
      <h1>{'Actors Page'}</h1>
      {actorDivs}
    </div>
  );
};

export default Actors;

// This component should render the text Actors Page, and make a new <div> for each actor. The <div> should contain the actor's name and an <ul> for each of their movies.
