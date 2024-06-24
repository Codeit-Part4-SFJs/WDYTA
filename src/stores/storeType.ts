export interface SideMenuState {
  isOpenSideMenu: boolean;
  setIsOpenSideMenu: () => void;
}

export interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  clearSearchTerm: () => void;
}
