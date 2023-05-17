import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";

const Movie = ({ poster, title, id, rating, updateMovieId }) => {
  const handleClick = () => {
    updateMovieId(id);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img src={poster} alt={title + "movie poster"} />
      {/* <h2 className="card-title">{title}</h2> */}
      <p className="card-rating">{rating}/ 10 ⭐️</p>
    </div>
  );
};

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  updateMovieId: PropTypes.func.isRequired,
  };

export default Movie;