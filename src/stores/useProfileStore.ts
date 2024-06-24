import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ProfileState {
  currentProfileId: number | null;
  setCurrentProfileId: (id: number | null) => void;
}

export const useProfileStore = create<ProfileState>()(
  devtools(
    (set) => ({
      currentProfileId: null,
      setCurrentProfileId: (id: number | null) =>
        set(() => ({ currentProfileId: id })),
    }),
    { name: 'ProfileStore' },
  ),
);
