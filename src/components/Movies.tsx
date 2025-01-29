const Movies = () => {
  const grid = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex  gap-6 p-4">
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
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-4">
        {grid.map((gri) => (
          <div key={gri} className="h-60 w-44 bg-amber-300 rounded-xl">
            {gri}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
