import { useEffect, useState, useCallback } from "react";
import apiClient from "../services/api-clients";
import { useSearchMoviesStore } from "../statemanagement/useSearchMoviesStore";

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
  const { searchText } = useSearchMoviesStore();
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch movies (supports pagination)
  const fetchSearchedMovies = useCallback(
    async (pageNumber: number) => {
      if (!searchText.trim()) return; // Prevent empty searches
      if (isLoading) return; // Avoid multiple API calls

      setIsLoading(true);
      try {
        const res = await apiClient.get<FetchMoviesResponse>("/search/movie", {
          params: { query: searchText, page: pageNumber },
        });

        setSearchedMovies((prevMovies) =>
          pageNumber === 1
            ? res.data.results
            : [...prevMovies, ...res.data.results]
        );
        setHasMore(res.data.page < res.data.total_pages);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [searchText, isLoading]
  );

  // ✅ Fetch movies when `searchText` changes
  useEffect(() => {
    setSearchedMovies([]); // Reset results for new search
    setPage(1);
    fetchSearchedMovies(1);
  }, [searchText]);

  // ✅ Fetch more movies when `page` updates
  useEffect(() => {
    if (page > 1) {
      fetchSearchedMovies(page);
    }
  }, [page]);

  // ✅ Load more movies when user scrolls down
  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return { searchedMovies, error, isLoading, loadMore, hasMore };
};

export default useSearchMovies;
