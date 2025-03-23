import { useEffect } from "react";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import MovieGrid from "./components/MovieGrid";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TrendingMovies from "./components/TrendingMovies";
import { useScrollStore } from "./statemanagement/useScrollStore";
import useMovies from "./hooks/useMovies";

const App = () => {
  const { setIsScrolled } = useScrollStore();
  const { loadMore, hasMore, isLoading } = useMovies();

  useEffect(() => {
    const handleScroll = () => {
      // ✅ Fix: Use window.scrollY instead of document.documentElement.scrollTop
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      //infinite scroll trigger
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        if (!isLoading && hasMore) {
          loadMore();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled, loadMore, hasMore, isLoading]);

  return (
    <main>
      <Navbar />
      <Search />
      <Herosection />
      <TrendingMovies />
      <MovieGrid />
      <Footer />
    </main>
  );
};

export default App;
