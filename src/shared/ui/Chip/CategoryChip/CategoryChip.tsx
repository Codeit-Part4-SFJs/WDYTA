import { ProductCategoryEnum } from '@/shared/ui/Chip/types/categoryChipType';

interface CategoryChipProps {
  categoryID: ProductCategoryEnum;
}

const categoryStyles = {
  1: 'text-lime-C5 bg-lime-C5', // "음악"
  2: 'text-orange-F7 bg-orange-F7', // "영화/드라마"
  3: 'text-purple-A9 bg-purple-A9', // "강의/책"
  4: 'text-green-49 bg-green-49', // "호텔"
  5: 'text-pink-D6 bg-pink-D6', // "가구/인테리어"
  6: 'text-orange-FF bg-orange-FF', // "식당"
  7: 'text-green-23 bg-green-23', // "전자기기"
  8: 'text-pink-FD bg-pink-FD', // "화장품"
  9: 'text-purple-75 bg-purple-75', // "의류/잡화"
  10: 'text-blue-30 bg-blue-30', // "앱"
  default: 'text-gray-9F bg-gray-9F',
};

export const CategoryChip = ({ categoryID }: CategoryChipProps) => {
  const categoryClassName =
    categoryStyles[categoryID as keyof typeof categoryStyles] ||
    categoryStyles.default;

  return (
    <div
      className={`inline-flex items-center justify-center w-fit h-fit px-[8px] py-[4px] rounded-md text-[12px] font-medium bg-opacity-10 ${categoryClassName}`}
    >
      {ProductCategoryEnum[categoryID]}
    </div>
  );
};
