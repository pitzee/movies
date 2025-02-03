

export const TrendingMoviesSkeleton = () => {
    const trendingMovies = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  return (
    <div className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden ">
            {trendingMovies.map(movie => 
                <div key={movie}>
                <div className="flex flex-row h-60 w-44 rounded-xl bg-gray-900 text-gray-900">{movie}</div>
                </div>
             )}
    </div>
  )
}
