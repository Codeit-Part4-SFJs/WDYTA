import SideMenuTabList from "./SideMenuTabList";
import getCategories from "./api/getCategories";
import DEFAULT_CATEGORIES from "./constant/DEFAULT_CATEGORIES";
import { Categories, SideMenuProps } from "./type/categoryType";

const SideMenu = async ({ size }: SideMenuProps) => {
  const categories: Categories = (await getCategories()) ?? DEFAULT_CATEGORIES;

  let sideMenuClass = "py-[25px] px-[10px] shrink-0 h-full bg-black-1C";
  if (size === "L") {
    sideMenuClass += " w-[220px]";
  } else {
    sideMenuClass += " w-[180px]";
  }

  let titleClass =
    "p-[20px] font-['Pretendard'] not-italic font-normal text-gray-F1";
  if (size === "L") {
    titleClass += " text-base";
  } else {
    titleClass += " text-sm";
  }

  return (
    <div className={sideMenuClass}>
      <div className={titleClass}>카테고리</div>
      <SideMenuTabList size={size} categories={categories} />
    </div>
  );
};

export default SideMenu;
