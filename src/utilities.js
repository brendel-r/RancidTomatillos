import dayjs from "dayjs";


const formatRatings = (movieList) => {
  return movieList.map((movie) => {
    const currentMovie = {...movie};
    currentMovie.average_rating = Math.round(movie.average_rating)
    return currentMovie
  })
}

const formatMovieInfo = (movie) => {
  const singleMovie = movie;
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  singleMovie.runtime = `${hours} Hours ${minutes} Minutes`;
  singleMovie.release_date = dayjs(singleMovie.release_date).format('MMM DD, YYYY');
  singleMovie.average_rating = Math.round(movie.average_rating);

  return singleMovie;
}

export {formatRatings, formatMovieInfo}