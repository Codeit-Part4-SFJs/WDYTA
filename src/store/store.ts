import { create } from "zustand";
import { CurrentCategorySlice } from "@/store/storeType";
import createCurrentCategorySlice from "@/store/slices/createCurrentCategorySlice";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type MyState = CurrentCategorySlice;

const useBoundStore = create<MyState>()((...a) => ({
  ...devtools(
    persist(createCurrentCategorySlice, {
      name: "currentCategory",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        currentCategory: state.currentCategory,
      }),
    }),
    { name: "CurrentCategorySlice" }
  )(...a),
}));

export default useBoundStore;
