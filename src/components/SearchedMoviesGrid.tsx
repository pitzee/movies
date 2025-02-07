import moment from "moment";
import useSearchMovies from "../hooks/useSearchMovies";
import LoadingSpinner from "./LoadingSpinner";

const SearchedMoviesGrid = () => {
  const { searchedMovies, error, isLoading } = useSearchMovies();

  return (
    <>
      {isLoading && (
        <div className="flex flex-row gap-5">
          <p className="font-extrabold">loading</p>
          <LoadingSpinner />
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="flex-grow grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 ml-5 mt-2">
        {searchedMovies.map((movie) => (
          <div key={movie.id}>
            <div className="flex flex-row h-60 w-44 rounded-xl">
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
        ))}
      </div>
    </>
  );
};

export default SearchedMoviesGrid;
