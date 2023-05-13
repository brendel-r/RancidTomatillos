import './App.css';
import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail'
import movieData from './sampledata';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movieId: ''
    }
  }

  componentDidMount = () => {
    const newState = { ...this.state };
    newState.movies = movieData.movies;

    this.setState({ newState })
  }

  showMovieInfo = () => {
    if (!this.state.movieId) {
      return <Movies movies={this.state.movies} />
    } else {
      return <MovieDetail movie={this.state.movieId} />
    }
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
