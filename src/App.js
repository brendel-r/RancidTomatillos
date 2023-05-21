import './App.css';
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Movies from './components/Movies/Movies';
import MovieDetail from './components/MovieDetail/MovieDetail';
import { fetchApi } from './apiCalls';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      filteredMovies: [],
      movieId: null,
      error: false
    }
  };

  componentDidMount = () => {
    fetchApi()
      .then((data) => {
        this.setState({ movies: data.movies })
        this.setState({ filteredMovies: data.movies })
      })
      .catch((error) => {
        this.setState({ error: true })
      })
  };

  updateMovieId = (id) => {
    this.setState({ movieId: id }, () => {
      this.props.history.push(`/${id}`);
    })
  };

  updateFilteredList = (selection) => {
    const filteredList = this.state.movies.filter(movie =>
      movie.average_rating >= selection
    );
    this.setState({ filteredMovies: filteredList });
  };

  render() {
    const { filteredMovies, error } = this.state;

    return (
      <main>
        <Header />
        {error && <h2>Something went wrong! Try again later!</h2>}
        <Switch>
          <Route exact path="/" render={() => <Movies movies={filteredMovies} updateMovieId={this.updateMovieId} updateFilteredList={this.updateFilteredList} />} />
          <Route path="/:movieId" render={({ match }) => <MovieDetail movie={match.params.movieId} updateMovieId={this.updateMovieId} />} />
        </Switch>

      </main>
    )
  };
};

export default withRouter(App);