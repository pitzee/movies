import moment from "moment";

import useTrendingMovies from "../hooks/useTrendingMovies";
import { TrendingMoviesSkeleton } from "./TrendingMoviesSkeleton";



const TrendingMoviesCard = () => {
    const { trendingMovies, error, isLoading } = useTrendingMovies();

  return (
    
  <>
   {isLoading && <TrendingMoviesSkeleton />}
   {error && <p>{error}</p>}
          <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden ">
            {trendingMovies.map((movie) => (
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
  
  


export default TrendingMoviesCard