import MovieDetails from "@/app/Components/MovieDetails";
import movieList from "@/app/Data/data";
import { notFound } from "next/navigation";
import { getDictionary } from "../../disctionaries";

export default async function MoviesDetailsPage({ params: { lang, id } }) {
  const disctionary = await getDictionary(lang);
  const movie = movieList.results.find((movie) => movie.id.toString() === id);
  if (!movie) {
    notFound();
  }

  // console.log("movie", movie);
  return <MovieDetails movie={movie} disctionary={disctionary} />;
}
