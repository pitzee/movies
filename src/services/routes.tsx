import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchedMovies from "../components/SearchedMovies";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path:'/search',
        element: <SearchedMovies />
    }
])

export default router;