import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

const App = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Movies />
    </main>
  );
};

export default App;
