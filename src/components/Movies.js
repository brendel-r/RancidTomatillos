import React from "react";
import PropTypes from "prop-types";
import "./Movies.css";
import Movie from "./Movie";
import FilterForm from "./FilterForm";

function Movies({ movies, updateMovieId, updateFilteredList }) {
  const movieCards = movies.map((movie) => {
    return (
      <Movie
        id={movie.id}
        poster={movie.poster_path}
        title={movie.title}
        rating={movie.average_rating}
        key={movie.id}
        updateMovieId={updateMovieId}
      />
    );
  });

  return (
    <div className="display-styling">
      <div className="filter-form">
        <FilterForm updateFilteredList={updateFilteredList} />
      </div>
      {movies.length <= 0 && <h2>No movies found! Pick another rating.</h2>}
      <div className="movie-list">{movieCards}</div>
    </div>
  );
}

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
  updateFilteredList: PropTypes.func.isRequired
};

export default Movies;
