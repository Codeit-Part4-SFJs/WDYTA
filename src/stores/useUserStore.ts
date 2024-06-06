import { create } from 'zustand';

export const useUserStore = create((set) => ({
  userId: null,
  setUserId: (id: number) => set({ userId: id }),
}));
