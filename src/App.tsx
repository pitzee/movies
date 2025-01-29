import MovieGrid from "./components/MovieGrid";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Movies />
      <MovieGrid />
    </main>
  );
};

export default App;
