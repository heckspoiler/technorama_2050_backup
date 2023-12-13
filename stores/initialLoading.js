// store.js
import { create } from 'zustand';
const loadingStore = create((set) => ({
  loadMainContent: false,
  setLoadMainContent: () => set({ loadMainContent: true }),
}));

export default loadingStore;
