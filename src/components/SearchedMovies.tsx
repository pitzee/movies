import Navbar from "./Navbar";
import SearchedMoviesGrid from "./SearchedMoviesGrid";

const SearchedMovies = () => {
  return (
    <div>
      <Navbar />
      <p className="text-2xl font-bold mb-5">Searched movies list</p>
      <SearchedMoviesGrid />
    </div>
  );
};

export default SearchedMovies;
