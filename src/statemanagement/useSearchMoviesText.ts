import {create}  from "zustand";


const useSearchMoviesText = create((set) => {
    return {
        movies: String,
        searchedMovies: () => set((state) => ({movies}),
    };

});