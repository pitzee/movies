import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TrendingMovies from "./components/TrendingMovies";


const App = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <TrendingMovies />
      <Movies />
    </main>
  );
};

export default App;
