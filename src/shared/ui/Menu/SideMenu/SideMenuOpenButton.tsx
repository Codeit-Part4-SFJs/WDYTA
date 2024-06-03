'use client';

import { useSideMenuStore } from '@/stores';
import { CategoryFilterChip } from '@/shared/ui/Chip/CategoryFilterChip';
import { SideMenuOpenButtonProps } from './types/categoryType';

export const SideMenuOpenButton = ({
  currentCategoryId,
}: SideMenuOpenButtonProps) => {
  const isOpenSideMenu = useSideMenuStore((state) => state.isOpenSideMenu);
  const setIsOpenSideMenu = useSideMenuStore(
    (state) => state.setIsOpenSideMenu,
  );

  let categoryID = null;

  if (currentCategoryId === undefined) {
    categoryID = 0;
  } else {
    categoryID = currentCategoryId;
  }

  return (
    <div className="mobile:block md:hidden lg:hidden">
      {isOpenSideMenu ? (
        <div className="mobile:block md:hidden lg:hidden hover:cursor-pointer">
          <CategoryFilterChip categoryID={categoryID} />
        </div>
      ) : (
        <button
          className="mobile:block md:hidden lg:hidden"
          type="button"
          onClick={setIsOpenSideMenu}
        >
          <CategoryFilterChip categoryID={categoryID} />
        </button>
      )}
    </div>
  );
};
