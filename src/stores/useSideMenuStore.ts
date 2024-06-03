import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SideMenuState } from '@/stores/storeType';

export const useSideMenuStore = create<SideMenuState>()(
  devtools(
    (set) => ({
      isOpenSideMenu: false,
      setIsOpenSideMenu: () =>
        set((state) => ({ isOpenSideMenu: !state.isOpenSideMenu })),
    }),
    { name: 'SideMenuStore' },
  ),
);
