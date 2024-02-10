// store.js
import { create } from 'zustand';

const useStore = create((set) => ({
    village: null,
    setVillage: (vlg) => set({ village: vlg }),
    year: null,
    setYear: (year) => set({ year: year }),
}));

export default useStore;