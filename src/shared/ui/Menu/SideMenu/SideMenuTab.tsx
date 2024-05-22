"use client";

import useBoundStore from "@/store/store";
import { SideMenuTabProps } from "@/shared/ui/Menu/SideMenu/type/categoryType";

const SideMenuTab = ({ category }: SideMenuTabProps) => {
  const currentCategory = useBoundStore((state) => state.currentCategory);
  const setCurrentCategory = useBoundStore((state) => state.setCurrentCategory);

  const isClicked = currentCategory === category;

  const handleClick = () => {
    if (isClicked) {
      setCurrentCategory("idle");
    } else {
      setCurrentCategory(category);
    }
  };

  const clickedClass =
    "flex py-[15px] px-[20px] items-center shrink-0 rounded-lg md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px]  border-solid border border-gray-35 bg-gray-25 font-['Pretendard'] text-base not-italic font-medium text-gray-F1";
  const unClickedClass =
    "flex py-[15px] px-[20px] items-center shrink-0 rounded-lg md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px] bg-black-1C font-['Pretendard'] text-base not-italic font-medium text-gray-6E hover:border-solid hover:border hover:border-gray-35 hover:bg-gray-25 hover:font-['Pretendard'] hover:text-base hover:not-italic hover:font-medium hover:text-gray-F1";

  return (
    <>
      <button
        className={isClicked ? clickedClass : unClickedClass}
        type="button"
        onClick={handleClick}
      >
        {category}
      </button>
    </>
  );
};

export default SideMenuTab;
