import Herosection from "./components/Herosection";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TrendingMovies from "./components/TrendingMovies";

const App = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Herosection />
      <TrendingMovies />
      <Movies />
    </main>
  );
};

export default App;
