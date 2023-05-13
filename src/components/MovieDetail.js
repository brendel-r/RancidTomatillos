import React from "react";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
      title: "Fake Movie Title",
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
      release_date: "2019-12-04",
      overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6,
      genres: ["Drama"],
      budget: 63000000,
      revenue: 100853753,
      runtime: 139,
      tagline: "It's a movie!"
    }
  }

  closeDetail = () => {
    this.props.updateMovieId('')
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