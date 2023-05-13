import React from "react";
import "./Movie.css";

const Movie = ({ poster, title, id, rating, updateMovieId }) => {
  const handleClick = () => {
    updateMovieId(id);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={poster} alt={title + "movie poster"} />
      <h2>{title}</h2>
      <p>{rating}</p>
    </div>
  );
};

export default Movie;
