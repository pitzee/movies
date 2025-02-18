import moment from "moment";
import useTvshows from "../hooks/useTvshows";
import MoviesSkeleton from "./MoviesSkeleton";
import { useState } from "react";
import MoviesOverview from "./MoviesOverview";

const TvshowsGrid = () => {
  const { tvshows, error, isLoading } = useTvshows();

  const [id, setId] = useState(0);

  const HandleClick = (movieId: number) => {
    setId(movieId);
  };

  const CloseOverview = () => {
    setId(0);
  };

  return (
    <>
      {isLoading && <MoviesSkeleton />}
      {error && <p>{error}</p>}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4 ">
        {tvshows.map((tvshow) => (
          <div key={tvshow.id}>
            <div className="flex flex-row h-60 w-44 rounded-xl ">
              <img
                src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                alt=""
                className="w-full h-full rounded-t object-cover"
                onClick={() => {
                  HandleClick(tvshow.id);
                }}
              />
            </div>
            <div className=" border  border-amber-50 w-44 h-20 rounded-b shadow-md">
              <p className=" mt-3 font-bold">{tvshow.title}</p>
              <p>
                {tvshow.first_air_date
                  ? moment(tvshow.first_air_date).format("MMM DD, YYYY")
                  : "Date not available"}
              </p>
            </div>
            {id == tvshow.id && (
              <MoviesOverview
                onCloseOverView={CloseOverview}
                overview={tvshow.overview}
                image={tvshow.poster_path}
                id={tvshow.id}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TvshowsGrid;
