import Navbar from "./Navbar";
import Search from "./Search";
import SearchedMoviesGrid from "./SearchedMoviesGrid";

const SearchedMovies = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <p className="text-2xl font-bold mb-5">Searched movies list</p>
      <SearchedMoviesGrid />
    </div>
  );
};

export default SearchedMovies;
