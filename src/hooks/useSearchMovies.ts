import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";

interface Movie {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useSearchMovies = () => {
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIloading] = useState(false);

  useEffect(() => {
    setIloading(true);
    apiClient
      .get<FetchMoviesResponse>("/search/movie")
      .then((res) => {
        setSearchedMovies(res.data.results);
        setIloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIloading(false);
      });
  }, []);

  return { searchedMovies, error, isLoading };
};

export default useSearchMovies;
