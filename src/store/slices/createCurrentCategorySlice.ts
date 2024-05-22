import { StateCreator } from "zustand";
import { CurrentCategorySlice } from "../storeType";

const createCurrentCategorySlice: StateCreator<
  CurrentCategorySlice,
  [],
  [],
  CurrentCategorySlice
> = (set) => ({
  currentCategory: "idle",
  setCurrentCategory: (category) => set({ currentCategory: category }),
});

export default createCurrentCategorySlice;
