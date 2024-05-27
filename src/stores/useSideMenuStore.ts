import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { SideMenuState } from "@/stores/storeType";

const useSideMenuStore = create<SideMenuState>()(
  devtools(
    persist(
      (set) => ({
        currentCategory: 0,
        isOpenSideMenu: false,
        setCurrentCategory: (categoryId) =>
          set({ currentCategory: categoryId }),
        setIsOpenSideMenu: () =>
          set((state) => ({ isOpenSideMenu: !state.isOpenSideMenu })),
      }),
      {
        name: "currentCategory",
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({ currentCategory: state.currentCategory }),
      }
    ),
    { name: "SideMenuStore" }
  )
);

export default useSideMenuStore;
