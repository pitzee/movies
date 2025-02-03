import MovieGrid from "./MovieGrid";

const Movies = () => {
  return (
    <div className="flex  gap-6 p-4 mt-4">
      <div>
        <p className="text-2xl font-bold">Popular movies</p>
        <div className="border border-gray-200 rounded p-2 text-xl font-bold">
          <p>sort</p>
        </div>
        <div className="border border-gray-200 rounded p-2 text-xl font-bold">
          filters
        </div>
        <input type="text" placeholder="SEARCH" />
      </div>
      <MovieGrid />
    </div>
  );
};

export default Movies;
