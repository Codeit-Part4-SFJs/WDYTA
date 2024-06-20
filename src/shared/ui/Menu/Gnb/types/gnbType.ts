export interface SearchInput {
  search: string;
}

export interface GnbSearchBarProps {
  isOpenMobileSearchBar: boolean;
  handleToggledSearchBar: () => void;
}

export interface GnbSearchButtonProps {
  handleToggledSearchBar: () => void;
}

export interface GnbHamburgerMenuProps {
  isLoggedIn: boolean;
}

export interface GnbHamburgerMenuOptionProps {
  isLoggedIn: boolean;
}

export interface GnbUserProps {
  isLoggedIn: boolean;
}
