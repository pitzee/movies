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
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/popular")
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { movies, error };
};

export default useMovies;
