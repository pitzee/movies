import { FaSearch } from "react-icons/fa";



const Search = () => {
  return (
    <div className="flex flex-row items-center  space-x-3 pl-10 pt-2">
      <FaSearch />
      <input
        type="text"
        placeholder="search for a movie, tv show"
        className="focus:outline-none w-full"
      />
    </div>
  );
};

export default Search;
