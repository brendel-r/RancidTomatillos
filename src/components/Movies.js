import React from "react";
import PropTypes from "prop-types";
import "./Movies.css"
import Movie from "./Movie"

function Movies({ movies, updateMovieId }) {
  const movieCards = movies.map(movie => {
    return (
      <Movie
        id={movie.id}
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

Movies.propTypes = {
  movies: PropTypes.arrayOf(
  PropTypes.shape({
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  })
  ).isRequired,
  updateMovieId: PropTypes.func.isRequired,
  };

export default Movies; 