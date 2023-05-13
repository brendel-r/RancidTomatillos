const formatRating = (movieList) => {
  return movieList.map((movie) => {
    const currentMovie = {...movie};
    currentMovie.average_rating = Math.round(movie.average_rating)
    return currentMovie
  })
}

export default formatRating