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

const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIloading] = useState(false);

  useEffect(() => {
    setIloading(true);
    apiClient
      .get<FetchMoviesResponse>("/trending/movie/day")
      .then((res) => {
        setTrendingMovies(res.data.results);
        setIloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIloading(false);
      });
  }, []);

  return { trendingMovies, error, isLoading };
};

export default useTrendingMovies;
