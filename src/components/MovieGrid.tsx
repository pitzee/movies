import { useEffect, useState } from "react";
import moment from "moment";
import useMovies from "../hooks/useMovies";
import MoviesSkeleton from "./MoviesSkeleton";
import MoviesOverview from "./MoviesOverview";

const MovieGrid = () => {
  const { movies, error, isLoading, loadMore, hasMore } = useMovies();
  const [id, setId] = useState(0);

  const handleClick = (movieId: number) => {
    setId(movieId);
  };

  const closeOverview = () => {
    setId(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  return (
    <>
      {isLoading && <MoviesSkeleton />}
      {error && <p>{error}</p>}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div key={`${movie.id}-${index}`}>
            <div className="flex flex-row h-60 w-44 rounded-xl">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
                className="w-full h-full rounded-t object-cover"
                onClick={() => handleClick(movie.id)}
              />
            </div>
            <div className="border border-amber-50 w-44 h-20 rounded-b shadow-md">
              <p className="mt-3 font-bold">{movie.title}</p>
              <p>
                {movie.release_date
                  ? moment(movie.release_date).format("MMM DD, YYYY")
                  : "Date not available"}
              </p>
            </div>
            {id === movie.id && (
              <MoviesOverview
                onCloseOverView={closeOverview}
                overview={movie.overview}
                image={movie.poster_path}
                id={movie.id}
              />
            )}
          </div>
        ))}
      </div>
      {isLoading && hasMore && <p>Loading more movies...</p>}
    </>
  );
};

export default MovieGrid;
