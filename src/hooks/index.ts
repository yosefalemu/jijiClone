import { create } from "zustand";

type storeType = {
  scrollDirection: string;
  changeScrollDirection: (direction: string) => void;
};

export const useStore = create<storeType>((set) => ({
  scrollDirection: "up",
  changeScrollDirection: (direction) => set({ scrollDirection: direction }),
}));
