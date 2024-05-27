import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import Icon from "../../Icon/Icon";
import useClose from "@/shared/@common/hooks/useClose";

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
}

const Dropdown = ({
  children,
  options,
  onSelect,
  placeholder = "선택",
}: PropsWithChildren<DropdownProps>) => {
  const dropDownClickRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(false);
  const defaultOption =
    options.find((option) => option.value === placeholder) || null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsToggled((prev) => !prev);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsToggled(false);
  };

  useClose(isToggled, handleClose, dropDownClickRef);
  console.log(isToggled);

  return (
    <div
      className="relative w-[400px] md:w-[360px] mobile:w-[335px]"
      ref={dropDownClickRef}
    >
      <div
        className={`flex py-[23px] md:py-[17px] mobile:py-[17px] md:h-[60px] mobile:h-[55px] px-5 flex-col items-start gap-[10px] rounded-lg border border-solid border-transparent bg-black-25 ${isToggled ? "border-linear-gradients-black-25 text-white" : "border-gray-35 text-gray-6E"}`}
        onClick={handleToggleDropdown}
      >
        <div className="flex justify-between items-center self-stretch">
          <p className="text-base text-gray-6E active:text-white">{children}</p>
          <button className=" w-full flex ">
            {selectedOption?.label ?? placeholder}
          </button>
          <Icon
            name={isToggled ? "DropDownIcon" : "DropUpIcon"}
            className={"w-6"}
          />
        </div>
      </div>
      {isToggled && (
        <div
          className={`absolute z-20 top-[100%] flex w-[400px] md:w-[360px] mobile:w-[335px] p-[10px] flex-col items-start gap-[5px] rounded-lg border border-solid border-gray-35 bg-black-25`}
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

export default Dropdown;
