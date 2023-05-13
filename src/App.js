import './App.css';
import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import { fetchApi } from './apiCalls';
import { formatRatings } from './utilities';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieId: null,
      error: ''
    }
  }

  componentDidMount = () => {
    fetchApi().then((data) => {
      const newState = { ...this.state };
      newState.movies = formatRatings(data.movies);
  
      this.setState(newState)
    }).catch((error) => {

    })
  }

  updateMovieId = (id) => {
    const newState = { ...this.state };
    newState.movieId = id;

    this.setState(newState)
  }

  showMovieInfo = () => {
    if (!this.state.movieId) {
      return <Movies movies={this.state.movies} updateMovieId={this.updateMovieId}/>
    }
      return <MovieDetail movie={this.state.movieId} updateMovieId={this.updateMovieId}/>
    
  }



  render() {
    return (
      <main>
        <Header />
        {this.showMovieInfo()}
      </main>
    )
  }
}


export default App;
