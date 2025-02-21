import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";

interface Tvshow {
  id: number;
  backdrop_path: string;
  original_name: string;
  overview: string;
  popularity: string;
  poster_path: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Tvshow[];
  total_pages: number;
  total_results: number;
}

const useTvshows = () => {
  const [tvshows, setTvshows] = useState<Tvshow[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIloading] = useState(false);

  useEffect(() => {
    setIloading(true);
    apiClient
      .get<FetchMoviesResponse>("/tv/popular")
      .then((res) => {
        setTvshows(res.data.results);
        setIloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIloading(false);
      });
  }, []);

  return { tvshows, error, isLoading };
};

export default useTvshows;
