import { useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import Icon from "../Icon/Icon";

export enum DropdownSize {
  L = "L",
  M = "M",
  S = "S",
}

export enum DropdownWidthEnum {
  L = "w-[400px]",
  M = "w-[360px]",
  S = "w-[335px]",
}

export enum DropdownPaddingEnum {
  L = "py-[23px]",
  M = "py-[17px]",
  S = "py-[17px]",
}

export enum DropdownHeightEnum {
  L = "",
  M = "h-[60px]",
  S = "h-[55px]",
}

export enum DropdownIconEnum {
  L = "w-6",
  M = "w-[22px]",
  S = "w-5",
}

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  size?: keyof typeof DropdownWidthEnum;
  customSize?: { width: string; padding: string; height: string; icon: string };
  options: Option[];
  defaultValue?: string;
  onSelect: (value: string) => void;
}

const getClass = (
  size?: keyof typeof DropdownWidthEnum,
  customSize?: string,
  enumObject?: Record<string, string>
): string => {
  if (customSize) {
    return customSize;
  }
  if (size && enumObject) {
    return enumObject[size];
  }
  return "";
};

const Dropdown = ({
  size,
  customSize,
  children,
  options,
  onSelect,
  defaultValue = "선택",
}: PropsWithChildren<DropdownProps>) => {
  const dropDownClickRef = useRef<HTMLDivElement>(null);
  const [toggled, setToggled] = useState(false);
  const defaultOption =
    options.find((option) => option.value === defaultValue) || null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggleDropdown = () => {
    setToggled(!toggled);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setToggled(false);
  };

  const handleClick = (e: MouseEvent) => {
    if (
      dropDownClickRef.current &&
      !dropDownClickRef.current.contains(e.target as Node)
    ) {
      setToggled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const widthClass = getClass(size, customSize?.width, DropdownWidthEnum);
  const paddingClass = getClass(size, customSize?.padding, DropdownPaddingEnum);
  const heightClass = getClass(size, customSize?.height, DropdownHeightEnum);
  const iconClass = getClass(size, customSize?.icon, DropdownIconEnum);

  return (
    <div className="relative">
      <div
        className={`flex ${widthClass} ${paddingClass} ${heightClass} px-5 flex-col items-start gap-[10px] rounded-lg border border-solid border-transparent bg-black-25 ${toggled ? "border-linear-gradients-black-25 text-white" : "border-gray-35 text-gray-6E"}`}
        onClick={handleToggleDropdown}
      >
        <div className="flex justify-between items-center self-stretch">
          <p className="text-base text-gray-6E active:text-white">{children}</p>
          <button className=" w-full flex ">
            {selectedOption?.label ?? defaultValue}
          </button>
          <Icon
            name={toggled ? "DropDownIcon" : "DropUpIcon"}
            iconSizeClass={iconClass}
          />
        </div>
      </div>
      {toggled && (
        <div
          className={`absolute top-[100%] flex ${widthClass} p-[10px] flex-col items-start gap-[5px] rounded-lg border border-solid border-gray-35 bg-black-25`}
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
