import Image from "next/image";
import Sidebar from "./Sidebar";
const MovieDetails = ({ movie }) => {
  return (
    <section className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
      <Sidebar />
      <div>
        <div>
          <Image
            width={100}
            height={300}
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={movie?.backdrop_path}
            alt={movie?.title}
          />
        </div>
        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image
              width={100}
              height={100}
              src={movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">
              {movie.original_title}
            </h2>
            <p className="my-2 text-slate-400 italic">{movie.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {movie.release_date}</li>
              <li>Average Vote :{movie.vote_average}</li>
              <li>Vote Count : {movie.vote_count}</li>
              <li>Popularity : {movie.popularity}</li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Stream In HD
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Download In HD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
