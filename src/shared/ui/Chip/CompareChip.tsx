import Icon from "@/shared/ui/Icon/Icon";

export enum CompareColor {
  GREEN,
  PINK,
}

interface CompareChipProps {
  productName: string;
  color: CompareColor;
  onDelete?: () => void;
}

const makeCompareColor = {
  [CompareColor.GREEN]: "green-05",
  [CompareColor.PINK]: "pink",
};

const CompareChip = ({ productName, color, onDelete }: CompareChipProps) => {
  return (
    <div
      className={`inline-flex justify-center items-center gap-3 w-fit h-fit px-[10px] py-[8px] bg-${makeCompareColor[color]} bg-opacity-10 rounded-md`}
    >
      <span
        className={`text-${makeCompareColor[color]} text-[14px] lg:text-[16px] font-normal`}
      >
        {productName}
      </span>
      <button
        type="button"
        onClick={onDelete}
        className="flex justify-center items-center p-[2px] gap-3 w-[17px] lg:w-[19px] h-[17px] lg:h-[19px] rounded-md bg-black-00 bg-opacity-80"
      >
        <Icon
          name={"CloseIcon"}
          className="w-[13px] lg:w-[15px] h-[13px] lg:h-[15px] z-10 fill-gray-F1"
        />
      </button>
    </div>
  );
};

export default CompareChip;
