import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TrendingMovies from "./components/TrendingMovies";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navbar isScrolled={isScrolled} />
      <Search isScrolled={isScrolled} />
      <Herosection />
      <TrendingMovies />
      <Movies />
      <Footer />
    </main>
  );
};

export default App;
