const MoviesSkeleton = () => {
  const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="flex-grow grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4">
      {grid.map((gri) => (
        <div
          key={gri}
          className="flex flex-row h-60 w-44 rounded-xl bg-gray-900 text-gray-900"
        >
          {gri}
        </div>
      ))}
    </div>
  );
};

export default MoviesSkeleton;
