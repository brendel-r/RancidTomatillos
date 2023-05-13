const formatRatings = (movieList) => {
  return movieList.map((movie) => {
    const currentMovie = {...movie};
    currentMovie.average_rating = Math.round(movie.average_rating)
    return currentMovie
  })
}

const formatRating = (movie) => {
  const singleMovie = movie
  singleMovie.average_rating = Math.round(movie.average_rating)
  return singleMovie
}

export {formatRatings, formatRating}