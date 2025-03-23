import { FaSearch } from "react-icons/fa";
import { useSearchMoviesStore } from "../statemanagement/useSearchMoviesStore";
import { useNavigate } from "react-router-dom";
import { useScrollStore } from "../statemanagement/useScrollStore";

const Search = () => {
  const { isScrolled } = useScrollStore();
  const { searchText, setSearchText } = useSearchMoviesStore();
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div
      className={`flex flex-row items-center  space-x-3 pl-10 pt-2 ${
        isScrolled ? "fixed top-0 z-50 shadow-md bg-white w-full" : "relative"
      }`}
    >
      <FaSearch />
      <input
        type="text"
        placeholder="search for a movie, tv show"
        className="focus:outline-none w-full"
        value={searchText}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearchClick}
        className="border rounded mr-5 pl-1 pr-1 bg-blue-800 text-white font-bold hover:bg-green-600"
      >
        search
      </button>
    </div>
  );
};

export default Search;
