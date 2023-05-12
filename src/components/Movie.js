import React from "react";
import "./Movie.css"

const Movie = ({poster, title, id, rating}) => {
  const rndRating = Math.round(rating)
  return (
    <div className="movie-card">
      <img src={poster} />
      <h2>{title}</h2>
      <p>{rndRating}</p>
    </div>
  )
}

export default Movie;