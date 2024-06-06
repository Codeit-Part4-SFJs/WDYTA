import { create } from 'zustand';

interface ProfileState {
  userId: number | null;
  setCurrentProfileUser: (id: number) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  userId: null,
  setCurrentProfileUser: (id: number) => set({ userId: id }),
}));
