'use client';

import { convertCategoryIdToCategory } from '@/shared/@common/utils/convertCategoryIdToCategory';
import { SideMenuTabProps } from '@/shared/ui/Menu/SideMenu/types/categoryType';
import Link from 'next/link';

export const SideMenuTab = ({
  category,
  categoryId,
  currentCategoryId,
}: SideMenuTabProps) => {
  const isClicked = currentCategoryId === categoryId;

  const commonClass =
    'flex py-[15px] px-[20px] items-center shrink-0 rounded-lg';

  const clickedClass = `${commonClass} mobile:w-[160px] mobile:h-[45px] md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px]  border-solid border border-gray-35 bg-gray-25 text-base not-italic font-medium text-gray-F1`;
  const unClickedClass = `${commonClass} mobile:w-[160px] mobile:h-[45px] md:w-[160px] md:h-[45px] lg:w-[200px] lg:h-[50px] bg-black-1C text-base not-italic font-medium text-gray-6E hover:border-solid hover:border hover:border-gray-35 hover:bg-gray-25 hover:text-base hover:not-italic hover:font-medium hover:text-gray-F1`;

  return (
    <div>
      {isClicked ? (
        <Link className={`${clickedClass}`} href="/">
          {category}
        </Link>
      ) : (
        <Link
          className={`${unClickedClass}`}
          href={`/${convertCategoryIdToCategory(categoryId)}`}
        >
          {category}
        </Link>
      )}
    </div>
  );
};
