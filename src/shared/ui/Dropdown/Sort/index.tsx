import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import Icon from "../../Icon/Icon";
import useClose from "@/shared/@common/hooks/useClose";

interface Option {
  value: string;
  label: string;
}

export interface SortProps {
  options: Option[];
  defaultValue?: string;
  onSelect: (value: string) => void;
}

const Sort = ({
  children,
  options,
  onSelect,
  defaultValue = "최신순",
}: PropsWithChildren<SortProps>) => {
  const sortClickRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(false);
  const defaultOption =
    options.find((option) => option.value === defaultValue) || null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggleSort = () => {
    setIsToggled(!isToggled);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsToggled(false);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  useClose(isToggled, handleClose, sortClickRef);

  return (
    <div className="relative">
      <div
        className={`flex w-[160px] md:w-[140px] px-5 flex-col items-center justify-between bg-transparent ${isToggled ? "text-white" : " text-gray-6E"}`}
        onClick={handleToggleSort}
      >
        <div className="flex justify-between items-center self-stretch">
          <p className="text-base text-gray-6E active:text-white">{children}</p>
          <button className=" w-full flex ">
            {selectedOption?.label ?? defaultValue}
          </button>
          <Icon
            name={isToggled ? "DropDownIcon" : "DropUpIcon"}
            className="w-6 md:w-[22px] mobile:w-5"
          />
        </div>
      </div>
      {isToggled && (
        <div
          ref={sortClickRef}
          className={`absolute z-10 top-[100%] flex w-[160px] md:w-[140px] p-[10px] flex-col items-start gap-[5px] rounded-lg border border-solid border-gray-35 bg-black-25`}
        >
          {options.map((option) => (
            <div
              className="flex px-5 py-[6px] items-center gap-[10px] self-stretch rounded-md bg-black-25 text-gray-6E hover:text-white hover:bg-gray-35"
              key={option.value}
              onClick={() => handleSelectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
