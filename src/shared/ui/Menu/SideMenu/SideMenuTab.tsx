'use client';

import { useSideMenuStore } from '@/stores';
import { SideMenuTabProps } from '@/shared/ui/Menu/SideMenu/types/categoryType';

export const SideMenuTab = ({ category, categoryId }: SideMenuTabProps) => {
  const currentCategory = useSideMenuStore((state) => state.currentCategory);
  const setCurrentCategory = useSideMenuStore(
    (state) => state.setCurrentCategory,
  );

  const isClicked = currentCategory === categoryId;

  const handleClick = () => {
    if (isClicked) {
      setCurrentCategory(0);
    } else {
      setCurrentCategory(categoryId);
    }
  };

  const commonClass =
    'flex py-[15px] px-[20px] items-center shrink-0 rounded-lg';

  const clickedClass = `${commonClass} mobile:w-[160px] mobile:h-[45px] md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px]  border-solid border border-gray-35 bg-gray-25 text-base not-italic font-medium text-gray-F1`;
  const unClickedClass = `${commonClass} mobile:w-[160px] mobile:h-[45px] md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px] bg-black-1C text-base not-italic font-medium text-gray-6E hover:border-solid hover:border hover:border-gray-35 hover:bg-gray-25 hover:text-base hover:not-italic hover:font-medium hover:text-gray-F1`;

  return (
    <button
      className={isClicked ? clickedClass : unClickedClass}
      type="button"
      onClick={handleClick}
    >
      {category}
    </button>
  );
};
