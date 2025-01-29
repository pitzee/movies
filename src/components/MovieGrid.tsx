import moment from "moment";
import useMovies from "../hooks/useMovies";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4">
        {movies.map((movie) => (
          <>
            <div>
              <div
                key={movie.id}
                className="flex flex-row h-60 w-44 rounded-xl"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                  className="w-full h-full rounded-t object-cover"
                />
              </div>
              <div className=" border  border-amber-50 w-44 h-20 rounded-b shadow-md">
                <p className=" mt-3 font-bold">{movie.title}</p>
                <p>
                  {movie.release_date
                    ? moment(movie.release_date).format("MMM DD, YYYY")
                    : "Date not available"}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default MovieGrid;
