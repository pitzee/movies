const Navbar = () => {
  return (
    <div className="flex items-center h-15 bg-blue-950 justify-between ">
      <p className="p-2 text-amber-50 font-extrabold">MOVIE HUB</p>
      <div className="flex justify-between space-x-1 text-white font-bold">
        <p>Movies</p>
        <p>Tv shows</p>
      </div>
    </div>
  );
};

export default Navbar;
