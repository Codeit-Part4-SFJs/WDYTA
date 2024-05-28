import { ProductCategoryEnum } from '@/shared/types/categoryChipType';
import { Icon } from '@/shared/ui/Icon';

interface CategoryFilterChipProps {
  categoryID: ProductCategoryEnum;
}
export const CategoryFilterChip = ({ categoryID }: CategoryFilterChipProps) => {
  let categoryClassName = '';
  if (categoryID) {
    categoryClassName = 'text-gray-9F';
  } else {
    // 카테고리 선택 안하면 id가 없을 것이므로 "카테고리"로 표시
    categoryClassName = 'text-gray-6E';
  }

  return (
    <div className="flex flex-col justify-center items-start w-fit h-fit py-[6px] px-[12px] gap-3 rounded-full bg-black-25 border-solid border-2 border-gray-35">
      <div
        className={`flex items-center gap-1 text-[14px] font-normal ${categoryClassName}`}
      >
        <Icon name="CategoryIcon" className="w-[18px] h-[18px] fill-gray-9F" />
        {ProductCategoryEnum[categoryID]}
      </div>
    </div>
  );
};
