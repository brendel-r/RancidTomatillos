import React from "react";
import PropTypes from "prop-types";
import { fetchApi } from "../apiCalls";
import { formatMovieInfo } from "../utilities";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInfo: {},
      error: ""
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
        this.setState(newState);
      });
  };

  render() {
    return (
      <>
        <button onClick={() => this.closeDetail()}>X</button>
        <img src={this.state.movieInfo.backdrop_path} />
        <div>
          {this.state.error && <h2>Something went wrong! Try again later!</h2>}
          <h1>{this.state.movieInfo.title}</h1>
          <p>{this.state.movieInfo.average_rating} / 10 ⭐️'s!</p>
          <p>Release Date: {this.state.movieInfo.release_date}</p>
          <p>{this.state.movieInfo.genres}</p>
          <p>{this.state.movieInfo.runtime} minutes</p>
          <p>{this.state.movieInfo.overview}</p>
        </div>
      </>
    );
  }
}

MovieDetail.propTypes = {
  updateMovieId: PropTypes.func.isRequired,
  movie: PropTypes.number.isRequired,
  };

export default MovieDetail;
