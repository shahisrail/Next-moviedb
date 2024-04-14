const MovieDetails = async ({ id }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/Movies/${id}`);
  const Movie = await response.json();
  return (
    <div>
      <h2> {Movie.title}</h2>
    </div>
  );
};

export default MovieDetails;
