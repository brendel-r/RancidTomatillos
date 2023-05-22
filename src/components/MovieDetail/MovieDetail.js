import React from "react";
import PropTypes from "prop-types";
import { fetchApi } from "../../apiCalls";
import { formatMovieInfo } from "../../utilities";
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
    fetchApi(this.props.movie)
      .then((data) => {
        this.setState({ movieInfo: formatMovieInfo(data.movie) });
      })
      .catch((error) => {
        console.log(error.message)
        this.setState({ errorCode: error.message }, () => {

          console.log(this.state)
        });
      });
  };

  render() {
    const { movieInfo, errorCode } = this.state;

    return (
      <section className="movie-detail-container">
        {errorCode === '404' &&( 
          <h2>Movie not found. Please select a different movie!</h2>
        )}
        {errorCode && errorCode !== '404' && (
          <h2>Something went wrong! Try again later!</h2>
        )}
        <div className="movie-detail-display">
          <img
            className="movie-detail-img"
            src={movieInfo.backdrop_path}
            alt={movieInfo.title + "backdrop"}
          />
          <div className="movie-detail">
            <h1 className="detail-title">{movieInfo.title}</h1>
            <p>Rating: {movieInfo.average_rating} / 10 ⭐️</p>
            <p>Release Date: {movieInfo.release_date}</p>
            <p>Genre: {movieInfo.genres}</p>
            <p>Duration: {movieInfo.runtime}</p>
            <p>{movieInfo.overview}</p>
          </div>
        </div>
        <button className="return-button" onClick={() => this.closeDetail()}>Return to Movie List</button>
      </section>
    );
  }
}

MovieDetail.propTypes = {
  updateMovieId: PropTypes.func.isRequired,
  movie: PropTypes.number.isRequired,
};

export default MovieDetail;