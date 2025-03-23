import { useState, useRef, useEffect } from "react";
import moment from "moment";
import useSearchMovies from "../hooks/useSearchMovies";
import LoadingSpinner from "./LoadingSpinner";
import MoviesOverview from "./MoviesOverview";

const SearchedMoviesGrid = () => {
  const { searchedMovies, error, isLoading, hasMore, loadMore } =
    useSearchMovies();
  const [id, setId] = useState(0);
  const observerRef = useRef<HTMLDivElement | null>(null); // Ref for infinite scroll trigger

  const handleClick = (movieId: number) => {
    setId(movieId);
  };

  const closeOverview = () => {
    setId(0);
  };

  // ✅ Infinite Scroll using IntersectionObserver
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          console.log("Reached bottom, loading more searched movies...");
          loadMore();
        }
      },
      { threshold: 1.0 } // Fires when the element is fully in view
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [hasMore, isLoading, loadMore]);

  return (
    <>
      {isLoading && searchedMovies.length === 0 && (
        <div className="flex flex-row gap-5">
          <p className="font-extrabold">Loading...</p>
          <LoadingSpinner />
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex-grow grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 ml-5 mt-2">
        {searchedMovies.map((movie) => (
          <div key={movie.id}>
            <div className="flex flex-row h-60 w-44 rounded-xl">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full rounded-t object-cover cursor-pointer"
                onClick={() => handleClick(movie.id)}
              />
            </div>
            <div className="border border-amber-50 w-44 h-20 rounded-b shadow-md p-2">
              <p className="mt-1 font-bold">{movie.title}</p>
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

      {/* 👇 Invisible div to trigger infinite scroll */}
      <div ref={observerRef} className="h-10" />

      {isLoading && hasMore && (
        <p className="text-center">Loading more movies...</p>
      )}
    </>
  );
};

export default SearchedMoviesGrid;
