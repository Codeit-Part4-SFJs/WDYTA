'use client';

import useSideMenuStore from '@/stores/useSideMenuStore';
import CategoryFilterChip from '@/shared/ui/Chip/CategoryFilterChip';

const SideMenuOpenButton = () => {
  const currentCategory = useSideMenuStore((state) => state.currentCategory);
  const isOpenSideMenu = useSideMenuStore((state) => state.isOpenSideMenu);
  const setIsOpenSideMenu = useSideMenuStore(
    (state) => state.setIsOpenSideMenu,
  );

  return (
    <div className="mobile:block md:hidden lg:hidden">
      {isOpenSideMenu ? (
        <div className="mobile:block md:hidden lg:hidden hover:cursor-pointer">
          <CategoryFilterChip categoryID={currentCategory} />
        </div>
      ) : (
        <button
          className="mobile:block md:hidden lg:hidden"
          type="button"
          onClick={setIsOpenSideMenu}
        >
          <CategoryFilterChip categoryID={currentCategory} />
        </button>
      )}
    </div>
  );
};

export default SideMenuOpenButton;
