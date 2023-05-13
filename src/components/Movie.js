import React from "react";
import "./Movie.css"

const Movie = ({poster, title, id, rating, updateMovieId}) => {
  // const rndRating = Math.round(rating)
 
  const handleClick = (event) => {
    // get the movie id from the event
    //update the App state movieId
    // causes mount
    updateMovieId(id)
  }

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={poster} alt={title + 'movie poster'} />
      <h2>{title}</h2>
      <p>{rating}</p>
    </div>
  )
}

export default Movie;