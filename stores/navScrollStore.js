import { create } from 'zustand';

export const useScrollStoreNav = create((set) => ({
  isScrolled: false,
  setScrolled: (scrolled) => set({ isScrolled: scrolled }),
}));
