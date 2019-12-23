import React from "react";
import MovieCard from "./MovieCard";
import withLoader from "./withLoader";

function MovieList({ movie }) {
  return movie.map((movie, i) => <MovieCard movie={movie} key={i} />).length <1
   ? (
    <div className="noResult">
      <h6>Oups!! No result</h6>
    </div>
  ) : (
    movie.map((movie, i) => <MovieCard movie={movie} key={i} />)
  );
}

export default withLoader(MovieList);
