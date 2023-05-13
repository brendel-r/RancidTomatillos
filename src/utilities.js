const formatRatings = (movieList) => {
  return movieList.map((movie) => {
    const currentMovie = {...movie};
    currentMovie.average_rating = Math.round(movie.average_rating)
    return currentMovie
  })
}

const formatMovieInfo = (movie) => {
  const singleMovie = movie
  singleMovie.average_rating = Math.round(movie.average_rating)
  // singleMovie.release_date = 
  return singleMovie
}



export {formatRatings, formatMovieInfo}