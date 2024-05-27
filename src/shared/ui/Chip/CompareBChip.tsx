import Icon from "@/shared/ui/Icon/Icon";

interface Props {
  productName: string;
}

const CompareBChip = ({ productName }: Props) => {
  return (
    <div className="inline-flex justify-center items-center gap-3 w-fit h-fit px-[10px] py-[8px] bg-[#FF2F9F] bg-opacity-10 rounded-md">
      <span className="text-[#FF2F9F] text-[14px] md:text-[16px] font-normal">
        {productName}
      </span>
      <button className="flex justify-center items-center p-[2px] gap-3 w-[17px] md:w-[19px] h-[17px] md:h-[19px] rounded-md bg-[#000000] bg-opacity-80">
        <Icon
          name={"CloseIcon"}
          className="w-[13px] md:w-[15px] h-[13px] md:h-[15px] z-10"
        />
      </button>
    </div>
  );
};

export default CompareBChip;