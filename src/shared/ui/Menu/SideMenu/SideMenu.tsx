import SideMenuTabList from "./SideMenuTabList";
import getCategories from "./api/getCategories";
import DEFAULT_CATEGORIES from "./constant/DEFAULT_CATEGORIES";
import { Categories } from "./type/categoryType";

const SideMenu = async () => {
  const categories: Categories = (await getCategories()) ?? DEFAULT_CATEGORIES;

  return (
    <div>
      <div>카테고리</div>
      <SideMenuTabList categories={categories} />
    </div>
  );
};

export default SideMenu;
