import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { CategoryState } from "@/stores/storeType";

const useCategoryStore = create<CategoryState>()(
  devtools(
    persist(
      (set) => ({
        currentCategory: "idle",
        setCurrentCategory: (category) => set({ currentCategory: category }),
      }),
      {
        name: "currentCategory",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({ currentCategory: state.currentCategory }),
      }
    ),
    { name: "CategoryStore" }
  )
);

export default useCategoryStore;
