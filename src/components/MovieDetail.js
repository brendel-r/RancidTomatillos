import React from "react";
import { fetchApi } from "../apiCalls";
import {formatRating} from '../utilities';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      title: '',
      poster_path: '',
      backdrop_path: '',
      release_date: '',
      overview: '', 
      average_rating: null,
      genres: [],
      budget: null,
      revenue: null,
      runtime: null,
      tagline: ''
    }
  }

  closeDetail = () => {
    this.props.updateMovieId('')
  }

  componentDidMount = () => {
    fetchApi(this.props.movie)
    .then((data) => this.setState(data.movie))
  }
  
  render(){
    return (
      <>
        <button onClick={()=>this.closeDetail()}>X</button>
        <img src={this.state.backdrop_path} />
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.average_rating}</p>
          <p>{this.state.release_date}</p>
          <p>{this.state.genres}</p>
          <p>{this.state.runtime} minutes</p>
          <p>{this.state.overview}</p>

        </div>
      </>
    )

  }

}


export default MovieDetail;