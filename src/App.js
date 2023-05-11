import './App.css';
import React from 'react';
import Header from './components/Header'
import Movies from './components/Movies';
import movieData from './sampledata';

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      movies: []
    }
  }

  componentDidMount =() =>{
    this.setState({movies: movieData.movies})
  }

  render(){
    return(
      <main>
        <Header />
        <Movies movies={this.state.movies}/>
      </main>
    )
  }
}
 

export default App;
