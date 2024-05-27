"use client";

import useSideMenuStore from "@/stores/useSideMenuStore";
import CategoryFilterChip from "../../Chip/CategoryFilterChip";

const SideMenuOpenButton = () => {
  const currentCategory = useSideMenuStore((state) => state.currentCategory);
  const isOpenSideMenu = useSideMenuStore((state) => state.isOpenSideMenu);
  const setIsOpenSideMenu = useSideMenuStore(
    (state) => state.setIsOpenSideMenu
  );

  return (
    <>
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
    </>
  );
};

export default SideMenuOpenButton;
