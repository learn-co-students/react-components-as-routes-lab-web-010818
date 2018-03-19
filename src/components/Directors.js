import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDivs = directors.map((director) => {
    return (
      <div>
        <h1>{director.name}</h1>
        {director.movies.map((movie) => <ul>{movie}</ul>)}
      </div>
    )
  })

  return (
    <div>
      <h1>{'Directors Page'}</h1>
      {directorDivs}
    </div>
  );
}

export default Directors

// This component should render the text Directors Page, and make a new <div> for each director. The <div> should contain the director's name and an <ul> for each of their movies.
