import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    key: "5469cec0820d4e72fd63a0052899d17e",
  },
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NDY5Y2VjMDgyMGQ0ZTcyZmQ2M2EwMDUyODk5ZDE3ZSIsIm5iZiI6MTczMzI5OTk1OC4wNjgsInN1YiI6IjY3NTAwZWY2MzU1ZGJjMGIxNWQ3YTVjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fs-1N86rWUCbph1ZqxN_8h3jdBmiBOvmTtw-sesBm4",
  },
});
