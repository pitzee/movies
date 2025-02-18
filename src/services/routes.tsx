import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchedMovies from "../components/SearchedMovies";
import Tvshows from "../components/Tvshows";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchedMovies />,
  },
  {
    path: "/tvshows",
    element: <Tvshows />,
  },
]);

export default router;
