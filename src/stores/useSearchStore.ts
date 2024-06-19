import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { SearchState } from '@/stores/storeType';

export const useSearchStore = create<SearchState>()(
  devtools(
    (set) => ({
      searchTerm: '',
      setSearchTerm: (term) => set(() => ({ searchTerm: term })),
      clearSearchTerm: () => set(() => ({ searchTerm: '' })),
    }),
    { name: 'SearchStore' },
  ),
);
