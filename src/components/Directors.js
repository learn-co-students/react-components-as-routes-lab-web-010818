import React from 'react';
import { directors } from '../data';

class Directors extends React.Component{
  render(){
    console.log()
    let director = directors.map(director =>
    <div>
      <h3>Name: {director.name}</h3>
      <ul>Movies:
        {director.movies.map(movie =>
        <li>{movie}</li>
        )}
      </ul>
    </div>
    )
    return(
      <div>
        <h1>Directors Page</h1>
        {director}
      </div>
    )
  }
}

export default Directors
