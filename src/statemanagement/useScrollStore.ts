import { create } from "zustand";

type Scroll = {
  isScrolled: boolean;
  setIsScrolled: (isScrolled: boolean) => void;
};

export const useScrollStore = create<Scroll>((set) => ({
  isScrolled: false,
  setIsScrolled: (isScrolled) => set({ isScrolled }),
}));
