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

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async (pageNumber: number) => {
    setIsLoading(true);
    try {
      const res = await apiClient.get<FetchMoviesResponse>("/movie/popular", {
        params: { page: pageNumber },
      });
      setMovies((prevMovies) => [...prevMovies, ...res.data.results]);
      setHasMore(res.data.page < res.data.total_pages);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occured");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { movies, error, isLoading, loadMore, hasMore };
};

export default useMovies;
