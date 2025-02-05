import { create } from "zustand";

type searchMovies = {
  searchText: string;
  setSearchText: (text: string) => void;
};

export const useSearchMoviesStore = create<searchMovies>((set) => ({
  searchText: "",
  setSearchText: (text) => set({ searchText: text }),
}));
