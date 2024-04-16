import { datas } from "../lib/datas";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {datas.data().then((data) => {
          return data.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ));
        })}
      </div>
    </>
  );
};

export default MovieList;
