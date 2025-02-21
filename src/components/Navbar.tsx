import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  return (
    <div className="flex items-center h-15 bg-blue-950 justify-between ">
      <Link to="/" className="flex flex-row items-center hover:translate-y-1">
        <GoHome className="text-white text-2xl" />

        <p className="pl-2 text-amber-50 font-extrabold">MOVIE HUB</p>
      </Link>
      <div className="flex justify-between space-x-1 text-white font-bold pr-2">
        <Link to="/">
          <p>Movies</p>
        </Link>

        <Link to="/tvshows">
          <p>Tv shows</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
