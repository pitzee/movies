import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { useScrollStore } from "../statemanagement/useScrollStore";

const Navbar = () => {
  const { isScrolled } = useScrollStore();

  return (
    <div
      className={`flex items-center h-15 bg-blue-950 justify-between ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } `}
    >
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
