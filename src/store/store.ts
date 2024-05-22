import { create } from "zustand";
import { CurrentCategorySlice } from "./storeType";
import createCurrentCategorySlice from "./slices/createCurrentCategorySlice";
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
