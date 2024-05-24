import { ProductCategoryEnum } from "@/shared/types/categoryChipType";
import Icon from "@/shared/ui/Icon/Icon";

interface Props {
  categoryID: ProductCategoryEnum;
}
const CategoryFilterChip = ({ categoryID }: Props) => {
  let categoryClassName = "";
  if (categoryID) {
    categoryClassName = "text-[#9FA6B2]";
  } else {
    //카테고리 선택 안하면 id가 없을 것이므로 "카테고리"로 표시
    categoryClassName = "text-[#6E6E82]";
  }

  return (
    <div className="flex flex-col justify-center items-start w-fit h-fit py-[6px] px-[12px] gap-3 rounded-full bg-[#252530] border-solid border-2 border-[#353542]">
      <div
        className={`flex items-center gap-1 text-[14px] font-normal ${categoryClassName}`}
      >
        <Icon
          name={"CategoryIcon"}
          iconSizeClass={"w-[18px] h-[18px]"}
          color={"#9FA6B2"}
        />
        {ProductCategoryEnum[categoryID]}
      </div>
    </div>
  );
};

export default CategoryFilterChip;
