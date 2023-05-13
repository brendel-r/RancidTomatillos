import React from "react";
import "./Movies.css"
import Movie from "./Movie"

function Movies ({movies, updateMovieId}){
  const movieCards = movies.map(movie => {
    return (
      <Movie
      id= {movie.id}
      poster={movie.poster_path}
      title={movie.title}
      rating={movie.average_rating}
      key={movie.id}
      updateMovieId={updateMovieId}
      />
    )
  })

  return (
  <div className="movie-list">
    {movieCards}
  </div>
  )
};

export default Movies; 