import React from 'react';

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

export interface GnbHamburgerMenuOptionProps {
  isOpenHamburgerMenu: boolean;
  handleToggledHamburgerMenu: () => void;
  hamburgerMenuRef: React.RefObject<HTMLDivElement>;
}
