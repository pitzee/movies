import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="flex items-center h-15 bg-blue-950 justify-between ">
      <Link to="/">
      <p className="pl-2 text-amber-50 font-extrabold">MOVIE HUB</p>
      </Link>
      
      <div className="flex justify-between space-x-1 text-white font-bold pr-2">
        <Link to="/" >
        <p>Movies</p>
        </Link>
        
        <p>Tv shows</p>
      </div>
    </div>
  );
};

export default Navbar;
