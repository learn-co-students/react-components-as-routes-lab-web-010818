import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  const allMovies = movies.map((movie) => {
    const genres = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    })
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul>
          {genres}
        </ul>

      </div>
    )
    })
  return (
    <div>
        <h1>Movies Page</h1>
        {allMovies}
    </div>
  );
};

export default Movies;
