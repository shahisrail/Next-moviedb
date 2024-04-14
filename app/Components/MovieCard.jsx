import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <Image
          width={200}
          height={200}
          className="w-full object-cover"
          src={movie.poster_path}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">
            {movie.genre_ids.join(", ")}
          </p>
          <div className="flex items-center space-x-1 mb-5">
            {/* Assuming you want to show the average vote as stars */}
            {Array.from(
              { length: Math.floor(movie.vote_average / 2) },
              (_, index) => (
                <Image
                  key={index}
                  src="./star.svg"
                  width="14"
                  height="14"
                  alt="Star"
                />
              )
            )}
          </div>
          <Link
            href={`Movies/${movie.id}`}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          >
            <Image src="./tag.svg" width={20} height={20} alt="Details" />
            <span>Details</span>
          </Link>
        </figcaption>
      </figure>
    </div>
  );
};

export default MovieCard;
