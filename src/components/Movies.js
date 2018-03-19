import React from 'react';
import { movies } from '../data';

class Movies extends React.Component{

  render(){

    let movieTitle = movies.map(movie => {

      return <div>
        <h3 key={movie.title}>Name: {movie.title}</h3>
        Time: {movie.time}
        <ul>Genres:
        {movie.genres.map(genre =>
          <li>{genre}</li>
        )}
        </ul>
      </div>
    })
  return (
    <div>
    <h1>Movies Page</h1>
     {movieTitle}
    </div>
    );
  }
};

export default Movies;
