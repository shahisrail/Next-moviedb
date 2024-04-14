import MovieDetails from "@/app/Components/MovieDetails";

const MoviesDetailsPage = ({ params: { id } }) => {
  return <MovieDetails id={id} />;
};

export default MoviesDetailsPage;
