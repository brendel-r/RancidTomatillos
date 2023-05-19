import React from "react";
import PropTypes from "prop-types";
import { fetchApi } from "../apiCalls";
import { formatMovieInfo } from "../utilities";
import "./MovieDetail.css";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: {},
      errorCode: null
    };
  }

  closeDetail = () => {
    this.props.updateMovieId("");
  };

  componentDidMount = () => {
    let newState = { ...this.state };
    fetchApi(this.props.movie)
      .then((data) => {
        newState.movieInfo = formatMovieInfo(data.movie);
        this.setState(newState);
      })
      .catch((error) => {
        newState.error = true;
        newState.errorStatus = error.message;
        this.setState(newState);
      });
  };

  render() {
    return (
      <section className="movie-detail-container">
        {this.state.errorCode === 404 && (
          <h2>Movie not found. Please select a different movie!</h2>
        )}
        {this.state.errorCode && this.state.errorCode !==  404 && (
          <h2>Something went wrong! Try again later!</h2>
        )}
        <div className="movie-detail-display">
          <img
            className="movie-detail-img"
            src={this.state.movieInfo.backdrop_path}
          />
          <div className="movie-detail">
            <h1 className="detail-title">{this.state.movieInfo.title}</h1>
            <p>Rating: {this.state.movieInfo.average_rating} / 10 ⭐️</p>
            <p>Release Date: {this.state.movieInfo.release_date}</p>
            <p>Genre: {this.state.movieInfo.genres}</p>
            <p>Duration: {this.state.movieInfo.runtime}</p>
            <p>{this.state.movieInfo.overview}</p>
          </div>
        </div>
        <button className="return-button" onClick={() => this.closeDetail()}>
          Return to Movie List
        </button>
      </section>
    );
  }
}

MovieDetail.propTypes = {
  updateMovieId: PropTypes.func.isRequired,
  movie: PropTypes.number.isRequired,
};

export default MovieDetail;
