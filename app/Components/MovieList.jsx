import movies from "../lib/data.json";
import MovieCard from "./MovieCard";
const MovieList = () => {
  //   movies: () => import("../lib/data.json").then((module) => module.default);

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
