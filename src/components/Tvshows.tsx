import Navbar from "./Navbar";
import TvshowsGrid from "./TvshowsGrid";

const Tvshows = () => {
  return (
    <div>
      <Navbar />
      <div className="flex  gap-6 p-4 mt-4">
        <TvshowsGrid />
      </div>
    </div>
  );
};

export default Tvshows;
