import getCategories from "@/shared/ui/Menu/SideMenu/api/getCategories";
import DEFAULT_CATEGORIES from "@/shared/ui/Menu/SideMenu/constant/DEFAULT_CATEGORIES";
import { Categories } from "@/shared/ui/Menu/SideMenu/type/categoryType";
import SideMenuTab from "@/shared/ui/Menu/SideMenu/SideMenuTab";

const SideMenu = async () => {
  const categories: Categories = (await getCategories()) ?? DEFAULT_CATEGORIES;

  return (
    <div className="hidden md:block py-[25px] px-[10px] shrink-0 h-full bg-black-1C md:w-[180px] lg:w-[220px]">
      <div className="p-[20px] font-['Pretendard'] not-italic font-normal text-gray-F1 md:text-sm lg:text-base">
        카테고리
      </div>
      <ul className="flex flex-col items-start shrink-0 gap-1 bg-black-1C">
        {categories.map((item) => {
          return <SideMenuTab key={item.id} category={item.name} />;
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
