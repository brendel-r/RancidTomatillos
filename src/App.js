import './App.css';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
      filteredMovies: [],
      movieId: null,
      error: ''
    }
  };

  componentDidMount = () => {
    let newState = { ...this.state };
    fetchApi()
      .then((data) => {
        newState.movies = formatRatings(data.movies);
        newState.filteredMovies = [...newState.movies];
        this.setState(newState)
      })
      .catch((error) => {
        newState.error = true;
        this.setState(newState)
      })
  };

  updateMovieId = (id) => {
    const newState = { ...this.state };
    newState.movieId = id;

    this.setState(newState, () => {
      this.props.history.push(`/${id}`);
    })
  };

  updateFilteredList = (selection) => {
    const filteredList = this.state.movies.filter(movie => 
      movie.average_rating >= selection
    );

    const newAppState = {...this.state};
    newAppState.filteredMovies = filteredList;
    this.setState(newAppState);
  };

  render() {
    return (
      <main>
        <Header />
        {this.state.error && <h2>Something went wrong! Try again later!</h2>}
        <Switch>
          <Route exact path="/" render={() => this.state.filteredMovies? <Movies movies={this.state.filteredMovies} updateMovieId={this.updateMovieId} updateFilteredList={this.updateFilteredList}/>:<h2>No Movies Found!!</h2>} />
          <Route path="/:movieId" render={({ match }) => <MovieDetail movie={match.params.movieId} updateMovieId={this.updateMovieId} />} />
        </Switch>

      </main>
    )
  };
};


export default withRouter(App);
