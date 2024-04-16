import MovieDetails from "@/app/Components/MovieDetails";
import movieList from "@/app/Data/data";

const MoviesDetailsPage = ({ params }) => {
  const { id } = params;
  // console.log("ID:", id);
  // console.log("Movie List:", movieList);
  const movie = movieList.results.find((movie) => movie.id.toString() === id);
  // console.log("movie", movie);
  return <MovieDetails movie={movie} />;
};

export default MoviesDetailsPage;
