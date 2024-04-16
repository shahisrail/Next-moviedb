import Modal from "@/app/Components/MOdal";
import MovieDetails from "@/app/Components/MovieDetails";
import { datas } from "@/app/lib/datas";
import { getDictionary } from "../../../disctionaries";

export default async function MoviesDetailsPage({ params: { lang, id } }) {
  const disctionary = await getDictionary(lang);
  const data = await datas.data();
  const movie = data.results.find((movie) => movie.id.toString() === id);
  // console.log("movie", movie);
  return (
    <Modal>
      {" "}
      <MovieDetails movie={movie} disctionary={disctionary} />{" "}
    </Modal>
  );
}
