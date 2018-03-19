import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDivs = movies.map((movie) => {
    return (
      <div>
        <h1>{movie.title}</h1>
        <p>{`${movie.time} minutes`}</p>
        <ul>{movie.genres.map((genre) => <li>{genre}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
        <h1>{'Movies Page'}</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;


//make a new <div> for each movie. The <div> should contain the movie's title, time and an <ul> for each genre.
