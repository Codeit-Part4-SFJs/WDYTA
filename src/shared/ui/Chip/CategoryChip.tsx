import { ProductCategoryEnum } from "@/shared/types/categoryChipType";

interface Props {
  categoryID: ProductCategoryEnum;
}

const CategoryChip = ({ categoryID }: Props) => {
  let categoryClassName = "";
  switch (categoryID) {
    case 1: // "음악"
      categoryClassName = "text-[#C5D17C] bg-[#C5D17C] bg-opacity-10";
      break;
    case 2: // "영화/드라마"
      categoryClassName = "text-[#F75532] bg-[#F75532] bg-opacity-10";
      break;
    case 3: // "강의/책"
      categoryClassName = "text-[#A953FF] bg-[#A953FF] bg-opacity-10";
      break;
    case 4: // "호텔"
      categoryClassName = "text-[#49AF1A] bg-[#49AF1A] bg-opacity-10";
      break;
    case 5: // "가구/인테리어"
      categoryClassName = "text-[#D676C1] bg-[#D676C1] bg-opacity-10";
      break;
    case 6: // "식당"
      categoryClassName = "text-[#FF7E46] bg-[#FF7E46] bg-opacity-10";
      break;
    case 7: // "전자기기"
      categoryClassName = "text-[#23B581] bg-[#23B581] bg-opacity-10";
      break;
    case 8: // "화장품"
      categoryClassName = "text-[#FD529A] bg-[#FD529A] bg-opacity-10";
      break;
    case 9: // "의류/잡화"
      categoryClassName = "text-[#757AFF] bg-[#757AFF] bg-opacity-10";
      break;
    case 10: // "앱"
      categoryClassName = "text-[#3098E3] bg-[#3098E3] bg-opacity-10";
      break;
    default:
      categoryClassName = "text-gray-9F bg-gray-9F bg-opacity-10";
      break;
  }

  return (
    <div
      className={`inline-flex items-center justify-center w-fit h-fit px-[8px] md:px-[10px] py-[4px] rounded-md md:rounded-lg text-[12px] md:text-[18px] font-medium ${categoryClassName}`}
    >
      {ProductCategoryEnum[categoryID]}
    </div>
  );
};

export default CategoryChip;
