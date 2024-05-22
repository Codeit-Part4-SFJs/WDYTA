import { create } from "zustand";
import { CurrentCategorySlice } from "./storeType";
import createCurrentCategorySlice from "./slices/createCurrentCategorySlice";
import { devtools, persist } from "zustand/middleware";

type MyState = CurrentCategorySlice;

const useBoundStore = create<MyState>()(
  devtools(
    persist(
      (...a) => ({
        ...createCurrentCategorySlice(...a),
      }),
      {
        name: "BoundStore",
        partialize: (state) => ({ currentCategory: state.currentCategory }),
      }
    )
  )
);

export default useBoundStore;
