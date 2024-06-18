'use client';

import { convertIdToKoreanCategoryName } from '@/shared/@common/utils/convertIdToKoreanCategoryName';

interface FilteredTitleProps {
  currentSearchWord: string;
  category: number;
}

export const FilteredTitle = ({
  currentSearchWord,
  category,
}: FilteredTitleProps) => {
  // 카테고리만 또는 검색어만 있을 때
  const onlyFilteredTitle = currentSearchWord
    ? `'${currentSearchWord}'로 검색한 상품`
    : `${convertIdToKoreanCategoryName(category)}의 모든 상품`;

  // 카테고리와 검색어 둘다 있을 때
  const bothFilteredTitle = `${convertIdToKoreanCategoryName(category)} 카테고리의 '${currentSearchWord}'로 검색한 상품`;

  return (
    <h2 className="mobile:mb-6 mobile:text-[20px] md:text-[20px] lg:text-[24px] text-gray-F1 font-semibold">
      {currentSearchWord && category ? bothFilteredTitle : onlyFilteredTitle}
    </h2>
  );
};
