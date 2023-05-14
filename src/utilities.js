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

  singleMovie.average_rating = Math.round(movie.average_rating);
  
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  singleMovie.runtime = `${hours} Hours ${minutes} Minutes`;
  
  singleMovie.release_date = dayjs('2023-05-13').format('MMM DD, YYYY');
  
  return singleMovie
}



export {formatRatings, formatMovieInfo}