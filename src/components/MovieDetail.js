import React from "react";
import { fetchApi } from "../apiCalls";
import { formatMovieInfo } from "../utilities";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: null,
      // title: "",
      // poster_path: "",
      // backdrop_path: "",
      // release_date: "",
      // overview: "",
      // average_rating: null,
      // genres: [],
      // budget: null,
      // revenue: null,
      // runtime: null,
      // tagline: "",
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

export default MovieDetail;
