import { useEffect, useState, useCallback } from "react";
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

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = useCallback(
    async (pageNumber: number) => {
      if (isLoading) return; // Prevent duplicate calls while loading

      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchMoviesResponse>("/movie/popular", {
          params: { page: pageNumber },
        });

        setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
        setHasMore(res.data.page < res.data.total_pages);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [isLoading]
  );

  // ✅ Fix: Only fetch movies on mount
  useEffect(() => {
    fetchMovies(1);
  }, []);

  // ✅ Fix: Fetch movies when page increases
  useEffect(() => {
    if (page > 1) {
      fetchMovies(page);
    }
  }, [page]);

  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { movies, error, isLoading, loadMore, hasMore };
};

export default useMovies;
