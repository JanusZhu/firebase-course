import Movie from "./Movie";
const Movies = ({ movieList, getMovieList }) => {
  return (
    <div>
      {movieList.map((movie) => (
        <Movie
          movie={movie}
          movieList={movieList}
          getMovieList={getMovieList}
          key={movie.id}
        />
      ))}
    </div>
  );
};

export default Movies;
