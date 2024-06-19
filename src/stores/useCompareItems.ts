import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface CompareItemsState {
  firstItem: number;
  changingFirstItem: (id: number) => void;
  removeFirstItem: () => void;
  secondItem: number;
  changingSecondItem: (id: number) => void;
  removeSecondItem: () => void;
}

export const useCompareItems = create<CompareItemsState>()(
  devtools(
    persist(
      (set) => ({
        firstItem: 0,
        changingFirstItem: (id) => set(() => ({ firstItem: id })),
        removeFirstItem: () => set(() => ({ firstItem: 0 })),
        secondItem: 0,
        changingSecondItem: (id) => set(() => ({ secondItem: id })),
        removeSecondItem: () => set(() => ({ secondItem: 0 })),
      }),
      {
        name: 'CompareItems',
        storage: createJSONStorage(() => sessionStorage),
        partialize: (state) => ({
          firstItem: state.firstItem,
          secondItem: state.secondItem,
        }),
      },
    ),
    { name: 'CompareItemsStore' },
  ),
);
