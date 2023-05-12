import React from "react";
import "./Movies.css"
import Movie from "./Movie"

function Movies ({movies}){
  const movieCards = movies.map(movie => {
    return (
      <Movie
      poster={movie.poster_path}
      title={movie.title}
      rating={movie.average_rating}
      key={movie.id}
      />
    )
  })

  return (
  <div>
    {movieCards}
  </div>
  )
}

export default Movies; 